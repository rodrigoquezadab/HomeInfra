# Contexto del Proyecto: HomeInfra - Inventario de Equipos Personales

## 📌 Descripción General
Este archivo documenta el registro y contexto de los equipos tecnológicos personales de **HomeInfra**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows (Usuario y Contraseña)**, **observaciones técnicas e historial**, y enlaces directos para la descarga de controladores (drivers) oficiales.

La base de datos principal estructurada reside en el archivo [`equipos.json`](equipos.json) y se administra interactivamente a través de la aplicación web local `HomeInfra` (`index.html`, `style.css`, `app.js`).

*Última actualización sincronizada:* `2026-11-02` | *Equipos:* **10** | *Piezas:* **56**

---

## ⚠️ Directiva de Desarrollo y Alcance (Regla Estricta)
> **REGLA FUNDAMENTAL:**
> Evitar estrictamente cambiar, crear o implementar funcionalidades, textos o componentes que no vayan en directa y exclusiva relación con lo que el usuario solicita puntualmente.
> - No asumir requerimientos no pedidos.
> - No agregar elementos estéticos ni funcionales que no hayan sido solicitados expresamente.
> - No alterar partes del sistema ni comportamientos fuera del alcance directo de la petición actual.

---

## 🧩 Visión: Gestión de Infraestructura basada en ITIL (Planificado)

> **Estado:** Implementado. Cada pieza reemplazable (CPU, RAM, placa base, GPU, discos, tarjetas, cargadores) es un registro propio en `equipos.json` con `kind: "pieza"`, un estado (Instalada, En stock, En reparación, Retirada, Dada de baja), el equipo donde está instalada (`installedIn`) y su historial de movimientos (`history`). Lo integrado (por ejemplo, el video o la red de una placa base, o los gráficos de un procesador) vive dentro de su pieza anfitriona (`integrated`) y no se gestiona por separado. La app permite instalar, mover y retirar piezas desde su ficha.

HomeInfra evolucionará de un inventario de equipos a un sistema de gestión de infraestructura alineado con las prácticas de **ITIL** (Gestión de Activos y de la Configuración). Además de equipos completos, registrará **partes de computadores** (RAM, HDD/SSD, fuentes, tarjetas), **equipos de red** (routers, switches, puntos de acceso), **módulos** y otros elementos de infraestructura.

### Elementos de Configuración (CI)
- Cada elemento registrado (equipo, pieza, módulo o equipo de red) es un **Elemento de Configuración (CI)** con identidad propia: tipo, marca, modelo, número de serie, estado y fotos.
- Los CI forman una **base de datos de configuración (CMDB)** que refleja qué existe y cómo se relaciona.

### Equipos compuestos y piezas
- Un equipo que contiene piezas (por ejemplo, un notebook) es un **CI padre**, y sus piezas son **CI hijos** relacionados con él.
- Se distinguen dos clases de piezas:
  - **Componentes integrados:** no reemplazables, forman parte fija del equipo (por ejemplo, CPU soldada, GPU integrada o RAM soldada a la placa). Se registran como parte del equipo.
  - **Piezas reemplazables:** se gestionan por separado (por ejemplo, módulos de RAM SO-DIMM, HDD/SSD, tarjeta Wi-Fi, batería). Pueden instalarse, retirarse o moverse entre equipos.
- Una pieza reemplazable conserva su identidad aunque cambie de equipo o quede guardada sin instalar.

### Ciclo de vida de las piezas
- Estados previstos: **En stock**, **Instalada**, **En reparación**, **Retirada** y **Dada de baja**.
- Cada pieza registra en qué equipo está instalada actualmente, si corresponde.

### Gestión de Cambios
- Cada intervención sobre un equipo (por ejemplo, cambiar el HDD por un SSD o ampliar la RAM) se registra como un **cambio**: fecha, motivo, pieza retirada, pieza instalada y observaciones.
- El historial de cambios permite saber la configuración actual y pasada de cada equipo.

### Ejemplo
**MSI Modern 14 B5M-011CL** (CI padre):
- Integrados: CPU AMD Ryzen 5 5500U, GPU AMD Radeon Graphics.
- Reemplazables (gestionados por separado): unidad de almacenamiento, tarjeta Wi-Fi Intel AX200 y módulos de RAM, si no van soldados a la placa.
- Si se reemplaza la unidad de almacenamiento, la unidad anterior pasa a **En stock** o **Dada de baja**, la nueva queda **Instalada** en el notebook y el cambio queda registrado en su historial.

---

## 💻 Resumen de Equipos Registrados

