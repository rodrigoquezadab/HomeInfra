<#
.SYNOPSIS
  HomeInfra Collector - Recolecta los datos del equipo y sus componentes.

.DESCRIPTION
  Genera un registro JSON (para importar en la app HomeInfra o usar con Claude)
  y un resumen TXT legible en la carpeta Registros, junto a este script.
  Funciona en Windows 10/11 y en entornos WinPE con PowerShell (live USB).

.PARAMETER OutputDir
  Carpeta de salida. Por defecto: <carpeta del script>\Registros
#>
# ==========================================================================
#  CARPETA DE DESTINO DE LOS REGISTROS
#  Se indica con -OutputDir al ejecutar el script, o en la variable DESTINO
#  de Ejecutar-Collector.bat. Ejemplo:
#    powershell -ExecutionPolicy Bypass -File HomeInfra-Collector.ps1 -OutputDir "E:\HomeInfra-Registros"
#  Sin -OutputDir se guardan en la carpeta Registros, junto a este script.
# ==========================================================================
param(
  [string]$OutputDir = ""
)

$ErrorActionPreference = "SilentlyContinue"
$CollectorVersion = "1.0.0"

# --------------------------------------------------------------------------
# Utilidades
# --------------------------------------------------------------------------
function Get-Cim($Class, $Namespace = "root\cimv2") {
  try {
    return @(Get-CimInstance -ClassName $Class -Namespace $Namespace -ErrorAction Stop)
  } catch {
    try { return @(Get-WmiObject -Class $Class -Namespace $Namespace -ErrorAction Stop) } catch { return @() }
  }
}

function Clean($Value) {
  if ($null -eq $Value) { return "" }
  $text = ([string]$Value).Trim()
  $placeholders = @("To be filled by O.E.M.", "Default string", "System Serial Number", "System Product Name",
    "Not Specified", "None", "0", "00000000", "Unknown", "O.E.M.", "N/A", "Not Available", "Chassis Serial Number")
  if ($placeholders -contains $text) { return "" }
  return $text
}

function To-GB($Bytes) {
  if (-not $Bytes) { return 0 }
  return [math]::Round([double]$Bytes / 1GB, 1)
}

function Decode-WmiString($Codes) {
  if (-not $Codes) { return "" }
  return Clean (-join ($Codes | Where-Object { $_ -ne 0 } | ForEach-Object { [char]$_ }))
}

# BatteryStaticData.Chemistry viene como texto ASCII empaquetado en un entero (ej. "LiP")
function Decode-Chemistry($Value) {
  if (-not $Value) { return "" }
  $bytes = [BitConverter]::GetBytes([uint32]$Value) | Where-Object { $_ -ge 32 -and $_ -lt 127 }
  return Clean (-join ($bytes | ForEach-Object { [char]$_ }))
}

function Get-Brand($Manufacturer) {
  $m = Clean $Manufacturer
  switch -Regex ($m) {
    "Micro-Star|^MSI" { return "MSI" }
    "LENOVO" { return "Lenovo" }
    "Hewlett|^HP" { return "HP" }
    "Dell" { return "Dell" }
    "ASUSTeK|^ASUS" { return "ASUS" }
    "^Acer" { return "Acer" }
    "Apple" { return "Apple" }
    "Samsung" { return "Samsung" }
    "Toshiba|Dynabook" { return "Toshiba" }
    "Gigabyte|GIGA-BYTE" { return "Gigabyte" }
    "Microsoft" { return "Microsoft" }
    default { return $m }
  }
}

$MemoryTypes = @{ 20 = "DDR"; 21 = "DDR2"; 24 = "DDR3"; 26 = "DDR4"; 27 = "LPDDR"; 28 = "LPDDR2";
  29 = "LPDDR3"; 30 = "LPDDR4"; 34 = "DDR5"; 35 = "LPDDR5" }
$FormFactors = @{ 8 = "DIMM"; 12 = "SO-DIMM"; 13 = "SRIMM"; 0 = "Desconocido" }
$LaptopChassis = @(8, 9, 10, 11, 12, 14, 18, 21, 30, 31, 32)

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "  HomeInfra Collector v$CollectorVersion" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host "Recolectando datos del equipo..."

