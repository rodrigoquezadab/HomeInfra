#!/usr/bin/env bash
# HomeInfra - Revisión de discos (Linux, pensado para SystemRescue desde USB).
#
# Prueba los discos SATA autorizados al mismo tiempo, sin intervención:
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
# Solo se prueban los discos cuyo número de serie está en discos-autorizados.txt,
# en la raíz del pendrive (uno por línea; lo que va después del número o tras #
# se ignora). Cualquier otro disco conectado no se toca.
#
# Además, de todos los discos conectados (se prueben o no) se guarda un
# inventario de solo lectura: INVENTARIO.txt y, en inventario/, el reporte SMART
# (texto y JSON) y las particiones de cada disco. Sin lista o sin discos
# autorizados conectados, se guarda solo el inventario.
#
# Uso:  bash revisar-discos.sh            (discos de la lista, sin preguntar)
#       bash revisar-discos.sh sda sdb    (discos indicados, pide escribir BORRAR)

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

# Al terminar el script, SystemRescue abre su consola y borra la pantalla:
# el último mensaje queda visible hasta que alguien presione Enter
quedar_en_pantalla() {
  echo ""
  read -r -p "Presiona Enter para ir a la consola de SystemRescue... " _ || true
}

# Error que detiene la revisión: se muestra y, si se puede, se guarda en el pendrive
error_fatal() {
  echo ""
  echo "=============================================="
  echo "  ERROR: no se probó ningún disco"
  echo "=============================================="
  printf '%s\n' "$@"
  if [ -n "$RUN_DIR" ] && [ -d "$RUN_DIR" ]; then
    { echo "$(ahora)  ERROR"; printf '%s\n' "$@"; } > "$RUN_DIR/ERROR.txt"
    sync
  fi
  quedar_en_pantalla
  exit 1
}

# Número de serie normalizado para comparar: mayúsculas, solo letras y números
normalizar() { echo "$1" | tr '[:lower:]' '[:upper:]' | tr -cd 'A-Z0-9'; }

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
# Si no se encontró el pendrive, la carpeta del script puede estar en RAM
# (copia temporal de autorun): los reportes se perderían al apagar
case "$(findmnt -no FSTYPE --target "$BASE_DIR" 2>/dev/null)" in
  tmpfs|ramfs|overlay|squashfs|"")
    error_fatal "No se encontró el pendrive para guardar los reportes (destino: $BASE_DIR, en memoria)." \
      "Arranca desde el pendrive creado con Rufus en modo ISO, o ejecuta el script desde un disco o pendrive con escritura." ;;
esac
DESTINO_INFO="$BASE_DIR ($(findmnt -no SOURCE --target "$BASE_DIR" 2>/dev/null), etiqueta $(lsblk -no LABEL "$(findmnt -no SOURCE --target "$BASE_DIR" 2>/dev/null)" 2>/dev/null))"
PLACA="$(cat /sys/class/dmi/id/board_name 2>/dev/null | tr -c 'A-Za-z0-9_.\n-' '_')"
RUN_DIR="$BASE_DIR/HomeInfra-Discos/${PLACA:-equipo}_$(date '+%Y%m%d-%H%M%S')"
if ! mkdir -p "$RUN_DIR" 2>/dev/null || ! [ -w "$RUN_DIR" ]; then
  RUN_DIR=""
  error_fatal "No se puede escribir en $BASE_DIR." \
    "El pendrive debe crearse con Rufus en modo ISO (FAT32), no en modo DD."
