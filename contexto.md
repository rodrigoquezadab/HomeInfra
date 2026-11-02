# Contexto del Proyecto: HomeInfra - Inventario de Equipos Personales

## 📌 Descripción General
Este archivo documenta el registro y contexto de los equipos tecnológicos personales de **HomeInfra**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows (Usuario y Contraseña)**, **observaciones técnicas e historial**, y enlaces directos para la descarga de controladores (drivers) oficiales.

La base de datos principal estructurada reside en el archivo [`equipos.json`](equipos.json) y se administra interactivamente a través de la aplicación web local `HomeInfra` (`index.html`, `style.css`, `app.js`).

*Última actualización sincronizada:* `2026-11-02` | *Total de equipos:* **11**

---

## ⚠️ Directiva de Desarrollo y Alcance (Regla Estricta)
> **REGLA FUNDAMENTAL:**
> Evitar estrictamente cambiar, crear o implementar funcionalidades, textos o componentes que no vayan en directa y exclusiva relación con lo que el usuario solicita puntualmente.
> - No asumir requerimientos no pedidos.
> - No agregar elementos estéticos ni funcionales que no hayan sido solicitados expresamente.
> - No alterar partes del sistema ni comportamientos fuera del alcance directo de la petición actual.

---

## 🧩 Visión: Gestión de Infraestructura basada en ITIL (Planificado)

