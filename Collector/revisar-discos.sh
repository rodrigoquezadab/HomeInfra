#!/usr/bin/env bash
# HomeInfra - Revisión de discos (Linux, pensado para SystemRescue desde USB).
#
# Prueba todos los discos SATA conectados al mismo tiempo, sin intervención:
#   1. Reporte SMART inicial
#   2. badblocks: escribe y lee toda la superficie  (BORRA TODO EL DISCO)
#   3. Prueba larga del SMART
#   4. Reporte SMART final y resumen
# Cada reporte se guarda en el pendrive apenas termina su etapa, en
# HomeInfra-Discos/<placa>_<fecha>/.
#
# Pendrive de SystemRescue creado con Rufus (modo ISO): copiar este script como
# autorun/autorun (sin extensión). Se ejecuta solo al arrancar y guarda los
# reportes en el mismo pendrive. Procedimiento completo en la app: Discos.
#
# Uso manual:  bash revisar-discos.sh            (detecta los discos y pide confirmación)
#              bash revisar-discos.sh sda sdb    (solo los discos indicados)

VERSION="1.0.0"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
TMP_DIR="/tmp/homeinfra-discos"
POLL_SEGUNDOS=300

if [ "$(uname -s)" != "Linux" ]; then
  echo "Este script es para Linux (ej. SystemRescue desde un pendrive)."
  exit 1
fi
if [ "$(id -u)" != "0" ]; then
  echo "Se necesita root: ejecuta  sudo bash $0"
  exit 1
fi
for cmd in smartctl badblocks lsblk findmnt; do
  if ! command -v "$cmd" >/dev/null 2>&1; then
    echo "Falta el programa '$cmd'. Usa SystemRescue o instala smartmontools y e2fsprogs."
    exit 1
  fi
done

# --------------------------------------------------------------------------
# Utilidades
# --------------------------------------------------------------------------
ahora() { date '+%Y-%m-%d %H:%M:%S'; }

# Disco (sdX) que contiene una ruta montada; vacío si no aplica
disco_de_ruta() {
  local src
  src="$(findmnt -no SOURCE --target "$1" 2>/dev/null)"
  [ -b "$src" ] && lsblk -no PKNAME "$src" 2>/dev/null | head -1
}

serial_de() {
  local s
  s="$(smartctl -i "/dev/$1" 2>/dev/null | awk -F': *' '/^Serial Number/{print $2; exit}')"
  [ -z "$s" ] && s="$(lsblk -dno SERIAL "/dev/$1" 2>/dev/null)"
  [ -z "$s" ] && s="$1"
  echo "$s" | tr -c 'A-Za-z0-9_.\n-' '_'
}

# Valor bruto de un atributo SMART (por ID) desde un reporte de smartctl -x
atributo() {
  awk -v id="$1" '$1==id && $2 ~ /^[A-Za-z]/ && $3 ~ /^[-A-Z]+$/ {print $8; exit}' "$2" 2>/dev/null
}

# Resultado de la última autoprueba registrada en un reporte de smartctl -x
ultima_autoprueba() {
  grep -m1 '^# 1 ' "$1" 2>/dev/null | sed -E 's/^# 1 +[^ ]+ +[^ ]+ +//; s/ {2,}[0-9]+% .*//'
}

