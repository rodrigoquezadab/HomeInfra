# HomeInfra: Progreso y Pendientes

Registro de dónde quedó el trabajo y qué falta por hacer en la próxima sesión. Actualizar al cerrar cada sesión.

**Última sesión:** 2026-11-02
**Último commit de código al cierre:** `d88eeb2` (más el commit que actualiza este archivo)
**Sitio publicado:** https://rodrigoquezadab.github.io/HomeInfra/ (GitHub Pages, rama `main`)
**Servidor local:** Live Server en `http://localhost:5500` (`.claude/launch.json`)

---

## ✅ Dónde quedamos

### Inventario (`equipos.json`)
| # | Equipo | Tipo | Imagen principal | Estado del registro |
|---|--------|------|------------------|---------------------|
| 1 | Brother DCP-1602 | Impresora | Comercial (Icecat) | Completo, salvo número de serie (pendiente). Sin componentes. |
| 2 | MSI Modern 14 B5M-011CL | Laptop | Comercial (Icecat) | Datos de etiqueta y 6 fotos. CPU y RAM deducidos del SKU; almacenamiento sin registrar. Sin componentes. |
| 3 | Acer Aspire E3-112-C6ME | Laptop | Comercial (Icecat, versión plateada) | Datos de etiqueta y 4 fotos. CPU, RAM y almacenamiento sin registrar. Componentes: Wi-Fi QCWB335 y cargador. |
| 4 | Lite-On PA-1650-02 | Periférico (cargador) | Foto local (vista general) | Cargador del Acer E3-112, enlazado con `deviceId`. Se ve dentro de la tarjeta del Acer y en la vista de componentes, no como equipo aparte. Compatible (19V; 3.42A ≥ 2.1A), pero no es el original de fábrica (2008). |
| 5 | PC armado: Core i5-12400F · MSI PRO H610M-G DDR4 | Desktop | Sin imagen | Registrado con el Collector (`Collector/Registros/MSI_MS-7D46_20261031-192112.json`). Serie de la placa base como identificador. 8 componentes (el monitor pasó a dispositivo general). |
| 6 | PC armado: Core 2 Quad Q6700 · ASUS P5G41T-M LX | Desktop | Sin imagen | Collector 2026-11-01. Sin disco propio. Windows informó 2 núcleos (el Q6700 tiene 4). RAM sin datos de fabricante (BIOS); tipo DDR3 deducido de la placa. |
| 7 | PC armado: Core 2 Duo E6750 · ASUS P5Q PRO TURBO | Desktop | Sin imagen | Collector 2026-11-02. Sin disco propio. GeForce 210 dedicada. RAM sin datos de fabricante (BIOS); tipo DDR2 deducido de la placa. |
| 8 | PC armado: Core i7-2600K · Gigabyte Z77-HD3 | Desktop | Sin imagen | Collector 2026-11-01. Sin disco propio. Sin serie de placa: se identifica por MAC y UUID. Windows informó 1 núcleo / 2 hilos (el 2600K tiene 4 / 8). |
| 9 | Monitor LG TV | Monitor (general) | Sin imagen | Dispositivo compartido entre PCs; no es componente de ningún equipo. EDID sin serie real ni modelo exacto. |
| 10 | SSD Patriot Burst Elite 120GB | Periférico (general) | Sin imagen | SSD de Windows 10 Pro ("SERVER", instalado 2025-01-28) que se mueve entre PCs para arrancarlos; no es componente de ningún equipo. |
| 11 | Pendrive Sony 4 GB | Periférico (general) | Sin imagen | Pendrive del Collector; no es componente de ningún equipo. |
| 12 | Tarjeta de video ZOTAC GeForce 8400 GS GEN2 512MB DDR2 | Periférico (general) | Foto local (etiqueta) | PN 288-90N44-040ZT, S/N N103100027911. No es componente de ningún equipo. Sin imagen comercial (no está en Icecat). |
| 13 | PC armado: MSI A68HM-E33 V2 (CPU AMD por identificar) | Desktop | Foto local (placa) | Registrado desde una foto: placa, RAM HyperX Fury HX318C10FR/4 y una GPU dedicada sin identificar. Pendiente pasarle el Collector. |
| 14 | SSD Patriot Burst Elite 120GB (segunda unidad) | Periférico (general) | Sin imagen | Mismo modelo que el SSD de Windows compartido. Número de serie pendiente. |
| 15 | HDD WD Blue 1TB WD10SPZX (marcado 1) | Periférico (general) | Foto local | S/N WXN1AA821XCH · 2018-12-14 · HP P/N L24400-001. |
| 16 | HDD WD Blue 1TB WD10JPVX (marcado 2) | Periférico (general) | Foto local | S/N WX31A177YXJU · 2017-02-10 · HP P/N 726834-001. |
| 17 | HDD Seagate/Samsung Spinpoint M8 1TB ST1000LM024 (marcado 3) | Periférico (general) | Foto local | S/N S32HJ9HF204858 · de un laptop Samsung NP870Z5G. |
| 18 | HDD Toshiba MQ01ACF050 500GB | Periférico (general) | Foto local | S/N 54O9C6M8T (confirmar O/0) · 2014-05-24 · HP P/N 724967-001. |
| 19 | HDD WD Blue 750GB WD7500BPVT | Periférico (general) | Foto local | S/N WXD1E72EHP04 · 2012-11-04 · Lenovo FRU. |
| 20 | SSD Samsung 850 EVO 500GB | Periférico (general) | Comercial (Icecat) | S/N S21HNXAGA21889H. |
| 21 | Tarjeta RAID/HBA Inspur YZCA-00019-101 | Periférico (general) | Foto local | QN QTE227E00948A07 · LSI SAS 6 Gb/s 8 puertos (modelo 9240-8i / 9211-8i según firmware, por confirmar). |
| 22 | Tarjeta SATA PCIe x1 ASM1061 (2 puertos) | Pieza (En stock) | Foto local | Genérica, chip ASMedia ASM1061, PCIe 2.0 x1, 2 × SATA 6 Gb/s. Sin número de serie. |
| 23 | Adaptador M.2 NVMe a PCIe x16 (sellado) | Pieza (En stock) | Foto local | Nuevo, en su bolsa. Conector de largo x16, funciona en x4 (deducido). Código del vendedor 68002B116237580. |
| 23b | Adaptador M.2 NVMe a PCIe x16 (segunda unidad) | Pieza (En stock) | Foto local | Abierto. Mismo modelo (deducido). |
| 24 | HDD WD Blue 500GB WD5000LPCX | Pieza (En stock) | Foto local | Nuevo, sellado. S/N WXG1AC75PY4Z · 2018-01-03. |
| 25 | HDD WD Green 1TB WD10EARS | Pieza (En stock) | Foto local | S/N WCAZA1114403 · 2010-09-20 · SATA 3 Gb/s. |
| 26 | HDD WD Blue 1TB WD10EZEX | Pieza (En stock) | Foto local | S/N WCC6Y3JZFCPE · 2017-01-27 · 7200 rpm · Lenovo FRU 00PC551. |
| 27 | HDD Seagate Barracuda 7200.12 320GB ST3320413AS | Pieza (En stock) | Foto local | S/N Z2A0XF4D · Date Code 11332 (2011). |
| 28 | HDD Seagate Barracuda 7200.10 250GB ST3250410AS | Pieza (En stock) | Foto local | S/N 6RY08XZ6 · Date Code 08031 (2007). |
| 29 | HDD WD Blue 500GB WD5000AZLX | Pieza (En stock) | Foto local | S/N WCC6Z0VE64ZA · 2017-07-11 · 7200 rpm · Dell DP/N 0FY6CW. |
| 30 | HDD Toshiba 1TB DT01ACA100 | Pieza (En stock) | Foto local | S/N Y457MMEFS · NOV-2014 · 7200 rpm (según modelo). |
| 31 | HDD WD Green 3TB WD30EZRX (Respaldo) | Pieza (En stock) | Foto local | S/N WMAWZ0231988 · 2011-12-05. Respaldo del RAID espejo de los otros dos WD30EZRX; contiene datos. |

