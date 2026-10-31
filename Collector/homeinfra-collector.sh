#!/usr/bin/env bash
# HomeInfra Collector - Recolecta los datos del equipo y sus componentes (Linux y macOS).
#
# Genera un registro JSON (para importar en la app HomeInfra o usar con Claude)
# y un resumen TXT legible en la carpeta Registros, junto a este script.
#
# Uso:  bash homeinfra-collector.sh [carpeta-de-salida]
#       sudo bash homeinfra-collector.sh   (Linux: agrega números de serie y módulos de RAM)

COLLECTOR_VERSION="1.0.0"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="${1:-$SCRIPT_DIR/Registros}"

# Carpeta de salida; si es de solo lectura (ej. CD), usar /tmp
if ! mkdir -p "$OUTPUT_DIR" 2>/dev/null || ! [ -w "$OUTPUT_DIR" ]; then
  OUTPUT_DIR="/tmp/HomeInfra-Registros"
  mkdir -p "$OUTPUT_DIR"
fi

echo ""
echo "=============================================="
echo "  HomeInfra Collector v$COLLECTOR_VERSION"
echo "=============================================="
echo "Recolectando datos del equipo..."

# macOS: la recolección se hace con JavaScript for Automation (incluido en el sistema)
if [ "$(uname -s)" = "Darwin" ]; then
  exec osascript -l JavaScript "$SCRIPT_DIR/homeinfra-collector-macos.js" "$OUTPUT_DIR" "$COLLECTOR_VERSION"
fi

if [ "$(uname -s)" != "Linux" ]; then
  echo "Sistema no soportado: $(uname -s). En Windows usa Ejecutar-Collector.bat"
  exit 1
fi

if [ "$(id -u)" != "0" ]; then
  echo "Aviso: sin sudo no se pueden leer algunos números de serie ni los módulos de RAM."
fi

# --------------------------------------------------------------------------
# Utilidades
# --------------------------------------------------------------------------
trim() { sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//'; }

# Quitar valores de relleno de fábrica
clean() {
  case "$1" in
    "To be filled by O.E.M."|"Default string"|"System Serial Number"|"System Product Name"|"Not Specified"|\
    "None"|"0"|"00000000"|"Unknown"|"O.E.M."|"N/A"|"Not Available"|"Chassis Serial Number"|"Not Provided") echo "" ;;
    *) echo "$1" ;;
  esac
}

readf() { [ -r "$1" ] && clean "$(tr -d '\000' < "$1" 2>/dev/null | head -n 1 | trim)"; }
dmi() { readf "/sys/class/dmi/id/$1"; }

# Texto JSON con comillas y caracteres escapados
js() {
  printf '"%s"' "$(printf '%s' "$1" | sed -e 's/\\/\\\\/g' -e 's/"/\\"/g' -e 's/	/\\t/g' | tr -d '\000-\010\013\014\016-\037' | awk 'BEGIN{ORS=""} NR>1{print "\\n"} {print}')"
}
# Número JSON o null
jn() { case "$1" in ''|*[!0-9.]*) printf 'null' ;; *) printf '%s' "$1" ;; esac; }

to_gb() { awk -v b="${1:-0}" 'BEGIN{printf "%.1f", b/1073741824}' | sed 's/\.0$//'; }

brand_of() {
  case "$1" in
    *Micro-Star*|MSI*) echo "MSI" ;;
    LENOVO*|Lenovo*) echo "Lenovo" ;;
    Hewlett*|HP*) echo "HP" ;;
    Dell*) echo "Dell" ;;
    ASUSTeK*|ASUS*) echo "ASUS" ;;
    Acer*) echo "Acer" ;;
    Apple*) echo "Apple" ;;
    Samsung*|SAMSUNG*) echo "Samsung" ;;
    Toshiba*|TOSHIBA*|Dynabook*) echo "Toshiba" ;;
    Gigabyte*|GIGA-BYTE*) echo "Gigabyte" ;;
    Microsoft*) echo "Microsoft" ;;
    *) echo "$1" ;;
  esac
}

