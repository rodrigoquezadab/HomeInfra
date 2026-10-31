# Contexto del Proyecto: HomeInfra - Inventario de Equipos Personales

## 📌 Descripción General
Este archivo documenta el registro y contexto de los equipos tecnológicos personales de **HomeInfra**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows**, **observaciones técnicas e historial**, control de consumibles (tóner y tambor), instaladores locales descargados y enlaces directos para la descarga de controladores (drivers) oficiales.

La base de datos principal estructurada reside en el archivo [`equipos.json`](equipos.json) y se administra interactivamente a través de la aplicación web local `HomeInfra` (`index.html`, `style.css`, `app.js`).

---

## ⚠️ Directiva de Desarrollo y Alcance (Regla Estricta)
> **REGLA FUNDAMENTAL:**
> Evitar estrictamente cambiar, crear o implementar funcionalidades, textos o componentes que no vayan en directa y exclusiva relación con lo que el usuario solicita puntualmente.
> - No asumir requerimientos no pedidos.
> - No agregar elementos estéticos ni funcionales que no hayan sido solicitados expresamente.
> - No alterar partes del sistema ni comportamientos fuera del alcance directo de la petición actual.

---

## 💻 Resumen de Equipos Registrados

| # | Tipo | Marca | Modelo | Fabricación / Lanzamiento | CPU | RAM | GPU | Usuario Asignado | Serie / Activo | Instalador / Driver Principal |
|---|------|-------|--------|---------------------------|-----|-----|-----|------------------|----------------|-------------------------------|
| 1 | Impresora | Brother | DCP-1602 | `2015` | N/A (Multifuncional Láser) | 16 MB Estándar | N/A | Rodrigo | Pendiente | [Instalador Local Paquete Completo (Devices)](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE) |

---

## 📋 Fichas Técnicas Detalladas de Equipos

### 1. Brother DCP-1602
![Brother DCP-1602](img/brother_dcp1602.jpg)

- **Tipo:** Impresora
- **Marca:** Brother
- **Modelo:** DCP-1602
- **Número de Serie / Activo:** Pendiente
- **Fecha de Fabricación / Lanzamiento:** 2015
- **Usuario(s) Asignado(s):** Rodrigo
- **Asignación / Ubicación:** Hogar
- **Especificaciones:**
  - **Tipo de impresión:** Multifuncional láser monocromática (imprime, copia y escanea)
  - **Conectividad:** USB 2.0 de alta velocidad
  - **Velocidad de impresión:** Hasta 20 ppm
  - **Resolución:** Hasta 2400 x 600 dpi
  - **Capacidad de papel:** Bandeja de 150 hojas
- **Consumibles de Impresora:**
  - **Tóner:** Brother TN-1060 (~1.000 páginas)
  - **Unidad de Tambor:** Brother DR-1060 (~10.000 páginas)
- **Archivos Locales Guardados (`Devices/Brother DCP-1602/`):**
  - **Paquete Completo de Controladores y Software:** [`Y14G_C1_U-inst-B1.EXE`](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE) *(279.5 MB)*
  - **Software Brother iPrint&Scan:** [`iPrintScan-Setup-17_0_20_2.exe`](Devices/Brother%20DCP-1602/iPrintScan-Setup-17_0_20_2.exe) *(370.4 MB)*
- **Enlaces Oficiales Web (Respaldo en Línea):**
  - [Descargar Paquete Completo Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=mx&lang=es&prod=dcp1602_us&os=10068&dlid=dlf106152_000&flang=27&type3=11)
  - [Descargar Brother iPrint&Scan Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=us_ot&lang=en&prod=dcpt420w_all&os=10068&dlid=dlf106359_000&flang=4&type3=10272)
- **Notas Técnicas:** Multifuncional láser monocromática (impresora, copiadora y escáner de cama plana). Conexión USB 2.0 de alta velocidad. Velocidad de impresión hasta 20 ppm. Resolución de hasta 2400 x 600 dpi.
- **Observaciones:** Equipo multifuncional personal de Rodrigo. Utiliza cartucho de tóner Brother TN-1060 (~1.000 páginas) y unidad de tambor Brother DR-1060 (~10.000 páginas).