Fotos locales agregadas: PC i7-2600K (gabinete 2022 como principal y placa 2023) y PC i5-12400F (caja del procesador como principal). Carpeta `C:\Users\ThinkPad\Desktop\pcs` ordenada: una carpeta por equipo, fotos con nombres descriptivos.

### App
- Dos vistas: **💻 Equipos completos** (principal) y **🧩 Componentes** (cada pieza por separado, filtro por categoría, búsqueda, imagen y equipo donde está instalada).
- Los accesorios enlazados (cargadores) no aparecen como equipo completo: se ven dentro de su laptop y en la vista de componentes.
- Imagen comercial como imagen principal de cada equipo (Icecat); fotos locales siguen en la galería.
- Imágenes de componentes: RAM Corsair Vengeance LPX y Intel Core i5 (páginas oficiales), placa MSI PRO H610M-G DDR4 (Icecat). Archivos `img/componente_*`.
- Sincronización con `equipos.json` al abrir la app: agrega equipos nuevos y actualiza los que cambiaron, sin pisar lo editado en ese navegador (`homeinfra_repo_seen_ids` y `homeinfra_repo_snapshot` en localStorage).
- Campo `components` en los equipos (base de la visión ITIL): categoría, modelo, serie, capacidad, `replaceable`, `imageUrl` y `deviceId` para accesorios registrados aparte.
- `contexto.md` se genera desde la app e incluye directiva de desarrollo, visión ITIL, componentes y fotografías de cada equipo.