# --------------------------------------------------------------------------
# Sistema
# --------------------------------------------------------------------------
$cs = Get-Cim "Win32_ComputerSystem" | Select-Object -First 1
$csp = Get-Cim "Win32_ComputerSystemProduct" | Select-Object -First 1
$bios = Get-Cim "Win32_BIOS" | Select-Object -First 1
$enclosure = Get-Cim "Win32_SystemEnclosure" | Select-Object -First 1
$board = Get-Cim "Win32_BaseBoard" | Select-Object -First 1
$os = Get-Cim "Win32_OperatingSystem" | Select-Object -First 1

$brand = Get-Brand $cs.Manufacturer
# Lenovo guarda el tipo de máquina en Model y el nombre comercial en Version
$modelName = if ($brand -eq "Lenovo" -and (Clean $csp.Version)) { Clean $csp.Version } else { Clean $cs.Model }
$serial = Clean $csp.IdentifyingNumber
if (-not $serial) { $serial = Clean $bios.SerialNumber }

$chassisTypes = @($enclosure.ChassisTypes)
$isLaptop = ($cs.PCSystemType -eq 2) -or (@($chassisTypes | Where-Object { $LaptopChassis -contains $_ }).Count -gt 0)
$isWinPE = Test-Path "HKLM:\SYSTEM\CurrentControlSet\Control\MiniNT"

$system = [ordered]@{
  brand        = $brand
  manufacturer = Clean $cs.Manufacturer
  model        = $modelName
  modelRaw     = Clean $cs.Model
  sku          = Clean $cs.SystemSKUNumber
  family       = Clean $cs.SystemFamily
  serial       = $serial
  uuid         = Clean $csp.UUID
  type         = if ($isLaptop) { "Laptop" } else { "Desktop" }
  chassisTypes = $chassisTypes
  bios         = [ordered]@{
    vendor      = Clean $bios.Manufacturer
    version     = Clean $bios.SMBIOSBIOSVersion
    releaseDate = if ($bios.ReleaseDate) { ([datetime]$bios.ReleaseDate).ToString("yyyy-MM-dd") } else { "" }
    serial      = Clean $bios.SerialNumber
  }
}

$motherboard = [ordered]@{
  manufacturer = Clean $board.Manufacturer
  product      = Clean $board.Product
  version      = Clean $board.Version
  serial       = Clean $board.SerialNumber
}

# --------------------------------------------------------------------------
# CPU
# --------------------------------------------------------------------------
$cpus = @(Get-Cim "Win32_Processor" | ForEach-Object {
    [ordered]@{
      name              = (Clean $_.Name) -replace "\s+", " "
      manufacturer      = Clean $_.Manufacturer
      cores             = $_.NumberOfCores
      logicalProcessors = $_.NumberOfLogicalProcessors
      maxClockMHz       = $_.MaxClockSpeed
      socket            = Clean $_.SocketDesignation
    }
  })

# --------------------------------------------------------------------------
# Memoria RAM
# --------------------------------------------------------------------------
$memArray = Get-Cim "Win32_PhysicalMemoryArray" | Select-Object -First 1
$memModules = @(Get-Cim "Win32_PhysicalMemory" | ForEach-Object {
    $typeCode = if ($_.SMBIOSMemoryType) { [int]$_.SMBIOSMemoryType } else { [int]$_.MemoryType }
    [ordered]@{
      slot          = Clean $_.DeviceLocator
      bank          = Clean $_.BankLabel
      capacityGB    = To-GB $_.Capacity
      type          = if ($MemoryTypes.ContainsKey($typeCode)) { $MemoryTypes[$typeCode] } else { "" }
      formFactor    = if ($FormFactors.ContainsKey([int]$_.FormFactor)) { $FormFactors[[int]$_.FormFactor] } else { "Otro ($($_.FormFactor))" }
      speedMTs      = $_.Speed
      configuredMTs = $_.ConfiguredClockSpeed
      manufacturer  = Clean $_.Manufacturer
      partNumber    = Clean $_.PartNumber
      serial        = Clean $_.SerialNumber
    }
  })
$memory = [ordered]@{
  totalGB       = To-GB $cs.TotalPhysicalMemory
  installedGB   = [math]::Round(($memModules | ForEach-Object { $_.capacityGB } | Measure-Object -Sum).Sum, 1)
  slotsTotal    = $memArray.MemoryDevices
  slotsUsed     = $memModules.Count
  maxCapacityGB = if ($memArray.MaxCapacityEx) { To-GB ([double]$memArray.MaxCapacityEx * 1KB) } elseif ($memArray.MaxCapacity) { To-GB ([double]$memArray.MaxCapacity * 1KB) } else { 0 }
  modules       = $memModules
}