# --------------------------------------------------------------------------
# Carpeta de salida (en el pendrive)
# --------------------------------------------------------------------------
# En SystemRescue el script corre desde una copia temporal (autorun), así que
# los reportes van al pendrive de arranque: montado en /run/archiso/bootmnt
# (solo lectura, se vuelve a montar con escritura) o, si se arrancó con
# copytoram, desmontado (se monta por su etiqueta, ej. RESCUE1302).
carpeta_pendrive() {
  local etiqueta destino="/mnt/homeinfra-pendrive"
  if findmnt -n /run/archiso/bootmnt >/dev/null 2>&1; then
    mount -o remount,rw /run/archiso/bootmnt 2>/dev/null && { echo /run/archiso/bootmnt; return; }
  fi
  etiqueta="$(grep -o 'archisolabel=[^ ]*' /proc/cmdline 2>/dev/null | cut -d= -f2)"
  if [ -n "$etiqueta" ] && [ -e "/dev/disk/by-label/$etiqueta" ]; then
    mkdir -p "$destino"
    if findmnt -n "$destino" >/dev/null 2>&1 || mount -o rw "/dev/disk/by-label/$etiqueta" "$destino" 2>/dev/null; then
      echo "$destino"; return
    fi
  fi
  echo "$SCRIPT_DIR"
}

BASE_DIR="$(carpeta_pendrive)"
PLACA="$(cat /sys/class/dmi/id/board_name 2>/dev/null | tr -c 'A-Za-z0-9_.\n-' '_')"
RUN_DIR="$BASE_DIR/HomeInfra-Discos/${PLACA:-equipo}_$(date '+%Y%m%d-%H%M%S')"
if ! mkdir -p "$RUN_DIR" 2>/dev/null || ! [ -w "$RUN_DIR" ]; then
  echo "No se puede escribir en $BASE_DIR."
  echo "El pendrive debe crearse con Rufus en modo ISO (FAT32), no en modo DD."
  exit 1