### HomeInfra Collector (`Collector/`)
- Scripts para Windows (`HomeInfra-Collector.ps1` + `Ejecutar-Collector.bat`), Linux (`homeinfra-collector.sh`) y macOS (`homeinfra-collector-macos.js` + `Ejecutar-Collector.command`). Mismo formato JSON (`schema: homeinfra-collector`).
- Botón **Collector** en la app: pasos A/B/C, comando de una línea por sistema operativo, **carpeta de destino** en recuadro amarillo (resaltada dentro del comando) e importación de varios registros a la vez.
- Lanzadores del pendrive con variable `DESTINO` marcada para cambiar la carpeta de destino. README con sección "Cambiar la carpeta de destino".
- Probado: Windows en un ThinkPad T14 Gen 2a (PowerShell 5.1 y 7, local y desde GitHub) y en el PC armado (registro real importado). Linux solo sobre un sistema simulado; macOS solo revisión de sintaxis.

---

## 🖥️ En evaluación: servidores de medios y de datos

Estado: **pendiente de que el usuario revise los detalles** (2026-11-02). Retomar desde aquí.

### Decisiones tomadas
- Software libre: **OpenMediaVault 8 + SnapRAID + mergerfs** (se descartaron Unraid por licencia, TrueNAS/ZFS y RAID 0/5/RAIDZ por discos de distinto tamaño y antiguos; RAIDZ desperdicia espacio y si fallan más discos de los tolerados se pierde todo).
- Sin tarjeta de video para streaming: el **Chromecast con Google TV HD** (Amlogic S805X2: H.264, HEVC, VP9, AV1 hasta 1080p60) y la **TV Caixun con Google TV** decodifican con la app Jellyfin. Solo se transcodifica 4K→1080p, audio DTS/TrueHD o subtítulos de imagen; el i7-2600K alcanza para ~2 a la vez. Convertir DVDs a H.264/HEVC con subtítulos SRT al respaldarlos.
- Immich (fotos) exige CPU x86-64-v2 y ≥ 6 GB RAM: solo el i7-2600K sirve.
- La placa MSI A68HM-E33 V2 queda fuera (se usa en otro lugar). El usuario tiene cables SFF-8087 a SATA.