# --------------------------------------------------------------------------
# Almacenamiento
# --------------------------------------------------------------------------
$storage = @()
$physicalDisks = @()
try { $physicalDisks = @(Get-PhysicalDisk -ErrorAction Stop) } catch { }
if ($physicalDisks.Count -gt 0) {
  $storage = @($physicalDisks | ForEach-Object {
      [ordered]@{
        model     = Clean $_.FriendlyName
        serial    = Clean $_.SerialNumber
        sizeGB    = To-GB $_.Size
        mediaType = [string]$_.MediaType
        busType   = [string]$_.BusType
        firmware  = Clean $_.FirmwareVersion
        health    = [string]$_.HealthStatus
      }
    })
} else {
  $storage = @(Get-Cim "Win32_DiskDrive" | ForEach-Object {
      [ordered]@{
        model     = Clean $_.Model
        serial    = Clean $_.SerialNumber
        sizeGB    = To-GB $_.Size
        mediaType = Clean $_.MediaType
        busType   = Clean $_.InterfaceType
        firmware  = Clean $_.FirmwareRevision
        health    = Clean $_.Status
      }
    })
}

# --------------------------------------------------------------------------
# GPU
# --------------------------------------------------------------------------
$gpus = @(Get-Cim "Win32_VideoController" | Where-Object { $_.Name -notmatch "Basic Display|Remote Display|Mirage" } | ForEach-Object {
    [ordered]@{
      name          = Clean $_.Name
      vendor        = Clean $_.AdapterCompatibility
      driverVersion = Clean $_.DriverVersion
      adapterRAMGB  = To-GB $_.AdapterRAM
    }
  })

# --------------------------------------------------------------------------
# Red
# --------------------------------------------------------------------------
$network = @(Get-Cim "Win32_NetworkAdapter" | Where-Object { $_.PhysicalAdapter -and $_.MACAddress -and $_.PNPDeviceID -notmatch "^(ROOT|SWD)\\" -and $_.Name -notmatch "Personal Area Network" } | ForEach-Object {
    [ordered]@{
      name         = Clean $_.Name
      manufacturer = Clean $_.Manufacturer
      mac          = Clean $_.MACAddress
      type         = Clean $_.AdapterType
    }
  })

# --------------------------------------------------------------------------
# Batería
# --------------------------------------------------------------------------
$batteries = @()
$batStatic = @(Get-Cim "BatteryStaticData" "root\wmi")
$batFull = @(Get-Cim "BatteryFullChargedCapacity" "root\wmi")
for ($i = 0; $i -lt $batStatic.Count; $i++) {
  $s = $batStatic[$i]
  $full = if ($i -lt $batFull.Count) { $batFull[$i].FullChargedCapacity } else { $null }
  $health = if ($s.DesignedCapacity -and $full) { [math]::Round(100 * $full / $s.DesignedCapacity, 0) } else { $null }
  $batteries += [ordered]@{
    name                  = Clean $s.DeviceName
    manufacturer          = Clean $s.ManufactureName
    serial                = Clean $s.SerialNumber
    chemistry             = Decode-Chemistry $s.Chemistry
    designedCapacityMWh   = $s.DesignedCapacity
    fullChargeCapacityMWh = $full
    healthPercent         = $health
  }
}
if ($batteries.Count -eq 0) {
  $batteries = @(Get-Cim "Win32_Battery" | ForEach-Object {
      [ordered]@{ name = Clean $_.Name; manufacturer = ""; serial = ""; chemistry = ""; designedCapacityMWh = $null; fullChargeCapacityMWh = $null; healthPercent = $null }
    })
}

# --------------------------------------------------------------------------
# Monitores
# --------------------------------------------------------------------------
$monitors = @(Get-Cim "WmiMonitorID" "root\wmi" | ForEach-Object {
    [ordered]@{
      manufacturer = Decode-WmiString $_.ManufacturerName
      model        = Decode-WmiString $_.UserFriendlyName
      serial       = Decode-WmiString $_.SerialNumberID
      year         = $_.YearOfManufacture
    }
  })