fi
mkdir -p "$TMP_DIR"
rm -f "$TMP_DIR"/*.listo
DISCO_PENDRIVE="$(disco_de_ruta "$BASE_DIR")"

# --------------------------------------------------------------------------
# Selección de discos
# --------------------------------------------------------------------------
# Un disco es apto si es SATA/SAS, no es el pendrive y no tiene particiones montadas
es_apto() {
  local d="$1" tran
  [ -b "/dev/$d" ] || { echo "no existe"; return 1; }
  [ "$(lsblk -dno TYPE "/dev/$d")" = "disk" ] || { echo "no es un disco"; return 1; }
  [ "$d" = "$DISCO_PENDRIVE" ] && { echo "es el pendrive con los reportes"; return 1; }
  tran="$(lsblk -dno TRAN "/dev/$d" | tr -d ' ')"
  case "$tran" in sata|ata|sas) ;; *) echo "conexión '${tran:-desconocida}' (solo se prueban discos SATA/SAS)"; return 1 ;; esac
  if lsblk -no MOUNTPOINT "/dev/$d" | grep -q .; then echo "tiene particiones montadas"; return 1; fi
  return 0
}

DISCOS=()
if [ $# -gt 0 ]; then
  for d in "$@"; do
    d="${d#/dev/}"
    if motivo="$(es_apto "$d")"; then DISCOS+=("$d"); else echo "Se omite $d: $motivo"; fi
  done
else
  for d in $(lsblk -dno NAME); do
    es_apto "$d" >/dev/null && DISCOS+=("$d")
  done
fi

echo ""
echo "=============================================="
echo "  HomeInfra - Revisión de discos v$VERSION"
echo "=============================================="
if [ ${#DISCOS[@]} -eq 0 ]; then
  echo "No se encontraron discos SATA para probar."
  rmdir "$RUN_DIR" 2>/dev/null
  exit 1
fi

echo "Discos que se van a probar:"
echo ""
for d in "${DISCOS[@]}"; do
  printf "  /dev/%-5s %8s  %-28s S/N %s\n" "$d" "$(lsblk -dno SIZE "/dev/$d" | tr -d ' ')" \
    "$(lsblk -dno MODEL "/dev/$d" | sed 's/ *$//')" "$(serial_de "$d")"
  contenido="$(lsblk -nro NAME,FSTYPE,LABEL,SIZE "/dev/$d" | awk 'NR>1 && $2!="" {printf "%s %s %s %s; ", $1, $2, $3, $4}')"
  [ -n "$contenido" ] && echo "         TIENE DATOS: $contenido"
done
echo ""
echo "ATENCIÓN: la prueba BORRA POR COMPLETO todos estos discos."
read -r -p "Escribe BORRAR para continuar: " respuesta
if [ "$respuesta" != "BORRAR" ]; then
  echo "Cancelado. No se modificó ningún disco."
  rmdir "$RUN_DIR" 2>/dev/null
  exit 0
fi

# --------------------------------------------------------------------------
# Prueba de un disco (se ejecuta en segundo plano, uno por disco)
# --------------------------------------------------------------------------
revisar_disco() {
  local d="$1" s p estado minutos limite espera rc malos
  s="${SERIAL[$d]}"
  p="$RUN_DIR/$s"
  estado="${p}_0_estado.txt"
  paso() { echo "$(ahora)  $1" >> "$estado"; sync; }

  paso "Inicio: /dev/$d · $(lsblk -dno MODEL "/dev/$d" | sed 's/ *$//') · $(lsblk -dno SIZE "/dev/$d" | tr -d ' ')"

  # 1. SMART inicial
  smartctl -x "/dev/$d" > "${p}_1_smart_inicial.txt" 2>&1
  sync
  paso "1/4 Reporte SMART inicial guardado"

  # 2. badblocks (escritura y lectura de toda la superficie)
  paso "2/4 badblocks en curso (escribe y lee todo el disco)"
  badblocks -wsv -b 4096 -t random -o "$TMP_DIR/${s}_malos.txt" "/dev/$d" > "$TMP_DIR/${s}_badblocks.log" 2>&1
  rc=$?
  # Del avance (una línea por segundo) se guarda solo la última
  tr '\b' '\n' < "$TMP_DIR/${s}_badblocks.log" | grep -v '^[[:space:]]*$' | grep -v '% done' > "${p}_2_badblocks.log"
  tr '\b' '\n' < "$TMP_DIR/${s}_badblocks.log" | grep '% done' | tail -1 >> "${p}_2_badblocks.log"
  cp "$TMP_DIR/${s}_malos.txt" "${p}_2_sectores_malos.txt" 2>/dev/null || : > "${p}_2_sectores_malos.txt"
  malos=$(grep -c . "${p}_2_sectores_malos.txt")
  sync
  paso "2/4 badblocks terminado (código $rc, sectores malos: $malos)"

  # 3. Prueba larga del SMART
  if smartctl -t long "/dev/$d" > /dev/null 2>&1; then
    minutos="$(smartctl -c "/dev/$d" | grep -A1 'Extended self-test routine' | grep -o '( *[0-9]*)' | tr -dc '0-9')"
    paso "3/4 Prueba larga del SMART en curso (estimado: ${minutos:-?} min)"
    limite=$(( ${minutos:-480} * 3 * 60 + 3600 ))
    espera=0
    sleep 60
    while smartctl -c "/dev/$d" | grep -q 'Self-test routine in progress' && [ $espera -lt $limite ]; do
      sleep $POLL_SEGUNDOS
      espera=$(( espera + POLL_SEGUNDOS ))
    done
    paso "3/4 Prueba larga del SMART terminada"
  else
    paso "3/4 El disco no aceptó la prueba larga del SMART"
  fi

  # 4. SMART final
  smartctl -x "/dev/$d" > "${p}_3_smart_final.txt" 2>&1
  sync
  paso "4/4 Reporte SMART final guardado · TERMINADO"
  echo "$d $s" > "$TMP_DIR/${s}.listo"
}

# --------------------------------------------------------------------------
# Resumen de todos los discos
# --------------------------------------------------------------------------
escribir_resumen() {
  local r="$RUN_DIR/RESUMEN.txt" d s p ini fin malos prueba veredicto id nombre a b
  {
    echo "HomeInfra - Revisión de discos v$VERSION"
    echo "Placa: ${PLACA:-desconocida} · Inicio: $INICIO · Fin: $(ahora)"
    echo ""
    for d in "${DISCOS[@]}"; do
      s="${SERIAL[$d]}"; p="$RUN_DIR/$s"; ini="${p}_1_smart_inicial.txt"; fin="${p}_3_smart_final.txt"
      malos=$(grep -c . "${p}_2_sectores_malos.txt" 2>/dev/null)
      prueba="$(ultima_autoprueba "$fin")"
      echo "== /dev/$d · S/N $s · $(grep -m1 -E '^(Device Model|Model Number|Product)' "$ini" | sed 's/^[^:]*: *//')"
      echo "   Capacidad: $(grep -m1 '^User Capacity' "$ini" | sed 's/^[^[]*\[//; s/\]//')"
      echo "   Horas de uso: $(atributo 9 "$fin")"
      for id in 5:Reasignados 197:Pendientes 198:Incorregibles 199:Errores_CRC 193:Ciclos_cabezal; do
        nombre="${id#*:}"; a="$(atributo "${id%%:*}" "$ini")"; b="$(atributo "${id%%:*}" "$fin")"
        printf "   %-15s inicial %-8s final %s\n" "$nombre" "${a:--}" "${b:--}"
      done
      echo "   Sectores malos (badblocks): ${malos:-?}"
      echo "   Prueba larga del SMART: ${prueba:-sin resultado}"
      veredicto="APTO"
      [ "${malos:-1}" != "0" ] && veredicto="REVISAR"
      for id in 197 198; do [ "$(atributo $id "$fin")" != "0" ] && [ -n "$(atributo $id "$fin")" ] && veredicto="REVISAR"; done
      a="$(atributo 5 "$ini")"; b="$(atributo 5 "$fin")"
      [ -n "$a" ] && [ -n "$b" ] && [ "$b" != "$a" ] && veredicto="REVISAR"
      echo "$prueba" | grep -q 'Completed without error' || veredicto="REVISAR"
      echo "   Veredicto preliminar: $veredicto"
      echo ""
    done
  } > "$r"
  sync
}

