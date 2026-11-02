# HomeInfra: Progreso y Pendientes

Registro de dónde quedó el trabajo y qué falta por hacer en la próxima sesión. Actualizar al cerrar cada sesión.

**Última sesión:** 2026-10-31
**Último commit de código al cierre:** `a4e4a0f` (más el commit que actualiza este archivo)
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
- [ ] Mostrar los **componentes** dentro de la ficha detallada de cada equipo (hoy en la vista de componentes y en Observaciones).
- [ ] Registrar piezas como **elementos independientes** (RAM, discos, cargadores) con estado: En stock, Instalada, En reparación, Retirada, Dada de baja.
- [ ] **Historial de cambios** por equipo (fecha, motivo, pieza retirada, pieza instalada).
- [ ] Permitir agregar, editar y enlazar componentes desde la interfaz (hoy se cargan desde el Collector o a mano en `equipos.json`).
- [ ] Nuevos tipos de elementos: partes de computador, routers, switches, módulos.

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