> **Estado:** Implementación parcial. Los equipos ya guardan sus piezas en el campo `components` (categoría, modelo, serie, capacidad, si es reemplazable y, para accesorios registrados aparte como un cargador, el `deviceId` del equipo relacionado). Faltan la vista de componentes en la interfaz, los estados del ciclo de vida y el historial de cambios.

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
| 4 | Periférico | Lite-On | PA-1650-02 (Adaptador AC 65W) | 2008-06 | N/A | N/A | N/A | N/A | AP06503016824OB7E6P606 | [Soporte Oficial Lite-On PA-1650-02 (Adaptador AC 65W)](https://www.acer.com/latam-es/support/product-support/E3-112) |
| 5 | Desktop | PC armado | Core i5-12400F · MSI PRO H610M-G DDR4 | 2022 (lanzamiento de la plataforma Intel H610) | 12th Gen Intel(R) Core(TM) i5-12400F [2022] | 16 GB DDR4 | NVIDIA GeForce GTX 1660 SUPER (Dedicada) | N/A | 07D4612_M21D142444 | [Soporte Oficial PC armado Core i5-12400F · MSI PRO H610M-G DDR4](https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/support) |
| 6 | Desktop | PC armado | Core 2 Quad Q6700 · ASUS P5G41T-M LX | 2008 (lanzamiento del chipset Intel G41) | Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz [2007] | 8 GB DDR3 | Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) (Integrada) | N/A | 107933150000113 | [Soporte Oficial PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX](https://www.asus.com/supportonly/p5g41t-m%20lx/helpdesk_download/) |
| 7 | Desktop | PC armado | Core 2 Duo E6750 · ASUS P5Q PRO TURBO | 2008 (lanzamiento del chipset Intel P45) | Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz [2007] | 4 GB DDR2 | NVIDIA GeForce 210 (Dedicada) | N/A | MS1C93BC3400692 | [Soporte Oficial PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO](https://www.asus.com/supportonly/p5q%20pro%20turbo/helpdesk_download/) |
| 8 | Desktop | PC armado | Core i7-2600K · Gigabyte Z77-HD3 | 2012 (lanzamiento del chipset Intel Z77) | Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz [2011] | 16 GB DDR3 | Intel(R) HD Graphics 3000 (Integrada) | N/A | N/A | [Soporte Oficial PC armado Core i7-2600K · Gigabyte Z77-HD3](https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/support) |
| 9 | Monitor | LG | TV (usado como monitor) | 2010 | N/A | N/A | N/A | N/A | N/A | [Soporte Oficial LG TV (usado como monitor)](https://www.google.com/search?q=LG%20TV%20monitor%20soporte%20oficial) |
| 10 | Periférico | Patriot | Burst Elite 120GB (SSD de Windows compartido) | N/A | N/A | N/A | N/A | N/A | PBEIIBB21030118778 | [Soporte Oficial Patriot Burst Elite 120GB (SSD de Windows compartido)](https://www.google.com/search?q=Patriot%20Burst%20Elite%20120GB%20SSD%20soporte) |
| 11 | Periférico | Sony | Pendrive USB 4 GB (HomeInfra Collector) | N/A | N/A | N/A | N/A | N/A | 7B2211109146005852 | [Soporte Oficial Sony Pendrive USB 4 GB (HomeInfra Collector)](https://www.google.com/search?q=Sony%20USB%20flash%20drive%20soporte) |

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
- **Componentes:**
  - *Red:* WLAN + Bluetooth combo QCWB335 (FCC ID PPD-QCWB335) · 2012 · reemplazable
  - *Cargador:* Lite-On PA-1650-02 65 W (19V ⎓ 3.42A) · S/N AP06503016824OB7E6P606 · reemplazable · equipo relacionado: `dev-acer-e3-112-cargador`
- **Fotografías:**
  - Imagen comercial (Icecat, Aspire E3-112): [`img/acer_e3-112_comercial.jpg`](img/acer_e3-112_comercial.jpg)
  - Etiqueta modelo / S/N / MFG: [`img/acer_e3-112_etiqueta_serie.jpg`](img/acer_e3-112_etiqueta_serie.jpg)
  - Etiqueta WLAN + Bluetooth QCWB335: [`img/acer_e3-112_etiqueta_wifi_qcwb335.jpg`](img/acer_e3-112_etiqueta_wifi_qcwb335.jpg)
  - Cargador: etiqueta Lite-On PA-1650-02: [`img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg`](img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg)
  - Cargador: vista general: [`img/acer_e3-112_cargador_vista_general.jpg`](img/acer_e3-112_cargador_vista_general.jpg)

### 4. Lite-On PA-1650-02 (Adaptador AC 65W)
![Lite-On PA-1650-02 (Adaptador AC 65W)](img/acer_e3-112_cargador_vista_general.jpg)

- **Tipo:** Periférico
- **Marca:** Lite-On
- **Modelo:** PA-1650-02 (Adaptador AC 65W)
- **Número de Serie / Activo:** AP06503016824OB7E6P606
- **Fecha de Fabricación / Lanzamiento:** 2008-06
- **Asignación / Ubicación:** Hogar
- **Enlace de Drivers:** [Soporte Oficial Lite-On PA-1650-02 (Adaptador AC 65W)](https://www.acer.com/latam-es/support/product-support/E3-112)
- **Notas:** Cargador del Acer Aspire E3-112-C6ME (S/N NXMRLAL004434177F97600). Entrada 100-240V ~ 1.6A 50-60Hz. Salida 19V ⎓ 3.42A, 65W, centro positivo. Conector de punta amarilla.
- **Observaciones:** Datos de la etiqueta:
• Fabricante: Lite-On Technology Corporation
• Modelo: PA-1650-02
• Entrada: 100-240V ~ 1.6A, 50-60Hz
• Salida: 19V ⎓ 3.42A, 65W (centro positivo)
• Fecha de fabricación: 2008/06
• Etiqueta de serie: 8616796906 · AC · Rev: A06
• Código de barras ADT: AP06503016824OB7E6P606

Compatibilidad: el notebook requiere 19V ⎓ 2.1A; este cargador entrega el mismo voltaje con mayor corriente disponible (3.42A), por lo que es compatible. Por su fecha de fabricación (2008) no es el cargador de fábrica del notebook (2014).

Equipo asociado: Acer Aspire E3-112-C6ME (dev-acer-e3-112).
- **Fotografías:**
  - Vista general con cable y conector: [`img/acer_e3-112_cargador_vista_general.jpg`](img/acer_e3-112_cargador_vista_general.jpg)
  - Etiqueta Lite-On PA-1650-02: [`img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg`](img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg)
  - Código de barras ADT (serie): [`img/acer_e3-112_cargador_serie_ap06503.jpg`](img/acer_e3-112_cargador_serie_ap06503.jpg)
  - Etiqueta de advertencia de temperatura: [`img/acer_e3-112_cargador_advertencia_temperatura.jpg`](img/acer_e3-112_cargador_advertencia_temperatura.jpg)

### 5. PC armado Core i5-12400F · MSI PRO H610M-G DDR4
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
- **Componentes:**
  - *CPU:* 12th Gen Intel(R) Core(TM) i5-12400F (6 núcleos / 12 hilos socket U3E1) · 2022 · PassMark multi 19.524 / mono 3.483 · reemplazable
  - *RAM:* Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller0-DIMMA1] · módulo de 3600 MT/s funcionando a 2667 MT/s) · reemplazable
  - *RAM:* Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller1-DIMMB1] · módulo de 3600 MT/s funcionando a 2667 MT/s) · reemplazable
  - *Almacenamiento:* WD Blue SN570 500GB 466 GB (SSD NVMe) · S/N E823_8FA6_BF53_0001_001B_448B_4569_B02C. · 2021 · reemplazable
  - *Almacenamiento:* WDC WD800BD-22MRA1 75 GB (HDD SATA) · S/N WD-WMAM9AMY4260 · reemplazable
  - *GPU:* NVIDIA GeForce GTX 1660 SUPER 4 GB (NVIDIA) · 2019 · reemplazable
  - *Red:* Intel(R) Ethernet Connection (17) I219-V (MAC 04:7C:16:05:0E:B3) · integrado
  - *Placa base:* Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46) (1.0) · S/N 07D4612_M21D142444 · 2022 · integrado

### 6. PC armado Core 2 Quad Q6700 · ASUS P5G41T-M LX
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
- **Componentes:**
  - *CPU:* Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz (4 núcleos / 4 hilos socket LGA775) · 2007 · PassMark multi 2.092 / mono 1.073 · reemplazable
  - *RAM:* 4 GB (DDR3 DIMM [DIMM A1] · tipo deducido del modelo de placa) · reemplazable
  - *RAM:* 4 GB (DDR3 DIMM [DIMM B1] · tipo deducido del modelo de placa) · reemplazable
  - *GPU:* Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) (Intel Corporation) · 2008 · integrado
  - *Red:* Qualcomm Atheros AR8131 PCI-E Gigabit Ethernet Controller (NDIS 6.30) (MAC BC:AE:C5:28:68:F4) · integrado
  - *Placa base:* ASUSTeK Computer INC. P5G41T-M LX (Rev X.0x) · S/N 107933150000113 · 2008 · integrado