# --------------------------------------------------------------------------
# Ejecución
# --------------------------------------------------------------------------
INICIO="$(ahora)"
declare -A SERIAL
for d in "${DISCOS[@]}"; do SERIAL[$d]="$(serial_de "$d")"; done
trap 'echo ""; echo "Cancelando pruebas..."; pkill -P $$ 2>/dev/null; pkill badblocks 2>/dev/null; exit 1' INT TERM

for d in "${DISCOS[@]}"; do
  revisar_disco "$d" &
done

echo ""
echo "Pruebas en curso. Puedes dejar el equipo solo: los reportes se guardan en"
echo "  $RUN_DIR"
echo "No retires el pendrive hasta ver TERMINADO."

while [ "$(ls "$TMP_DIR"/*.listo 2>/dev/null | wc -l)" -lt ${#DISCOS[@]} ]; do
  clear
  echo "HomeInfra - Revisión de discos · inicio $INICIO · ahora $(ahora)"
  echo ""
  for d in "${DISCOS[@]}"; do
    s="${SERIAL[$d]}"
    linea="$(tail -n1 "$RUN_DIR/${s}_0_estado.txt" 2>/dev/null | cut -c22-)"
    avance="$(tr '\b' '\n' < "$TMP_DIR/${s}_badblocks.log" 2>/dev/null | grep -o '[0-9.]*% done' | tail -1)"
    case "$linea" in "2/4 badblocks en curso"*) linea="$linea · ${avance:-0% done}" ;; esac
    printf "  /dev/%-5s %-16s %s\n" "$d" "$s" "$linea"
  done
  echo ""
  echo "Reportes: $RUN_DIR"
  sleep 60
done
wait

escribir_resumen
clear
cat "$RUN_DIR/RESUMEN.txt"
echo "=============================================="
echo "  TERMINADO. Reportes guardados en el pendrive."
echo "  Para apagar el equipo escribe: poweroff"
echo "=============================================="