### Propuesta vigente: opción B (con NVMe)
| | Servidor de medios (fotos, video, audio) | Servidor de datos |
|---|---|---|
| Placa / CPU / RAM | Gigabyte Z77-HD3 · i7-2600K · 16 GB DDR3 | ASUS P5G41T-M LX · Core 2 Quad Q6700 · 8 GB DDR3 |
| Sistema | Samsung 850 EVO 500 GB (SATA) | NVMe Kingston OM8PDP3256B 256 GB en adaptador PCIe x16 + pendrive para /boot (la BIOS no arranca NVMe) |
| PCIe x16 | Tarjeta RAID Inspur YZCA-00019-101 flasheada a modo IT (9211-8i) | Adaptador NVMe |
| Paridad SnapRAID | WD20EARX 2 TB + WD20EARS 2 TB (doble) | WD30EZRX 3 TB (simple) |
| Datos | 9 discos de notebook = **6,25 TB** (WD10SPZX, WD10JPVX, ST1000LM024, WD7500BPVT, MQ01ACF050, WD5000LPVT, WD5000LPVX, Hitachi HTS547550A9E384, MJA2500BH) | WD30EZRX 3 TB + WD1001FALS ×2 = **5 TB** |
| Fuente | Cooler Master RS-460-PSAR-J3 | Deepcool DA600 |
| Apps | Jellyfin, Immich | Compartición SMB, respaldo de fotos del servidor de medios |

Otras opciones evaluadas: A (medios 4,25 TB / datos 9 TB, plan anterior), C (medios 10,25 TB / datos 1 TB), D (medios 5,25 TB con paridad simple: no recomendada).

Quedan libres: P5Q PRO TURBO + E6750 + 4 GB DDR2, Zotac 8400 GS, Samsung PM981a 256 GB, Patriot 120 GB ×2, tarjeta SATA ASM1061, segundo adaptador NVMe, HDD WD5000LPCX nuevo y los 6 discos de escritorio registrados el 2026-11-02 (sin contar el WD30EZRX de respaldo).