# --------------------------------------------------------------------------
# Registro final
# --------------------------------------------------------------------------
$now = Get-Date
$report = [ordered]@{
  schema      = "homeinfra-collector"
  version     = $CollectorVersion
  collectedAt = $now.ToString("yyyy-MM-ddTHH:mm:ss")
  environment = [ordered]@{
    computerName = $env:COMPUTERNAME
    isWinPE      = $isWinPE
    os           = Clean $os.Caption
    osVersion    = Clean $os.Version
    osBuild      = Clean $os.BuildNumber
    osInstallDate = if ($os.InstallDate -and -not $isWinPE) { ([datetime]$os.InstallDate).ToString("yyyy-MM-dd") } else { "" }
  }
  system      = $system
  motherboard = $motherboard
  cpu         = $cpus
  memory      = $memory
  storage     = $storage
  gpu         = $gpus
  network     = $network
  battery     = $batteries
  monitors    = $monitors
}

# Carpeta de salida
if (-not $OutputDir) {
  $base = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }
  $OutputDir = Join-Path $base "Registros"
}
try {
  New-Item -ItemType Directory -Force -Path $OutputDir -ErrorAction Stop | Out-Null
} catch {
  # Medio de solo lectura (ej. CD): usar carpeta temporal
  $OutputDir = Join-Path $env:TEMP "HomeInfra-Registros"
  New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null
}

$nameParts = @($brand, $modelName, $serial) | Where-Object { $_ }
$baseName = (($nameParts -join "_") -replace '[\\/:*?"<>|\s]+', "-") + "_" + $now.ToString("yyyyMMdd-HHmmss")
$jsonPath = Join-Path $OutputDir "$baseName.json"
$txtPath = Join-Path $OutputDir "$baseName.txt"

$utf8 = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($jsonPath, ($report | ConvertTo-Json -Depth 8), $utf8)

# Resumen legible
$lines = @()
$lines += "HomeInfra Collector v$CollectorVersion - $($now.ToString('yyyy-MM-dd HH:mm'))"
$lines += "=" * 60
$lines += "Equipo:        $brand $modelName ($($system.type))"
$lines += "N.º de serie:  $serial"
$lines += "SKU:           $($system.sku)"
$lines += "BIOS:          $($system.bios.vendor) $($system.bios.version) ($($system.bios.releaseDate))"
$lines += "Placa base:    $($motherboard.manufacturer) $($motherboard.product) S/N $($motherboard.serial)"
$lines += "Sistema:       $($report.environment.os) $($report.environment.osVersion)$(if ($isWinPE) { ' [WinPE]' })"
$lines += ""
$lines += "CPU:"
foreach ($c in $cpus) { $lines += "  - $($c.name) | $($c.cores) núcleos / $($c.logicalProcessors) hilos | $($c.maxClockMHz) MHz" }
$lines += ""
$lines += "RAM: $($memory.installedGB) GB instalados | ranuras usadas $($memory.slotsUsed) de $($memory.slotsTotal)"
foreach ($m in $memModules) { $lines += "  - [$($m.slot)] $($m.capacityGB) GB $($m.type) $($m.formFactor) $($m.speedMTs) MT/s | $($m.manufacturer) $($m.partNumber) S/N $($m.serial)" }
$lines += ""
$lines += "Almacenamiento:"
foreach ($d in $storage) { $lines += "  - $($d.model) | $($d.sizeGB) GB | $($d.mediaType) $($d.busType) | S/N $($d.serial)" }
$lines += ""
$lines += "GPU:"
foreach ($g in $gpus) { $lines += "  - $($g.name)" }
$lines += ""
$lines += "Red:"
foreach ($n in $network) { $lines += "  - $($n.name) | MAC $($n.mac)" }
if ($batteries.Count -gt 0) {
  $lines += ""
  $lines += "Batería:"
  foreach ($b in $batteries) { $lines += "  - $($b.name) $($b.manufacturer) S/N $($b.serial) | salud $($b.healthPercent)%" }
}
if ($monitors.Count -gt 0) {
  $lines += ""
  $lines += "Monitores:"
  foreach ($mo in $monitors) { $lines += "  - $($mo.manufacturer) $($mo.model) S/N $($mo.serial) ($($mo.year))" }
}
[System.IO.File]::WriteAllText($txtPath, ($lines -join "`r`n"), $utf8)

Write-Host ""
Write-Host ($lines -join "`n")
Write-Host ""
Write-Host "Registro guardado en:" -ForegroundColor Green
Write-Host "  $jsonPath"
Write-Host "  $txtPath"