| # | Tipo | Marca | Modelo | Fabricación / Lanzamiento | CPU | RAM | GPU | Usuario Windows | Serie / Activo | Enlace a Drivers / Soporte |
|---|------|-------|--------|---------------------------|-----|-----|-----|-----------------|----------------|----------------------------|
| 1 | Impresora | Brother | DCP-1602 | 2015 | N/A | N/A | N/A | N/A | N/A | [Soporte Oficial Brother DCP-1602](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE) |
| 2 | Laptop | MSI | Modern 14 B5M-011CL | 2021-06 | AMD Ryzen 5 5500U [2021] | 8 GB | AMD Radeon Graphics (Integrada) | N/A | K2106N0089559 | [Soporte Oficial MSI Modern 14 B5M-011CL](https://www.msi.com/Business-Productivity/Modern-14-B5SX/support) |
| 3 | Laptop | Acer | Aspire E3-112-C6ME | 2014-08-23 | N/A | N/A | N/A | N/A | NXMRLAL004434177F97600 | [Soporte Oficial Acer Aspire E3-112-C6ME](https://www.acer.com/latam-es/support/product-support/E3-112) |
| 4 | Desktop | PC armado | Core i5-12400F · MSI PRO H610M-G DDR4 | 2022 (lanzamiento de la plataforma Intel H610) | 12th Gen Intel(R) Core(TM) i5-12400F [2022] | 16 GB DDR4 | NVIDIA GeForce GTX 1660 SUPER (Dedicada) | N/A | 07D4612_M21D142444 | [Soporte Oficial PC armado Core i5-12400F · MSI PRO H610M-G DDR4](https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/support) |
| 5 | Desktop | PC armado | Core 2 Quad Q6700 · ASUS P5G41T-M LX | 2008 (lanzamiento del chipset Intel G41) | Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz [2007] | 8 GB DDR3 | Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) (Integrada) | N/A | 107933150000113 | [Soporte Oficial PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX](https://www.asus.com/supportonly/p5g41t-m%20lx/helpdesk_download/) |
| 6 | Desktop | PC armado | Core 2 Duo E6750 · ASUS P5Q PRO TURBO | 2008 (lanzamiento del chipset Intel P45) | Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz [2007] | 4 GB DDR2 | NVIDIA GeForce 210 (Dedicada) | N/A | MS1C93BC3400692 | [Soporte Oficial PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO](https://www.asus.com/supportonly/p5q%20pro%20turbo/helpdesk_download/) |
| 7 | Desktop | PC armado | Core i7-2600K · Gigabyte Z77-HD3 | 2012 (lanzamiento del chipset Intel Z77) | Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz [2011] | 16 GB DDR3 | Intel(R) HD Graphics 3000 (Integrada) | N/A | N/A | [Soporte Oficial PC armado Core i7-2600K · Gigabyte Z77-HD3](https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/support) |
| 8 | Monitor | LG | TV (usado como monitor) | 2010 | N/A | N/A | N/A | N/A | N/A | [Soporte Oficial LG TV (usado como monitor)](https://www.google.com/search?q=LG%20TV%20monitor%20soporte%20oficial) |
| 9 | Periférico | Sony | Pendrive USB 4 GB (HomeInfra Collector) | N/A | N/A | N/A | N/A | N/A | 7B2211109146005852 | [Soporte Oficial Sony Pendrive USB 4 GB (HomeInfra Collector)](https://www.google.com/search?q=Sony%20USB%20flash%20drive%20soporte) |
| 10 | Desktop | PC armado | MSI A68HM-E33 V2 (CPU AMD por identificar) | 2014 (lanzamiento del chipset AMD A68H) | N/A | N/A | N/A | N/A | G716320033 33004 | [Soporte Oficial PC armado MSI A68HM-E33 V2 (CPU AMD por identificar)](https://www.msi.com/Motherboard/A68HM-E33-V2/support) |

---

## 📋 Fichas Técnicas Detalladas de Equipos

### 1. Brother DCP-1602
![Brother DCP-1602](img/brother_dcp1602_comercial.jpg)

- **Tipo:** Impresora
- **Marca:** Brother
- **Modelo:** DCP-1602
- **Número de Serie / Activo:** No registrado
- **Fecha de Fabricación / Lanzamiento:** 2015
- **Usuario(s) Asignado(s):** Rodrigo
- **Asignación / Ubicación:** Hogar
- **Enlace de Drivers:** [Soporte Oficial Brother DCP-1602](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE)
- **Notas:** Multifuncional láser monocromática (impresora, copiadora y escáner de cama plana). Conectividad USB 2.0 de alta velocidad. Velocidad de impresión hasta 20 ppm. Resolución de hasta 2400 x 600 dpi.
- **Control de Consumibles y Mantenimiento:**
  - **Tóner (Brother TN-1060):**
    - *Último aviso de fin de tóner:* Sin registro
    - *Último reemplazo de tóner:* Sin registro
  - **Tambor / Drum (Brother DR-1060):**
    - *Último aviso de fin de tambor:* Sin registro
    - *Último reemplazo de tambor:* Sin registro
- **Observaciones:** Equipo multifuncional personal de Rodrigo. Utiliza cartucho de tóner Brother TN-1060 (~1.000 páginas) y unidad de tambor Brother DR-1060 (~10.000 páginas).

Archivos Locales Guardados (Carpeta Devices):
• [Instalador Paquete Completo de Controladores y Software (Y14G_C1_U-inst-B1.EXE)](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE) (279.5 MB)
• [Instalador Brother iPrint&Scan (iPrintScan-Setup-17_0_20_2.exe)](Devices/Brother%20DCP-1602/iPrintScan-Setup-17_0_20_2.exe) (370.4 MB)

Enlaces Oficiales Web (Respaldo en Línea):
• [Descargar Paquete Completo Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=mx&lang=es&prod=dcp1602_us&os=10068&dlid=dlf106152_000&flang=27&type3=11)
• [Descargar Brother iPrint&Scan Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=us_ot&lang=en&prod=dcpt420w_all&os=10068&dlid=dlf106359_000&flang=4&type3=10272)
- **Fotografías:**
  - Imagen comercial (Icecat): [`img/brother_dcp1602_comercial.jpg`](img/brother_dcp1602_comercial.jpg)
  - Imagen de referencia anterior (ilustración): [`img/brother_dcp1602.jpg`](img/brother_dcp1602.jpg)

### 2. MSI Modern 14 B5M-011CL
![MSI Modern 14 B5M-011CL](img/msi_modern14_comercial.jpg)

- **Tipo:** Laptop
- **Marca:** MSI
- **Modelo:** Modern 14 B5M-011CL
- **Número de Serie / Activo:** K2106N0089559
- **Fecha de Fabricación / Lanzamiento:** 2021-06
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** AMD Ryzen 5 5500U
    - *Núcleos e Hilos:* 6 núcleos / 12 hilos
    - *Frecuencia:* 2.1 - 4.0 GHz
    - *Año de salida:* 2021
    - *Características:* Deducido del SKU (GGAR555U)
    - *Benchmark PassMark:* multinúcleo 12.574 · mononúcleo 2.385 ([fuente](https://www.cpubenchmark.net/cpu.php?id=4141), 2026-11-01)
  - **Memoria RAM:** 8 GB 
    - *Configuración:* Deducido del SKU (U8G)
  - **Tarjeta Gráfica (GPU):** AMD Radeon Graphics
    - *Tipo:* **Integrada**
    - *Características:* Integrada en el Ryzen 5 5500U
- **Enlace de Drivers:** [Soporte Oficial MSI Modern 14 B5M-011CL](https://www.msi.com/Business-Productivity/Modern-14-B5SX/support)
- **Notas:** Notebook MSI Modern 14 (Model No. MS-14DL). Wi-Fi Intel Wi-Fi 6 AX200 (AX200NGW). Alimentación DC 19V ⎓ 3.42A.
- **Observaciones:** Datos de la etiqueta inferior:
• SKU: Modern 14 B5M-011CL-GGAR555U8GXXDX10S
• S/N: K2106N0089559
• MFG: 2021/06
• CHK: 264
• Model No.: MS-14DL
• DC Rating: 19V ⎓ 3.42A
• Wi-Fi: Intel Wi-Fi 6 AX200 (Model AX200NGW)

CPU, RAM y GPU deducidos del SKU (R555U = AMD Ryzen 5 5500U, 8G = 8 GB RAM); pendiente confirmar en el equipo. Almacenamiento no registrado.

La etiqueta del número de serie está desgastada (ver fotos 2026); la foto de 2023 conserva la lectura completa.
- **Piezas instaladas:**
  - *Cargador:* Delta (MSI) ADP-65GD D 65 W (19V ⎓ 3.42A) · S/N 6KJW131009B · pieza `pz-cargador-msi-delta-adp-65gd`
- **Fotografías:**
  - Imagen comercial (Icecat, Modern 14 B5M): [`img/msi_modern14_comercial.jpg`](img/msi_modern14_comercial.jpg)
  - Etiqueta SKU / S/N (2023): [`img/msi_modern14_etiqueta_2023.jpg`](img/msi_modern14_etiqueta_2023.jpg)
  - Etiqueta SKU / S/N (2026, desgastada): [`img/msi_modern14_etiqueta_2026.jpg`](img/msi_modern14_etiqueta_2026.jpg)
  - MFG 2021/06 · CHK 264: [`img/msi_modern14_fabricacion.jpg`](img/msi_modern14_fabricacion.jpg)
  - Model No. MS-14DL: [`img/msi_modern14_modelo_ms14dl.jpg`](img/msi_modern14_modelo_ms14dl.jpg)
  - DC Rating 19V 3.42A: [`img/msi_modern14_alimentacion.jpg`](img/msi_modern14_alimentacion.jpg)
  - Wi-Fi Intel AX200: [`img/msi_modern14_wifi_ax200.jpg`](img/msi_modern14_wifi_ax200.jpg)

### 3. Acer Aspire E3-112-C6ME
![Acer Aspire E3-112-C6ME](img/acer_e3-112_comercial.jpg)

- **Tipo:** Laptop
- **Marca:** Acer
- **Modelo:** Aspire E3-112-C6ME
- **Número de Serie / Activo:** NXMRLAL004434177F97600
- **Fecha de Fabricación / Lanzamiento:** 2014-08-23
- **Asignación / Ubicación:** Hogar
- **Enlace de Drivers:** [Soporte Oficial Acer Aspire E3-112-C6ME](https://www.acer.com/latam-es/support/product-support/E3-112)
- **Notas:** Notebook Acer Aspire E3-112 series (RMN ZHK). Wi-Fi + Bluetooth combo QCWB335. Alimentación DC 19V ⎓ 2.1A.
- **Observaciones:** Datos de la etiqueta inferior:
• Modelo: E3-112-C6ME (E3-112 series)
• S/N: NXMRLAL004434177F97600
• SNID: 43409624976
• MFG Date: 2014/08/23
• RMN: ZHK
• DC Rating: 19V ⎓ 2.1A
• WLAN + Bluetooth: QCWB335 (FCC ID PPD-QCWB335)

Cargador asignado: Lite-On PA-1650-02 (19V ⎓ 3.42A, 65W), S/N AP06503016824OB7E6P606. Registrado como equipo aparte (dev-acer-e3-112-cargador).

CPU, RAM y almacenamiento no figuran en las etiquetas; pendiente registrarlos con el HomeInfra Collector.
- **Piezas instaladas:**
  - *Red:* Qualcomm Atheros WLAN + Bluetooth combo QCWB335 (FCC ID PPD-QCWB335) · 2012 · pieza `pz-acer-e3-112-nic-1`
  - *Cargador:* Lite-On PA-1650-02 (Adaptador AC 65W) 65 W (19V ⎓ 3.42A) · S/N AP06503016824OB7E6P606 · pieza `dev-acer-e3-112-cargador`
- **Fotografías:**
  - Imagen comercial (Icecat, Aspire E3-112): [`img/acer_e3-112_comercial.jpg`](img/acer_e3-112_comercial.jpg)
  - Etiqueta modelo / S/N / MFG: [`img/acer_e3-112_etiqueta_serie.jpg`](img/acer_e3-112_etiqueta_serie.jpg)
  - Etiqueta WLAN + Bluetooth QCWB335: [`img/acer_e3-112_etiqueta_wifi_qcwb335.jpg`](img/acer_e3-112_etiqueta_wifi_qcwb335.jpg)
  - Cargador: etiqueta Lite-On PA-1650-02: [`img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg`](img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg)
  - Cargador: vista general: [`img/acer_e3-112_cargador_vista_general.jpg`](img/acer_e3-112_cargador_vista_general.jpg)

### 4. PC armado Core i5-12400F · MSI PRO H610M-G DDR4
![PC armado Core i5-12400F · MSI PRO H610M-G DDR4](img/intel_i5-12400f_caja.jpg)

- **Tipo:** Desktop
- **Marca:** PC armado
- **Modelo:** Core i5-12400F · MSI PRO H610M-G DDR4
- **Número de Serie / Activo:** 07D4612_M21D142444
- **Fecha de Fabricación / Lanzamiento:** 2022 (lanzamiento de la plataforma Intel H610)
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** 12th Gen Intel(R) Core(TM) i5-12400F
    - *Núcleos e Hilos:* 6 núcleos / 12 hilos
    - *Frecuencia:* 2.5 GHz
    - *Año de salida:* 2022
    - *Benchmark PassMark:* multinúcleo 19.524 · mononúcleo 3.483 ([fuente](https://www.cpubenchmark.net/cpu.php?id=4681), 2026-11-01)
  - **Memoria RAM:** 16 GB DDR4
    - *Frecuencia:* 2667 MT/s
    - *Configuración:* 2 de 2 ranuras usadas
  - **Tarjeta Gráfica (GPU):** NVIDIA GeForce GTX 1660 SUPER
    - *Tipo:* **Dedicada**
  - **Almacenamiento:** SSD NVMe 466 GB + HDD SATA 75 GB
- **Enlace de Drivers:** [Soporte Oficial PC armado Core i5-12400F · MSI PRO H610M-G DDR4](https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/support)
- **Notas:** PC de escritorio armado. Placa base MSI PRO H610M-G DDR4 (MS-7D46), Intel Core i5-12400F, 16 GB DDR4 Corsair Vengeance LPX (2 × 8 GB), NVIDIA GeForce GTX 1660 SUPER, SSD WD Blue SN570 500 GB y HDD WD 80 GB. Nombre en red: DESKTOP-QIPN19H. Microsoft Windows 11 Pro (10.0.26200), instalado el 2026-10-01.
- **Observaciones:** El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.
La RAM Corsair CMK8GX4M1Z3600C18 es de 3600 MT/s pero funciona a 2667 MT/s: el perfil XMP no está activado en la BIOS. El chipset H610 y el i5-12400F admiten DDR4 hasta 3200 MT/s.
El HDD WDC WD800BD (80 GB) es una unidad antigua; Windows no informa su tipo (se registra como HDD por el modelo).

Registro HomeInfra Collector (2026-10-31 19:21:12):
• BIOS: American Megatrends International, LLC. 1.H0 (2024-03-25)
• CPU: 12th Gen Intel(R) Core(TM) i5-12400F (6 núcleos / 12 hilos socket U3E1)
• RAM: Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller0-DIMMA1])
• RAM: Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller1-DIMMB1])
• Almacenamiento: WD Blue SN570 500GB 466 GB (SSD NVMe) · S/N E823_8FA6_BF53_0001_001B_448B_4569_B02C.
• Almacenamiento: WDC WD800BD-22MRA1 75 GB (SATA) · S/N WD-WMAM9AMY4260
• GPU: NVIDIA GeForce GTX 1660 SUPER 4 GB (NVIDIA)
• Red: Intel(R) Ethernet Connection (17) I219-V (MAC 04:7C:16:05:0E:B3)
• Placa base: Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46) (1.0) · S/N 07D4612_M21D142444
- **Piezas instaladas:**
  - *CPU:* 12th Gen Intel(R) Core(TM) i5-12400F (6 núcleos / 12 hilos socket U3E1) · 2022 · PassMark multi 19.524 / mono 3.483 · pieza `pz-pc-i5-12400f-h610m-cpu-1`
  - *RAM:* Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller0-DIMMA1] · módulo de 3600 MT/s funcionando a 2667 MT/s) · pieza `pz-pc-i5-12400f-h610m-ram-1`
  - *RAM:* Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller1-DIMMB1] · módulo de 3600 MT/s funcionando a 2667 MT/s) · pieza `pz-pc-i5-12400f-h610m-ram-2`
  - *SSD:* Western Digital WD Blue SN570 500GB 466 GB (SSD NVMe) · S/N E823_8FA6_BF53_0001_001B_448B_4569_B02C. · 2021 · pieza `pz-pc-i5-12400f-h610m-ssd-1`
  - *HDD:* Western Digital WDC WD800BD-22MRA1 75 GB (HDD SATA) · S/N WD-WMAM9AMY4260 · pieza `pz-pc-i5-12400f-h610m-hdd-1`
  - *GPU:* NVIDIA GeForce GTX 1660 SUPER 4 GB (NVIDIA) · 2019 · pieza `pz-pc-i5-12400f-h610m-gpu-1`
  - *Placa base:* MSI Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46) (1.0) · S/N 07D4612_M21D142444 · 2022 · pieza `pz-pc-i5-12400f-h610m-placabase-1`
    - Integra: Intel(R) Ethernet Connection (17) I219-V
    - Formato: Micro-ATX
    - Socket / chipset: LGA 1700 · Intel H610 (procesadores Intel Core 12.ª, 13.ª y 14.ª gen.)
    - Memoria: 2 ranuras DDR4 · doble canal · hasta 64 GB · 2133 / 2666 / 2933 / 3200 MHz
    - Expansión: 1 × PCIe 4.0 x16 (desde la CPU) · 1 × PCIe 3.0 x1
    - Almacenamiento: 4 × SATA 6 Gb/s · 1 × M.2 Key M PCIe 3.0 x4 (2242 / 2260 / 2280; un SSD M.2 SATA desactiva SATA7)
    - USB: 4 × USB 3.2 Gen 1 5 Gb/s (2 traseros, 2 por conector interno) · 6 × USB 2.0 (4 traseros, 2 internos)
    - Red: Intel I219-V · 1 Gb/s
    - Audio: Realtek ALC892 / ALC897 · 7.1 canales HD
    - Salidas de video: HDMI · VGA · DisplayPort (no funcionan con el i5-12400F, que no tiene gráficos integrados)
    - Panel trasero: PS/2 teclado/ratón · HDMI · VGA · DisplayPort · 2 × USB 3.2 Gen 1 · 4 × USB 2.0 · LAN · audio
    - Fuente: [especificaciones oficiales](https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/Specification) (2026-11-02)
- **Fotografías:**
  - Caja del Intel Core i5-12400F: [`img/intel_i5-12400f_caja.jpg`](img/intel_i5-12400f_caja.jpg)

### 5. PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX
- **Tipo:** Desktop
- **Marca:** PC armado
- **Modelo:** Core 2 Quad Q6700 · ASUS P5G41T-M LX
- **Número de Serie / Activo:** 107933150000113
- **Fecha de Fabricación / Lanzamiento:** 2008 (lanzamiento del chipset Intel G41)
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz
    - *Núcleos e Hilos:* 4 núcleos / 4 hilos
    - *Frecuencia:* 2.7 GHz
    - *Año de salida:* 2007
    - *Características:* Windows informó 2 núcleos / 2 hilos
    - *Benchmark PassMark:* multinúcleo 2.092 · mononúcleo 1.073 ([fuente](https://www.cpubenchmark.net/cpu.php?id=1039), 2026-11-01)
  - **Memoria RAM:** 8 GB DDR3
    - *Configuración:* 2 de 2 ranuras usadas · tipo DDR3 deducido del modelo de placa
  - **Tarjeta Gráfica (GPU):** Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1)
    - *Tipo:* **Integrada**
  - **Almacenamiento:** Sin disco propio (usa el SSD de Windows compartido)
- **Enlace de Drivers:** [Soporte Oficial PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX](https://www.asus.com/supportonly/p5g41t-m%20lx/helpdesk_download/)
- **Notas:** PC de escritorio armado. Placa base ASUS P5G41T-M LX (chipset Intel G41), Intel Core 2 Quad Q6700, 8 GB de RAM (2 × 4 GB), gráficos integrados Intel G41 y red Qualcomm Atheros AR8131.
- **Observaciones:** El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.
Windows informó 2 núcleos / 2 hilos; el modelo tiene 4 núcleos / 4 hilos según la especificación de Intel. Probablemente el Windows del SSD compartido tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas).
Registrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.

Registro HomeInfra Collector (2026-11-01 21:02:05):
• BIOS: American Megatrends Inc. 1101 (2012-06-07)
• CPU: Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz (2 núcleos / 2 hilos socket LGA775)
• RAM: 4 GB (DIMM [DIMM A1])
• RAM: 4 GB (DIMM [DIMM B1])
• GPU: Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) (Intel Corporation)
• Red: Qualcomm Atheros AR8131 PCI-E Gigabit Ethernet Controller (NDIS 6.30) (MAC BC:AE:C5:28:68:F4)
• Placa base: ASUSTeK Computer INC. P5G41T-M LX (Rev X.0x) · S/N 107933150000113
- **Piezas instaladas:**
  - *CPU:* Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz (4 núcleos / 4 hilos socket LGA775) · 2007 · PassMark multi 2.092 / mono 1.073 · pieza `pz-pc-q6700-p5g41t-m-lx-cpu-1`
  - *RAM:* Módulo RAM DDR3 4 GB (fabricante sin informar) 4 GB (DDR3 DIMM [DIMM A1] · tipo deducido del modelo de placa) · pieza `pz-pc-q6700-p5g41t-m-lx-ram-1`
  - *RAM:* Módulo RAM DDR3 4 GB (fabricante sin informar) 4 GB (DDR3 DIMM [DIMM B1] · tipo deducido del modelo de placa) · pieza `pz-pc-q6700-p5g41t-m-lx-ram-2`
  - *Placa base:* ASUSTeK Computer INC. P5G41T-M LX (Rev X.0x) · S/N 107933150000113 · 2008 · pieza `pz-pc-q6700-p5g41t-m-lx-placabase-1`
    - Integra: Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) · Qualcomm Atheros AR8131 PCI-E Gigabit Ethernet Controller (NDIS 6.30)
    - Formato: Micro-ATX
    - Socket / chipset: LGA 775 · Intel G41 / ICH7
    - Memoria: 2 ranuras DDR3 · doble canal · hasta 8 GB · 800 / 1066 / 1333 (OC) MHz · no ECC, sin búfer
    - Expansión: 1 × PCIe x16 · 1 × PCIe x1 · 2 × PCI
    - Almacenamiento: 4 × SATA 3 Gb/s · 1 × IDE UltraDMA 100/66/33
    - USB: 8 × USB 2.0 (4 traseros, 4 internos)
    - Red: Qualcomm Atheros Gigabit (Windows informó AR8131)
    - Audio: Realtek ALC887 · 8 canales · S/PDIF Out
    - Salidas de video: VGA (D-Sub) · gráficos integrados Intel G41
    - Fuente: [especificaciones oficiales](https://origin-www.asus.com/Motherboards/P5G41TM_LX/specifications/) (2026-11-02)

### 6. PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO
- **Tipo:** Desktop
- **Marca:** PC armado
- **Modelo:** Core 2 Duo E6750 · ASUS P5Q PRO TURBO
- **Número de Serie / Activo:** MS1C93BC3400692
- **Fecha de Fabricación / Lanzamiento:** 2008 (lanzamiento del chipset Intel P45)
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz
    - *Núcleos e Hilos:* 2 núcleos / 2 hilos
    - *Frecuencia:* 2.7 GHz
    - *Año de salida:* 2007
    - *Benchmark PassMark:* multinúcleo 1.031 · mononúcleo 1.030 ([fuente](https://www.cpubenchmark.net/cpu.php?id=942), 2026-11-01)
  - **Memoria RAM:** 4 GB DDR2
    - *Frecuencia:* 800 MT/s
    - *Configuración:* 2 de 4 ranuras usadas · tipo DDR2 deducido del modelo de placa
  - **Tarjeta Gráfica (GPU):** NVIDIA GeForce 210
    - *Tipo:* **Dedicada**
  - **Almacenamiento:** Sin disco propio (usa el SSD de Windows compartido)
- **Enlace de Drivers:** [Soporte Oficial PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO](https://www.asus.com/supportonly/p5q%20pro%20turbo/helpdesk_download/)
- **Notas:** PC de escritorio armado. Placa base ASUS P5Q PRO TURBO (chipset Intel P45), Intel Core 2 Duo E6750, 4 GB de RAM DDR2-800 (2 × 2 GB), NVIDIA GeForce 210 y red Atheros AR8121/AR8113/AR8114.
- **Observaciones:** El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.

Registrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.

Registro HomeInfra Collector (2026-11-02 00:04:39):
• BIOS: American Megatrends Inc. 0701 (2012-10-07)
• CPU: Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz (2 núcleos / 2 hilos socket LGA 775)
• RAM: 2 GB (DIMM 800 MT/s [DIMM0])
• RAM: 2 GB (DIMM 800 MT/s [DIMM2])
• GPU: NVIDIA GeForce 210 1 GB (NVIDIA)
• Red: Atheros AR8121/AR8113/AR8114 PCI-E Ethernet Controller (MAC 00:24:8C:6B:E7:F6)
• Placa base: ASUSTeK Computer INC. P5Q PRO TURBO (Rev 1.xx) · S/N MS1C93BC3400692
- **Piezas instaladas:**
  - *CPU:* Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz (2 núcleos / 2 hilos socket LGA 775) · 2007 · PassMark multi 1.031 / mono 1.030 · pieza `pz-pc-e6750-p5q-pro-turbo-cpu-1`
  - *RAM:* Módulo RAM DDR2 2 GB (fabricante sin informar) 2 GB (DDR2 DIMM 800 MT/s [DIMM0] · tipo deducido del modelo de placa) · pieza `pz-pc-e6750-p5q-pro-turbo-ram-1`
  - *RAM:* Módulo RAM DDR2 2 GB (fabricante sin informar) 2 GB (DDR2 DIMM 800 MT/s [DIMM2] · tipo deducido del modelo de placa) · pieza `pz-pc-e6750-p5q-pro-turbo-ram-2`
  - *GPU:* MSI N210-MD1G (NVIDIA GeForce 210) 1 GB (1 GB GDDR2 · PCIe 2.0 · VGA, DVI, HDMI) · S/N 602-V229-43SB1210038228 · 2009 · pieza `pz-pc-e6750-p5q-pro-turbo-gpu-1`
  - *Placa base:* ASUSTeK Computer INC. P5Q PRO TURBO (Rev 1.xx) · S/N MS1C93BC3400692 · 2008 · pieza `pz-pc-e6750-p5q-pro-turbo-placabase-1`
    - Integra: Atheros AR8121/AR8113/AR8114 PCI-E Ethernet Controller
    - Formato: ATX
    - Socket / chipset: LGA 775 · Intel P45 / ICH10R
    - Memoria: 4 ranuras DDR2 · doble canal · hasta 16 GB · 667 / 800 / 1066 / 1200 / 1300 MHz · no ECC, sin búfer
    - Expansión: 2 × PCIe 2.0 x16 (CrossFireX a x8) · 3 × PCIe x1 · 2 × PCI
    - Almacenamiento: 5 × SATA 3 Gb/s (Intel) · 2 × SATA 3 Gb/s (Silicon Image) · 1 × eSATA y 2 × PATA (JMicron)
    - USB: 12 × USB 2.0 (6 traseros, 6 internos)
    - Red: 1 × RJ45 Gigabit (Windows informó Atheros AR8121/AR8113/AR8114)
    - Audio: VIA VT1708S · 8 canales HD · S/PDIF óptico trasero
    - Salidas de video: Sin gráficos integrados (chipset P45): requiere tarjeta de video
    - Fuente: [especificaciones oficiales](https://origin-www.asus.com/motherboards/p5q_pro_turbo/specifications/) (2026-11-02)

### 7. PC armado Core i7-2600K · Gigabyte Z77-HD3
![PC armado Core i7-2600K · Gigabyte Z77-HD3](img/gigabyte_z77-hd3_gabinete_2022.jpg)

- **Tipo:** Desktop
- **Marca:** PC armado
- **Modelo:** Core i7-2600K · Gigabyte Z77-HD3
- **Número de Serie / Activo:** No registrado
- **Fecha de Fabricación / Lanzamiento:** 2012 (lanzamiento del chipset Intel Z77)
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Procesador (CPU):** Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz
    - *Núcleos e Hilos:* 4 núcleos / 8 hilos
    - *Frecuencia:* 3.4 GHz
    - *Año de salida:* 2011
    - *Características:* Windows informó 1 núcleos / 2 hilos
    - *Benchmark PassMark:* multinúcleo 5.476 · mononúcleo 1.740 ([fuente](https://www.cpubenchmark.net/cpu.php?id=868), 2026-11-01)
  - **Memoria RAM:** 16 GB DDR3
    - *Frecuencia:* 1600 MT/s
    - *Configuración:* 2 de 4 ranuras usadas
  - **Tarjeta Gráfica (GPU):** Intel(R) HD Graphics 3000
    - *Tipo:* **Integrada**
  - **Almacenamiento:** Sin disco propio (usa el SSD de Windows compartido)
- **Enlace de Drivers:** [Soporte Oficial PC armado Core i7-2600K · Gigabyte Z77-HD3](https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/support)
- **Notas:** PC de escritorio armado. Placa base Gigabyte Z77-HD3 (chipset Intel Z77), Intel Core i7-2600K, 16 GB DDR3-1600 Kingston HyperX Fury (2 × 8 GB), gráficos integrados Intel HD Graphics 3000 y red Realtek PCIe GbE.
- **Observaciones:** El equipo no tiene número de serie propio y la placa no informa el suyo; se identifica por la MAC de red 74:D4:35:11:F0:AC y el UUID 03D40274-0435-0511-F006-AC0700080009.
Windows informó 1 núcleos / 2 hilos; el modelo tiene 4 núcleos / 8 hilos según la especificación de Intel. Probablemente el Windows del SSD compartido tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas).
Registrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.

Registro HomeInfra Collector (2026-11-01 17:53:51):
• BIOS: American Megatrends Inc. F3 (2013-09-24)
• CPU: Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz (1 núcleos / 2 hilos)
• RAM: Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelB-DIMM1]) · S/N 19FA6341
• RAM: Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelA-DIMM1]) · S/N 4C33D19F
• GPU: Intel(R) HD Graphics 3000 (Intel Corporation)
• Red: Realtek PCIe GbE Family Controller #2 (MAC 74:D4:35:11:F0:AC)
• Placa base: Gigabyte Technology Co., Ltd. Z77-HD3
- **Piezas instaladas:**
  - *CPU:* Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz (4 núcleos / 8 hilos) · 2011 · PassMark multi 5.476 / mono 1.740 · pieza `pz-pc-i7-2600k-z77-hd3-cpu-1`
    - Integra: Intel(R) HD Graphics 3000
  - *RAM:* Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelB-DIMM1]) · S/N 19FA6341 · pieza `pz-pc-i7-2600k-z77-hd3-ram-1`
  - *RAM:* Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelA-DIMM1]) · S/N 4C33D19F · pieza `pz-pc-i7-2600k-z77-hd3-ram-2`
  - *Placa base:* Gigabyte Technology Co., Ltd. Z77-HD3 · 2012 · pieza `pz-pc-i7-2600k-z77-hd3-placabase-1`
    - Integra: Realtek PCIe GbE Family Controller #2
    - Formato: ATX · 30,5 × 21,5 cm
    - Socket / chipset: LGA 1155 · Intel Z77
    - Memoria: 4 ranuras DDR3 1.5V · doble canal · hasta 32 GB · 1066 / 1333 / 1600 MHz (2800 OC); DDR3-1600 requiere CPU Ivy Bridge (22 nm)
    - Expansión: 1 × PCIe 3.0 x16 · 2 × PCIe x1 · 2 × PCI · AMD CrossFire
    - Almacenamiento: 2 × SATA 6 Gb/s (SATA3 0/1) · 4 × SATA 3 Gb/s (SATA2 2–5) · RAID 0 / 1 / 5 / 10
    - USB: Hasta 4 × USB 3.0 (2 traseros, 2 por conector interno) · hasta 8 × USB 2.0
    - Red: Realtek GbE · 10/100/1000 Mb/s
    - Audio: Realtek ALC887 · 2 / 4 / 5.1 / 7.1 canales · S/PDIF Out
    - Salidas de video: D-Sub (VGA) · DVI-D · HDMI (gráficos integrados del procesador)
    - Otros: DualBIOS
    - Fuente: [especificaciones oficiales](https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/sp) (2026-11-02)