# --------------------------------------------------------------------------
# Sistema
# --------------------------------------------------------------------------
manufacturer="$(dmi sys_vendor)"
brand="$(brand_of "$manufacturer")"
model_raw="$(dmi product_name)"
# Lenovo guarda el tipo de máquina en product_name y el nombre comercial en product_version
if [ "$brand" = "Lenovo" ] && [ -n "$(dmi product_version)" ]; then model="$(dmi product_version)"; else model="$model_raw"; fi
serial="$(dmi product_serial)"
sku="$(dmi product_sku)"
family="$(dmi product_family)"
uuid="$(dmi product_uuid)"
chassis="$(dmi chassis_type)"
case " 8 9 10 11 12 14 18 21 30 31 32 " in *" $chassis "*) sys_type="Laptop" ;; *) sys_type="Desktop" ;; esac
[ -d /sys/class/power_supply ] && ls /sys/class/power_supply 2>/dev/null | grep -q '^BAT' && sys_type="Laptop"

bios_vendor="$(dmi bios_vendor)"
bios_version="$(dmi bios_version)"
bios_date_raw="$(dmi bios_date)"
bios_date="$(echo "$bios_date_raw" | awk -F/ 'NF==3{printf "%s-%s-%s", $3, $1, $2; next} {print}')"

board_vendor="$(dmi board_vendor)"
board_name="$(dmi board_name)"
board_version="$(dmi board_version)"
board_serial="$(dmi board_serial)"

os_name="$( (. /etc/os-release 2>/dev/null; echo "$PRETTY_NAME") )"
os_version="$(uname -r)"

# --------------------------------------------------------------------------
# CPU
# --------------------------------------------------------------------------
cpu_name="$(grep -m1 '^model name' /proc/cpuinfo | cut -d: -f2- | trim | tr -s ' ')"
cpu_vendor="$(grep -m1 '^vendor_id' /proc/cpuinfo | cut -d: -f2- | trim)"
cpu_threads="$(grep -c '^processor' /proc/cpuinfo)"
cpu_cores="$(awk -F: '/^physical id/{p=$2} /^core id/{print p":"$2}' /proc/cpuinfo | sort -u | wc -l | trim)"
[ "$cpu_cores" = "0" ] && cpu_cores="$cpu_threads"
cpu_khz="$(readf /sys/devices/system/cpu/cpu0/cpufreq/cpuinfo_max_freq)"
cpu_mhz=""; [ -n "$cpu_khz" ] && cpu_mhz=$((cpu_khz / 1000))

# --------------------------------------------------------------------------
# Memoria RAM (módulos requieren dmidecode y sudo)
# --------------------------------------------------------------------------
mem_total_gb="$(awk '/^MemTotal/{printf "%.1f", $2/1048576}' /proc/meminfo | sed 's/\.0$//')"
mem_json=""; mem_lines=""; slots_total=""; slots_used=""; installed_mb=0; max_capacity_gb=""
if command -v dmidecode >/dev/null 2>&1 && [ "$(id -u)" = "0" ]; then
  slots_total=0; slots_used=0
  max_capacity_gb="$(dmidecode -t 16 2>/dev/null | awk -F: '/Maximum Capacity/{gsub(/ /,"",$2); v=$2; if (v ~ /TB$/) {sub(/TB/,"",v); v*=1024} else if (v ~ /MB$/) {sub(/MB/,"",v); v/=1024} else sub(/GB/,"",v); s+=v} END{print s+0}')"
  while IFS='|' read -r size ff slot bank type speed mfr sn pn; do
    [ -z "$slot$size" ] && continue
    slots_total=$((slots_total + 1))
    case "$size" in "No Module Installed"|"") continue ;; esac
    slots_used=$((slots_used + 1))
    num="${size%% *}"; unit="${size##* }"
    case "$unit" in GB) mb=$((num * 1024)) ;; MB) mb=$num ;; *) mb=0 ;; esac
    installed_mb=$((installed_mb + mb))
    gb="$(awk -v m="$mb" 'BEGIN{printf "%.1f", m/1024}' | sed 's/\.0$//')"
    case "$ff" in SODIMM) ff="SO-DIMM" ;; esac
    spd="${speed%% *}"
    mfr="$(clean "$(echo "$mfr" | trim)")"; sn="$(clean "$(echo "$sn" | trim)")"; pn="$(clean "$(echo "$pn" | trim)")"
    [ -n "$mem_json" ] && mem_json="$mem_json,"
    mem_json="$mem_json{\"slot\":$(js "$slot"),\"bank\":$(js "$bank"),\"capacityGB\":$(jn "$gb"),\"type\":$(js "$type"),\"formFactor\":$(js "$ff"),\"speedMTs\":$(jn "$spd"),\"configuredMTs\":null,\"manufacturer\":$(js "$mfr"),\"partNumber\":$(js "$pn"),\"serial\":$(js "$sn")}"
    mem_lines="$mem_lines  - [$slot] $gb GB $type $ff $spd MT/s | $mfr $pn S/N $sn