### 7. PC armado Core 2 Duo E6750 · ASUS P5Q PRO TURBO
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
- **Componentes:**
  - *CPU:* Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz (2 núcleos / 2 hilos socket LGA 775) · 2007 · PassMark multi 1.031 / mono 1.030 · reemplazable
  - *RAM:* 2 GB (DDR2 DIMM 800 MT/s [DIMM0] · tipo deducido del modelo de placa) · reemplazable
  - *RAM:* 2 GB (DDR2 DIMM 800 MT/s [DIMM2] · tipo deducido del modelo de placa) · reemplazable
  - *GPU:* NVIDIA GeForce 210 1 GB (NVIDIA) · 2009 · reemplazable
  - *Red:* Atheros AR8121/AR8113/AR8114 PCI-E Ethernet Controller (MAC 00:24:8C:6B:E7:F6) · integrado
  - *Placa base:* ASUSTeK Computer INC. P5Q PRO TURBO (Rev 1.xx) · S/N MS1C93BC3400692 · 2008 · integrado

### 8. PC armado Core i7-2600K · Gigabyte Z77-HD3
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
- **Componentes:**
  - *CPU:* Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz (4 núcleos / 8 hilos) · 2011 · PassMark multi 5.476 / mono 1.740 · reemplazable
  - *RAM:* Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelB-DIMM1]) · S/N 19FA6341 · reemplazable
  - *RAM:* Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelA-DIMM1]) · S/N 4C33D19F · reemplazable
  - *GPU:* Intel(R) HD Graphics 3000 (Intel Corporation) · 2011 · integrado
  - *Red:* Realtek PCIe GbE Family Controller #2 (MAC 74:D4:35:11:F0:AC) · integrado
  - *Placa base:* Gigabyte Technology Co., Ltd. Z77-HD3 · 2012 · integrado