- **Fotografías:**
  - Placa GA-Z77-HD3 en el gabinete, disipador Thermaltake (2022): [`img/gigabyte_z77-hd3_gabinete_2022.jpg`](img/gigabyte_z77-hd3_gabinete_2022.jpg)
  - Placa GA-Z77-HD3 fuera del gabinete (2023): [`img/gigabyte_z77-hd3_placa_2023.jpg`](img/gigabyte_z77-hd3_placa_2023.jpg)

### 8. LG TV (usado como monitor)
- **Tipo:** Monitor
- **Marca:** LG
- **Modelo:** TV (usado como monitor)
- **Número de Serie / Activo:** No registrado
- **Fecha de Fabricación / Lanzamiento:** 2010
- **Asignación / Ubicación:** Hogar
- **Enlace de Drivers:** [Soporte Oficial LG TV (usado como monitor)](https://www.google.com/search?q=LG%20TV%20monitor%20soporte%20oficial)
- **Notas:** Televisor LG usado como monitor compartido entre los PCs de escritorio. Identificado por EDID (fabricante GSM = LG, nombre "LG TV").
- **Observaciones:** Dispositivo general, no forma parte de ningún equipo.

El EDID no entrega un número de serie real (16843009 es un valor de relleno) ni el modelo exacto. Año según EDID: 2010 (2011 al conectarse al PC i5-12400F).

Detectado conectado a:
• Core i5-12400F · MSI PRO H610M-G DDR4 (2026-10-31)
• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)
• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)
• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)