### Pendiente para decidir / antes de armar
- [ ] Usuario confirma la opción B (o elige otra).
- [x] Adaptador NVMe: conector de largo x16, funciona en x4 (2026-11-02). Va en la ranura x16 del P5G41T-M LX.
- [x] Ranuras de la GA-Z77-HD3 (foto): PCIEX16 (x16, CPU) · 2 × PCIe x1 (extremo cerrado) · PCIEX4 (largo x16, x4 PCIe 2.0, chipset) · 2 × PCI. Confirmar en el manual si PCIEX4 baja a x1 al ocupar las ranuras x1.
- [ ] Decidir el HDD nuevo WD5000LPCX: repuesto sellado (recomendado) o disco de datos del servidor de medios (6,75 TB).
- [ ] Tarjeta SATA ASM1061 (2 puertos, PCIe x1): disponible para sumar puertos al servidor de datos si el P5G41T-M LX tiene ranura x1 libre.
- [ ] Confirmar modelo de la TV Caixun (opcional).
- [ ] Copiar el contenido de los discos "Respaldos" (WD20EARS) y "Trabajo 1" (WD1001FALS) antes de usarlos.
- [ ] **Replantear el servidor de datos:** la opción B usa los dos WD30EZRX como paridad y datos, pero forman un RAID espejo con datos (respaldo en un tercer WD30EZRX, WMAWZ0231988). Considerar también los discos nuevos: WD10EARS, WD10EZEX y DT01ACA100 (1 TB), WD5000AZLX (500 GB), ST3320413AS (320 GB) y ST3250410AS (250 GB).
- [ ] Revisar SMART y hacer prueba completa de cada disco; desactivar el estacionamiento agresivo de cabezales de los WD Green.
  - Herramienta: pendrive SystemRescue 13.02 (`RESCUE1302`) con `Collector/revisar-discos.sh` como `autorun/autorun` y `discos-autorizados.txt` (procedimiento en la app: botón **Discos**). Reportes en `Collector/Registros/Discos/`.
  - [x] WD5000AZLX (2026-11-02, 2600K): **APTO**, 0 sectores malos, 216 h, 2 h 53 min.
  - [x] Seagate ST3250410AS (2026-11-02, 2600K): **APTO con observaciones** (0 sectores malos; 17.556 h, calor «FAIL Past», errores de cable antiguos). Solo para reserva o segunda copia.
  - [x] Seagate ST3320413AS (2026-11-02, PC MSI i5-12400F): **REVISAR / no recomendado para datos** (0 sectores malos, pero atributo 184 End-to-End_Error en FAIL NOW con 240 errores; 24.629 h).
  - [x] Notebooks 500 GB (2026-11-02/03, 2600K, 9 h 56 min): WD5000LPVT, WD5000LPVX y MJA2500BH **APTOS**; Hitachi HTS547550A9E384 **REVISAR** (eventos de reasignación 38 → 55 durante la prueba, arranque a ~2 MB/s).
  - [x] Notebooks 1 TB y 750 GB (2026-11-03, 2600K): WD10JPVX **APTO**; WD10SPZX (993.561 ciclos de cabezal) y ST1000LM024 (errores antiguos) **APTO con observaciones**; WD7500BPVT **REVISAR** (prueba larga con read failure).
  - [ ] Pendiente: Toshiba MQ01ACF050 y el respaldo del espejo (WD10EZEX, DT01ACA100, WD10EARS).
  - [ ] Mejora propuesta al veredicto: marcar REVISAR si el atributo 196 o el registro de errores aumentan durante la prueba.
  - [ ] Volver a activar Secure Boot en el PC MSI (se desactivó para arrancar SystemRescue).
  - [x] Ambos pendrives con el script a7b08f6 (descarte automático) y la lista común.
  - Ambos pendrives tienen la misma lista común de 14 discos que se pueden borrar (sin los de datos ni los 3 TB). Al copiar el espejo a un disco, quitarlo de la lista de los dos pendrives.
  - [ ] Respaldo del espejo: WD10EZEX, DT01ACA100, WD10EARS (ya en `discos-autorizados.txt` del pendrive; ~9 h juntos). Luego copiar el espejo a esos discos desde el Q6700.
- [ ] Flashear la tarjeta Inspur a modo IT (desde DOS o shell UEFI).
- [ ] Verificar que los complementos SnapRAID y mergerfs de omv-extras estén publicados para OMV 8 (si no, instalar OMV 7).
- [ ] Al confirmar: registrar los dos servidores en la app como equipos planificados con sus piezas asignadas.

---

## 📋 Pendiente para la próxima sesión

### Comprobar primero
- [ ] Abrir el sitio publicado (Ctrl+F5) en los navegadores usados y confirmar que aparecen solas las imágenes comerciales y de componentes (sincronización automática, commit `a4e4a0f`).

### Datos de equipos
- [ ] Ejecutar el Collector en el **Acer E3-112** para registrar CPU, RAM y almacenamiento.
- [ ] Ejecutar el Collector en el **MSI Modern 14** para confirmar CPU/RAM, registrar el almacenamiento y generar sus componentes.
- [ ] Registrar el número de serie de la **Brother DCP-1602**.
- [ ] **PC armado (i5-12400F):** activar XMP en la BIOS (la RAM de 3600 MT/s funciona a 2667; la plataforma admite hasta 3200) y agregar fotos (o elegir imagen principal).
- [ ] **SSD de Windows compartido:** revisar si tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas); en los PCs Q6700 e i7-2600K Windows informó menos núcleos de los reales.
- [ ] **PCs Q6700, E6750 e i7-2600K:** fotos, modelo exacto de la RAM y si tienen disco propio.
- [ ] **Monitor LG TV:** registrar el modelo exacto (etiqueta trasera).
- [ ] **Segundo SSD Patriot Burst Elite 120GB:** registrar número de serie, firmware y contenido (Collector o etiqueta).
- [ ] **Lote de fotos 2026-11-02:** 18 piezas nuevas (11 HDD, 2 SSD NVMe, 2 RAM, 3 fuentes de poder) y el cargador del MSI Modern 14. Confirmar: cuántas unidades Patriot Burst Elite hay (4 fotos sin serie visible), en qué PC está cada fuente de poder, si la MSI N210-MD1G es la GeForce 210 del PC E6750, si el Kingston OM8PDP3256B es el SSD original del MSI Modern 14 y el S/N del WD30EZRX WCAWZ2268707.
- [ ] **PC MSI A68HM-E33 V2:** ejecutar el Collector (CPU, RAM total, GPU, almacenamiento) y confirmar la MAC 4C:CC:6A:5F:66:21.
- [ ] Revisar la carpeta `C:\Users\ThinkPad\Desktop\pcs` por más equipos o accesorios por registrar.