"
  done <<EOF
$(dmidecode -t 17 2>/dev/null | awk -F': ' '
  /^Memory Device/ {if (n) print r; n=1; size=ff=slot=bank=type=speed=mfr=sn=pn=""}
  /^\tSize:/ {size=$2} /^\tForm Factor:/ {ff=$2} /^\tLocator:/ {slot=$2} /^\tBank Locator:/ {bank=$2}
  /^\tType:/ {type=$2} /^\tSpeed:/ {speed=$2} /^\tManufacturer:/ {mfr=$2} /^\tSerial Number:/ {sn=$2} /^\tPart Number:/ {pn=$2}
  {r=size"|"ff"|"slot"|"bank"|"type"|"speed"|"mfr"|"sn"|"pn}
  END {if (n) print r}' | sed 's/[[:space:]]*|/|/g')
EOF
fi
installed_gb="$mem_total_gb"
[ "$installed_mb" -gt 0 ] && installed_gb="$(awk -v m="$installed_mb" 'BEGIN{printf "%.1f", m/1024}' | sed 's/\.0$//')"

# --------------------------------------------------------------------------
# Almacenamiento
# --------------------------------------------------------------------------
storage_json=""; storage_lines=""
for dev in /sys/block/*; do
  name="$(basename "$dev")"
  case "$name" in loop*|ram*|zram*|sr*|dm-*|md*|fd*|nbd*|mmcblk*boot*) continue ;; esac
  [ -e "$dev/device" ] || continue
  sectors="$(readf "$dev/size")"; [ -z "$sectors" ] && continue
  size_gb="$(to_gb $((sectors * 512)))"
  model_d="$(readf "$dev/device/model")"
  [ -z "$model_d" ] && model_d="$(readf "$dev/device/name")"
  serial_d="$(readf "$dev/device/serial")"
  if [ -z "$serial_d" ] && command -v udevadm >/dev/null 2>&1; then
    serial_d="$(udevadm info --query=property --name="/dev/$name" 2>/dev/null | sed -n 's/^ID_SERIAL_SHORT=//p' | head -n 1)"
  fi
  firmware_d="$(readf "$dev/device/firmware_rev")"; [ -z "$firmware_d" ] && firmware_d="$(readf "$dev/device/rev")"
  path="$(readlink -f "$dev")"
  case "$name:$path" in
    nvme*) bus="NVMe" ;;
    *usb*) bus="USB" ;;
    mmcblk*) bus="MMC" ;;
    *) bus="SATA" ;;
  esac
  if [ "$(readf "$dev/queue/rotational")" = "1" ]; then media="HDD"; else media="SSD"; fi
  [ -n "$storage_json" ] && storage_json="$storage_json,"
  storage_json="$storage_json{\"model\":$(js "$model_d"),\"serial\":$(js "$serial_d"),\"sizeGB\":$(jn "$size_gb"),\"mediaType\":$(js "$media"),\"busType\":$(js "$bus"),\"firmware\":$(js "$firmware_d"),\"health\":\"\"}"
  storage_lines="$storage_lines  - $model_d | $size_gb GB | $media $bus | S/N $serial_d
"
done

# --------------------------------------------------------------------------
# GPU
# --------------------------------------------------------------------------
gpu_json=""; gpu_lines=""
if command -v lspci >/dev/null 2>&1; then
  while IFS='|' read -r vendor device; do
    [ -z "$device" ] && continue
    [ -n "$gpu_json" ] && gpu_json="$gpu_json,"
    gpu_json="$gpu_json{\"name\":$(js "$vendor $device"),\"vendor\":$(js "$vendor"),\"driverVersion\":\"\",\"adapterRAMGB\":null}"
    gpu_lines="$gpu_lines  - $vendor $device
"
  done <<EOF
$(lspci -mm 2>/dev/null | grep -E '"(VGA compatible controller|3D controller|Display controller)"' | awk -F'"' '{print $4"|"$6}')
EOF
fi

# --------------------------------------------------------------------------
# Red (interfaces físicas)
# --------------------------------------------------------------------------
net_json=""; net_lines=""
for nic in /sys/class/net/*; do
  [ -e "$nic/device" ] || continue
  ifname="$(basename "$nic")"
  mac="$(readf "$nic/address" | tr 'a-f' 'A-F')"
  driver="$(basename "$(readlink -f "$nic/device/driver")" 2>/dev/null)"
  if [ -d "$nic/wireless" ] || [ -d "$nic/phy80211" ]; then ntype="Wi-Fi"; else ntype="Ethernet"; fi
  label="$ifname ($ntype, $driver)"
  [ -n "$net_json" ] && net_json="$net_json,"
  net_json="$net_json{\"name\":$(js "$label"),\"manufacturer\":\"\",\"mac\":$(js "$mac"),\"type\":$(js "$ntype")}"
  net_lines="$net_lines  - $label | MAC $mac
"
done

# --------------------------------------------------------------------------
# Batería
# --------------------------------------------------------------------------
bat_json=""; bat_lines=""
for bat in /sys/class/power_supply/BAT*; do
  [ -d "$bat" ] || continue
  bname="$(readf "$bat/model_name")"
  bmfr="$(readf "$bat/manufacturer")"
  bsn="$(readf "$bat/serial_number")"
  btech="$(readf "$bat/technology")"
  design="$(readf "$bat/energy_full_design")"; full="$(readf "$bat/energy_full")"
  [ -z "$design" ] && design="$(readf "$bat/charge_full_design")" && full="$(readf "$bat/charge_full")"
  design_mwh=""; full_mwh=""; health=""
  [ -n "$design" ] && design_mwh=$((design / 1000))
  [ -n "$full" ] && full_mwh=$((full / 1000))
  [ -n "$design" ] && [ -n "$full" ] && [ "$design" -gt 0 ] && health=$((100 * full / design))
  [ -n "$bat_json" ] && bat_json="$bat_json,"
  bat_json="$bat_json{\"name\":$(js "$bname"),\"manufacturer\":$(js "$bmfr"),\"serial\":$(js "$bsn"),\"chemistry\":$(js "$btech"),\"designedCapacityMWh\":$(jn "$design_mwh"),\"fullChargeCapacityMWh\":$(jn "$full_mwh"),\"healthPercent\":$(jn "$health")}"
  bat_lines="$bat_lines  - $bname $bmfr S/N $bsn | salud ${health}%
"
done

# --------------------------------------------------------------------------
# Monitores (EDID)
# --------------------------------------------------------------------------
mon_json=""; mon_lines=""
for edid in /sys/class/drm/card*-*/edid; do
  [ -s "$edid" ] || continue
  hex="$(od -An -v -tx1 "$edid" 2>/dev/null | tr -s ' \n' ' ' | trim)"
  [ -z "$hex" ] && continue
  set -- $hex
  # Fabricante: 3 letras de 5 bits en los bytes 8-9
  m=$(( (0x$9 << 8) | 0x${10} ))
  mmfr="$(printf "\\$(printf '%03o' $(( ((m >> 10) & 31) + 64 )))\\$(printf '%03o' $(( ((m >> 5) & 31) + 64 )))\\$(printf '%03o' $(( (m & 31) + 64 )))")"
  myear=$(( 0x${18} + 1990 ))
  mname=""; mserial=""
  for off in 54 72 90 108; do
    i=$((off + 1))
    eval "b0=\${$i}; b1=\${$((i + 1))}; b3=\${$((i + 3))}"
    [ "$b0$b1" = "0000" ] || continue
    [ "$b3" = "fc" ] || [ "$b3" = "ff" ] || continue
    text=""
    for k in $(seq $((i + 5)) $((i + 17))); do
      eval "c=\${$k}"
      [ "$c" = "0a" ] || [ "$c" = "00" ] && break
      text="$text$(printf "\\$(printf '%03o' $((0x$c)))")"
    done
    text="$(echo "$text" | trim)"
    [ "$b3" = "fc" ] && mname="$text"
    [ "$b3" = "ff" ] && mserial="$text"
  done
  [ -n "$mon_json" ] && mon_json="$mon_json,"
  mon_json="$mon_json{\"manufacturer\":$(js "$mmfr"),\"model\":$(js "$mname"),\"serial\":$(js "$mserial"),\"year\":$(jn "$myear")}"
  mon_lines="$mon_lines  - $mmfr $mname S/N $mserial ($myear)
"
done

# --------------------------------------------------------------------------
# Registro final
# --------------------------------------------------------------------------
now_iso="$(date +%Y-%m-%dT%H:%M:%S)"
stamp="$(date +%Y%m%d-%H%M%S)"
base_name="$(printf '%s_%s_%s' "$brand" "$model" "$serial" | sed -e 's/__*/_/g' -e 's/_$//' -e 's#[\\/:*?"<>|[:space:]]\{1,\}#-#g')_$stamp"
json_path="$OUTPUT_DIR/$base_name.json"
txt_path="$OUTPUT_DIR/$base_name.txt"