### 9. Sony Pendrive USB 4 GB (HomeInfra Collector)
- **Tipo:** Periférico
- **Marca:** Sony
- **Modelo:** Pendrive USB 4 GB (HomeInfra Collector)
- **Número de Serie / Activo:** 7B2211109146005852
- **Fecha de Fabricación / Lanzamiento:** No registrada
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Almacenamiento:** USB 4 GB
- **Enlace de Drivers:** [Soporte Oficial Sony Pendrive USB 4 GB (HomeInfra Collector)](https://www.google.com/search?q=Sony%20USB%20flash%20drive%20soporte)
- **Notas:** Pendrive USB Sony (Sony Storage Media) de 4 GB (3.8 GB útiles), firmware 0100. Se usa para llevar el HomeInfra Collector y sus registros.
- **Observaciones:** Dispositivo general, no forma parte de ningún equipo.

Detectado en:
• Core i5-12400F · MSI PRO H610M-G DDR4 (2026-10-31)
• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)
• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)
• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)

### 10. PC armado MSI A68HM-E33 V2 (CPU AMD por identificar)
![PC armado MSI A68HM-E33 V2 (CPU AMD por identificar)](img/msi_a68hm-e33_v2_placa.jpg)

- **Tipo:** Desktop
- **Marca:** PC armado
- **Modelo:** MSI A68HM-E33 V2 (CPU AMD por identificar)
- **Número de Serie / Activo:** G716320033 33004
- **Fecha de Fabricación / Lanzamiento:** 2014 (lanzamiento del chipset AMD A68H)
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
- **Enlace de Drivers:** [Soporte Oficial PC armado MSI A68HM-E33 V2 (CPU AMD por identificar)](https://www.msi.com/Motherboard/A68HM-E33-V2/support)
- **Notas:** PC de escritorio armado con placa base MSI A68HM-E33 V2 (MS-7721 VER 9.0, chipset AMD A68H, socket FM2+), RAM Kingston HyperX Fury DDR3 (rojo) y una tarjeta de video dedicada.
- **Observaciones:** Registrado desde una foto (2024-05-11); pendiente ejecutar el HomeInfra Collector para registrar CPU, RAM total, tarjeta de video y almacenamiento.

Datos legibles en la foto:
• Placa: MSI A68HM-E33 V2 · MS-7721 VER 9.0 · etiqueta G716320033 33004 (se usa como número de serie)
• Etiqueta del puerto de red: 4CCC6A5F6621 (probable MAC 4C:CC:6A:5F:66:21)
• RAM: Kingston HyperX Fury HX318C10FR/4 · 4 GB DDR3-1866 · 1.5V · 9905402-471.A00LF · código 1646 (probablemente semana 46 de 2016). Se ve un segundo módulo HyperX Fury rojo cuya etiqueta no es legible.
• Tarjeta de video dedicada instalada; modelo no identificable en la foto.

Año del equipo: lanzamiento del chipset AMD A68H (2014).
- **Piezas instaladas:**
  - *Placa base:* MSI A68HM-E33 V2 (MS-7721) (VER 9.0 · chipset AMD A68H · socket FM2+) · S/N G716320033 33004 · 2014 · pieza `pz-pc-msi-a68hm-e33-v2-placabase-1`
    - Formato: Micro-ATX
    - Socket / chipset: FM2+ · AMD A68H
    - Memoria: 2 ranuras DDR3 · doble canal · hasta 32 GB · 1333 / 1600 / 1866 / 2133 (OC) MHz
    - Expansión: 1 × PCIe 3.0 x16 · 1 × PCIe x1 (2.0 según algunas páginas regionales) · 1 × PCI
    - Almacenamiento: 4 × SATA 6 Gb/s · RAID 0 / 1 / 10
    - USB: 2 × USB 3.0 traseros · 6 × USB 2.0 (2 traseros, 4 internos)
    - Red: Realtek RTL8111G · 10/100/1000 Mb/s
    - Audio: Realtek ALC887 · 3 conectores traseros
    - Salidas de video: VGA (hasta 1920 × 1200 a 60 Hz) · HDMI (gráficos integrados del procesador)
    - Otros: PS/2 teclado y ratón · conector serie interno
    - Fuente: [especificaciones oficiales](https://www.msi.com/Motherboard/a68hm-e33-v2/Specification) (2026-11-02)
  - *RAM:* Kingston HyperX Fury HX318C10FR/4 4 GB (DDR3-1866 CL10 · 1.5V · rojo) · 2016 · pieza `pz-pc-msi-a68hm-e33-v2-ram-1`
  - *RAM:* Kingston HyperX Fury (rojo, etiqueta no legible) (DDR3 · visto en la foto) · pieza `pz-pc-msi-a68hm-e33-v2-ram-2`
  - *GPU:* Tarjeta de video dedicada (por identificar) (Instalada en la ranura PCIe x16) · pieza `pz-pc-msi-a68hm-e33-v2-gpu-1`
- **Fotografías:**
  - Placa MSI A68HM-E33 V2 con RAM HyperX Fury (2024): [`img/msi_a68hm-e33_v2_placa.jpg`](img/msi_a68hm-e33_v2_placa.jpg)

---

## 🧩 Piezas (estado, ubicación e historial)

| Tipo | Pieza | N.º de serie | Estado | Equipo | Año |
|------|-------|--------------|--------|--------|-----|
| Red | Qualcomm Atheros WLAN + Bluetooth combo QCWB335 | N/A | Instalada | Acer Aspire E3-112-C6ME | 2012 |
| Cargador | Lite-On PA-1650-02 (Adaptador AC 65W) 65 W | AP06503016824OB7E6P606 | Instalada | Acer Aspire E3-112-C6ME | 2008 |
| CPU | 12th Gen Intel(R) Core(TM) i5-12400F | N/A | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 | 2022 |
| RAM | Corsair CMK8GX4M1Z3600C18 8 GB | N/A | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 |  |
| RAM | Corsair CMK8GX4M1Z3600C18 8 GB | N/A | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 |  |
| SSD | Western Digital WD Blue SN570 500GB 466 GB | E823_8FA6_BF53_0001_001B_448B_4569_B02C. | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 | 2021 |
| HDD | Western Digital WDC WD800BD-22MRA1 75 GB | WD-WMAM9AMY4260 | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 |  |
| GPU | NVIDIA GeForce GTX 1660 SUPER 4 GB | N/A | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 | 2019 |
| Placa base | MSI Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46) | 07D4612_M21D142444 | Instalada | PC armado Core i5-12400F · MSI PRO H610M-G DDR4 | 2022 |
| CPU | Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz | N/A | Instalada | PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX | 2007 |
| RAM | Módulo RAM DDR3 4 GB (fabricante sin informar) 4 GB | N/A | Instalada | PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX |  |
| RAM | Módulo RAM DDR3 4 GB (fabricante sin informar) 4 GB | N/A | Instalada | PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX |  |
| Placa base | ASUSTeK Computer INC. P5G41T-M LX | 107933150000113 | Instalada | PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX | 2008 |
| CPU | Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz | N/A | Instalada | PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO | 2007 |
| RAM | Módulo RAM DDR2 2 GB (fabricante sin informar) 2 GB | N/A | Instalada | PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO |  |
| RAM | Módulo RAM DDR2 2 GB (fabricante sin informar) 2 GB | N/A | Instalada | PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO |  |
| GPU | MSI N210-MD1G (NVIDIA GeForce 210) 1 GB | 602-V229-43SB1210038228 | Instalada | PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO | 2009 |
| Placa base | ASUSTeK Computer INC. P5Q PRO TURBO | MS1C93BC3400692 | Instalada | PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO | 2008 |
| CPU | Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz | N/A | Instalada | PC armado Core i7-2600K · Gigabyte Z77-HD3 | 2011 |
| RAM | Kingston HX316C10F/8 8 GB | 19FA6341 | Instalada | PC armado Core i7-2600K · Gigabyte Z77-HD3 |  |
| RAM | Kingston HX316C10F/8 8 GB | 4C33D19F | Instalada | PC armado Core i7-2600K · Gigabyte Z77-HD3 |  |
| Placa base | Gigabyte Technology Co., Ltd. Z77-HD3 | N/A | Instalada | PC armado Core i7-2600K · Gigabyte Z77-HD3 | 2012 |
| SSD | Patriot Burst Elite 120GB (SSD de Windows compartido) | PBEIIBB21030118778 | En stock | — |  |
| SSD | Patriot Burst Elite 120GB (segunda unidad) | N/A | En stock | — |  |
| GPU | ZOTAC GeForce 8400 GS GEN2 512MB DDR2 | N103100027911 | En stock | — | 2007 |
| Placa base | MSI A68HM-E33 V2 (MS-7721) | G716320033 33004 | Instalada | PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) | 2014 |
| RAM | Kingston HyperX Fury HX318C10FR/4 4 GB | N/A | Instalada | PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) | 2016 |
| RAM | Kingston HyperX Fury (rojo, etiqueta no legible) | N/A | Instalada | PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) |  |
| GPU | Tarjeta de video dedicada (por identificar) | N/A | Instalada | PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) |  |
| HDD | Western Digital WD Blue 1TB WD10SPZX (marcado 1) | WXN1AA821XCH | En stock | — | 2018 |
| HDD | Western Digital WD Blue 1TB WD10JPVX (marcado 2) | WX31A177YXJU | En stock | — | 2017 |
| HDD | Seagate (Samsung) Spinpoint M8 1TB ST1000LM024 (marcado 3) | S32HJ9HF204858 | En stock | — | 2011 |
| HDD | Toshiba MQ01ACF050 500GB | 54O9C6M8T | En stock | — | 2014 |
| HDD | Western Digital WD Blue 750GB WD7500BPVT | WXD1E72EHP04 | En stock | — | 2012 |
| SSD | Samsung SSD 850 EVO 500GB | S21HNXAGA21889H | En stock | — | 2014 |
| RAID | Inspur Tarjeta RAID/HBA SAS 6Gb/s YZCA-00019-101 (chip LSI) | QTE227E00948A07 | En stock | — |  |
| Cargador | Delta (MSI) ADP-65GD D 65 W | 6KJW131009B | Instalada | MSI Modern 14 B5M-011CL |  |
| RAM | Crucial CT51264BA160BJ 4 GB | N/A | En stock | — | 2015 |
| SSD | Kingston OM8PDP3256B-AI1 256 GB | 50026B7684C27C10 | En stock | — | 2021 |
| SSD | Samsung PM981a MZVLB256HBHQ-000L2 256 GB | S4DXNF1MC57340 | En stock | — | 2019 |
| RAM | Samsung M471B5173DB0-YK0 4 GB | N/A | En stock | — | 2015 |
| HDD | Western Digital WD Blue WD5000LPVT 500 GB | WX51AC352188 | En stock | — | 2014 |
| HDD | Western Digital WD Blue WD5000LPVX 500 GB | WX41E34EVT17 | En stock | — | 2014 |
| HDD | Hitachi Travelstar 5K750 HTS547550A9E384 500 GB | 50G8837C | En stock | — | 2011 |
| HDD | Toshiba (Fujitsu) MJA2500BH G2 500 GB | K90DTA12NDY1 | En stock | — | 2010 |
| HDD | Western Digital WD Caviar Green WD30EZRX 3 TB | WCAWZ2212479 | En stock | — | 2012 |
| HDD | Western Digital WD Caviar Green WD30EZRX 3 TB | WCAWZ2268707 | En stock | — | 2012 |
| HDD | Western Digital WD Caviar Green WD20EARX 2 TB | WMAZA8396409 | En stock | — | 2012 |
| HDD | Western Digital WD Caviar Green WD20EARS (Respaldos) 2 TB | WMAZA3635000 | En stock | — | 2011 |
| HDD | Western Digital WD Caviar Black WD1001FALS (Trabajo 1) 1 TB | WMATV2575104 | En stock | — | 2009 |
| HDD | Western Digital WD Caviar Black WD1001FALS 1 TB | WMATV1245731 | En stock | — | 2009 |
| Fuente | Cooler Master RS-460-PSAR-J3 460 W | N/A | En stock | — |  |
| Fuente | Deepcool DA600 600 W | N/A | En stock | — |  |
| Fuente | Thermaltake TR2-430W (TR2-430NP) 430 W | N/A | En stock | — |  |
| GPU | ASUS GTX650TI-DC2O-1GD5 (GeForce GTX 650 Ti DirectCU II OC) 1 GB | D1C0YZ393584 | En stock | — | 2012 |
| GPU | EVGA e-GeForce 7800 GTX ACS3 (256-P2-N527-AX) 256 MB | 68527003770 | En stock | — | 2005 |