fi
mkdir -p "$TMP_DIR"
rm -f "$TMP_DIR"/*.listo "$TMP_DIR"/*.rc
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

descripcion_disco() {
  printf "/dev/%-5s %8s  %-28s S/N %s" "$1" "$(lsblk -dno SIZE "/dev/$1" | tr -d ' ')" \
    "$(lsblk -dno MODEL "/dev/$1" | sed 's/ *$//')" "$(serial_de "$1")"
}

echo ""
echo "=============================================="
echo "  HomeInfra - Revisión de discos v$VERSION"
echo "=============================================="

DISCOS=()
IGNORADOS=()
NO_CONECTADOS=()
if [ $# -gt 0 ]; then
  # Uso manual: discos indicados, con confirmación
  for d in "$@"; do
    d="${d#/dev/}"
    if motivo="$(es_apto "$d")"; then DISCOS+=("$d"); else echo "Se omite $d: $motivo"; fi
  done
  [ ${#DISCOS[@]} -eq 0 ] && error_fatal "Ninguno de los discos indicados se puede probar."
  echo "Discos que se van a probar:"
  for d in "${DISCOS[@]}"; do echo "  $(descripcion_disco "$d")"; done
  echo "Los reportes se guardarán en: $DESTINO_INFO"
  echo "ATENCIÓN: la prueba BORRA POR COMPLETO todos estos discos."
  read -r -p "Escribe BORRAR para continuar: " respuesta
  if [ "$respuesta" != "BORRAR" ]; then
    echo "Cancelado. No se modificó ningún disco."
    rmdir "$RUN_DIR" 2>/dev/null
    exit 0
  fi
else
  # Uso automático: solo los discos de la lista autorizada, sin preguntar.
  # Sin lista o sin coincidencias no se prueba nada, pero el inventario se guarda igual.
  LISTA="$BASE_DIR/discos-autorizados.txt"
  AUTORIZADOS=()
  if [ -f "$LISTA" ]; then
    while IFS= read -r linea; do
      s="$(normalizar "$(echo "$linea" | sed 's/^\xEF\xBB\xBF//; s/#.*//' | awk '{print $1}')")"
      [ ${#s} -ge 6 ] && AUTORIZADOS+=("$s")
    done < <(tr -d '\r' < "$LISTA")
  fi

  # Un disco coincide si su número de serie es igual o termina en el de la lista
  # (algunos discos informan un prefijo, ej. WD-WCC6Y3JZFCPE para WCC6Y3JZFCPE)
  declare -A ENCONTRADO
  for d in $(lsblk -dno NAME); do
    es_apto "$d" >/dev/null || continue
    sd="$(normalizar "$(serial_de "$d")")"
    autorizado=""
    for a in "${AUTORIZADOS[@]}"; do
      if [ "$sd" = "$a" ] || [ "${sd: -${#a}}" = "$a" ]; then autorizado="$a"; break; fi
    done
    if [ -n "$autorizado" ]; then DISCOS+=("$d"); ENCONTRADO[$autorizado]=1
    else IGNORADOS+=("$(descripcion_disco "$d")"); fi
  done
  for a in "${AUTORIZADOS[@]}"; do [ -z "${ENCONTRADO[$a]}" ] && NO_CONECTADOS+=("$a"); done

  if [ ! -f "$LISTA" ]; then
    SIN_PRUEBA="no hay archivo discos-autorizados.txt en la raíz del pendrive"
  elif [ ${#AUTORIZADOS[@]} -eq 0 ]; then
    SIN_PRUEBA="discos-autorizados.txt no tiene números de serie válidos (mínimo 6 caracteres)"
  elif [ ${#DISCOS[@]} -eq 0 ]; then
    SIN_PRUEBA="ningún disco conectado está en discos-autorizados.txt (autorizados: ${AUTORIZADOS[*]})"
  fi
fi

# --------------------------------------------------------------------------
# Inventario: datos de todos los discos conectados, se prueben o no (solo lectura)
# --------------------------------------------------------------------------
INV_DIR="$RUN_DIR/inventario"
mkdir -p "$INV_DIR"

# Valor de un campo de un reporte de smartctl ("Campo: valor")
campo() { grep -m1 -E "^($1):" "$2" 2>/dev/null | sed 's/^[^:]*: *//; s/ *$//'; }

inventariar() {
  local d s f tran estado horas n=0
  {
    echo "HomeInfra - Inventario de discos v$VERSION"
    echo "Placa: ${PLACA:-desconocida} · Fecha: $(ahora)"
    echo ""
    for d in $(lsblk -dno NAME); do
      [ "$(lsblk -dno TYPE "/dev/$d")" = "disk" ] || continue
      case "$d" in loop*|zram*|ram*) continue ;; esac
      [ "$d" = "$DISCO_PENDRIVE" ] && continue
      s="$(serial_de "$d")"
      f="$INV_DIR/${s}_smart.txt"
      smartctl -x "/dev/$d" > "$f" 2>&1
      smartctl -x -j "/dev/$d" > "$INV_DIR/${s}_smart.json" 2>/dev/null
      lsblk -o NAME,SIZE,FSTYPE,LABEL,PARTLABEL,UUID "/dev/$d" > "$INV_DIR/${s}_particiones.txt" 2>&1
      tran="$(lsblk -dno TRAN "/dev/$d" | tr -d ' ')"
      estado="no se prueba"
      [[ " ${DISCOS[*]} " == *" $d "* ]] && estado="SE PRUEBA (autorizado; se borra)"
      horas="$(atributo 9 "$f")"; [ -z "$horas" ] && horas="$(campo 'Power On Hours' "$f")"
      echo "== /dev/$d · ${tran:-?} · $estado"
      echo "   Modelo: $(campo 'Device Model|Model Number|Product' "$f")$( [ -n "$(campo 'Model Family' "$f")" ] && echo " (familia: $(campo 'Model Family' "$f"))")"
      echo "   S/N: $(campo 'Serial Number' "$f") · Firmware: $(campo 'Firmware Version' "$f")"
      echo "   Capacidad: $(campo 'User Capacity|Total NVM Capacity|Namespace 1 Size/Capacity' "$f" | sed 's/^[^[]*\[//; s/\]//') · Velocidad: $(campo 'Rotation Rate' "$f") · Formato: $(campo 'Form Factor' "$f")"
      echo "   Interfaz: $(campo 'SATA Version is|Transport protocol' "$f")"
      echo "   Horas de uso: ${horas:--} · Salud SMART: $(campo 'SMART overall-health self-assessment test result' "$f")"
      lsblk -nro NAME,FSTYPE,LABEL,SIZE "/dev/$d" | awk 'NR>1 {printf "   Partición: %s %s %s %s\n", $1, $2, $3, $4}'
      echo ""
      n=$((n + 1))
    done
  } > "$RUN_DIR/INVENTARIO.txt"
  sync
  INVENTARIO_N=$n
}

inventariar

# Sin discos para probar: queda solo el inventario
if [ ${#DISCOS[@]} -eq 0 ]; then
  [ -n "$SIN_PRUEBA" ] && echo "No se probó ningún disco: $SIN_PRUEBA." > "$RUN_DIR/SIN_PRUEBA.txt"
  sync
  clear
  cat "$RUN_DIR/INVENTARIO.txt"
  {
    echo "=============================================="
    echo "  TERMINADO: inventario de $INVENTARIO_N disco(s) guardado."
    echo "  No se probó ningún disco: $SIN_PRUEBA."
    echo "  Reportes en el pendrive: HomeInfra-Discos/$(basename "$RUN_DIR")"
    echo "  Para apagar el equipo escribe: poweroff"
    echo "=============================================="
  } | tee "$RUN_DIR/FINAL.txt"
  sync
  quedar_en_pantalla
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
  echo "$rc" > "$TMP_DIR/${s}.rc"
  # badblocks reescribe el avance con retrocesos (\b) cada segundo: se quitan
  # esos avances intermedios y se guarda solo el último
  tr -d '\b' < "$TMP_DIR/${s}_badblocks.log" \
    | sed -E 's/ *[0-9.]+% done, [0-9:]+ elapsed\. \([0-9/]+ errors\)//g; s/: *done/: done/; s/ +$//' \
    | grep -v '^$' > "${p}_2_badblocks.log"
  echo "Último avance: $(tr '\b' '\n' < "$TMP_DIR/${s}_badblocks.log" | grep '% done' | tail -1 | sed 's/^ *//')" >> "${p}_2_badblocks.log"
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
  local r="$RUN_DIR/RESUMEN.txt" d s p ini fin malos rc prueba veredicto id nombre a b
  REVISAR_N=0
  {
    echo "HomeInfra - Revisión de discos v$VERSION"
    echo "Placa: ${PLACA:-desconocida} · Inicio: $INICIO · Fin: $(ahora)"
    echo ""
    for d in "${DISCOS[@]}"; do
      s="${SERIAL[$d]}"; p="$RUN_DIR/$s"; ini="${p}_1_smart_inicial.txt"; fin="${p}_3_smart_final.txt"
      malos=$(grep -c . "${p}_2_sectores_malos.txt" 2>/dev/null)
      rc="$(cat "$TMP_DIR/${s}.rc" 2>/dev/null)"
      prueba="$(ultima_autoprueba "$fin")"
      echo "== /dev/$d · S/N $s · $(grep -m1 -E '^(Device Model|Model Number|Product)' "$ini" | sed 's/^[^:]*: *//')"
      echo "   Capacidad: $(grep -m1 '^User Capacity' "$ini" | sed 's/^[^[]*\[//; s/\]//')"
      echo "   Horas de uso: $(atributo 9 "$fin")"
      for id in 5:Reasignados 197:Pendientes 198:Incorregibles 199:Errores_CRC 193:Ciclos_cabezal; do
        nombre="${id#*:}"; a="$(atributo "${id%%:*}" "$ini")"; b="$(atributo "${id%%:*}" "$fin")"
        printf "   %-15s inicial %-8s final %s\n" "$nombre" "${a:--}" "${b:--}"
      done
      echo "   Sectores malos (badblocks): ${malos:-?}"
      [ "${rc:-1}" != "0" ] && echo "   badblocks terminó con error (código ${rc:-?}): revisar ${s}_2_badblocks.log"
      echo "   Prueba larga del SMART: ${prueba:-sin resultado}"
      veredicto="APTO"
      [ "${malos:-1}" != "0" ] && veredicto="REVISAR"
      [ "${rc:-1}" != "0" ] && veredicto="REVISAR"
      for id in 197 198; do [ "$(atributo $id "$fin")" != "0" ] && [ -n "$(atributo $id "$fin")" ] && veredicto="REVISAR"; done
      a="$(atributo 5 "$ini")"; b="$(atributo 5 "$fin")"
      [ -n "$a" ] && [ -n "$b" ] && [ "$b" != "$a" ] && veredicto="REVISAR"
      echo "$prueba" | grep -q 'Completed without error' || veredicto="REVISAR"
      echo "   Veredicto preliminar: $veredicto"
      echo ""
      [ "$veredicto" = "REVISAR" ] && REVISAR_N=$(( REVISAR_N + 1 ))
    done
    if [ ${#NO_CONECTADOS[@]} -gt 0 ]; then
      echo "En discos-autorizados.txt pero no conectados: ${NO_CONECTADOS[*]}"
    fi
    if [ ${#IGNORADOS[@]} -gt 0 ]; then
      echo "Conectados y no autorizados (no se tocaron):"
      printf '   %s\n' "${IGNORADOS[@]}"
    fi
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
echo ""
{
  echo "=============================================="
  if [ "$REVISAR_N" -eq 0 ] && [ ${#DISCOS[@]} -eq 1 ]; then
    echo "  TERMINADO: el disco está APTO."
  elif [ "$REVISAR_N" -eq 0 ]; then
    echo "  TERMINADO: los ${#DISCOS[@]} discos están APTOS."
  else
    echo "  TERMINADO con observaciones: $REVISAR_N de ${#DISCOS[@]} discos para REVISAR."
  fi
  [ ${#NO_CONECTADOS[@]} -gt 0 ] && echo "  Aviso: ${#NO_CONECTADOS[@]} disco(s) de la lista no estaban conectados."
  echo "  Inventario de $INVENTARIO_N disco(s) conectados: INVENTARIO.txt"
  echo "  Reportes guardados en el pendrive: HomeInfra-Discos/$(basename "$RUN_DIR")"
  echo "  Para apagar el equipo escribe: poweroff"
  echo "=============================================="
} | tee "$RUN_DIR/FINAL.txt"
sync
quedar_en_pantalla