### Imágenes
- [ ] Componentes sin imagen: SSD WD Blue SN570 (no disponible en Icecat gratuito), GTX 1660 SUPER (falta saber el fabricante de la tarjeta), HDD WD800BD, Wi-Fi QCWB335, red Intel I219-V, monitor LG TV.
- [ ] Si se quieren las imágenes exactas de las páginas de soporte (Acer, MSI), guardarlas manualmente en una carpeta para integrarlas: los sitios bloquean descargas automáticas y el navegador de la app no pudo leer páginas externas en esta sesión.
- [ ] El repositorio es público: las imágenes comerciales de fabricantes quedan publicadas. Decidir si se mantienen.

### HomeInfra Collector
- [ ] Probar en un **Linux real** (con y sin `sudo`, desde live USB, pendrive FAT32/exFAT).
- [ ] Probar en un **Mac real** (Intel y Apple Silicon si es posible); revisar que `system_profiler` entregue los campos esperados.
- [ ] Probar en **WinPE** / Hiren's BootCD PE.

### Gestión ITIL (ver `contexto.md`)
- [x] Piezas como **registros propios** (`kind: "pieza"`) con estado (Instalada, En stock, En reparación, Retirada, Dada de baja), equipo actual (`installedIn`) e **historial** (`history`). Lo integrado vive dentro de su placa base o procesador (`integrated`).
- [x] Ficha de pieza con acciones **Instalar / Mover / Retirar** y su historial; ficha de equipo con sus piezas instaladas y las que estuvieron antes.
- [ ] Crear piezas nuevas desde la interfaz (hoy: Collector, fotos o a mano en `equipos.json`); el formulario permite editar piezas existentes.
- [ ] Al reimportar un equipo con el Collector, detectar piezas que ya no están (hoy solo se agregan nuevas y se anota "Detectada" en las conocidas).
- [ ] Nuevos tipos de elementos: routers, switches, módulos.

### Problemas conocidos
- [ ] **Instaladores en GitHub Pages:** los `.EXE` de `Devices/` están en Git LFS y GitHub Pages sirve solo el puntero LFS, no el archivo. Los enlaces locales de la Brother funcionan en Live Server pero no en el sitio publicado.
- [ ] Si un equipo no tiene usuario asignado, la tarjeta muestra la ubicación ("Hogar") como usuario.
- [ ] Los cambios hechos en la app en otro computador quedan solo en ese navegador. Para integrarlos al proyecto: **Descargar equipos.json** → reemplazar el archivo del repositorio → commit.

---

## 🔁 Flujo de trabajo acordado
- Cada cambio se prueba en el navegador (Live Server) antes de commitear.
- Commit y push a `main` solo con confirmación explícita.
- Fotos de equipos: nombres descriptivos `<marca>_<modelo>_<contenido>.jpg` en `img/` y en la carpeta original; accesorios con prefijo del equipo (ej. `acer_e3-112_cargador_...`). Imágenes comerciales: `*_comercial.jpg`; de componentes: `componente_*`.
- Datos deducidos (no leídos de una etiqueta) se marcan como "deducido" o "pendiente de confirmar".
- Registros del Collector: copiar a `Collector/Registros/` y agregar el equipo con el mismo convertidor de la app (`collectorReportToDevice`).
