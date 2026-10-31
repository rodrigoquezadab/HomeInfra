# HomeInfra Collector

Producto aislado dentro de HomeInfra. Scripts que se ejecutan en Windows, Linux y macOS (incluido un pendrive o live USB) y recolectan los datos del equipo y de sus componentes, para importarlos en la app HomeInfra o usarlos con Claude. Los tres sistemas generan el mismo formato de registro.

## Contenido

| Archivo | Sistema | Uso |
|---------|---------|-----|
| `Ejecutar-Collector.bat` | Windows | Lanzador para doble clic. Ejecuta el script sin cambiar la política de ejecución del sistema. |
| `HomeInfra-Collector.ps1` | Windows | Script de recolección (PowerShell 5.1 o superior). |
| `homeinfra-collector.sh` | Linux y macOS | Script de recolección (bash). En macOS llama a `homeinfra-collector-macos.js`. |
| `homeinfra-collector-macos.js` | macOS | Recolección con JavaScript for Automation (incluido en macOS). |
| `Ejecutar-Collector.command` | macOS | Lanzador para doble clic. |
| `Registros/` | Todos | Carpeta donde se guardan los registros generados. |

## Uso

### Desde la app (con internet)

En la app HomeInfra, pulsa **Collector** en la barra superior y sigue los tres pasos:

- **A.** Elige el sistema del equipo a registrar (Windows, Linux o macOS).
- **B.** Escribe la **carpeta de destino** en el recuadro amarillo (ver [Cambiar la carpeta de destino](#-cambiar-la-carpeta-de-destino)).
- **C.** Copia el comando, pégalo en una terminal del equipo a registrar y presiona Enter. Descarga el script desde GitHub y lo ejecuta, sin instalar nada.

### Desde un pendrive (sin internet)

1. Copia la carpeta `Collector` completa a un pendrive.
2. En el equipo a registrar, abre la carpeta y ejecuta el lanzador según el sistema:
   - **Windows:** doble clic en `Ejecutar-Collector.bat`.
   - **Linux:** abre una terminal en la carpeta y ejecuta `sudo bash homeinfra-collector.sh`. Sin `sudo` también funciona, pero no lee algunos números de serie (equipo, placa base) ni el detalle de los módulos de RAM, que requiere `dmidecode`.
   - **macOS:** doble clic en `Ejecutar-Collector.command`, o en una terminal `bash homeinfra-collector.sh`. No necesita `sudo`.
3. El script muestra un resumen en pantalla y guarda dos archivos en `Registros/`:
   - `<Marca>_<Modelo>_<Serie>_<fecha>.json`: registro completo para importar.
   - `<Marca>_<Modelo>_<Serie>_<fecha>.txt`: resumen legible.

No necesita conexión a internet y no modifica el equipo.

## 📁 Cambiar la carpeta de destino

Por defecto los registros se guardan así:

| Forma de uso | Carpeta por defecto |
|--------------|---------------------|
| Comando desde la app, Windows | `Escritorio\HomeInfra-Registros` |
| Comando desde la app, Linux | `~/HomeInfra-Registros` (carpeta personal) |
| Comando desde la app, macOS | `Escritorio/HomeInfra-Registros` |
| Lanzadores del pendrive | `Registros/`, junto a los scripts |

Si la carpeta no se puede escribir (por ejemplo, un CD), se usa `%TEMP%\HomeInfra-Registros` (Windows) o `/tmp/HomeInfra-Registros` (Linux y macOS).

Para guardarlos en otro lugar:

**Desde la app:** escribe la ruta en el recuadro amarillo **📁 Carpeta de destino** (paso B). El comando se actualiza solo y la carpeta aparece resaltada en amarillo dentro de él. Ejemplos de pendrive:

- Windows: `E:\HomeInfra-Registros` (cambia `E:` por la letra del pendrive)
- Linux: `/media/$USER/PENDRIVE/HomeInfra-Registros` (cambia `PENDRIVE` por el nombre del pendrive)
- macOS: `/Volumes/PENDRIVE/HomeInfra-Registros`

**Windows, desde el pendrive:** abre `Ejecutar-Collector.bat` con el Bloc de notas y escribe la ruta en la línea marcada **CARPETA DE DESTINO**:

```bat
set "DESTINO=E:\HomeInfra-Registros"
```

**macOS, desde el pendrive:** abre `Ejecutar-Collector.command` con un editor de texto y escribe la ruta en la línea marcada **CARPETA DE DESTINO**:

```bash
DESTINO="/Volumes/PENDRIVE/HomeInfra-Registros"
```

**Linux (o cualquier sistema desde la terminal):** indica la ruta al final del comando:

```bash
sudo bash homeinfra-collector.sh /media/$USER/PENDRIVE/HomeInfra-Registros
```

```powershell
powershell -ExecutionPolicy Bypass -File HomeInfra-Collector.ps1 -OutputDir "E:\HomeInfra-Registros"
```

Si la carpeta no existe, el script la crea.

### Linux

- Usa solo herramientas presentes en casi cualquier distribución (bash, coreutils, `/sys` y `/proc`). Si están disponibles, aprovecha `dmidecode` (módulos de RAM), `lspci` (GPU) y `udevadm` (números de serie de discos).
- Funciona desde un live USB (por ejemplo, Ubuntu o SystemRescue).
- En pendrives con formato FAT32 o exFAT los archivos no conservan el permiso de ejecución; por eso se ejecuta con `bash homeinfra-collector.sh` en vez de `./homeinfra-collector.sh`.

### macOS

- Usa `system_profiler` y JavaScript for Automation, incluidos en macOS; no requiere instalar nada.
- En Mac con Apple Silicon la RAM está integrada en el chip y se registra como un único componente soldado.
- Si macOS bloquea el `.command` por seguridad, ejecútalo con clic derecho → Abrir, o usa `bash homeinfra-collector.sh` en la terminal.

### Live USB / WinPE

En un entorno WinPE, el script requiere que la imagen incluya PowerShell y WMI (componentes opcionales `WinPE-WMI`, `WinPE-NetFX`, `WinPE-Scripting` y `WinPE-PowerShell`). Distribuciones como Hiren's BootCD PE ya los incluyen. El registro marca `environment.isWinPE` cuando se ejecuta en WinPE.

## Datos recolectados

- **Sistema:** marca, modelo, SKU, número de serie, UUID, tipo (Laptop o Desktop), BIOS.
- **Placa base:** fabricante, modelo, número de serie.
- **CPU:** modelo, núcleos, hilos, frecuencia.
- **RAM:** total, ranuras usadas y disponibles, y por módulo: ranura, capacidad, tipo (DDR4, DDR5…), formato (SO-DIMM, DIMM), velocidad, fabricante, número de parte y número de serie.
- **Almacenamiento:** modelo, número de serie, capacidad, tipo (SSD o HDD), bus (NVMe, SATA, USB), firmware y estado.
- **GPU:** modelo, fabricante, versión de driver.
- **Red:** adaptadores físicos y su dirección MAC.
- **Batería:** modelo, fabricante, número de serie, capacidad de diseño y actual, porcentaje de salud.
- **Monitores:** fabricante, modelo, número de serie, año.

Los datos que no se pueden leer en un sistema quedan vacíos en el registro (por ejemplo, los números de serie de RAM en macOS, o la versión de driver de GPU en Linux). El campo `environment.platform` indica si el registro viene de `linux` o `macos`.

No recolecta contraseñas, claves de producto ni archivos personales.

## Integración

- **En la app:** botón **Collector** (o Configuración & Respaldos) → **Importar registros del Collector**. Se pueden seleccionar varios archivos a la vez, por ejemplo todos los de un pendrive. Si ya existe un equipo con el mismo número de serie, la app ofrece actualizarlo; si no, crea un equipo nuevo. Las piezas reemplazables (RAM, almacenamiento, red, batería) quedan registradas por separado en el campo `components` del equipo, según la visión ITIL de `contexto.md`.
- **Con Claude:** copia los archivos de `Registros/` a la carpeta `Collector/Registros` del proyecto y pide a Claude que integre esos equipos en `equipos.json`.
