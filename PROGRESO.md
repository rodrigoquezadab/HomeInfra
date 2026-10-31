# HomeInfra: Progreso y Pendientes

Registro de dónde quedó el trabajo y qué falta por hacer en la próxima sesión. Actualizar al cerrar cada sesión.

**Última sesión:** 2026-10-31
**Último commit al cierre:** `81d5c2f` (más el commit que agrega este archivo)
**Sitio publicado:** https://rodrigoquezadab.github.io/HomeInfra/ (GitHub Pages, rama `main`)
**Servidor local:** Live Server en `http://localhost:5500` (`.claude/launch.json`)

---

## ✅ Dónde quedamos

### Inventario (`equipos.json`)
| # | Equipo | Tipo | Estado del registro |
|---|--------|------|---------------------|
| 1 | Brother DCP-1602 | Impresora | Completo, salvo número de serie (pendiente). |
| 2 | MSI Modern 14 B5M-011CL | Laptop | Datos de etiqueta y 6 fotos. CPU y RAM deducidos del SKU; almacenamiento sin registrar. |
| 3 | Acer Aspire E3-112-C6ME | Laptop | Datos de etiqueta y 4 fotos. CPU, RAM y almacenamiento sin registrar. |
| 4 | Lite-On PA-1650-02 | Periférico (cargador) | Cargador del Acer E3-112, enlazado en sus componentes (`deviceId`). Compatible (19V; 3.42A ≥ 2.1A), pero no es el original de fábrica (fabricado en 2008). |
| 5 | PC armado: Core i5-12400F · MSI PRO H610M-G DDR4 | Desktop | Registrado con el Collector (`Collector/Registros/MSI_MS-7D46_20261031-192112.json`). Sin serie de equipo: se usa la serie de la placa base. Sin fotos. |

### App
- Limpieza de referencias a la app anterior (MetaGroup / MetaDrivers).
- Al abrir la app, los equipos nuevos de `equipos.json` se agregan solos al inventario del navegador; los eliminados no vuelven (`homeinfra_repo_seen_ids` en localStorage).
- Campo `components` en los equipos (base de la visión ITIL): categoría, modelo, serie, capacidad, `replaceable` y `deviceId` para accesorios registrados aparte.
- `contexto.md` se genera desde la app e incluye directiva de desarrollo, visión ITIL, componentes y fotografías de cada equipo.

### HomeInfra Collector (`Collector/`)
- Scripts para Windows (`HomeInfra-Collector.ps1` + `Ejecutar-Collector.bat`), Linux (`homeinfra-collector.sh`) y macOS (`homeinfra-collector-macos.js` + `Ejecutar-Collector.command`). Mismo formato JSON (`schema: homeinfra-collector`).
- Botón **Collector** en la app: comando de una línea por sistema operativo, carpeta de destino editable (por ejemplo, un pendrive) e importación de varios registros a la vez.
- Probado: Windows en un ThinkPad T14 Gen 2a (PowerShell 5.1 y 7, ejecución local y desde GitHub). Linux solo sobre un sistema simulado; macOS solo revisión de sintaxis.

---

## 📋 Pendiente para la próxima sesión

### Datos de equipos
- [ ] Ejecutar el Collector en el **Acer E3-112** para registrar CPU, RAM y almacenamiento.
- [ ] Ejecutar el Collector en el **MSI Modern 14** para confirmar CPU/RAM y registrar el almacenamiento.
- [ ] Registrar el número de serie de la **Brother DCP-1602**.
- [ ] **PC armado (i5-12400F):** activar XMP en la BIOS (la RAM de 3600 MT/s funciona a 2667; la plataforma admite hasta 3200), agregar fotos y registrar el monitor LG TV como equipo propio si corresponde.
- [ ] Revisar la carpeta `C:\Users\ThinkPad\Desktop\pcs` por más equipos o accesorios por registrar.

### HomeInfra Collector
- [ ] Probar en un **Linux real** (con y sin `sudo`, desde live USB, pendrive FAT32/exFAT).
- [ ] Probar en un **Mac real** (Intel y Apple Silicon si es posible); revisar que `system_profiler` entregue los campos esperados.
- [ ] Probar en **WinPE** / Hiren's BootCD PE.

### Gestión ITIL (ver `contexto.md`)
- [ ] Mostrar los **componentes** de cada equipo en la ficha de la app (hoy solo están en datos y en Observaciones).
- [ ] Registrar piezas como **elementos independientes** (RAM, discos, cargadores) con estado: En stock, Instalada, En reparación, Retirada, Dada de baja.
- [ ] **Historial de cambios** por equipo (fecha, motivo, pieza retirada, pieza instalada).
- [ ] Permitir enlazar accesorios a equipos desde la interfaz (hoy el enlace del cargador se cargó a mano en `equipos.json`).
- [ ] Nuevos tipos de elementos: partes de computador, routers, switches, módulos.

### Problemas conocidos
- [ ] **Instaladores en GitHub Pages:** los `.EXE` de `Devices/` están en Git LFS y GitHub Pages sirve solo el puntero LFS, no el archivo. Los enlaces locales de la Brother funcionan en Live Server pero no en el sitio publicado.
- [ ] Si un equipo no tiene usuario asignado, la tarjeta muestra la ubicación ("Hogar") como usuario.
- [ ] Los cambios hechos en la app en otro computador quedan solo en ese navegador. Para integrarlos al proyecto: **Descargar equipos.json** → reemplazar el archivo del repositorio → commit.

---

## 🔁 Flujo de trabajo acordado
- Cada cambio se prueba en el navegador (Live Server) antes de commitear.
- Commit y push a `main` solo con confirmación explícita.
- Fotos de equipos: nombres descriptivos `<marca>_<modelo>_<contenido>.jpg` en `img/` y en la carpeta original; accesorios con prefijo del equipo (ej. `acer_e3-112_cargador_...`).
- Datos deducidos (no leídos de una etiqueta) se marcan como "deducido" o "pendiente de confirmar".
