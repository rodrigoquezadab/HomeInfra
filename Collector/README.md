# HomeInfra Collector

Producto aislado dentro de HomeInfra. Script que se ejecuta en Windows (incluido un pendrive o live USB con WinPE) y recolecta los datos del equipo y de sus componentes, para importarlos en la app HomeInfra o usarlos con Claude.

## Contenido

| Archivo | Uso |
|---------|-----|
| `Ejecutar-Collector.bat` | Lanzador para doble clic. Ejecuta el script sin cambiar la política de ejecución del sistema. |
| `HomeInfra-Collector.ps1` | Script de recolección (PowerShell 5.1 o superior). |
| `Registros/` | Carpeta donde se guardan los registros generados. |

## Uso

1. Copia la carpeta `Collector` completa a un pendrive.
2. En el equipo a registrar, abre la carpeta y haz doble clic en `Ejecutar-Collector.bat`.
3. El script muestra un resumen en pantalla y guarda dos archivos en `Registros/`:
   - `<Marca>_<Modelo>_<Serie>_<fecha>.json`: registro completo para importar.
   - `<Marca>_<Modelo>_<Serie>_<fecha>.txt`: resumen legible.

Si la carpeta es de solo lectura (por ejemplo, un CD), los registros se guardan en `%TEMP%\HomeInfra-Registros`. También se puede indicar otra carpeta:

```bat
Ejecutar-Collector.bat -OutputDir D:\Registros
```

No necesita permisos de administrador ni conexión a internet, y no modifica el equipo.

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

No recolecta contraseñas, claves de producto ni archivos personales.

## Integración

- **En la app:** Configuración & Respaldos → **Importar registro del Collector**. Si ya existe un equipo con el mismo número de serie, la app ofrece actualizarlo; si no, crea un equipo nuevo. Las piezas reemplazables (RAM, almacenamiento, red, batería) quedan registradas por separado en el campo `components` del equipo, según la visión ITIL de `contexto.md`.
- **Con Claude:** copia los archivos de `Registros/` a la carpeta `Collector/Registros` del proyecto y pide a Claude que integre esos equipos en `equipos.json`.