### 9. LG TV (usado como monitor)
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

### 10. Patriot Burst Elite 120GB (SSD de Windows compartido)
- **Tipo:** Periférico
- **Marca:** Patriot
- **Modelo:** Burst Elite 120GB (SSD de Windows compartido)
- **Número de Serie / Activo:** PBEIIBB21030118778
- **Fecha de Fabricación / Lanzamiento:** No registrada
- **Asignación / Ubicación:** Hogar
- **Especificaciones de Hardware:**
  - **Almacenamiento:** SSD SATA 120 GB
- **Enlace de Drivers:** [Soporte Oficial Patriot Burst Elite 120GB (SSD de Windows compartido)](https://www.google.com/search?q=Patriot%20Burst%20Elite%20120GB%20SSD%20soporte)
- **Notas:** SSD SATA 2.5" Patriot Burst Elite de 120 GB (111.8 GB útiles), firmware FW200918. Tiene instalado Windows 10 Pro 22H2 (10.0.19045), nombre de equipo "SERVER", instalado el 2025-01-28. Se mueve entre PCs para arrancarlos y registrarlos.
- **Observaciones:** Dispositivo general, no forma parte de ningún equipo.

En los PCs con Core 2 Quad Q6700 y Core i7-2600K, Windows informó menos núcleos de los que tiene el procesador. Probablemente este Windows tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas → Número de procesadores).

Usado para arrancar:
• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)
• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)
• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)

### 11. Sony Pendrive USB 4 GB (HomeInfra Collector)
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

---

## 🛠️ Guía de Uso del Inventario y Driver Hub
1. **Base de Datos:** El archivo [`equipos.json`](equipos.json) almacena los registros de los equipos, imágenes de referencia, especificaciones de hardware, credenciales y observaciones.
2. **Abrir la Aplicación:** Abre `index.html` en cualquier navegador web.
3. **Registro y Edición:** Pulsa en **"Registrar Equipo"** o en el botón de **Editar** (icono de lápiz) en cualquier tarjeta para modificar cualquier campo en cualquier momento.
4. **Acceso Rápido a Drivers:** Desde la tarjeta de cada equipo, el botón **"Descargar Drivers & Soporte"** te llevará directamente a la página oficial de descargas del fabricante.
5. **Sincronización:** Usa el botón **"Descargar contexto.md"**, **"Sincronizar contexto.md"** o **"Copiar Markdown"** en la barra superior para actualizar este archivo cada vez que ingreses o modifiques equipos.
6. **HomeInfra Collector:** El botón **"Collector"** muestra el comando para recolectar los datos de un equipo en Windows, Linux o macOS, y permite importar los registros `.json` generados (varios a la vez). El script también puede llevarse en un pendrive desde la carpeta [`Collector`](Collector/README.md).
7. **Equipos nuevos desde equipos.json:** Al abrir la app, los equipos de `equipos.json` que el navegador aún no conoce se agregan solos; los eliminados desde la app no vuelven a aparecer.