cat > "$json_path" <<EOF
{
  "schema": "homeinfra-collector",
  "version": "$COLLECTOR_VERSION",
  "collectedAt": "$now_iso",
  "environment": {"computerName": $(js "$(hostname)"), "platform": "linux", "isWinPE": false, "os": $(js "$os_name"), "osVersion": $(js "$os_version"), "osBuild": "", "osInstallDate": ""},
  "system": {
    "brand": $(js "$brand"), "manufacturer": $(js "$manufacturer"), "model": $(js "$model"), "modelRaw": $(js "$model_raw"),
    "sku": $(js "$sku"), "family": $(js "$family"), "serial": $(js "$serial"), "uuid": $(js "$uuid"),
    "type": "$sys_type", "chassisTypes": [$(jn "$chassis")],
    "bios": {"vendor": $(js "$bios_vendor"), "version": $(js "$bios_version"), "releaseDate": $(js "$bios_date"), "serial": $(js "$serial")}
  },
  "motherboard": {"manufacturer": $(js "$board_vendor"), "product": $(js "$board_name"), "version": $(js "$board_version"), "serial": $(js "$board_serial")},
  "cpu": [{"name": $(js "$cpu_name"), "manufacturer": $(js "$cpu_vendor"), "cores": $(jn "$cpu_cores"), "logicalProcessors": $(jn "$cpu_threads"), "maxClockMHz": $(jn "$cpu_mhz"), "socket": ""}],
  "memory": {"totalGB": $(jn "$mem_total_gb"), "installedGB": $(jn "$installed_gb"), "slotsTotal": $(jn "$slots_total"), "slotsUsed": $(jn "$slots_used"), "maxCapacityGB": $(jn "$max_capacity_gb"), "modules": [$mem_json]},
  "storage": [$storage_json],
  "gpu": [$gpu_json],
  "network": [$net_json],
  "battery": [$bat_json],
  "monitors": [$mon_json]
}
EOF