### Historial de movimientos
- **Red WLAN + Bluetooth combo QCWB335** (`pz-acer-e3-112-nic-1`):
  - 2026-10-31 · Instalada · Acer Aspire E3-112-C6ME · Registrada desde las etiquetas del equipo
- **Cargador PA-1650-02 (Adaptador AC 65W)** (`dev-acer-e3-112-cargador`):
  - 2026-10-31 · Instalada · Acer Aspire E3-112-C6ME · Cargador asignado al Acer E3-112
- **CPU 12th Gen Intel(R) Core(TM) i5-12400F** (`pz-pc-i5-12400f-h610m-cpu-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **RAM Corsair CMK8GX4M1Z3600C18** (`pz-pc-i5-12400f-h610m-ram-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **RAM Corsair CMK8GX4M1Z3600C18** (`pz-pc-i5-12400f-h610m-ram-2`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **SSD WD Blue SN570 500GB** (`pz-pc-i5-12400f-h610m-ssd-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **HDD WDC WD800BD-22MRA1** (`pz-pc-i5-12400f-h610m-hdd-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **GPU NVIDIA GeForce GTX 1660 SUPER** (`pz-pc-i5-12400f-h610m-gpu-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **Placa base Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46)** (`pz-pc-i5-12400f-h610m-placabase-1`):
  - 2026-10-31 · Instalada · PC armado Core i5-12400F · MSI PRO H610M-G DDR4 · Detectada por el HomeInfra Collector
- **CPU Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz** (`pz-pc-q6700-p5g41t-m-lx-cpu-1`):
  - 2026-11-01 · Instalada · PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX · Detectada por el HomeInfra Collector
- **RAM Módulo RAM DDR3 4 GB (fabricante sin informar)** (`pz-pc-q6700-p5g41t-m-lx-ram-1`):
  - 2026-11-01 · Instalada · PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX · Detectada por el HomeInfra Collector
- **RAM Módulo RAM DDR3 4 GB (fabricante sin informar)** (`pz-pc-q6700-p5g41t-m-lx-ram-2`):
  - 2026-11-01 · Instalada · PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX · Detectada por el HomeInfra Collector
- **Placa base ASUSTeK Computer INC. P5G41T-M LX** (`pz-pc-q6700-p5g41t-m-lx-placabase-1`):
  - 2026-11-01 · Instalada · PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX · Detectada por el HomeInfra Collector
- **CPU Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz** (`pz-pc-e6750-p5q-pro-turbo-cpu-1`):
  - 2026-11-02 · Instalada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Detectada por el HomeInfra Collector
- **RAM Módulo RAM DDR2 2 GB (fabricante sin informar)** (`pz-pc-e6750-p5q-pro-turbo-ram-1`):
  - 2026-11-02 · Instalada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Detectada por el HomeInfra Collector
- **RAM Módulo RAM DDR2 2 GB (fabricante sin informar)** (`pz-pc-e6750-p5q-pro-turbo-ram-2`):
  - 2026-11-02 · Instalada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Detectada por el HomeInfra Collector
- **GPU N210-MD1G (NVIDIA GeForce 210)** (`pz-pc-e6750-p5q-pro-turbo-gpu-1`):
  - 2026-11-02 · Instalada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Detectada por el HomeInfra Collector
  - 2026-11-02 · Identificada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Modelo y serie leídos de la etiqueta (MSI N210-MD1G)
- **Placa base ASUSTeK Computer INC. P5Q PRO TURBO** (`pz-pc-e6750-p5q-pro-turbo-placabase-1`):
  - 2026-11-02 · Instalada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Detectada por el HomeInfra Collector
- **CPU Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz** (`pz-pc-i7-2600k-z77-hd3-cpu-1`):
  - 2026-11-01 · Instalada · PC armado Core i7-2600K · Gigabyte Z77-HD3 · Detectada por el HomeInfra Collector
- **RAM Kingston HX316C10F/8** (`pz-pc-i7-2600k-z77-hd3-ram-1`):
  - 2026-11-01 · Instalada · PC armado Core i7-2600K · Gigabyte Z77-HD3 · Detectada por el HomeInfra Collector
- **RAM Kingston HX316C10F/8** (`pz-pc-i7-2600k-z77-hd3-ram-2`):
  - 2026-11-01 · Instalada · PC armado Core i7-2600K · Gigabyte Z77-HD3 · Detectada por el HomeInfra Collector
- **Placa base Gigabyte Technology Co., Ltd. Z77-HD3** (`pz-pc-i7-2600k-z77-hd3-placabase-1`):
  - 2026-11-01 · Instalada · PC armado Core i7-2600K · Gigabyte Z77-HD3 · Detectada por el HomeInfra Collector
- **SSD Burst Elite 120GB (SSD de Windows compartido)** (`dev-ssd-patriot-burst-elite-120gb`):
  - 2026-11-01 · Detectada · PC armado Core i7-2600K · Gigabyte Z77-HD3 · Disco de arranque al pasar el Collector
  - 2026-11-01 · Detectada · PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX · Disco de arranque al pasar el Collector
  - 2026-11-02 · Detectada · PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO · Disco de arranque al pasar el Collector
- **SSD Burst Elite 120GB (segunda unidad)** (`dev-ssd-patriot-burst-elite-120gb-2`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **GPU GeForce 8400 GS GEN2 512MB DDR2** (`dev-gpu-zotac-8400gs`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **Placa base MSI A68HM-E33 V2 (MS-7721)** (`pz-pc-msi-a68hm-e33-v2-placabase-1`):
  - 2024-05-11 · Instalada · PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) · Vista en una foto del equipo
- **RAM Kingston HyperX Fury HX318C10FR/4** (`pz-pc-msi-a68hm-e33-v2-ram-1`):
  - 2024-05-11 · Instalada · PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) · Vista en una foto del equipo
- **RAM Kingston HyperX Fury (rojo, etiqueta no legible)** (`pz-pc-msi-a68hm-e33-v2-ram-2`):
  - 2024-05-11 · Instalada · PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) · Vista en una foto del equipo
- **GPU Tarjeta de video dedicada (por identificar)** (`pz-pc-msi-a68hm-e33-v2-gpu-1`):
  - 2024-05-11 · Instalada · PC armado MSI A68HM-E33 V2 (CPU AMD por identificar) · Vista en una foto del equipo
- **HDD WD Blue 1TB WD10SPZX (marcado 1)** (`dev-hdd-wd10spzx-1tb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **HDD WD Blue 1TB WD10JPVX (marcado 2)** (`dev-hdd-wd10jpvx-1tb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **HDD Spinpoint M8 1TB ST1000LM024 (marcado 3)** (`dev-hdd-st1000lm024-1tb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **HDD MQ01ACF050 500GB** (`dev-hdd-toshiba-mq01acf050-500gb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **HDD WD Blue 750GB WD7500BPVT** (`dev-hdd-wd7500bpvt-750gb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **SSD SSD 850 EVO 500GB** (`dev-ssd-samsung-850evo-500gb`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **RAID Tarjeta RAID/HBA SAS 6Gb/s YZCA-00019-101 (chip LSI)** (`dev-raid-inspur-yzca-00019-101`):
  - 2026-11-02 · En stock · Registrada como pieza suelta
- **Cargador ADP-65GD D** (`pz-cargador-msi-delta-adp-65gd`):
  - 2026-11-02 · Instalada · MSI Modern 14 B5M-011CL · Asignado por número de parte MSI y alimentación 19V ⎓ 3.42A
- **RAM CT51264BA160BJ** (`pz-ram-crucial-ct51264ba160bj`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **SSD OM8PDP3256B-AI1** (`pz-ssd-kingston-om8pdp3256b`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **SSD PM981a MZVLB256HBHQ-000L2** (`pz-ssd-samsung-pm981a-256gb`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **RAM M471B5173DB0-YK0** (`pz-ram-samsung-m471b5173db0`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Blue WD5000LPVT** (`pz-hdd-wd5000lpvt`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Blue WD5000LPVX** (`pz-hdd-wd5000lpvx`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD Travelstar 5K750 HTS547550A9E384** (`pz-hdd-hitachi-hts547550a9e384`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD MJA2500BH G2** (`pz-hdd-toshiba-mja2500bh`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Green WD30EZRX** (`pz-hdd-wd30ezrx-wcawz2212479`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Green WD30EZRX** (`pz-hdd-wd30ezrx-wcawz2268707`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Green WD20EARX** (`pz-hdd-wd20earx-wmaza8396409`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Green WD20EARS (Respaldos)** (`pz-hdd-wd20ears-wmaza3635000`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Black WD1001FALS (Trabajo 1)** (`pz-hdd-wd1001fals-wmatv2575104`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **HDD WD Caviar Black WD1001FALS** (`pz-hdd-wd1001fals-wmatv1245731`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **Fuente RS-460-PSAR-J3** (`pz-fuente-coolermaster-rs-460-psar-j3`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **Fuente DA600** (`pz-fuente-deepcool-da600`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **Fuente TR2-430W (TR2-430NP)** (`pz-fuente-thermaltake-tr2-430w`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **GPU GTX650TI-DC2O-1GD5 (GeForce GTX 650 Ti DirectCU II OC)** (`pz-gpu-asus-gtx650ti-dc2o-1gd5`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta
- **GPU e-GeForce 7800 GTX ACS3 (256-P2-N527-AX)** (`pz-gpu-evga-7800gtx-256-p2-n527-ax`):
  - 2026-11-02 · En stock · Registrada desde fotos de la etiqueta

---

## 🛠️ Guía de Uso del Inventario y Driver Hub
1. **Base de Datos:** El archivo [`equipos.json`](equipos.json) almacena los registros de los equipos, imágenes de referencia, especificaciones de hardware, credenciales y observaciones.
2. **Abrir la Aplicación:** Abre `index.html` en cualquier navegador web.
3. **Registro y Edición:** Pulsa en **"Registrar Equipo"** o en el botón de **Editar** (icono de lápiz) en cualquier tarjeta para modificar cualquier campo en cualquier momento.
4. **Acceso Rápido a Drivers:** Desde la tarjeta de cada equipo, el botón **"Descargar Drivers & Soporte"** te llevará directamente a la página oficial de descargas del fabricante.
5. **Sincronización:** Usa el botón **"Descargar contexto.md"**, **"Sincronizar contexto.md"** o **"Copiar Markdown"** en la barra superior para actualizar este archivo cada vez que ingreses o modifiques equipos.
6. **HomeInfra Collector:** El botón **"Collector"** muestra el comando para recolectar los datos de un equipo en Windows, Linux o macOS, y permite importar los registros `.json` generados (varios a la vez). El script también puede llevarse en un pendrive desde la carpeta [`Collector`](Collector/README.md).
7. **Equipos nuevos desde equipos.json:** Al abrir la app, los equipos de `equipos.json` que el navegador aún no conoce se agregan solos; los eliminados desde la app no vuelven a aparecer.