{
  echo "HomeInfra Collector v$COLLECTOR_VERSION - $(date '+%Y-%m-%d %H:%M')"
  echo "============================================================"
  echo "Equipo:        $brand $model ($sys_type)"
  echo "N.º de serie:  $serial"
  echo "SKU:           $sku"
  echo "BIOS:          $bios_vendor $bios_version ($bios_date)"
  echo "Placa base:    $board_vendor $board_name S/N $board_serial"
  echo "Sistema:       $os_name ($os_version)"
  echo ""
  echo "CPU:"
  echo "  - $cpu_name | $cpu_cores núcleos / $cpu_threads hilos | $cpu_mhz MHz"
  echo ""
  if [ -n "$slots_total" ]; then
    echo "RAM: $installed_gb GB instalados | ranuras usadas $slots_used de $slots_total"
  else
    echo "RAM: $installed_gb GB (detalle de módulos: ejecutar con sudo y dmidecode)"
  fi
  printf '%s' "$mem_lines"
  echo ""
  echo "Almacenamiento:"
  printf '%s' "$storage_lines"
  echo ""
  echo "GPU:"
  printf '%s' "$gpu_lines"
  echo ""
  echo "Red:"
  printf '%s' "$net_lines"
  if [ -n "$bat_lines" ]; then echo ""; echo "Batería:"; printf '%s' "$bat_lines"; fi
  if [ -n "$mon_lines" ]; then echo ""; echo "Monitores:"; printf '%s' "$mon_lines"; fi
} > "$txt_path"

echo ""
cat "$txt_path"
echo ""
echo "Registro guardado en:"
echo "  $json_path"
echo "  $txt_path"
