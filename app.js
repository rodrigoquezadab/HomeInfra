/**
 * HomeInfra - Aplicación de Registro de Equipos y Soporte de Drivers
 */

// Base de datos predeterminada con imágenes de referencia, specs, credenciales y observaciones
const DEFAULT_DEVICES = [
  {
    id: "dev-brother-dcp1602",
    brand: "Brother",
    model: "DCP-1602",
    type: "Impresora",
    serial: "",
    assignedUser: "Rodrigo",
    location: "Hogar",
    imageUrl: "img/brother_dcp1602_comercial.jpg",
    driverUrl: "Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE",
    windowsUser: "",
    windowsPassword: "",
    notes: "Multifuncional láser monocromática (impresora, copiadora y escáner de cama plana). Conectividad USB 2.0 de alta velocidad. Velocidad de impresión hasta 20 ppm. Resolución de hasta 2400 x 600 dpi.",
    observaciones: "Equipo multifuncional personal de Rodrigo. Utiliza cartucho de tóner Brother TN-1060 (~1.000 páginas) y unidad de tambor Brother DR-1060 (~10.000 páginas).\n\nArchivos Locales Guardados (Carpeta Devices):\n• [Instalador Paquete Completo de Controladores y Software (Y14G_C1_U-inst-B1.EXE)](Devices/Brother%20DCP-1602/Y14G_C1_U-inst-B1.EXE) (279.5 MB)\n• [Instalador Brother iPrint&Scan (iPrintScan-Setup-17_0_20_2.exe)](Devices/Brother%20DCP-1602/iPrintScan-Setup-17_0_20_2.exe) (370.4 MB)\n\nEnlaces Oficiales Web (Respaldo en Línea):\n• [Descargar Paquete Completo Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=mx&lang=es&prod=dcp1602_us&os=10068&dlid=dlf106152_000&flang=27&type3=11)\n• [Descargar Brother iPrint&Scan Oficial (Brother Web)](https://support.brother.com/g/b/downloadhowto.aspx?c=us_ot&lang=en&prod=dcpt420w_all&os=10068&dlid=dlf106359_000&flang=4&type3=10272)",
    localFiles: [
      {
        name: "Paquete Completo de Controladores y Software (DCP-1602)",
        file: "Y14G_C1_U-inst-B1.EXE",
        path: "Devices/Brother DCP-1602/Y14G_C1_U-inst-B1.EXE",
        size: "279.5 MB"
      },
      {
        name: "Brother iPrint&Scan (v17.0.20.2)",
        file: "iPrintScan-Setup-17_0_20_2.exe",
        path: "Devices/Brother DCP-1602/iPrintScan-Setup-17_0_20_2.exe",
        size: "370.4 MB"
      }
    ],
    supplies: {
      toner: {
        model: "Brother TN-1060",
        lastWarningDate: "",
        lastReplacedDate: ""
      },
      drum: {
        model: "Brother DR-1060",
        lastWarningDate: "",
        lastReplacedDate: ""
      }
    },
    updatedAt: "2026-10-25",
    mfgDate: "2015",
    images: [
      {
        id: "img-brother-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/brother_dcp1602_comercial.jpg"
      },
      {
        id: "img-brother-referencia",
        name: "Imagen de referencia anterior (ilustración)",
        url: "img/brother_dcp1602.jpg"
      }
    ]
  },
  {
    id: "dev-msi-modern14-b5m",
    brand: "MSI",
    model: "Modern 14 B5M-011CL",
    type: "Laptop",
    serial: "K2106N0089559",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/msi_modern14_comercial.jpg",
    driverUrl: "https://www.msi.com/Business-Productivity/Modern-14-B5SX/support",
    windowsUser: "",
    windowsPassword: "",
    notes: "Notebook MSI Modern 14 (Model No. MS-14DL). Wi-Fi Intel Wi-Fi 6 AX200 (AX200NGW). Alimentación DC 19V ⎓ 3.42A.",
    observaciones: "Datos de la etiqueta inferior:\n• SKU: Modern 14 B5M-011CL-GGAR555U8GXXDX10S\n• S/N: K2106N0089559\n• MFG: 2021/06\n• CHK: 264\n• Model No.: MS-14DL\n• DC Rating: 19V ⎓ 3.42A\n• Wi-Fi: Intel Wi-Fi 6 AX200 (Model AX200NGW)\n\nCPU, RAM y GPU deducidos del SKU (R555U = AMD Ryzen 5 5500U, 8G = 8 GB RAM); pendiente confirmar en el equipo. Almacenamiento no registrado.\n\nLa etiqueta del número de serie está desgastada (ver fotos 2026); la foto de 2023 conserva la lectura completa.",
    specs: {
      cpu: {
        model: "AMD Ryzen 5 5500U",
        year: 2021,
        cores: "6 núcleos / 12 hilos",
        speed: "2.1 - 4.0 GHz",
        details: "Deducido del SKU (GGAR555U)",
        benchmark: {
          source: "PassMark",
          multi: 12574,
          single: 2385,
          url: "https://www.cpubenchmark.net/cpu.php?id=4141",
          date: "2026-11-01"
        }
      },
      ram: {
        capacity: "8 GB",
        type: "",
        speed: "",
        details: "Deducido del SKU (U8G)"
      },
      gpu: {
        model: "AMD Radeon Graphics",
        type: "Integrada",
        details: "Integrada en el Ryzen 5 5500U"
      },
      storage: ""
    },
    images: [
      {
        id: "img-msi-comercial",
        name: "Imagen comercial (Icecat, Modern 14 B5M)",
        url: "img/msi_modern14_comercial.jpg"
      },
      {
        id: "img-msi-etiqueta-2023",
        name: "Etiqueta SKU / S/N (2023)",
        url: "img/msi_modern14_etiqueta_2023.jpg"
      },
      {
        id: "img-msi-etiqueta-2026",
        name: "Etiqueta SKU / S/N (2026, desgastada)",
        url: "img/msi_modern14_etiqueta_2026.jpg"
      },
      {
        id: "img-msi-fabricacion",
        name: "MFG 2021/06 · CHK 264",
        url: "img/msi_modern14_fabricacion.jpg"
      },
      {
        id: "img-msi-modelo",
        name: "Model No. MS-14DL",
        url: "img/msi_modern14_modelo_ms14dl.jpg"
      },
      {
        id: "img-msi-alimentacion",
        name: "DC Rating 19V 3.42A",
        url: "img/msi_modern14_alimentacion.jpg"
      },
      {
        id: "img-msi-wifi",
        name: "Wi-Fi Intel AX200",
        url: "img/msi_modern14_wifi_ax200.jpg"
      }
    ],
    mfgDate: "2021-06",
    updatedAt: "2026-11-01"
  },
  {
    id: "dev-acer-e3-112",
    brand: "Acer",
    model: "Aspire E3-112-C6ME",
    type: "Laptop",
    serial: "NXMRLAL004434177F97600",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/acer_e3-112_comercial.jpg",
    driverUrl: "https://www.acer.com/latam-es/support/product-support/E3-112",
    windowsUser: "",
    windowsPassword: "",
    notes: "Notebook Acer Aspire E3-112 series (RMN ZHK). Wi-Fi + Bluetooth combo QCWB335. Alimentación DC 19V ⎓ 2.1A.",
    observaciones: "Datos de la etiqueta inferior:\n• Modelo: E3-112-C6ME (E3-112 series)\n• S/N: NXMRLAL004434177F97600\n• SNID: 43409624976\n• MFG Date: 2014/08/23\n• RMN: ZHK\n• DC Rating: 19V ⎓ 2.1A\n• WLAN + Bluetooth: QCWB335 (FCC ID PPD-QCWB335)\n\nCargador asignado: Lite-On PA-1650-02 (19V ⎓ 3.42A, 65W), S/N AP06503016824OB7E6P606. Registrado como equipo aparte (dev-acer-e3-112-cargador).\n\nCPU, RAM y almacenamiento no figuran en las etiquetas; pendiente registrarlos con el HomeInfra Collector.",
    images: [
      {
        id: "img-acer-comercial",
        name: "Imagen comercial (Icecat, Aspire E3-112)",
        url: "img/acer_e3-112_comercial.jpg"
      },
      {
        id: "img-acer-etiqueta-serie",
        name: "Etiqueta modelo / S/N / MFG",
        url: "img/acer_e3-112_etiqueta_serie.jpg"
      },
      {
        id: "img-acer-etiqueta-wifi",
        name: "Etiqueta WLAN + Bluetooth QCWB335",
        url: "img/acer_e3-112_etiqueta_wifi_qcwb335.jpg"
      },
      {
        id: "img-acer-cargador-etiqueta",
        name: "Cargador: etiqueta Lite-On PA-1650-02",
        url: "img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg"
      },
      {
        id: "img-acer-cargador-vista",
        name: "Cargador: vista general",
        url: "img/acer_e3-112_cargador_vista_general.jpg"
      }
    ],
    mfgDate: "2014-08-23",
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-acer-e3-112-nic-1",
    hardwareType: "NIC",
    brand: "Qualcomm Atheros",
    model: "WLAN + Bluetooth combo QCWB335",
    serial: "",
    capacity: "",
    details: "FCC ID PPD-QCWB335",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=WLAN%20%2B%20Bluetooth%20combo%20QCWB335%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2012",
    status: "Instalada",
    installedIn: "dev-acer-e3-112",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-acer-e3-112",
        note: "Registrada desde las etiquetas del equipo"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2012",
    yearNote: "Año de certificación según la etiqueta"
  },
  {
    id: "dev-acer-e3-112-cargador",
    brand: "Lite-On",
    model: "PA-1650-02 (Adaptador AC 65W)",
    type: "Pieza",
    serial: "AP06503016824OB7E6P606",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/acer_e3-112_cargador_vista_general.jpg",
    driverUrl: "https://www.acer.com/latam-es/support/product-support/E3-112",
    windowsUser: "",
    windowsPassword: "",
    notes: "Cargador del Acer Aspire E3-112-C6ME (S/N NXMRLAL004434177F97600). Entrada 100-240V ~ 1.6A 50-60Hz. Salida 19V ⎓ 3.42A, 65W, centro positivo. Conector de punta amarilla.",
    observaciones: "Datos de la etiqueta:\n• Fabricante: Lite-On Technology Corporation\n• Modelo: PA-1650-02\n• Entrada: 100-240V ~ 1.6A, 50-60Hz\n• Salida: 19V ⎓ 3.42A, 65W (centro positivo)\n• Fecha de fabricación: 2008/06\n• Etiqueta de serie: 8616796906 · AC · Rev: A06\n• Código de barras ADT: AP06503016824OB7E6P606\n\nCompatibilidad: el notebook requiere 19V ⎓ 2.1A; este cargador entrega el mismo voltaje con mayor corriente disponible (3.42A), por lo que es compatible. Por su fecha de fabricación (2008) no es el cargador de fábrica del notebook (2014).\n\nEquipo asociado: Acer Aspire E3-112-C6ME (dev-acer-e3-112).",
    images: [
      {
        id: "img-acer-cargador-vista",
        name: "Vista general con cable y conector",
        url: "img/acer_e3-112_cargador_vista_general.jpg"
      },
      {
        id: "img-acer-cargador-etiqueta",
        name: "Etiqueta Lite-On PA-1650-02",
        url: "img/acer_e3-112_cargador_etiqueta_liteon_pa-1650-02.jpg"
      },
      {
        id: "img-acer-cargador-serie",
        name: "Código de barras ADT (serie)",
        url: "img/acer_e3-112_cargador_serie_ap06503.jpg"
      },
      {
        id: "img-acer-cargador-advertencia",
        name: "Etiqueta de advertencia de temperatura",
        url: "img/acer_e3-112_cargador_advertencia_temperatura.jpg"
      }
    ],
    mfgDate: "2008-06",
    updatedAt: "2026-11-02",
    hardwareType: "Cargador",
    kind: "pieza",
    replaceable: true,
    status: "Instalada",
    installedIn: "dev-acer-e3-112",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-acer-e3-112",
        note: "Cargador asignado al Acer E3-112"
      }
    ],
    capacity: "65 W",
    details: "19V ⎓ 3.42A"
  },
  {
    id: "dev-pc-i5-12400f-h610m",
    brand: "PC armado",
    model: "Core i5-12400F · MSI PRO H610M-G DDR4",
    type: "Desktop",
    serial: "07D4612_M21D142444",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/intel_i5-12400f_caja.jpg",
    driverUrl: "https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/support",
    windowsUser: "",
    windowsPassword: "",
    notes: "PC de escritorio armado. Placa base MSI PRO H610M-G DDR4 (MS-7D46), Intel Core i5-12400F, 16 GB DDR4 Corsair Vengeance LPX (2 × 8 GB), NVIDIA GeForce GTX 1660 SUPER, SSD WD Blue SN570 500 GB y HDD WD 80 GB. Nombre en red: DESKTOP-QIPN19H. Microsoft Windows 11 Pro (10.0.26200), instalado el 2026-10-01.",
    observaciones: "El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.\nLa RAM Corsair CMK8GX4M1Z3600C18 es de 3600 MT/s pero funciona a 2667 MT/s: el perfil XMP no está activado en la BIOS. El chipset H610 y el i5-12400F admiten DDR4 hasta 3200 MT/s.\nEl HDD WDC WD800BD (80 GB) es una unidad antigua; Windows no informa su tipo (se registra como HDD por el modelo).\n\nRegistro HomeInfra Collector (2026-10-31 19:21:12):\n• BIOS: American Megatrends International, LLC. 1.H0 (2024-03-25)\n• CPU: 12th Gen Intel(R) Core(TM) i5-12400F (6 núcleos / 12 hilos socket U3E1)\n• RAM: Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller0-DIMMA1])\n• RAM: Corsair CMK8GX4M1Z3600C18 8 GB (DDR4 DIMM 2667 MT/s [Controller1-DIMMB1])\n• Almacenamiento: WD Blue SN570 500GB 466 GB (SSD NVMe) · S/N E823_8FA6_BF53_0001_001B_448B_4569_B02C.\n• Almacenamiento: WDC WD800BD-22MRA1 75 GB (SATA) · S/N WD-WMAM9AMY4260\n• GPU: NVIDIA GeForce GTX 1660 SUPER 4 GB (NVIDIA)\n• Red: Intel(R) Ethernet Connection (17) I219-V (MAC 04:7C:16:05:0E:B3)\n• Placa base: Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46) (1.0) · S/N 07D4612_M21D142444",
    specs: {
      cpu: {
        model: "12th Gen Intel(R) Core(TM) i5-12400F",
        cores: "6 núcleos / 12 hilos",
        speed: "2.5 GHz",
        details: "",
        benchmark: {
          source: "PassMark",
          multi: 19524,
          single: 3483,
          url: "https://www.cpubenchmark.net/cpu.php?id=4681",
          date: "2026-11-01"
        },
        year: 2022
      },
      ram: {
        capacity: "16 GB",
        type: "DDR4",
        speed: "2667 MT/s",
        details: "2 de 2 ranuras usadas"
      },
      gpu: {
        model: "NVIDIA GeForce GTX 1660 SUPER",
        type: "Dedicada",
        details: ""
      },
      storage: "SSD NVMe 466 GB + HDD SATA 75 GB"
    },
    mfgDate: "2022 (lanzamiento de la plataforma Intel H610)",
    updatedAt: "2026-11-02",
    images: [
      {
        id: "img-i5-caja",
        name: "Caja del Intel Core i5-12400F",
        url: "img/intel_i5-12400f_caja.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-cpu-1",
    hardwareType: "CPU",
    brand: "Intel",
    model: "12th Gen Intel(R) Core(TM) i5-12400F",
    serial: "",
    capacity: "",
    details: "6 núcleos / 12 hilos socket U3E1",
    replaceable: true,
    imageUrl: "img/componente_cpu_intel_core_i5.png",
    driverUrl: "https://www.google.com/search?q=12th%20Gen%20Intel(R)%20Core(TM)%20i5-12400F%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2022",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2022",
    yearNote: "Año de lanzamiento",
    benchmark: {
      source: "PassMark",
      multi: 19524,
      single: 3483,
      url: "https://www.cpubenchmark.net/cpu.php?id=4681",
      date: "2026-11-01"
    }
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-ram-1",
    hardwareType: "RAM",
    brand: "Corsair",
    model: "Corsair CMK8GX4M1Z3600C18",
    serial: "",
    capacity: "8 GB",
    details: "DDR4 DIMM 2667 MT/s [Controller0-DIMMA1] · módulo de 3600 MT/s funcionando a 2667 MT/s",
    replaceable: true,
    imageUrl: "img/componente_ram_corsair_vengeance_lpx.png",
    driverUrl: "https://www.google.com/search?q=Corsair%20CMK8GX4M1Z3600C18%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-ram-2",
    hardwareType: "RAM",
    brand: "Corsair",
    model: "Corsair CMK8GX4M1Z3600C18",
    serial: "",
    capacity: "8 GB",
    details: "DDR4 DIMM 2667 MT/s [Controller1-DIMMB1] · módulo de 3600 MT/s funcionando a 2667 MT/s",
    replaceable: true,
    imageUrl: "img/componente_ram_corsair_vengeance_lpx.png",
    driverUrl: "https://www.google.com/search?q=Corsair%20CMK8GX4M1Z3600C18%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-ssd-1",
    hardwareType: "SSD",
    brand: "Western Digital",
    model: "WD Blue SN570 500GB",
    serial: "E823_8FA6_BF53_0001_001B_448B_4569_B02C.",
    capacity: "466 GB",
    details: "SSD NVMe",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=WD%20Blue%20SN570%20500GB%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2021",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2021",
    yearNote: "Año de lanzamiento"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-hdd-1",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WDC WD800BD-22MRA1",
    serial: "WD-WMAM9AMY4260",
    capacity: "75 GB",
    details: "HDD SATA",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=WDC%20WD800BD-22MRA1%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-gpu-1",
    hardwareType: "GPU",
    brand: "NVIDIA",
    model: "NVIDIA GeForce GTX 1660 SUPER",
    serial: "",
    capacity: "4 GB",
    details: "NVIDIA",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=NVIDIA%20GeForce%20GTX%201660%20SUPER%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2019",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2019",
    yearNote: "Año de lanzamiento"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i5-12400f-h610m-placabase-1",
    hardwareType: "PlacaBase",
    brand: "MSI",
    model: "Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46)",
    serial: "07D4612_M21D142444",
    capacity: "",
    details: "1.0",
    replaceable: true,
    imageUrl: "img/componente_placa_msi_pro_h610m-g_ddr4.jpg",
    driverUrl: "https://www.google.com/search?q=Micro-Star%20International%20Co.%2C%20Ltd.%20PRO%20H610M-G%20DDR4%20(MS-7D46)%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2022",
    status: "Instalada",
    installedIn: "dev-pc-i5-12400f-h610m",
    history: [
      {
        date: "2026-10-31",
        action: "Instalada",
        deviceId: "dev-pc-i5-12400f-h610m",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2022",
    yearNote: "Año de lanzamiento",
    features: [
      {
        label: "Formato",
        value: "Micro-ATX"
      },
      {
        label: "Socket / chipset",
        value: "LGA 1700 · Intel H610 (procesadores Intel Core 12.ª, 13.ª y 14.ª gen.)"
      },
      {
        label: "Memoria",
        value: "2 ranuras DDR4 · doble canal · hasta 64 GB · 2133 / 2666 / 2933 / 3200 MHz"
      },
      {
        label: "Expansión",
        value: "1 × PCIe 4.0 x16 (desde la CPU) · 1 × PCIe 3.0 x1"
      },
      {
        label: "Almacenamiento",
        value: "4 × SATA 6 Gb/s · 1 × M.2 Key M PCIe 3.0 x4 (2242 / 2260 / 2280; un SSD M.2 SATA desactiva SATA7)"
      },
      {
        label: "USB",
        value: "4 × USB 3.2 Gen 1 5 Gb/s (2 traseros, 2 por conector interno) · 6 × USB 2.0 (4 traseros, 2 internos)"
      },
      {
        label: "Red",
        value: "Intel I219-V · 1 Gb/s"
      },
      {
        label: "Audio",
        value: "Realtek ALC892 / ALC897 · 7.1 canales HD"
      },
      {
        label: "Salidas de video",
        value: "HDMI · VGA · DisplayPort (no funcionan con el i5-12400F, que no tiene gráficos integrados)"
      },
      {
        label: "Panel trasero",
        value: "PS/2 teclado/ratón · HDMI · VGA · DisplayPort · 2 × USB 3.2 Gen 1 · 4 × USB 2.0 · LAN · audio"
      }
    ],
    featuresSource: {
      url: "https://www.msi.com/Motherboard/PRO-H610M-G-DDR4/Specification",
      date: "2026-11-02"
    },
    integrated: [
      {
        hardwareType: "NIC",
        brand: "Intel",
        model: "Intel(R) Ethernet Connection (17) I219-V",
        details: "MAC 04:7C:16:05:0E:B3"
      }
    ]
  },
  {
    id: "dev-pc-q6700-p5g41t-m-lx",
    brand: "PC armado",
    model: "Core 2 Quad Q6700 · ASUS P5G41T-M LX",
    type: "Desktop",
    serial: "107933150000113",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "",
    driverUrl: "https://www.asus.com/supportonly/p5g41t-m%20lx/helpdesk_download/",
    windowsUser: "",
    windowsPassword: "",
    notes: "PC de escritorio armado. Placa base ASUS P5G41T-M LX (chipset Intel G41), Intel Core 2 Quad Q6700, 8 GB de RAM (2 × 4 GB), gráficos integrados Intel G41 y red Qualcomm Atheros AR8131.",
    observaciones: "El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.\nWindows informó 2 núcleos / 2 hilos; el modelo tiene 4 núcleos / 4 hilos según la especificación de Intel. Probablemente el Windows del SSD compartido tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas).\nRegistrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.\n\nRegistro HomeInfra Collector (2026-11-01 21:02:05):\n• BIOS: American Megatrends Inc. 1101 (2012-06-07)\n• CPU: Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz (2 núcleos / 2 hilos socket LGA775)\n• RAM: 4 GB (DIMM [DIMM A1])\n• RAM: 4 GB (DIMM [DIMM B1])\n• GPU: Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1) (Intel Corporation)\n• Red: Qualcomm Atheros AR8131 PCI-E Gigabit Ethernet Controller (NDIS 6.30) (MAC BC:AE:C5:28:68:F4)\n• Placa base: ASUSTeK Computer INC. P5G41T-M LX (Rev X.0x) · S/N 107933150000113",
    specs: {
      cpu: {
        model: "Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz",
        cores: "4 núcleos / 4 hilos",
        speed: "2.7 GHz",
        details: "Windows informó 2 núcleos / 2 hilos",
        benchmark: {
          source: "PassMark",
          multi: 2092,
          single: 1073,
          url: "https://www.cpubenchmark.net/cpu.php?id=1039",
          date: "2026-11-01"
        },
        year: 2007
      },
      ram: {
        capacity: "8 GB",
        type: "DDR3",
        speed: "",
        details: "2 de 2 ranuras usadas · tipo DDR3 deducido del modelo de placa"
      },
      gpu: {
        model: "Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1)",
        type: "Integrada",
        details: ""
      },
      storage: "Sin disco propio (usa el SSD de Windows compartido)"
    },
    mfgDate: "2008 (lanzamiento del chipset Intel G41)",
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-q6700-p5g41t-m-lx-cpu-1",
    hardwareType: "CPU",
    brand: "Intel",
    model: "Intel(R) Core(TM)2 Quad CPU Q6700 @ 2.66GHz",
    serial: "",
    capacity: "",
    details: "4 núcleos / 4 hilos socket LGA775",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Intel(R)%20Core(TM)2%20Quad%20CPU%20Q6700%20%40%202.66GHz%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2007",
    status: "Instalada",
    installedIn: "dev-pc-q6700-p5g41t-m-lx",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-q6700-p5g41t-m-lx",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2007",
    yearNote: "Año de lanzamiento",
    benchmark: {
      source: "PassMark",
      multi: 2092,
      single: 1073,
      url: "https://www.cpubenchmark.net/cpu.php?id=1039",
      date: "2026-11-01"
    }
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-q6700-p5g41t-m-lx-ram-1",
    hardwareType: "RAM",
    brand: "",
    model: "Módulo RAM DDR3 4 GB (fabricante sin informar)",
    serial: "",
    capacity: "4 GB",
    details: "DDR3 DIMM [DIMM A1] · tipo deducido del modelo de placa",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-q6700-p5g41t-m-lx",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-q6700-p5g41t-m-lx",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-q6700-p5g41t-m-lx-ram-2",
    hardwareType: "RAM",
    brand: "",
    model: "Módulo RAM DDR3 4 GB (fabricante sin informar)",
    serial: "",
    capacity: "4 GB",
    details: "DDR3 DIMM [DIMM B1] · tipo deducido del modelo de placa",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-q6700-p5g41t-m-lx",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-q6700-p5g41t-m-lx",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-q6700-p5g41t-m-lx-placabase-1",
    hardwareType: "PlacaBase",
    brand: "ASUS",
    model: "ASUSTeK Computer INC. P5G41T-M LX",
    serial: "107933150000113",
    capacity: "",
    details: "Rev X.0x",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=ASUSTeK%20Computer%20INC.%20P5G41T-M%20LX%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2008",
    status: "Instalada",
    installedIn: "dev-pc-q6700-p5g41t-m-lx",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-q6700-p5g41t-m-lx",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2008",
    yearNote: "Año de lanzamiento del chipset Intel G41",
    features: [
      {
        label: "Formato",
        value: "Micro-ATX"
      },
      {
        label: "Socket / chipset",
        value: "LGA 775 · Intel G41 / ICH7"
      },
      {
        label: "Memoria",
        value: "2 ranuras DDR3 · doble canal · hasta 8 GB · 800 / 1066 / 1333 (OC) MHz · no ECC, sin búfer"
      },
      {
        label: "Expansión",
        value: "1 × PCIe x16 · 1 × PCIe x1 · 2 × PCI"
      },
      {
        label: "Almacenamiento",
        value: "4 × SATA 3 Gb/s · 1 × IDE UltraDMA 100/66/33"
      },
      {
        label: "USB",
        value: "8 × USB 2.0 (4 traseros, 4 internos)"
      },
      {
        label: "Red",
        value: "Qualcomm Atheros Gigabit (Windows informó AR8131)"
      },
      {
        label: "Audio",
        value: "Realtek ALC887 · 8 canales · S/PDIF Out"
      },
      {
        label: "Salidas de video",
        value: "VGA (D-Sub) · gráficos integrados Intel G41"
      }
    ],
    featuresSource: {
      url: "https://origin-www.asus.com/Motherboards/P5G41TM_LX/specifications/",
      date: "2026-11-02"
    },
    integrated: [
      {
        hardwareType: "GPU",
        brand: "Intel",
        model: "Intel(R) G41 Express Chipset (Microsoft Corporation - WDDM 1.1)",
        details: "Intel Corporation",
        year: "2008",
        yearNote: "Año de lanzamiento del chipset Intel G41"
      },
      {
        hardwareType: "NIC",
        brand: "Qualcomm Atheros",
        model: "Qualcomm Atheros AR8131 PCI-E Gigabit Ethernet Controller (NDIS 6.30)",
        details: "MAC BC:AE:C5:28:68:F4"
      }
    ]
  },
  {
    id: "dev-pc-e6750-p5q-pro-turbo",
    brand: "PC armado",
    model: "Core 2 Duo E6750 · ASUS P5Q PRO TURBO",
    type: "Desktop",
    serial: "MS1C93BC3400692",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "",
    driverUrl: "https://www.asus.com/supportonly/p5q%20pro%20turbo/helpdesk_download/",
    windowsUser: "",
    windowsPassword: "",
    notes: "PC de escritorio armado. Placa base ASUS P5Q PRO TURBO (chipset Intel P45), Intel Core 2 Duo E6750, 4 GB de RAM DDR2-800 (2 × 2 GB), NVIDIA GeForce 210 y red Atheros AR8121/AR8113/AR8114.",
    observaciones: "El equipo no tiene número de serie propio (PC armado); se usa el número de serie de la placa base como identificador.\n\nRegistrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.\n\nRegistro HomeInfra Collector (2026-11-02 00:04:39):\n• BIOS: American Megatrends Inc. 0701 (2012-10-07)\n• CPU: Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz (2 núcleos / 2 hilos socket LGA 775)\n• RAM: 2 GB (DIMM 800 MT/s [DIMM0])\n• RAM: 2 GB (DIMM 800 MT/s [DIMM2])\n• GPU: NVIDIA GeForce 210 1 GB (NVIDIA)\n• Red: Atheros AR8121/AR8113/AR8114 PCI-E Ethernet Controller (MAC 00:24:8C:6B:E7:F6)\n• Placa base: ASUSTeK Computer INC. P5Q PRO TURBO (Rev 1.xx) · S/N MS1C93BC3400692",
    specs: {
      cpu: {
        model: "Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz",
        cores: "2 núcleos / 2 hilos",
        speed: "2.7 GHz",
        details: "",
        benchmark: {
          source: "PassMark",
          multi: 1031,
          single: 1030,
          url: "https://www.cpubenchmark.net/cpu.php?id=942",
          date: "2026-11-01"
        },
        year: 2007
      },
      ram: {
        capacity: "4 GB",
        type: "DDR2",
        speed: "800 MT/s",
        details: "2 de 4 ranuras usadas · tipo DDR2 deducido del modelo de placa"
      },
      gpu: {
        model: "NVIDIA GeForce 210",
        type: "Dedicada",
        details: ""
      },
      storage: "Sin disco propio (usa el SSD de Windows compartido)"
    },
    mfgDate: "2008 (lanzamiento del chipset Intel P45)",
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-e6750-p5q-pro-turbo-cpu-1",
    hardwareType: "CPU",
    brand: "Intel",
    model: "Intel(R) Core(TM)2 Duo CPU E6750 @ 2.66GHz",
    serial: "",
    capacity: "",
    details: "2 núcleos / 2 hilos socket LGA 775",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Intel(R)%20Core(TM)2%20Duo%20CPU%20E6750%20%40%202.66GHz%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2007",
    status: "Instalada",
    installedIn: "dev-pc-e6750-p5q-pro-turbo",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2007",
    yearNote: "Año de lanzamiento",
    benchmark: {
      source: "PassMark",
      multi: 1031,
      single: 1030,
      url: "https://www.cpubenchmark.net/cpu.php?id=942",
      date: "2026-11-01"
    }
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-e6750-p5q-pro-turbo-ram-1",
    hardwareType: "RAM",
    brand: "",
    model: "Módulo RAM DDR2 2 GB (fabricante sin informar)",
    serial: "",
    capacity: "2 GB",
    details: "DDR2 DIMM 800 MT/s [DIMM0] · tipo deducido del modelo de placa",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-e6750-p5q-pro-turbo",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-e6750-p5q-pro-turbo-ram-2",
    hardwareType: "RAM",
    brand: "",
    model: "Módulo RAM DDR2 2 GB (fabricante sin informar)",
    serial: "",
    capacity: "2 GB",
    details: "DDR2 DIMM 800 MT/s [DIMM2] · tipo deducido del modelo de placa",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-e6750-p5q-pro-turbo",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-e6750-p5q-pro-turbo-gpu-1",
    hardwareType: "GPU",
    brand: "MSI",
    model: "N210-MD1G (NVIDIA GeForce 210)",
    serial: "602-V229-43SB1210038228",
    capacity: "1 GB",
    details: "1 GB GDDR2 · PCIe 2.0 · VGA, DVI, HDMI",
    replaceable: true,
    imageUrl: "img/componente_gpu_msi_n210-md1g.jpg",
    driverUrl: "https://www.msi.com/Graphics-Card/N210-MD1G/support",
    notes: "",
    observaciones: "Identificada por foto como MSI N210-MD1G (Model V229, S/N 602-V229-43SB1210038228, EAN 4719072175504). Se asume que es la GeForce 210 de 1 GB que detectó el Collector en este PC, porque es la única GeForce 210 del inventario; confirmar.",
    mfgDate: "2009",
    status: "Instalada",
    installedIn: "dev-pc-e6750-p5q-pro-turbo",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Detectada por el HomeInfra Collector"
      },
      {
        date: "2026-11-02",
        action: "Identificada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Modelo y serie leídos de la etiqueta (MSI N210-MD1G)"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2009",
    yearNote: "Año de lanzamiento",
    images: [
      {
        id: "img-n210-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/componente_gpu_msi_n210-md1g.jpg"
      },
      {
        id: "img-n210-etiqueta",
        name: "Etiqueta",
        url: "img/gpu_msi_n210-md1g_etiqueta.jpg"
      },
      {
        id: "img-n210-etiqueta-b",
        name: "Etiqueta (otra toma)",
        url: "img/gpu_msi_n210-md1g_etiqueta_b.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-e6750-p5q-pro-turbo-placabase-1",
    hardwareType: "PlacaBase",
    brand: "ASUS",
    model: "ASUSTeK Computer INC. P5Q PRO TURBO",
    serial: "MS1C93BC3400692",
    capacity: "",
    details: "Rev 1.xx",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=ASUSTeK%20Computer%20INC.%20P5Q%20PRO%20TURBO%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2008",
    status: "Instalada",
    installedIn: "dev-pc-e6750-p5q-pro-turbo",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2008",
    yearNote: "Año de lanzamiento del chipset Intel P45",
    features: [
      {
        label: "Formato",
        value: "ATX"
      },
      {
        label: "Socket / chipset",
        value: "LGA 775 · Intel P45 / ICH10R"
      },
      {
        label: "Memoria",
        value: "4 ranuras DDR2 · doble canal · hasta 16 GB · 667 / 800 / 1066 / 1200 / 1300 MHz · no ECC, sin búfer"
      },
      {
        label: "Expansión",
        value: "2 × PCIe 2.0 x16 (CrossFireX a x8) · 3 × PCIe x1 · 2 × PCI"
      },
      {
        label: "Almacenamiento",
        value: "5 × SATA 3 Gb/s (Intel) · 2 × SATA 3 Gb/s (Silicon Image) · 1 × eSATA y 2 × PATA (JMicron)"
      },
      {
        label: "USB",
        value: "12 × USB 2.0 (6 traseros, 6 internos)"
      },
      {
        label: "Red",
        value: "1 × RJ45 Gigabit (Windows informó Atheros AR8121/AR8113/AR8114)"
      },
      {
        label: "Audio",
        value: "VIA VT1708S · 8 canales HD · S/PDIF óptico trasero"
      },
      {
        label: "Salidas de video",
        value: "Sin gráficos integrados (chipset P45): requiere tarjeta de video"
      }
    ],
    featuresSource: {
      url: "https://origin-www.asus.com/motherboards/p5q_pro_turbo/specifications/",
      date: "2026-11-02"
    },
    integrated: [
      {
        hardwareType: "NIC",
        brand: "Qualcomm Atheros",
        model: "Atheros AR8121/AR8113/AR8114 PCI-E Ethernet Controller",
        details: "MAC 00:24:8C:6B:E7:F6"
      }
    ]
  },
  {
    id: "dev-pc-i7-2600k-z77-hd3",
    brand: "PC armado",
    model: "Core i7-2600K · Gigabyte Z77-HD3",
    type: "Desktop",
    serial: "",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/gigabyte_z77-hd3_gabinete_2022.jpg",
    driverUrl: "https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/support",
    windowsUser: "",
    windowsPassword: "",
    notes: "PC de escritorio armado. Placa base Gigabyte Z77-HD3 (chipset Intel Z77), Intel Core i7-2600K, 16 GB DDR3-1600 Kingston HyperX Fury (2 × 8 GB), gráficos integrados Intel HD Graphics 3000 y red Realtek PCIe GbE.",
    observaciones: "El equipo no tiene número de serie propio y la placa no informa el suyo; se identifica por la MAC de red 74:D4:35:11:F0:AC y el UUID 03D40274-0435-0511-F006-AC0700080009.\nWindows informó 1 núcleos / 2 hilos; el modelo tiene 4 núcleos / 8 hilos según la especificación de Intel. Probablemente el Windows del SSD compartido tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas).\nRegistrado arrancando con el SSD de Windows compartido (Patriot Burst Elite 120GB) y el monitor LG TV, registrados aparte como dispositivos generales.\n\nRegistro HomeInfra Collector (2026-11-01 17:53:51):\n• BIOS: American Megatrends Inc. F3 (2013-09-24)\n• CPU: Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz (1 núcleos / 2 hilos)\n• RAM: Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelB-DIMM1]) · S/N 19FA6341\n• RAM: Kingston HX316C10F/8 8 GB (DDR3 DIMM 1600 MT/s [ChannelA-DIMM1]) · S/N 4C33D19F\n• GPU: Intel(R) HD Graphics 3000 (Intel Corporation)\n• Red: Realtek PCIe GbE Family Controller #2 (MAC 74:D4:35:11:F0:AC)\n• Placa base: Gigabyte Technology Co., Ltd. Z77-HD3",
    specs: {
      cpu: {
        model: "Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz",
        cores: "4 núcleos / 8 hilos",
        speed: "3.4 GHz",
        details: "Windows informó 1 núcleos / 2 hilos",
        benchmark: {
          source: "PassMark",
          multi: 5476,
          single: 1740,
          url: "https://www.cpubenchmark.net/cpu.php?id=868",
          date: "2026-11-01"
        },
        year: 2011
      },
      ram: {
        capacity: "16 GB",
        type: "DDR3",
        speed: "1600 MT/s",
        details: "2 de 4 ranuras usadas"
      },
      gpu: {
        model: "Intel(R) HD Graphics 3000",
        type: "Integrada",
        details: ""
      },
      storage: "Sin disco propio (usa el SSD de Windows compartido)"
    },
    mfgDate: "2012 (lanzamiento del chipset Intel Z77)",
    updatedAt: "2026-11-02",
    images: [
      {
        id: "img-z77-gabinete-2022",
        name: "Placa GA-Z77-HD3 en el gabinete, disipador Thermaltake (2022)",
        url: "img/gigabyte_z77-hd3_gabinete_2022.jpg"
      },
      {
        id: "img-z77-placa-2023",
        name: "Placa GA-Z77-HD3 fuera del gabinete (2023)",
        url: "img/gigabyte_z77-hd3_placa_2023.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i7-2600k-z77-hd3-cpu-1",
    hardwareType: "CPU",
    brand: "Intel",
    model: "Intel(R) Core(TM) i7-2600K CPU @ 3.40GHz",
    serial: "",
    capacity: "",
    details: "4 núcleos / 8 hilos",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Intel(R)%20Core(TM)%20i7-2600K%20CPU%20%40%203.40GHz%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2011",
    status: "Instalada",
    installedIn: "dev-pc-i7-2600k-z77-hd3",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-i7-2600k-z77-hd3",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2011",
    yearNote: "Año de lanzamiento",
    benchmark: {
      source: "PassMark",
      multi: 5476,
      single: 1740,
      url: "https://www.cpubenchmark.net/cpu.php?id=868",
      date: "2026-11-01"
    },
    integrated: [
      {
        hardwareType: "GPU",
        brand: "Intel",
        model: "Intel(R) HD Graphics 3000",
        details: "Gráficos integrados del procesador",
        year: "2011",
        yearNote: "Año de lanzamiento (integrada en Core 2.ª gen.)"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i7-2600k-z77-hd3-ram-1",
    hardwareType: "RAM",
    brand: "Kingston",
    model: "Kingston HX316C10F/8",
    serial: "19FA6341",
    capacity: "8 GB",
    details: "DDR3 DIMM 1600 MT/s [ChannelB-DIMM1]",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Kingston%20HX316C10F%2F8%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-i7-2600k-z77-hd3",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-i7-2600k-z77-hd3",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i7-2600k-z77-hd3-ram-2",
    hardwareType: "RAM",
    brand: "Kingston",
    model: "Kingston HX316C10F/8",
    serial: "4C33D19F",
    capacity: "8 GB",
    details: "DDR3 DIMM 1600 MT/s [ChannelA-DIMM1]",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Kingston%20HX316C10F%2F8%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-i7-2600k-z77-hd3",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-i7-2600k-z77-hd3",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-i7-2600k-z77-hd3-placabase-1",
    hardwareType: "PlacaBase",
    brand: "Gigabyte",
    model: "Gigabyte Technology Co., Ltd. Z77-HD3",
    serial: "",
    capacity: "",
    details: "",
    replaceable: true,
    imageUrl: "img/gigabyte_z77-hd3_placa_2023.jpg",
    driverUrl: "https://www.google.com/search?q=Gigabyte%20Technology%20Co.%2C%20Ltd.%20Z77-HD3%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2012",
    status: "Instalada",
    installedIn: "dev-pc-i7-2600k-z77-hd3",
    history: [
      {
        date: "2026-11-01",
        action: "Instalada",
        deviceId: "dev-pc-i7-2600k-z77-hd3",
        note: "Detectada por el HomeInfra Collector"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2012",
    yearNote: "Año de lanzamiento del chipset Intel Z77",
    features: [
      {
        label: "Formato",
        value: "ATX · 30,5 × 21,5 cm"
      },
      {
        label: "Socket / chipset",
        value: "LGA 1155 · Intel Z77"
      },
      {
        label: "Memoria",
        value: "4 ranuras DDR3 1.5V · doble canal · hasta 32 GB · 1066 / 1333 / 1600 MHz (2800 OC); DDR3-1600 requiere CPU Ivy Bridge (22 nm)"
      },
      {
        label: "Expansión",
        value: "1 × PCIe 3.0 x16 · 2 × PCIe x1 · 2 × PCI · AMD CrossFire"
      },
      {
        label: "Almacenamiento",
        value: "2 × SATA 6 Gb/s (SATA3 0/1) · 4 × SATA 3 Gb/s (SATA2 2–5) · RAID 0 / 1 / 5 / 10"
      },
      {
        label: "USB",
        value: "Hasta 4 × USB 3.0 (2 traseros, 2 por conector interno) · hasta 8 × USB 2.0"
      },
      {
        label: "Red",
        value: "Realtek GbE · 10/100/1000 Mb/s"
      },
      {
        label: "Audio",
        value: "Realtek ALC887 · 2 / 4 / 5.1 / 7.1 canales · S/PDIF Out"
      },
      {
        label: "Salidas de video",
        value: "D-Sub (VGA) · DVI-D · HDMI (gráficos integrados del procesador)"
      },
      {
        label: "Otros",
        value: "DualBIOS"
      }
    ],
    featuresSource: {
      url: "https://www.gigabyte.com/Motherboard/GA-Z77-HD3-rev-10/sp",
      date: "2026-11-02"
    },
    integrated: [
      {
        hardwareType: "NIC",
        brand: "Realtek",
        model: "Realtek PCIe GbE Family Controller #2",
        details: "MAC 74:D4:35:11:F0:AC"
      }
    ]
  },
  {
    id: "dev-monitor-lg-tv",
    brand: "LG",
    model: "TV (usado como monitor)",
    type: "Monitor",
    serial: "",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=LG%20TV%20monitor%20soporte%20oficial",
    windowsUser: "",
    windowsPassword: "",
    notes: "Televisor LG usado como monitor compartido entre los PCs de escritorio. Identificado por EDID (fabricante GSM = LG, nombre \"LG TV\").",
    observaciones: "Dispositivo general, no forma parte de ningún equipo.\n\nEl EDID no entrega un número de serie real (16843009 es un valor de relleno) ni el modelo exacto. Año según EDID: 2010 (2011 al conectarse al PC i5-12400F).\n\nDetectado conectado a:\n• Core i5-12400F · MSI PRO H610M-G DDR4 (2026-10-31)\n• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)\n• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)\n• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)",
    mfgDate: "2010",
    updatedAt: "2026-11-01"
  },
  {
    id: "dev-ssd-patriot-burst-elite-120gb",
    brand: "Patriot",
    model: "Burst Elite 120GB (SSD de Windows compartido)",
    type: "Pieza",
    serial: "PBEIIBB21030118778",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/ssd_patriot_burst_elite_120gb_a.jpg",
    driverUrl: "https://www.google.com/search?q=Patriot%20Burst%20Elite%20120GB%20SSD%20soporte",
    windowsUser: "",
    windowsPassword: "",
    notes: "SSD SATA 2.5\" Patriot Burst Elite de 120 GB (111.8 GB útiles), firmware FW200918. Tiene instalado Windows 10 Pro 22H2 (10.0.19045), nombre de equipo \"SERVER\", instalado el 2025-01-28. Se mueve entre PCs para arrancarlos y registrarlos.",
    observaciones: "Dispositivo general, no forma parte de ningún equipo.\n\nEn los PCs con Core 2 Quad Q6700 y Core i7-2600K, Windows informó menos núcleos de los que tiene el procesador. Probablemente este Windows tiene limitado el número de procesadores (msconfig → Arranque → Opciones avanzadas → Número de procesadores).\n\nUsado para arrancar:\n• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)\n• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)\n• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)\n\nFotos del 2026-11-02: la etiqueta frontal (PBE120GS25SSDR · PE000775 · P-2111 · IIBB2111) no muestra número de serie, así que no se puede saber qué foto corresponde a cada unidad.",
    specs: {
      storage: "SSD SATA 120 GB"
    },
    mfgDate: "",
    updatedAt: "2026-11-02",
    hardwareType: "SSD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-01",
        action: "Detectada",
        deviceId: "dev-pc-i7-2600k-z77-hd3",
        note: "Disco de arranque al pasar el Collector"
      },
      {
        date: "2026-11-01",
        action: "Detectada",
        deviceId: "dev-pc-q6700-p5g41t-m-lx",
        note: "Disco de arranque al pasar el Collector"
      },
      {
        date: "2026-11-02",
        action: "Detectada",
        deviceId: "dev-pc-e6750-p5q-pro-turbo",
        note: "Disco de arranque al pasar el Collector"
      }
    ],
    images: [
      {
        id: "img-patriot-a",
        name: "Etiqueta (foto 1)",
        url: "img/ssd_patriot_burst_elite_120gb_a.jpg"
      },
      {
        id: "img-patriot-b",
        name: "Etiqueta (foto 2)",
        url: "img/ssd_patriot_burst_elite_120gb_b.jpg"
      },
      {
        id: "img-patriot-c",
        name: "Etiqueta (foto 3)",
        url: "img/ssd_patriot_burst_elite_120gb_c.jpg"
      },
      {
        id: "img-patriot-d",
        name: "Etiqueta (foto 4)",
        url: "img/ssd_patriot_burst_elite_120gb_d.jpg"
      }
    ]
  },
  {
    id: "dev-ssd-patriot-burst-elite-120gb-2",
    brand: "Patriot",
    model: "Burst Elite 120GB (segunda unidad)",
    type: "Pieza",
    serial: "",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/ssd_patriot_burst_elite_120gb_a.jpg",
    driverUrl: "https://www.google.com/search?q=Patriot%20Burst%20Elite%20120GB%20SSD%20soporte",
    windowsUser: "",
    windowsPassword: "",
    notes: "SSD SATA 2.5\" Patriot Burst Elite de 120 GB, mismo modelo que el SSD de Windows compartido (S/N PBEIIBB21030118778).",
    observaciones: "Dispositivo general, no forma parte de ningún equipo.\n\nNúmero de serie, firmware y contenido pendientes: conectarlo a un PC y ejecutar el HomeInfra Collector, o leer la etiqueta del disco.\n\nFotos del 2026-11-02: la etiqueta frontal (PBE120GS25SSDR · PE000775 · P-2111 · IIBB2111) no muestra número de serie, así que no se puede saber qué foto corresponde a cada unidad.",
    specs: {
      storage: "SSD SATA 120 GB"
    },
    mfgDate: "",
    updatedAt: "2026-11-02",
    hardwareType: "SSD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ],
    images: [
      {
        id: "img-patriot-a",
        name: "Etiqueta (foto 1)",
        url: "img/ssd_patriot_burst_elite_120gb_a.jpg"
      },
      {
        id: "img-patriot-b",
        name: "Etiqueta (foto 2)",
        url: "img/ssd_patriot_burst_elite_120gb_b.jpg"
      },
      {
        id: "img-patriot-c",
        name: "Etiqueta (foto 3)",
        url: "img/ssd_patriot_burst_elite_120gb_c.jpg"
      },
      {
        id: "img-patriot-d",
        name: "Etiqueta (foto 4)",
        url: "img/ssd_patriot_burst_elite_120gb_d.jpg"
      }
    ]
  },
  {
    id: "dev-pendrive-sony-4gb",
    brand: "Sony",
    model: "Pendrive USB 4 GB (HomeInfra Collector)",
    type: "Periférico",
    serial: "7B2211109146005852",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Sony%20USB%20flash%20drive%20soporte",
    windowsUser: "",
    windowsPassword: "",
    notes: "Pendrive USB Sony (Sony Storage Media) de 4 GB (3.8 GB útiles), firmware 0100. Se usa para llevar el HomeInfra Collector y sus registros.",
    observaciones: "Dispositivo general, no forma parte de ningún equipo.\n\nDetectado en:\n• Core i5-12400F · MSI PRO H610M-G DDR4 (2026-10-31)\n• Core 2 Quad Q6700 · ASUS P5G41T-M LX (2026-11-01)\n• Core 2 Duo E6750 · ASUS P5Q PRO TURBO (2026-11-02)\n• Core i7-2600K · Gigabyte Z77-HD3 (2026-11-01)",
    specs: {
      storage: "USB 4 GB"
    },
    mfgDate: "",
    updatedAt: "2026-11-02",
    hardwareType: "Pendrive"
  },
  {
    id: "dev-gpu-zotac-8400gs",
    brand: "ZOTAC",
    model: "GeForce 8400 GS GEN2 512MB DDR2",
    type: "Pieza",
    serial: "N103100027911",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/zotac_8400gs_etiqueta.jpg",
    driverUrl: "https://www.nvidia.com/Download/index.aspx?lang=es",
    windowsUser: "",
    windowsPassword: "",
    notes: "Tarjeta de video ZOTAC NVIDIA GeForce 8400 GS GEN2, 512 MB DDR2, bus de memoria de 64 bits, PCI Express.",
    observaciones: "Datos de la etiqueta:\n• Modelo: ZOTAC 8400GS GEN2 512MB 64BIT DDR2\n• PN: 288-90N44-040ZT\n• S/N: N103100027911\n• Cumple ICES-003 Class B · RoHS\n\nDispositivo general: no está registrada como componente de ningún equipo.\n\nAño: lanzamiento de la GeForce 8400 GS (2007); la etiqueta no indica fecha de fabricación de esta unidad. Sin imagen comercial disponible (no está en Icecat); se usa la foto local de la etiqueta.",
    specs: {
      gpu: {
        model: "NVIDIA GeForce 8400 GS",
        type: "Dedicada",
        details: "512 MB DDR2 · bus de 64 bits · PCIe (GEN2)"
      }
    },
    images: [
      {
        id: "img-zotac-etiqueta",
        name: "Etiqueta modelo / PN / S/N",
        url: "img/zotac_8400gs_etiqueta.jpg"
      },
      {
        id: "img-zotac-etiqueta-cercana",
        name: "Etiqueta (vista cercana)",
        url: "img/zotac_8400gs_etiqueta_cercana.jpg"
      }
    ],
    mfgDate: "2007 (lanzamiento de la GeForce 8400 GS)",
    updatedAt: "2026-11-02",
    hardwareType: "GPU",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    id: "dev-pc-msi-a68hm-e33-v2",
    brand: "PC armado",
    model: "MSI A68HM-E33 V2 (CPU AMD por identificar)",
    type: "Desktop",
    serial: "G716320033 33004",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "img/msi_a68hm-e33_v2_placa.jpg",
    driverUrl: "https://www.msi.com/Motherboard/A68HM-E33-V2/support",
    windowsUser: "",
    windowsPassword: "",
    notes: "PC de escritorio armado con placa base MSI A68HM-E33 V2 (MS-7721 VER 9.0, chipset AMD A68H, socket FM2+), RAM Kingston HyperX Fury DDR3 (rojo) y una tarjeta de video dedicada.",
    observaciones: "Registrado desde una foto (2024-05-11); pendiente ejecutar el HomeInfra Collector para registrar CPU, RAM total, tarjeta de video y almacenamiento.\n\nDatos legibles en la foto:\n• Placa: MSI A68HM-E33 V2 · MS-7721 VER 9.0 · etiqueta G716320033 33004 (se usa como número de serie)\n• Etiqueta del puerto de red: 4CCC6A5F6621 (probable MAC 4C:CC:6A:5F:66:21)\n• RAM: Kingston HyperX Fury HX318C10FR/4 · 4 GB DDR3-1866 · 1.5V · 9905402-471.A00LF · código 1646 (probablemente semana 46 de 2016). Se ve un segundo módulo HyperX Fury rojo cuya etiqueta no es legible.\n• Tarjeta de video dedicada instalada; modelo no identificable en la foto.\n\nAño del equipo: lanzamiento del chipset AMD A68H (2014).",
    specs: {
      cpu: {
        model: "",
        cores: "",
        speed: "",
        details: ""
      },
      ram: {
        capacity: "",
        type: "DDR3",
        speed: "1866 MT/s",
        details: "Kingston HyperX Fury; capacidad total pendiente (Collector)"
      },
      gpu: {
        model: "",
        type: "Dedicada",
        details: "Modelo por identificar"
      },
      storage: ""
    },
    images: [
      {
        id: "img-a68hm-placa",
        name: "Placa MSI A68HM-E33 V2 con RAM HyperX Fury (2024)",
        url: "img/msi_a68hm-e33_v2_placa.jpg"
      }
    ],
    mfgDate: "2014 (lanzamiento del chipset AMD A68H)",
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-msi-a68hm-e33-v2-placabase-1",
    hardwareType: "PlacaBase",
    brand: "MSI",
    model: "MSI A68HM-E33 V2 (MS-7721)",
    serial: "G716320033 33004",
    capacity: "",
    details: "VER 9.0 · chipset AMD A68H · socket FM2+",
    replaceable: true,
    imageUrl: "img/msi_a68hm-e33_v2_placa.jpg",
    driverUrl: "https://www.google.com/search?q=MSI%20A68HM-E33%20V2%20(MS-7721)%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2014",
    status: "Instalada",
    installedIn: "dev-pc-msi-a68hm-e33-v2",
    history: [
      {
        date: "2024-05-11",
        action: "Instalada",
        deviceId: "dev-pc-msi-a68hm-e33-v2",
        note: "Vista en una foto del equipo"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2014",
    yearNote: "Año de lanzamiento del chipset AMD A68H",
    features: [
      {
        label: "Formato",
        value: "Micro-ATX"
      },
      {
        label: "Socket / chipset",
        value: "FM2+ · AMD A68H"
      },
      {
        label: "Memoria",
        value: "2 ranuras DDR3 · doble canal · hasta 32 GB · 1333 / 1600 / 1866 / 2133 (OC) MHz"
      },
      {
        label: "Expansión",
        value: "1 × PCIe 3.0 x16 · 1 × PCIe x1 (2.0 según algunas páginas regionales) · 1 × PCI"
      },
      {
        label: "Almacenamiento",
        value: "4 × SATA 6 Gb/s · RAID 0 / 1 / 10"
      },
      {
        label: "USB",
        value: "2 × USB 3.0 traseros · 6 × USB 2.0 (2 traseros, 4 internos)"
      },
      {
        label: "Red",
        value: "Realtek RTL8111G · 10/100/1000 Mb/s"
      },
      {
        label: "Audio",
        value: "Realtek ALC887 · 3 conectores traseros"
      },
      {
        label: "Salidas de video",
        value: "VGA (hasta 1920 × 1200 a 60 Hz) · HDMI (gráficos integrados del procesador)"
      },
      {
        label: "Otros",
        value: "PS/2 teclado y ratón · conector serie interno"
      }
    ],
    featuresSource: {
      url: "https://www.msi.com/Motherboard/a68hm-e33-v2/Specification",
      date: "2026-11-02"
    }
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-msi-a68hm-e33-v2-ram-1",
    hardwareType: "RAM",
    brand: "Kingston",
    model: "Kingston HyperX Fury HX318C10FR/4",
    serial: "",
    capacity: "4 GB",
    details: "DDR3-1866 CL10 · 1.5V · rojo",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Kingston%20HyperX%20Fury%20HX318C10FR%2F4%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "2016",
    status: "Instalada",
    installedIn: "dev-pc-msi-a68hm-e33-v2",
    history: [
      {
        date: "2024-05-11",
        action: "Instalada",
        deviceId: "dev-pc-msi-a68hm-e33-v2",
        note: "Vista en una foto del equipo"
      }
    ],
    updatedAt: "2026-11-02",
    year: "2016",
    yearNote: "Fabricación según código 1646 de la etiqueta (probable)"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-msi-a68hm-e33-v2-ram-2",
    hardwareType: "RAM",
    brand: "Kingston",
    model: "Kingston HyperX Fury (rojo, etiqueta no legible)",
    serial: "",
    capacity: "",
    details: "DDR3 · visto en la foto",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Kingston%20HyperX%20Fury%20(rojo%2C%20etiqueta%20no%20legible)%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-msi-a68hm-e33-v2",
    history: [
      {
        date: "2024-05-11",
        action: "Instalada",
        deviceId: "dev-pc-msi-a68hm-e33-v2",
        note: "Vista en una foto del equipo"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    id: "pz-pc-msi-a68hm-e33-v2-gpu-1",
    hardwareType: "GPU",
    brand: "",
    model: "Tarjeta de video dedicada (por identificar)",
    serial: "",
    capacity: "",
    details: "Instalada en la ranura PCIe x16",
    replaceable: true,
    imageUrl: "",
    driverUrl: "https://www.google.com/search?q=Tarjeta%20de%20video%20dedicada%20(por%20identificar)%20drivers%20soporte",
    notes: "",
    observaciones: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-pc-msi-a68hm-e33-v2",
    history: [
      {
        date: "2024-05-11",
        action: "Instalada",
        deviceId: "dev-pc-msi-a68hm-e33-v2",
        note: "Vista en una foto del equipo"
      }
    ],
    updatedAt: "2026-11-02"
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-hdd-wd10spzx-1tb",
    brand: "Western Digital",
    model: "WD Blue 1TB WD10SPZX (marcado 1)",
    type: "Pieza",
    serial: "WXN1AA821XCH",
    imageUrl: "img/hdd_wd10spzx_1tb_etiqueta.jpg",
    driverUrl: "https://www.westerndigital.com/support",
    notes: "Disco duro 2.5\" WD Blue de 1 TB, SATA 6 Gb/s, 5400 rpm (Advanced Format). Marcado a mano con \"1\".",
    observaciones: "Datos de la etiqueta:\n• MDL: WD10SPZX-60Z10T0 · S/N: WXN1AA821XCH\n• Fecha: 14 DEC 2018 · FW: 04.01A04 · R/N: 800066\n• HP P/N: L24400-001 (disco de un equipo HP)\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "HDD SATA 6 Gb/s 1 TB 2.5\" 5400 rpm"
    },
    images: [
      {
        id: "img-hdd-wd10spzx-a",
        name: "Etiqueta",
        url: "img/hdd_wd10spzx_1tb_etiqueta.jpg"
      },
      {
        id: "img-hdd-wd10spzx-b",
        name: "Etiqueta (otra toma)",
        url: "img/hdd_wd10spzx_1tb_etiqueta_b.jpg"
      }
    ],
    mfgDate: "2018-12-14",
    hardwareType: "HDD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-hdd-wd10jpvx-1tb",
    brand: "Western Digital",
    model: "WD Blue 1TB WD10JPVX (marcado 2)",
    type: "Pieza",
    serial: "WX31A177YXJU",
    imageUrl: "img/hdd_wd10jpvx_1tb_etiqueta.jpg",
    driverUrl: "https://www.westerndigital.com/support",
    notes: "Disco duro 2.5\" WD Blue de 1 TB, SATA 6 Gb/s, 5400 rpm (Advanced Format). Marcado a mano con \"2\".",
    observaciones: "Datos de la etiqueta:\n• MDL: WD10JPVX-60JC3T0 · S/N: WX31A177YXJU\n• Fecha: 10 FEB 2017 · FW: 01.01A01 · DCM: HHNTJHN\n• HP P/N: 726834-001 (disco de un equipo HP)\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "HDD SATA 6 Gb/s 1 TB 2.5\" 5400 rpm"
    },
    images: [
      {
        id: "img-hdd-wd10jpvx",
        name: "Etiqueta",
        url: "img/hdd_wd10jpvx_1tb_etiqueta.jpg"
      }
    ],
    mfgDate: "2017-02-10",
    hardwareType: "HDD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-hdd-st1000lm024-1tb",
    brand: "Seagate (Samsung)",
    model: "Spinpoint M8 1TB ST1000LM024 (marcado 3)",
    type: "Pieza",
    serial: "S32HJ9HF204858",
    imageUrl: "img/hdd_st1000lm024_1tb_etiqueta.jpg",
    driverUrl: "https://www.seagate.com/support/",
    notes: "Disco duro 2.5\" Samsung Spinpoint M8 de 1 TB (fabricado por Seagate tras comprar la división de discos de Samsung), SATA 3 Gb/s, 5400 rpm. Marcado a mano con \"3\".",
    observaciones: "Datos de la etiqueta:\n• Model: ST1000LM024 · HDD P/N: HN-M101MBB/SC3 · S/N: S32HJ9HF204858\n• REV. A · F/W: 2BA30001 · LBA 1.953.525.168 (1000.0 GB)\n• Etiqueta Samsung: MODEL NP870Z5G-X01CL 1TB · SEC S/N CN02BA5903851AC540F2D0996 (disco de un laptop Samsung NP870Z5G)\n\nSin imagen comercial que lo identifique; se usa la foto de la etiqueta.\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "HDD SATA 3 Gb/s 1 TB 2.5\" 5400 rpm"
    },
    images: [
      {
        id: "img-hdd-st1000lm024",
        name: "Etiqueta",
        url: "img/hdd_st1000lm024_1tb_etiqueta.jpg"
      }
    ],
    mfgDate: "2011 (lanzamiento de la serie Spinpoint M8)",
    hardwareType: "HDD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-hdd-toshiba-mq01acf050-500gb",
    brand: "Toshiba",
    model: "MQ01ACF050 500GB",
    type: "Pieza",
    serial: "54O9C6M8T",
    imageUrl: "img/hdd_toshiba_mq01acf050_500gb_etiqueta.jpg",
    driverUrl: "https://www.toshiba-storage.com/",
    notes: "Disco duro 2.5\" Toshiba de 500 GB, SATA 6 Gb/s, 7200 rpm, 7 mm (Advanced Format).",
    observaciones: "Datos de la etiqueta:\n• Disk drive: MQ01ACF050 · Drive rev: AAH AA00/AV0A1C · DC+5V 1.1A\n• Fecha: 24 MAY 2014 · S/N: 54O9C6M8T (lectura de la foto; confirmar O/0) · YR9 HDKCC00H2A01 T\n• HP P/N: 724967-001 · HP SPS: 703267-001 (disco de un equipo HP)\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "HDD SATA 6 Gb/s 500 GB 2.5\" 7200 rpm"
    },
    images: [
      {
        id: "img-hdd-toshiba",
        name: "Etiqueta",
        url: "img/hdd_toshiba_mq01acf050_500gb_etiqueta.jpg"
      }
    ],
    mfgDate: "2014-05-24",
    hardwareType: "HDD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-hdd-wd7500bpvt-750gb",
    brand: "Western Digital",
    model: "WD Blue 750GB WD7500BPVT",
    type: "Pieza",
    serial: "WXD1E72EHP04",
    imageUrl: "img/hdd_wd7500bpvt_750gb_etiqueta.jpg",
    driverUrl: "https://www.westerndigital.com/support",
    notes: "Disco duro 2.5\" WD Blue de 750 GB, SATA 3 Gb/s, 5400 rpm (Advanced Format). Marcado a mano con \"750\".",
    observaciones: "Datos de la etiqueta:\n• MDL: WD7500BPVT-24HXZT3 · S/N: WXD1E72EHP04\n• Fecha: 04 NOV 2012 · DCM: SHOT2HN · DCX: EH30X7TZH\n• Lenovo LI P/N: 0B47496 · LC P/N: 16-004848 (disco de un equipo Lenovo)\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "HDD SATA 3 Gb/s 750 GB 2.5\" 5400 rpm"
    },
    images: [
      {
        id: "img-hdd-wd7500bpvt",
        name: "Etiqueta",
        url: "img/hdd_wd7500bpvt_750gb_etiqueta.jpg"
      }
    ],
    mfgDate: "2012-11-04",
    hardwareType: "HDD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-ssd-samsung-850evo-500gb",
    brand: "Samsung",
    model: "SSD 850 EVO 500GB",
    type: "Pieza",
    serial: "S21HNXAGA21889H",
    imageUrl: "img/componente_ssd_samsung_850evo_500gb.jpg",
    driverUrl: "https://semiconductor.samsung.com/consumer-storage/support/tools/",
    notes: "SSD SATA 2.5\" Samsung 850 EVO de 500 GB (V-NAND), SATA 6 Gb/s.",
    observaciones: "Datos de la etiqueta:\n• Model: MZ-75E500 · P/N: MZ7LN500 · S/N: S21HNXAGA21889H\n• WWN: 5002538D4067BD4x (último carácter no legible)\n\nImagen principal: comercial (Icecat, 850 EVO 500GB); la foto de la etiqueta está en la galería.\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    specs: {
      storage: "SSD SATA 6 Gb/s 500 GB 2.5\""
    },
    images: [
      {
        id: "img-ssd-850evo-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/componente_ssd_samsung_850evo_500gb.jpg"
      },
      {
        id: "img-ssd-850evo-etiqueta",
        name: "Etiqueta",
        url: "img/ssd_samsung_850evo_500gb_etiqueta.jpg"
      },
      {
        id: "img-ssd-850evo-etiqueta-b",
        name: "Etiqueta (otra toma)",
        url: "img/ssd_samsung_850evo_500gb_etiqueta_b.jpg"
      }
    ],
    mfgDate: "2014 (lanzamiento del 850 EVO)",
    hardwareType: "SSD",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    updatedAt: "2026-11-02",
    id: "dev-raid-inspur-yzca-00019-101",
    brand: "Inspur",
    model: "Tarjeta RAID/HBA SAS 6Gb/s YZCA-00019-101 (chip LSI)",
    type: "Pieza",
    serial: "QTE227E00948A07",
    imageUrl: "img/raid_inspur_yzca-00019-101_tarjeta.jpg",
    driverUrl: "https://www.broadcom.com/support/download-search",
    notes: "Controladora PCIe SAS/SATA de 6 Gb/s y 8 puertos, con chip LSI, para servidores Inspur (ej. NF5240M3). Perfil bajo, con disipador.",
    observaciones: "Datos de la etiqueta:\n• PN: (Y)ZCA-00019-101 · QN: QTE227E00948A07 (se usa como número de serie)\n• Dirección SAS: 56C92BF000040116\n\nIdentificación según vendedores (no hay documentación oficial de Inspur): controladora LSI de 8 puertos SAS/SATA a 6 Gb/s, vendida como LSI 9240-8i (RAID 0/1/5, firmware IR) o como 9211-8i (HBA, firmware IT). El modo depende del firmware instalado; confirmarlo al conectarla.\n\nDispositivo general: no está registrado como componente de ningún equipo.",
    images: [
      {
        id: "img-raid-tarjeta",
        name: "Vista de la tarjeta",
        url: "img/raid_inspur_yzca-00019-101_tarjeta.jpg"
      },
      {
        id: "img-raid-etiqueta",
        name: "Etiquetas PN / QN / SAS",
        url: "img/raid_inspur_yzca-00019-101_etiqueta.jpg"
      }
    ],
    mfgDate: "",
    hardwareType: "RAID",
    kind: "pieza",
    replaceable: true,
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada como pieza suelta"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "65 W",
    details: "19V ⎓ 3.42A",
    notes: "",
    mfgDate: "",
    status: "Instalada",
    installedIn: "dev-msi-modern14-b5m",
    history: [
      {
        date: "2026-11-02",
        action: "Instalada",
        deviceId: "dev-msi-modern14-b5m",
        note: "Asignado por número de parte MSI y alimentación 19V ⎓ 3.42A"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-cargador-msi-delta-adp-65gd",
    hardwareType: "Cargador",
    brand: "Delta (MSI)",
    model: "ADP-65GD D",
    serial: "6KJW131009B",
    imageUrl: "img/msi_modern14_cargador_delta_adp-65gd.jpg",
    driverUrl: "https://www.msi.com/support",
    observaciones: "Datos de la etiqueta:\n• Modelo: ADP-65GD D (Delta Electronics)\n• Entrada: 100-240V ~ 1.5A, 50-60Hz · Salida: 19V ⎓ 3.42A, 65W\n• P/N MSI: S93-0401921-D04 · 20L10000308 · C.C.: 2L · REV: 02\n\nAsignado al MSI Modern 14 por su número de parte MSI (S93-…) y porque coincide con su alimentación (19V ⎓ 3.42A).",
    images: [
      {
        id: "img-cargador-msi",
        name: "Etiqueta",
        url: "img/msi_modern14_cargador_delta_adp-65gd.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "4 GB",
    details: "DDR3-1600 UDIMM (escritorio) · 1.5V",
    notes: "",
    mfgDate: "2015-12",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-ram-crucial-ct51264ba160bj",
    hardwareType: "RAM",
    brand: "Crucial",
    model: "CT51264BA160BJ",
    serial: "",
    imageUrl: "img/ram_crucial_ct51264ba160bj_4gb.jpg",
    driverUrl: "https://www.crucial.com/support",
    observaciones: "Datos de la etiqueta:\n• CT51264BA160BJ.M8FED · 4GB DDR3-1600 UDIMM 1.5V\n• Lote: BL111PY.XT · fecha 201512 · 222995\n\nSin número de serie visible en la etiqueta.",
    images: [
      {
        id: "img-ram-crucial",
        name: "Etiqueta",
        url: "img/ram_crucial_ct51264ba160bj_4gb.jpg"
      }
    ],
    year: "2015"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "256 GB",
    details: "NVMe PCIe M.2 2280",
    notes: "",
    mfgDate: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-ssd-kingston-om8pdp3256b",
    hardwareType: "SSD",
    brand: "Kingston",
    model: "OM8PDP3256B-AI1",
    serial: "50026B7684C27C10",
    imageUrl: "img/ssd_kingston_om8pdp3256b_256gb.jpg",
    driverUrl: "https://www.kingston.com/support",
    observaciones: "Datos de la etiqueta:\n• OM8PDP3256B-AI1 · MN: OS20001 · EDFK0S03 · 9997366-910.A00GS0\n• 50026B7684C27C10 (se usa como número de serie) · código 2116 (probablemente semana 16 de 2021)\n• PSID: 50026B7684C27C10D584B232D55529AC\n\nModelo OEM de Kingston que se instala de fábrica en algunos laptops; podría ser el SSD original del MSI Modern 14 (confirmar).",
    images: [
      {
        id: "img-ssd-kingston",
        name: "Etiqueta",
        url: "img/ssd_kingston_om8pdp3256b_256gb.jpg"
      }
    ],
    year: "2021"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "256 GB",
    details: "NVMe PCIe 3.0 x4 M.2 2280",
    notes: "",
    mfgDate: "2019-12-18",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-ssd-samsung-pm981a-256gb",
    hardwareType: "SSD",
    brand: "Samsung",
    model: "PM981a MZVLB256HBHQ-000L2",
    serial: "S4DXNF1MC57340",
    imageUrl: "img/componente_ssd_samsung_pm981a_256gb.jpg",
    driverUrl: "https://semiconductor.samsung.com/consumer-storage/support/tools/",
    observaciones: "Datos de la etiqueta:\n• PN: MZVLB256HBHQ-000L2 · Model: MZ-VLB256B · SN: S4DXNF1MC57340\n• Fecha: 18DEC2019 · FW: 3L1QEXH7 · EUI64: 0025388C91D1E92E\n• Lenovo PN: SSS0T22292 (disco de un equipo Lenovo)\n\nImagen principal: comercial (Icecat); las fotos de la etiqueta están en la galería.",
    images: [
      {
        id: "img-ssd-pm981a-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/componente_ssd_samsung_pm981a_256gb.jpg"
      },
      {
        id: "img-ssd-pm981a-a",
        name: "Etiqueta",
        url: "img/ssd_samsung_pm981a_256gb_etiqueta.jpg"
      },
      {
        id: "img-ssd-pm981a-b",
        name: "Etiqueta (otra toma)",
        url: "img/ssd_samsung_pm981a_256gb_etiqueta_b.jpg"
      }
    ],
    year: "2019"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "4 GB",
    details: "DDR3L-1600 SO-DIMM (laptop) · 1Rx8 · PC3L-12800S",
    notes: "",
    mfgDate: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-ram-samsung-m471b5173db0",
    hardwareType: "RAM",
    brand: "Samsung",
    model: "M471B5173DB0-YK0",
    serial: "",
    imageUrl: "img/componente_ram_samsung_m471b5173db0.jpg",
    driverUrl: "https://semiconductor.samsung.com/dram/module/",
    observaciones: "Datos de la etiqueta:\n• 4GB 1Rx8 PC3L-12800S-11-13-B4 · M471B5173DB0-YK0 · código 1532 (semana 32 de 2015)\n\nLas dos fotos son del mismo módulo (anverso girado). Sin número de serie legible.\n\nImagen principal: comercial (Icecat).",
    images: [
      {
        id: "img-ram-samsung-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/componente_ram_samsung_m471b5173db0.jpg"
      },
      {
        id: "img-ram-samsung-a",
        name: "Etiqueta",
        url: "img/ram_samsung_m471b5173db0_4gb.jpg"
      },
      {
        id: "img-ram-samsung-b",
        name: "Etiqueta (otra toma)",
        url: "img/ram_samsung_m471b5173db0_4gb_b.jpg"
      }
    ],
    year: "2015"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "500 GB",
    details: "2.5\" SATA 3 Gb/s · 5400 rpm",
    notes: "",
    mfgDate: "2014-01-16",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd5000lpvt",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Blue WD5000LPVT",
    serial: "WX51AC352188",
    imageUrl: "img/hdd_wd5000lpvt_500gb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Blue%20WD5000LPVT%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD5000LPVT-24G33T1 · S/N: WX51AC352188 · FW: 02.01A02\n• Fecha: 16 JAN 2014\n• Lenovo LI P/N: SH20D70211 · LC P/N: 16-200523 (disco de un equipo Lenovo)",
    images: [
      {
        id: "img-pz-hdd-wd5000lpvt",
        name: "Etiqueta",
        url: "img/hdd_wd5000lpvt_500gb_etiqueta.jpg"
      }
    ],
    year: "2014"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "500 GB",
    details: "2.5\" SATA 6 Gb/s · 5400 rpm",
    notes: "",
    mfgDate: "2014-05-14",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd5000lpvx",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Blue WD5000LPVX",
    serial: "WX41E34EVT17",
    imageUrl: "img/hdd_wd5000lpvx_500gb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Blue%20WD5000LPVX%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD5000LPVX-22V0TT0 · S/N: WX41E34EVT17\n• Fecha: 14 MAY 2014 · DCM: EHKTJHN",
    images: [
      {
        id: "img-pz-hdd-wd5000lpvx",
        name: "Etiqueta",
        url: "img/hdd_wd5000lpvx_500gb_etiqueta.jpg"
      }
    ],
    year: "2014"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "500 GB",
    details: "2.5\" SATA 3 Gb/s · 5400 rpm",
    notes: "",
    mfgDate: "2011-05-18",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-hitachi-hts547550a9e384",
    hardwareType: "HDD",
    brand: "Hitachi",
    model: "Travelstar 5K750 HTS547550A9E384",
    serial: "50G8837C",
    imageUrl: "img/hdd_hitachi_hts547550a9e384_500gb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Hitachi%20Travelstar%205K750%20HTS547550A9E384%20support",
    observaciones: "Datos de la etiqueta:\n• HTS547550A9E384 · P/N: 0J15081 · S/N: 50G8837C\n• Fecha: 18 MAY 2011\n• Etiqueta Samsung: MODEL NP-RV411-S06CL (disco de un laptop Samsung RV411)",
    images: [
      {
        id: "img-pz-hdd-hitachi-hts547550a9e384",
        name: "Etiqueta",
        url: "img/hdd_hitachi_hts547550a9e384_500gb_etiqueta.jpg"
      }
    ],
    year: "2011"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "500 GB",
    details: "2.5\" SATA 3 Gb/s · 5400 rpm",
    notes: "",
    mfgDate: "2010-01-24",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-toshiba-mja2500bh",
    hardwareType: "HDD",
    brand: "Toshiba (Fujitsu)",
    model: "MJA2500BH G2",
    serial: "K90DTA12NDY1",
    imageUrl: "img/hdd_toshiba_mja2500bh_500gb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Toshiba%20(Fujitsu)%20MJA2500BH%20G2%20support",
    observaciones: "Datos de la etiqueta:\n• MODEL: MJA2500BH · TYPE: G2 · PART NO: CA07083-B341 · SER. NO: K90DTA12NDY1\n• Fecha: 2010-01-24 (marca Fujitsu, fabricado por Toshiba)",
    images: [
      {
        id: "img-pz-hdd-toshiba-mja2500bh",
        name: "Etiqueta",
        url: "img/hdd_toshiba_mja2500bh_500gb_etiqueta.jpg"
      }
    ],
    year: "2010"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "3 TB",
    details: "3.5\" SATA 6 Gb/s · 64 MB caché",
    notes: "",
    mfgDate: "2012-06-07",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd30ezrx-wcawz2212479",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Green WD30EZRX",
    serial: "WCAWZ2212479",
    imageUrl: "img/hdd_wd30ezrx_3tb_wcawz2212479.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Green%20WD30EZRX%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD30EZRX-00MMMB0 · S/N: WCAWZ2212479\n• Fecha: 07 JUN 2012 · DCM: HANCHV2AAB",
    images: [
      {
        id: "img-wd30ezrx-2212479-a",
        name: "Etiqueta",
        url: "img/hdd_wd30ezrx_3tb_wcawz2212479.jpg"
      },
      {
        id: "img-wd30ezrx-2212479-b",
        name: "Etiqueta (otra toma)",
        url: "img/hdd_wd30ezrx_3tb_wcawz2212479_b.jpg"
      }
    ],
    year: "2012"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "3 TB",
    details: "3.5\" SATA 6 Gb/s · 64 MB caché",
    notes: "",
    mfgDate: "2012-07-26",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd30ezrx-wcawz2268707",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Green WD30EZRX",
    serial: "WCAWZ2268707",
    imageUrl: "img/hdd_wd30ezrx_3tb_wcawz2268707.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Green%20WD30EZRX%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD30EZRX-00MMMB0 · S/N: WCAWZ2268707 (lectura de la foto; confirmar)\n• Fecha: 26 JUL 2012 · DCM: HARCNT2AAB",
    images: [
      {
        id: "img-pz-hdd-wd30ezrx-wcawz2268707",
        name: "Etiqueta",
        url: "img/hdd_wd30ezrx_3tb_wcawz2268707.jpg"
      }
    ],
    year: "2012"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "2 TB",
    details: "3.5\" SATA 6 Gb/s · 64 MB caché",
    notes: "",
    mfgDate: "2012-04-20",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd20earx-wmaza8396409",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Green WD20EARX",
    serial: "WMAZA8396409",
    imageUrl: "img/hdd_wd20earx_2tb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Green%20WD20EARX%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD20EARX-00PASB0 · S/N: WMAZA8396409\n• Fecha: 20 APR 2012 · DCM: HARNNT2CAB",
    images: [
      {
        id: "img-pz-hdd-wd20earx-wmaza8396409",
        name: "Etiqueta",
        url: "img/hdd_wd20earx_2tb_etiqueta.jpg"
      }
    ],
    year: "2012"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "2 TB",
    details: "3.5\" SATA 3 Gb/s · 64 MB caché",
    notes: "",
    mfgDate: "2011-01-11",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd20ears-wmaza3635000",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Green WD20EARS (Respaldos)",
    serial: "WMAZA3635000",
    imageUrl: "img/hdd_wd20ears_2tb_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Green%20WD20EARS%20(Respaldos)%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD20EARS-00MVWB0 · S/N: WMAZA3635000\n• Fecha: 11 JAN 2011 · DCM: HBRNHTJCB\n• Rotulado a mano: \"Respaldos\"",
    images: [
      {
        id: "img-pz-hdd-wd20ears-wmaza3635000",
        name: "Etiqueta",
        url: "img/hdd_wd20ears_2tb_etiqueta.jpg"
      }
    ],
    year: "2011"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "1 TB",
    details: "3.5\" SATA 3 Gb/s · 32 MB caché · 7200 rpm",
    notes: "",
    mfgDate: "2009-07-19",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd1001fals-wmatv2575104",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Black WD1001FALS (Trabajo 1)",
    serial: "WMATV2575104",
    imageUrl: "img/hdd_wd1001fals_1tb_wmatv2575104.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Black%20WD1001FALS%20(Trabajo%201)%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD1001FALS-00J7B1 · S/N: WMATV2575104\n• Fecha: 19 JUL 2009 · DCM: HBNNHV2AB\n• Rotulado a mano: \"Trabajo 1\"",
    images: [
      {
        id: "img-pz-hdd-wd1001fals-wmatv2575104",
        name: "Etiqueta",
        url: "img/hdd_wd1001fals_1tb_wmatv2575104.jpg"
      }
    ],
    year: "2009"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "1 TB",
    details: "3.5\" SATA 3 Gb/s · 32 MB caché · 7200 rpm",
    notes: "",
    mfgDate: "2009-03-16",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-hdd-wd1001fals-wmatv1245731",
    hardwareType: "HDD",
    brand: "Western Digital",
    model: "WD Caviar Black WD1001FALS",
    serial: "WMATV1245731",
    imageUrl: "img/hdd_wd1001fals_1tb_wmatv1245731.jpg",
    driverUrl: "https://www.google.com/search?q=Western%20Digital%20WD%20Caviar%20Black%20WD1001FALS%20support",
    observaciones: "Datos de la etiqueta:\n• MDL: WD1001FALS-00J7B0 · S/N: WMATV1245731\n• Fecha: 16 MAR 2009 · DCM: HBNNNV2AB",
    images: [
      {
        id: "img-pz-hdd-wd1001fals-wmatv1245731",
        name: "Etiqueta",
        url: "img/hdd_wd1001fals_1tb_wmatv1245731.jpg"
      }
    ],
    year: "2009"
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "460 W",
    details: "ATX12V 2.3 · sin PFC activo · +12V: 18A + 18A",
    notes: "",
    mfgDate: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-fuente-coolermaster-rs-460-psar-j3",
    hardwareType: "Fuente",
    brand: "Cooler Master",
    model: "RS-460-PSAR-J3",
    serial: "",
    imageUrl: "img/fuente_coolermaster_rs-460-psar-j3_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Cooler%20Master%20RS-460-PSAR-J3",
    observaciones: "Datos de la etiqueta:\n• Product No.: RS-460-PSAR-J3 · ATX 12V V2.3 · W/o PFC\n• Entrada: 110-120/220-240V~ 8.5/5A 60/50Hz\n• Salida: +3.3V 20A · +5V 20A · +12V1 18A · +12V2 18A · -12V 0.8A · +5VSB 2.5A · máx. 324W en +12V\n\nLa foto la muestra montada en un gabinete; queda En stock hasta saber en qué PC está. Sin número de serie visible.",
    images: [
      {
        id: "img-pz-fuente-coolermaster-rs-460-psar-j3",
        name: "Etiqueta",
        url: "img/fuente_coolermaster_rs-460-psar-j3_etiqueta.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "600 W",
    details: "80 PLUS Bronze · +12V: 46A (552W)",
    notes: "",
    mfgDate: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-fuente-deepcool-da600",
    hardwareType: "Fuente",
    brand: "Deepcool",
    model: "DA600",
    serial: "",
    imageUrl: "img/fuente_deepcool_da600_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Deepcool%20DA600",
    observaciones: "Datos de la etiqueta:\n• Modelo: DA600 · 80 PLUS Bronze\n• Entrada: 100-240Vac 4.5-9A 47-63Hz\n• Salida: +3.3V 20A · +5V 17A · +12V 46A (552W) · -12V 0.3A · +5VSB 2.5A · total 600W\n\nLa foto la muestra montada en un gabinete; queda En stock hasta saber en qué PC está. Sin número de serie visible.",
    images: [
      {
        id: "img-pz-fuente-deepcool-da600",
        name: "Etiqueta",
        url: "img/fuente_deepcool_da600_etiqueta.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    capacity: "430 W",
    details: "+12V: 18A · P/N W0070RU",
    notes: "",
    mfgDate: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-fuente-thermaltake-tr2-430w",
    hardwareType: "Fuente",
    brand: "Thermaltake",
    model: "TR2-430W (TR2-430NP)",
    serial: "",
    imageUrl: "img/fuente_thermaltake_tr2-430w_etiqueta.jpg",
    driverUrl: "https://www.google.com/search?q=Thermaltake%20TR2-430W%20(TR2-430NP)",
    observaciones: "Datos de la etiqueta:\n• TR2-430NP · P/N W0070RU · Model: XP550NP\n• Entrada: 115V/10A, 230V/5A, 47-63Hz\n• Salida: +3.3V 28A · +5V 30A · +12V 18A · -5V 0.5A · -12V 0.8A · +5VSB 2A\n\nLa foto la muestra montada en un gabinete; queda En stock hasta saber en qué PC está. Sin número de serie visible.",
    images: [
      {
        id: "img-pz-fuente-thermaltake-tr2-430w",
        name: "Etiqueta",
        url: "img/fuente_thermaltake_tr2-430w_etiqueta.jpg"
      }
    ]
  },
  {
    kind: "pieza",
    type: "Pieza",
    hardwareType: "GPU",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    notes: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-gpu-asus-gtx650ti-dc2o-1gd5",
    brand: "ASUS",
    model: "GTX650TI-DC2O-1GD5 (GeForce GTX 650 Ti DirectCU II OC)",
    serial: "D1C0YZ393584",
    capacity: "1 GB",
    details: "GDDR5 · 128 bits · PCIe 3.0 x16 · 2× DVI, HDMI",
    imageUrl: "img/componente_gpu_asus_gtx650ti-dc2o.jpg",
    driverUrl: "https://www.asus.com/supportonly/gtx650ti-dc2o-1gd5/helpdesk_download/",
    observaciones: "Datos de la etiqueta:\n• GTX650TI-DC2O-1GD5 · S/N: D1C0YZ393584\n• Etiqueta de placa: GTX650 · 033085-02984 · YV03B1-A05 · Z38036\n\nCaracterísticas según tiendas y reseñas: 1 GB GDDR5 de 128 bits, núcleo a 954 MHz (OC de fábrica), PCIe 3.0 x16, salidas 2× DVI-D dual-link y HDMI.\n\nImagen principal: comercial (Icecat).",
    images: [
      {
        id: "img-gtx650ti-comercial",
        name: "Imagen comercial (Icecat)",
        url: "img/componente_gpu_asus_gtx650ti-dc2o.jpg"
      },
      {
        id: "img-gtx650ti-etiqueta",
        name: "Etiqueta",
        url: "img/gpu_asus_gtx650ti-dc2o-1gd5_etiqueta.jpg"
      }
    ],
    mfgDate: "2012 (lanzamiento de la GTX 650 Ti)",
    year: "2012",
    yearNote: "Año de lanzamiento"
  },
  {
    kind: "pieza",
    type: "Pieza",
    hardwareType: "GPU",
    assignedUser: "",
    location: "Hogar",
    windowsUser: "",
    windowsPassword: "",
    replaceable: true,
    notes: "",
    status: "En stock",
    installedIn: null,
    history: [
      {
        date: "2026-11-02",
        action: "En stock",
        deviceId: null,
        note: "Registrada desde fotos de la etiqueta"
      }
    ],
    updatedAt: "2026-11-02",
    id: "pz-gpu-evga-7800gtx-256-p2-n527-ax",
    brand: "EVGA",
    model: "e-GeForce 7800 GTX ACS3 (256-P2-N527-AX)",
    serial: "68527003770",
    capacity: "256 MB",
    details: "GDDR3 · 256 bits · PCIe x16 · 2× DVI",
    imageUrl: "img/gpu_evga_7800gtx_256-p2-n527-ax_etiqueta.jpg",
    driverUrl: "https://www.nvidia.com/Download/index.aspx?lang=es",
    observaciones: "Datos de la etiqueta:\n• e-GeForce 7800 GTX ACS3 · P/N: 256-P2-N527-AX · 256MB PCI-E · S/N: 68527003770\n• La etiqueta tiene los códigos de barras tachados con X.\n\nCaracterísticas según tiendas: núcleo a 470 MHz, 256 MB GDDR3 de 256 bits a 1200 MHz efectivos (38,4 GB/s), 2× DVI, PCIe x16.\n\nSin imagen comercial disponible (no está en Icecat); se usa la foto de la etiqueta. Drivers: NVIDIA ya no da soporte a la serie 7 en Windows actuales (último driver Legacy 307.83).",
    images: [
      {
        id: "img-7800gtx-etiqueta",
        name: "Etiqueta",
        url: "img/gpu_evga_7800gtx_256-p2-n527-ax_etiqueta.jpg"
      }
    ],
    mfgDate: "2005 (lanzamiento de la GeForce 7800 GTX)",
    year: "2005",
    yearNote: "Año de lanzamiento"
  }
];

// Clave de almacenamiento HomeInfra v3
const STORAGE_KEY = "homeinfra_devices_inventory_v3";
// IDs de equipos.json ya incorporados al inventario local
const REPO_SEEN_IDS_KEY = "homeinfra_repo_seen_ids";
// Última versión recibida de equipos.json por equipo, para detectar ediciones locales
const REPO_SNAPSHOT_KEY = "homeinfra_repo_snapshot";

// Estado de la aplicación
let devices = [];
let currentFilterType = "ALL";
let currentFilterBrand = "ALL";
let currentSort = localStorage.getItem("homeinfra_devices_sort") || "category";
let searchQuery = "";
let currentView = localStorage.getItem("homeinfra_view") === "components" ? "components" : "devices";
let currentComponentCategory = "ALL";
let currentComponentSort = "default";
let currentPieceStatus = "ALL";
let currentLayout = localStorage.getItem("homeinfra_layout") === "list" ? "list" : "cards";
const revealedPasswords = {};

// Elementos del DOM
const devicesGrid = document.getElementById("devices-grid");
const componentsGrid = document.getElementById("components-grid");
const componentsEmptyState = document.getElementById("components-empty-state");
const componentCategoryFilter = document.getElementById("component-category-filter");
const pieceStatusFilter = document.getElementById("piece-status-filter");
const emptyState = document.getElementById("empty-state");
const resultsCount = document.getElementById("results-count");
const searchInput = document.getElementById("search-input");
const clearSearchBtn = document.getElementById("clear-search");
const typeFilter = document.getElementById("type-filter");
const brandFilter = document.getElementById("brand-filter");
const sortSelect = document.getElementById("sort-select");

// Estadísticas
const statTotal = document.getElementById("stat-total");
const statLaptops = document.getElementById("stat-laptops");
const statDesktops = document.getElementById("stat-desktops");
const statPrinters = document.getElementById("stat-printers");
const statOthers = document.getElementById("stat-others");

// Modal
const deviceModal = document.getElementById("device-modal");
const deviceForm = document.getElementById("device-form");
const modalTitle = document.getElementById("modal-title");
const modalCloseBtn = document.getElementById("modal-close");
const cancelModalBtn = document.getElementById("btn-cancel-modal");
const btnAddDevice = document.getElementById("btn-add-device");
const btnSuggestDriver = document.getElementById("btn-suggest-driver");

// Campos del formulario principal
const formDeviceId = document.getElementById("device-id");
const formBrand = document.getElementById("form-brand");
const formType = document.getElementById("form-type");
const formModel = document.getElementById("form-model");
const formSerial = document.getElementById("form-serial");
const formMfgDate = document.getElementById("form-mfg-date");
const formAssignedUser = document.getElementById("form-assigned-user");
const formLocation = document.getElementById("form-location");
const formImageUrl = document.getElementById("form-image-url");
const formDriverUrl = document.getElementById("form-driver-url");
const formNotes = document.getElementById("form-notes");
const formObservaciones = document.getElementById("form-observaciones");

// Credenciales Windows
const formWindowsUser = document.getElementById("form-windows-user");
const formWindowsPass = document.getElementById("form-windows-pass");
const btnToggleModalPass = document.getElementById("btn-toggle-modal-pass");

// Licenciamiento Office
const formOfficeStatus = document.getElementById("form-office-status");
const formOfficeType = document.getElementById("form-office-type");
const formOfficeDeactivationDate = document.getElementById("form-office-deactivation-date");
const formOfficeNotes = document.getElementById("form-office-notes");

// Campos de Hardware (CPU, RAM, GPU, Storage)
const formCpuModel = document.getElementById("form-cpu-model");
const formCpuYear = document.getElementById("form-cpu-year");
const formCpuCores = document.getElementById("form-cpu-cores");
const formCpuSpeed = document.getElementById("form-cpu-speed");
const formCpuDetails = document.getElementById("form-cpu-details");

const formRamCapacity = document.getElementById("form-ram-capacity");
const formRamType = document.getElementById("form-ram-type");
const formRamSpeed = document.getElementById("form-ram-speed");
const formRamDetails = document.getElementById("form-ram-details");

const formGpuModel = document.getElementById("form-gpu-model");
const formGpuType = document.getElementById("form-gpu-type");
const formGpuDetails = document.getElementById("form-gpu-details");
const formStorage = document.getElementById("form-storage");

// Consumibles Impresora (Tóner y Tambor)
const formTonerWarningDate = document.getElementById("form-toner-warning-date");
const formTonerReplacedDate = document.getElementById("form-toner-replaced-date");
const formDrumWarningDate = document.getElementById("form-drum-warning-date");
const formDrumReplacedDate = document.getElementById("form-drum-replaced-date");
const suppliesSection = document.getElementById("printer-supplies-section");
const hardwareSection = document.getElementById("hardware-section");
const credentialsSection = document.getElementById("credentials-section");
const officeSection = document.getElementById("office-section");


// Botones de acción general y configuración
const btnCopyMd = document.getElementById("btn-copy-md");
const btnExportMd = document.getElementById("btn-export-md");
const btnSyncFile = document.getElementById("btn-sync-file");
const btnOpenSettings = document.getElementById("btn-open-settings");
const btnOpenSettingsLink = document.getElementById("btn-open-settings-link");
const btnExportJsonQuick = document.getElementById("btn-export-json-quick");
const btnExportJson = document.getElementById("btn-export-json");
const importJsonInput = document.getElementById("import-json-input");
const importCollectorInput = document.getElementById("import-collector-input");
const btnOpenCollector = document.getElementById("btn-open-collector");
const collectorCommand = document.getElementById("collector-command");
const collectorOsHint = document.getElementById("collector-os-hint");
const btnCopyCollectorCommand = document.getElementById("btn-copy-collector-command");
const collectorOutputDir = document.getElementById("collector-output-dir");

// Comandos de una línea para ejecutar el HomeInfra Collector desde GitHub
const COLLECTOR_RAW_URL = "https://raw.githubusercontent.com/rodrigoquezadab/HomeInfra/main/Collector";
const COLLECTOR_COMMANDS = {
  windows: {
    hint: "En el equipo a registrar, abre PowerShell (clic derecho en Inicio → Terminal), pega el comando y presiona Enter.",
    defaultDir: "$([Environment]::GetFolderPath('Desktop'))\\HomeInfra-Registros",
    defaultLabel: "Escritorio\\HomeInfra-Registros",
    pendriveExample: "E:\\HomeInfra-Registros (cambia E: por la letra del pendrive)",
    command: (dir) => `$f="$env:TEMP\\HomeInfra-Collector.ps1"; irm ${COLLECTOR_RAW_URL}/HomeInfra-Collector.ps1 -OutFile $f; powershell -NoProfile -ExecutionPolicy Bypass -File $f -OutputDir "${dir}"`
  },
  linux: {
    hint: "En el equipo a registrar, abre una terminal, pega el comando y presiona Enter. Pedirá tu contraseña (sudo) para leer números de serie y módulos de RAM.",
    defaultDir: "$HOME/HomeInfra-Registros",
    defaultLabel: "~/HomeInfra-Registros (tu carpeta personal)",
    pendriveExample: "/media/$USER/PENDRIVE/HomeInfra-Registros (cambia PENDRIVE por el nombre del pendrive)",
    command: (dir) => `(curl -fsSL ${COLLECTOR_RAW_URL}/homeinfra-collector.sh || wget -qO- ${COLLECTOR_RAW_URL}/homeinfra-collector.sh) > /tmp/homeinfra-collector.sh && sudo bash /tmp/homeinfra-collector.sh "${dir}" && (sudo chown -R "$USER" "${dir}" 2>/dev/null || true)`
  },
  macos: {
    hint: "En el equipo a registrar, abre Terminal (Aplicaciones → Utilidades), pega el comando y presiona Enter.",
    defaultDir: "$HOME/Desktop/HomeInfra-Registros",
    defaultLabel: "Escritorio/HomeInfra-Registros",
    pendriveExample: "/Volumes/PENDRIVE/HomeInfra-Registros (cambia PENDRIVE por el nombre del pendrive)",
    command: (dir) => `curl -fsSL ${COLLECTOR_RAW_URL}/homeinfra-collector.sh -o /tmp/homeinfra-collector.sh && curl -fsSL ${COLLECTOR_RAW_URL}/homeinfra-collector-macos.js -o /tmp/homeinfra-collector-macos.js && bash /tmp/homeinfra-collector.sh "${dir}"`
  }
};
let currentCollectorOs = "windows";
const btnFetchRepoBackup = document.getElementById("btn-fetch-repo-backup");
const btnFactoryReset = document.getElementById("btn-factory-reset");
const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toast-msg");

// Modal de Configuración y Respaldos
const settingsModal = document.getElementById("settings-modal");
const settingsModalClose = document.getElementById("settings-modal-close");
const btnCloseSettingsModal = document.getElementById("btn-close-settings-modal");
const settingsDevicesCount = document.getElementById("settings-devices-count");
const settingsStorageKey = document.getElementById("settings-storage-key");

// Modal de Ficha Técnica Completa (Vista Detallada)
const deviceDetailModal = document.getElementById("device-detail-modal");
const detailModalTitle = document.getElementById("detail-modal-title");
const detailModalEyebrow = document.getElementById("detail-modal-eyebrow");
const detailModalUser = document.getElementById("detail-modal-user");
const detailModalBody = document.getElementById("detail-modal-body");
const detailModalClose = document.getElementById("detail-modal-close");
const detailModalCloseBtn = document.getElementById("detail-modal-close-btn");
const detailModalEditBtn = document.getElementById("detail-modal-edit-btn");
const detailModalDriverLink = document.getElementById("detail-modal-driver-link");
let currentDetailDeviceId = null;

/**
 * Inicialización
 */
async function init() {
  await loadDevices();
  if (sortSelect) sortSelect.value = currentSort;
  bindEvents();
  render();
}

/**
 * Cargar datos desde localStorage o desde equipos.json
 */
async function loadDevices() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      devices = JSON.parse(saved);
      let updated = false;
      devices.forEach((dev) => {
        if (Array.isArray(dev.images)) {
          const filtered = dev.images.filter((img) => !img.id.startsWith("img-init"));
          if (filtered.length !== dev.images.length) {
            dev.images = filtered;
            updated = true;
          }
        }
      });

      if (await mergeNewRepoDevices()) updated = true;

      if (updated) saveDevices();
      return;
    }

    try {
      const response = await fetch("equipos.json");
      if (response.ok) {
        const json = await response.json();
        if (Array.isArray(json) && json.length > 0) {
          devices = json;
          markRepoIdsSeen(json);
          saveDevices();
          return;
        }
      }
    } catch (_) {
      // Ignorar fallback si fetch falla (ej. file:// protocol)
    }

    devices = [...DEFAULT_DEVICES];
    saveDevices();
  } catch (err) {
    console.error("Error al cargar inventario:", err);
    devices = [...DEFAULT_DEVICES];
  }
}

/**
 * Sincronizar el inventario local con equipos.json:
 * - Agrega los equipos nuevos (IDs nunca vistos, para no revivir equipos eliminados).
 * - Actualiza los equipos que cambiaron en equipos.json, si no fueron editados en este navegador
 *   desde la última sincronización (se compara con la última versión recibida de equipos.json).
 */
async function mergeNewRepoDevices() {
  try {
    const response = await fetch("equipos.json?t=" + Date.now());
    if (!response.ok) return false;
    const json = await response.json();
    if (!Array.isArray(json)) return false;

    const seenIds = new Set(JSON.parse(localStorage.getItem(REPO_SEEN_IDS_KEY) || "[]"));
    const snapshot = JSON.parse(localStorage.getItem(REPO_SNAPSHOT_KEY) || "{}");
    const localIds = new Set(devices.map((d) => d.id));
    const newDevices = json.filter((d) => !localIds.has(d.id) && !seenIds.has(d.id));
    let changed = newDevices.length > 0;

    json.forEach((repoDev) => {
      const index = devices.findIndex((d) => d.id === repoDev.id);
      if (index === -1) return;
      const localStr = JSON.stringify(devices[index]);
      const repoStr = JSON.stringify(repoDev);
      if (localStr === repoStr) return;
      const lastRepoStr = snapshot[repoDev.id];
      // Sin versión previa registrada: se actualiza si la copia local no es más reciente
      const notEditedLocally = lastRepoStr !== undefined
        ? localStr === lastRepoStr
        : (devices[index].updatedAt || "") <= (repoDev.updatedAt || "");
      if (notEditedLocally) {
        devices[index] = repoDev;
        changed = true;
      }
    });

    markRepoIdsSeen(json);

    if (newDevices.length > 0) devices.push(...newDevices);
    return changed;
  } catch (_) {
    // Ignorar si fetch falla (ej. file:// protocol)
    return false;
  }
}

/**
 * Registrar como vistos los IDs de equipos.json y guardar la versión recibida de cada equipo
 */
function markRepoIdsSeen(list) {
  try {
    const seenIds = new Set(JSON.parse(localStorage.getItem(REPO_SEEN_IDS_KEY) || "[]"));
    const snapshot = JSON.parse(localStorage.getItem(REPO_SNAPSHOT_KEY) || "{}");
    list.forEach((d) => {
      seenIds.add(d.id);
      snapshot[d.id] = JSON.stringify(d);
    });
    localStorage.setItem(REPO_SEEN_IDS_KEY, JSON.stringify([...seenIds]));
    localStorage.setItem(REPO_SNAPSHOT_KEY, JSON.stringify(snapshot));
  } catch (err) {
    console.error("Error al registrar equipos vistos:", err);
  }
}

/**
 * Guardar datos en localStorage
 */
function saveDevices() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(devices));
  } catch (err) {
    console.error("Error al guardar en localStorage:", err);
  }
}

/**
 * Vincular eventos de la interfaz
 */
function bindEvents() {
  // Búsqueda
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    render();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    searchInput.focus();
    render();
  });

  // Modo de visualización: tarjetas o lista
  document.querySelectorAll(".layout-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentLayout = btn.dataset.layout;
      localStorage.setItem("homeinfra_layout", currentLayout);
      render();
    });
  });

  // Vista: equipos completos o componentes por separado
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      currentView = tab.dataset.view;
      localStorage.setItem("homeinfra_view", currentView);
      render();
    });
  });
  if (componentCategoryFilter) {
    componentCategoryFilter.addEventListener("change", (e) => {
      currentComponentCategory = e.target.value;
      render();
    });
  }
  if (pieceStatusFilter) {
    pieceStatusFilter.addEventListener("change", (e) => {
      currentPieceStatus = e.target.value;
      render();
    });
  }
  const componentSortSelect = document.getElementById("component-sort-select");
  if (componentSortSelect) {
    componentSortSelect.addEventListener("change", (e) => {
      currentComponentSort = e.target.value;
      render();
    });
  }

  // Filtros
  typeFilter.addEventListener("change", (e) => {
    currentFilterType = e.target.value;
    render();
  });

  brandFilter.addEventListener("change", (e) => {
    currentFilterBrand = e.target.value;
    render();
  });

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      localStorage.setItem("homeinfra_devices_sort", currentSort);
      render();
    });
  }

  // Modal
  btnAddDevice.addEventListener("click", () => openDeviceModal());
  modalCloseBtn.addEventListener("click", closeDeviceModal);
  cancelModalBtn.addEventListener("click", closeDeviceModal);
  deviceModal.addEventListener("click", (e) => {
    if (e.target === deviceModal) closeDeviceModal();
  });

  // Toggle contraseña en el modal
  if (btnToggleModalPass) {
    btnToggleModalPass.addEventListener("click", () => {
      const isPassword = formWindowsPass.type === "password";
      formWindowsPass.type = isPassword ? "text" : "password";
      btnToggleModalPass.textContent = isPassword ? "🔒" : "👁️";
    });
  }

  // Formulario guardar
  deviceForm.addEventListener("submit", handleFormSubmit);

  // Sugerir driver URL
  btnSuggestDriver.addEventListener("click", handleSuggestDriver);

  // Cambio dinámico de tipo de equipo en el formulario
  formType.addEventListener("change", () => {
    updateFormSectionsVisibility(formType.value);
  });

  // Acciones de reporte / contexto.md
  btnCopyMd.addEventListener("click", handleCopyMarkdown);
  if (btnExportMd) btnExportMd.addEventListener("click", handleExportMarkdown);
  btnSyncFile.addEventListener("click", handleSyncWithFile);

  // Utilidades de respaldo y configuración
  if (btnOpenSettings) btnOpenSettings.addEventListener("click", openSettingsModal);
  if (btnOpenSettingsLink) btnOpenSettingsLink.addEventListener("click", openSettingsModal);
  if (settingsModalClose) settingsModalClose.addEventListener("click", closeSettingsModal);
  if (btnCloseSettingsModal) btnCloseSettingsModal.addEventListener("click", closeSettingsModal);
  if (settingsModal) {
    settingsModal.addEventListener("click", (e) => {
      if (e.target === settingsModal) closeSettingsModal();
    });
  }
  if (btnExportJsonQuick) btnExportJsonQuick.addEventListener("click", handleExportJson);
  if (btnExportJson) btnExportJson.addEventListener("click", handleExportJson);
  if (importJsonInput) importJsonInput.addEventListener("change", handleImportJson);
  if (importCollectorInput) importCollectorInput.addEventListener("change", handleImportCollector);
  if (btnOpenCollector) btnOpenCollector.addEventListener("click", openCollectorSection);
  document.querySelectorAll(".collector-os-tab").forEach((tab) => {
    tab.addEventListener("click", () => selectCollectorOs(tab.dataset.os));
  });
  if (btnCopyCollectorCommand) {
    btnCopyCollectorCommand.addEventListener("click", () => {
      copyText(collectorCommand.textContent, "Comando del Collector copiado");
    });
  }
  if (collectorOutputDir) collectorOutputDir.addEventListener("input", updateCollectorCommand);
  selectCollectorOs(detectCollectorOs());
  if (btnFetchRepoBackup) btnFetchRepoBackup.addEventListener("click", handleFetchRepoBackup);
  if (btnFactoryReset) btnFactoryReset.addEventListener("click", handleFactoryReset);

  // Vista de Ficha Técnica Completa a Pantalla Completa (Detalles)
  if (detailModalClose) detailModalClose.addEventListener("click", closeDeviceDetailModal);
  if (detailModalCloseBtn) detailModalCloseBtn.addEventListener("click", closeDeviceDetailModal);
  const detailModalBottomBackBtn = document.getElementById("detail-modal-bottom-back-btn");
  if (detailModalBottomBackBtn) detailModalBottomBackBtn.addEventListener("click", closeDeviceDetailModal);
  const detailModalBottomEditBtn = document.getElementById("detail-modal-bottom-edit-btn");
  if (detailModalBottomEditBtn) {
    detailModalBottomEditBtn.addEventListener("click", () => {
      if (currentDetailDeviceId) handleEditDevice(currentDetailDeviceId);
    });
  }

  // Modal de Previsualización de Fotografía
  const photoPreviewModal = document.getElementById("photo-preview-modal");
  const photoPreviewClose = document.getElementById("photo-preview-close");
  if (photoPreviewClose) photoPreviewClose.addEventListener("click", closePhotoPreviewModal);
  if (photoPreviewModal) {
    photoPreviewModal.addEventListener("click", (e) => {
      if (e.target === photoPreviewModal) closePhotoPreviewModal();
    });
  }

  // Escape key para cerrar vistas y modales activos ordenadamente
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (photoPreviewModal && photoPreviewModal.classList.contains("active")) {
        closePhotoPreviewModal();
      } else if (deviceModal && deviceModal.classList.contains("active")) {
        closeDeviceModal();
      } else if (settingsModal && settingsModal.classList.contains("active")) {
        closeSettingsModal();
      } else if (deviceDetailModal && deviceDetailModal.classList.contains("active")) {
        closeDeviceDetailModal();
      }
    }
  });
}

/**
 * Tipos de hardware con emoji para reconocimiento rápido (filtro, tarjetas y lista)
 */
const HARDWARE_TYPES = {
  Laptop: { emoji: "💻", short: "Laptop", label: "Laptop" },
  Desktop: { emoji: "🖥️", short: "PC", label: "PC de escritorio" },
  Impresora: { emoji: "🖨️", short: "Impresora", label: "Impresora" },
  Monitor: { emoji: "📺", short: "Monitor", label: "Monitor" },
  Red: { emoji: "📡", short: "Red", label: "Red / servidor" },
  HDD: { emoji: "💽", short: "HDD", label: "Disco duro (HDD)" },
  SSD: { emoji: "💾", short: "SSD", label: "SSD" },
  Pendrive: { emoji: "🔑", short: "Pendrive", label: "Pendrive" },
  GPU: { emoji: "🎮", short: "GPU", label: "Tarjeta de video (GPU)" },
  RAID: { emoji: "🎛️", short: "RAID", label: "Controladora RAID / HBA" },
  Cargador: { emoji: "🔌", short: "Cargador", label: "Cargador" },
  Fuente: { emoji: "⚡", short: "Fuente", label: "Fuente de poder" },
  CPU: { emoji: "⚙️", short: "CPU", label: "Procesador (CPU)" },
  RAM: { emoji: "🧠", short: "RAM", label: "Memoria RAM" },
  PlacaBase: { emoji: "🔲", short: "Placa base", label: "Placa base" },
  NIC: { emoji: "🌐", short: "Red", label: "Tarjeta de red" },
  Bateria: { emoji: "🔋", short: "Batería", label: "Batería" },
  Otro: { emoji: "📦", short: "Otro", label: "Otro" }
};

/**
 * Tipo de hardware de un equipo: campo hardwareType, o deducido del tipo y sus especificaciones
 */
function getDeviceHwType(dev) {
  if (dev.hardwareType && HARDWARE_TYPES[dev.hardwareType]) return dev.hardwareType;
  switch (dev.type) {
    case "Laptop": return "Laptop";
    case "Desktop": return "Desktop";
    case "Impresora": return "Impresora";
    case "Monitor": return "Monitor";
    case "Servidor / Red": return "Red";
  }
  const storage = dev.specs?.storage || "";
  if (/^HDD/i.test(storage)) return "HDD";
  if (/^SSD/i.test(storage)) return "SSD";
  if (/^USB/i.test(storage)) return "Pendrive";
  if (dev.specs?.gpu?.model) return "GPU";
  return "Otro";
}

/**
 * Tipo de hardware de un componente según su categoría (almacenamiento se separa en HDD y SSD)
 */
function getComponentHwType(comp) {
  if (comp.hardwareType && HARDWARE_TYPES[comp.hardwareType]) return comp.hardwareType;
  switch (comp.category) {
    case "CPU": return "CPU";
    case "RAM": return "RAM";
    case "GPU": return "GPU";
    case "Placa base": return "PlacaBase";
    case "Red": return "NIC";
    case "Cargador": return "Cargador";
    case "Batería": return "Bateria";
    case "Monitor": return "Monitor";
    case "Almacenamiento": {
      const text = `${comp.details || ""} ${comp.model || ""}`;
      if (/SSD|NVMe/i.test(text)) return "SSD";
      if (/HDD/i.test(text)) return "HDD";
      return "Otro";
    }
  }
  return "Otro";
}

/**
 * Opciones de un filtro de tipo de hardware, con emoji y cantidad
 */
function fillHwTypeOptions(select, keys, allLabel, current) {
  const counts = {};
  keys.forEach((k) => { counts[k] = (counts[k] || 0) + 1; });
  select.innerHTML = `<option value="ALL">${allLabel}</option>`;
  Object.keys(HARDWARE_TYPES).filter((k) => counts[k]).forEach((k) => {
    const opt = document.createElement("option");
    opt.value = k;
    opt.textContent = `${HARDWARE_TYPES[k].emoji} ${HARDWARE_TYPES[k].label} (${counts[k]})`;
    select.appendChild(opt);
  });
  const value = counts[current] ? current : "ALL";
  select.value = value;
  return value;
}

/**
 * Año (4 dígitos) de un texto de fecha, o vacío
 */
function extractYear(text) {
  const match = String(text || "").match(/\b(19\d\d|20\d\d)\b/);
  return match ? match[1] : "";
}

/**
 * Modo lista: tabla de equipos
 */
function buildDevicesTable(list) {
  const rows = list.map((dev) => {
    const hw = HARDWARE_TYPES[getDeviceHwType(dev)];
    const s = dev.specs || {};
    const specs = [
      s.cpu?.model,
      s.ram?.capacity ? `${s.ram.capacity} RAM` : "",
      s.storage,
      s.gpu?.model && /dedicada/i.test(s.gpu.type || "") ? s.gpu.model : ""
    ].filter(Boolean).join(" · ");
    const bench = getCpuBenchmark(dev);
    return `
      <tr onclick="openDeviceDetailModal('${escapeHtml(dev.id)}')" title="Ver ficha completa">
        <td class="col-type"><span class="list-emoji">${hw.emoji}</span> ${escapeHtml(getDeviceHwType(dev) === "Otro" ? dev.type : hw.short)}</td>
        <td class="col-name"><strong>${escapeHtml(dev.brand)}</strong> ${escapeHtml(dev.model)}</td>
        <td class="col-specs">${escapeHtml(specs) || "—"}${bench ? `<div class="list-sub">🏁 Multi ${formatBenchmark(bench.multi)} · Mono ${formatBenchmark(bench.single)}</div>` : ""}</td>
        <td class="col-serial">${escapeHtml(dev.serial || "—")}</td>
        <td class="col-year">${extractYear(dev.mfgDate) || "—"}</td>
        <td class="col-place">${escapeHtml(dev.assignedUser || dev.location || "—")}</td>
      </tr>`;
  }).join("");
  return `
    <div class="inventory-table-wrap">
      <table class="inventory-table">
        <thead><tr><th>Tipo</th><th>Equipo</th><th>Especificaciones</th><th>N.º de serie</th><th>Año</th><th>Ubicación</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/**
 * Modo lista: tabla de componentes
 */
function buildComponentsTable(list) {
  const rows = list.map((c) => {
    const key = getComponentHwType(c);
    const hw = HARDWARE_TYPES[key];
    const detail = [c.capacity, c.details].filter(Boolean).join(" · ");
    const year = getComponentYear(c);
    return `
      <tr onclick="openDeviceDetailModal('${escapeHtml(c.id)}')" title="Ver ficha de la pieza">
        <td class="col-type"><span class="list-emoji">${hw.emoji}</span> ${escapeHtml(key === "Otro" ? c.category : hw.short)}</td>
        <td class="col-name">${c.brand && !(c.model || "").toLowerCase().includes(c.brand.toLowerCase()) ? `<strong>${escapeHtml(c.brand)}</strong> ` : ""}${escapeHtml(c.model || "Sin modelo")}${c.benchmark ? `<div class="list-sub">🏁 Multi ${formatBenchmark(c.benchmark.multi)} · Mono ${formatBenchmark(c.benchmark.single)}</div>` : ""}</td>
        <td class="col-specs">${escapeHtml(detail) || "—"}</td>
        <td class="col-serial">${escapeHtml(c.serial || "—")}</td>
        <td class="col-year">${year || "—"}</td>
        <td class="col-place"><span class="piece-status status-${statusSlug(c.status)}">${escapeHtml(c.status || "Sin estado")}</span>${c.parent ? `<div>${escapeHtml(c.parent.brand)} ${escapeHtml(c.parent.model)}</div>` : ""}</td>
      </tr>`;
  }).join("");
  return `
    <div class="inventory-table-wrap">
      <table class="inventory-table">
        <thead><tr><th>Tipo</th><th>Pieza</th><th>Capacidad / detalles</th><th>N.º de serie</th><th>Año</th><th>Estado / equipo</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

/**
 * Prioridad de categorías / tipos de equipo para ordenación lógica institucional
 */
const TYPE_SORT_PRIORITY = {
  "Laptop": 1,
  "Desktop": 2,
  "Impresora": 3,
  "Monitor": 4,
  "Servidor / Red": 5,
  "Periférico": 6
};

/**
 * Obtener puntaje de tiempo (timestamp) de un equipo a partir de su mfgDate o specs
 */
function getDeviceDateScore(dev) {
  if (dev.mfgDate) {
    const isoMatch = dev.mfgDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
      return new Date(parseInt(isoMatch[1], 10), parseInt(isoMatch[2], 10) - 1, parseInt(isoMatch[3], 10)).getTime();
    }
    const yearMatch = dev.mfgDate.match(/\b(19\d\d|20\d\d)\b/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[1], 10), 0, 1).getTime();
    }
  }
  if (dev.specs?.cpu?.year) {
    return new Date(parseInt(dev.specs.cpu.year, 10), 0, 1).getTime();
  }
  if (dev.updatedAt) {
    const d = new Date(dev.updatedAt).getTime();
    if (!isNaN(d)) return d;
  }
  return 0;
}

/**
 * Ordenar lista de equipos según el criterio seleccionado
 */
// Orden por potencia de CPU: [campo del benchmark, dirección]
const POWER_SORTS = {
  "cpu-multi-desc": ["multi", -1],
  "cpu-multi-asc": ["multi", 1],
  "cpu-single-desc": ["single", -1],
  "cpu-single-asc": ["single", 1]
};

/**
 * Comparar dos benchmarks de CPU; los que no tienen benchmark van al final
 */
function compareBenchmarks(benchA, benchB, [key, dir]) {
  const va = benchA?.[key];
  const vb = benchB?.[key];
  if (va == null && vb == null) return 0;
  if (va == null) return 1;
  if (vb == null) return -1;
  return (va - vb) * dir;
}

/**
 * Benchmark de CPU de un equipo (especificaciones o componente CPU)
 */
function getCpuBenchmark(dev) {
  return dev.specs?.cpu?.benchmark || getPiecesOf(dev).find((p) => p.hardwareType === "CPU" && p.benchmark)?.benchmark || null;
}

/**
 * Año de lanzamiento o fabricación de un componente (o del equipo enlazado, ej. un cargador)
 */
function getComponentYear(comp) {
  const source = comp.year || comp.mfgDate || "";
  const match = String(source).match(/\b(19\d\d|20\d\d)\b/);
  return match ? parseInt(match[1], 10) : null;
}

/**
 * Formatear un puntaje de benchmark con separador de miles
 */
function formatBenchmark(value) {
  return value == null ? "—" : Number(value).toLocaleString("es-CL");
}

function sortDevices(list, sortType) {
  return list.slice().sort((a, b) => {
    if (POWER_SORTS[sortType]) {
      const cmp = compareBenchmarks(getCpuBenchmark(a), getCpuBenchmark(b), POWER_SORTS[sortType]);
      if (cmp !== 0) return cmp;
      return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
    }
    switch (sortType) {
      case "category": {
        // Orden lógico por tipo de equipo
        const priorityA = TYPE_SORT_PRIORITY[a.type] || 99;
        const priorityB = TYPE_SORT_PRIORITY[b.type] || 99;
        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }
        // Sub-orden por marca
        const brandCmp = (a.brand || "").localeCompare(b.brand || "", "es", { sensitivity: "base" });
        if (brandCmp !== 0) return brandCmp;
        // Sub-orden por modelo
        return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
      }

      case "brand": {
        const brandCmp = (a.brand || "").localeCompare(b.brand || "", "es", { sensitivity: "base" });
        if (brandCmp !== 0) return brandCmp;
        return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
      }

      case "model": {
        const modelCmp = (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
        if (modelCmp !== 0) return modelCmp;
        return (a.brand || "").localeCompare(b.brand || "", "es", { sensitivity: "base" });
      }

      case "age-desc": {
        // Más recientes primero (año o fecha más alta primero)
        const scoreA = getDeviceDateScore(a);
        const scoreB = getDeviceDateScore(b);
        if (scoreB !== scoreA) {
          return scoreB - scoreA;
        }
        return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
      }

      case "age-asc": {
        // Más antiguos primero (año o fecha más baja primero)
        const scoreA = getDeviceDateScore(a);
        const scoreB = getDeviceDateScore(b);
        if (scoreA !== scoreB) {
          return scoreA - scoreB;
        }
        return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
      }

      case "location": {
        const userA = (a.assignedUser || a.location || "");
        const userB = (b.assignedUser || b.location || "");
        const userCmp = userA.localeCompare(userB, "es", { sensitivity: "base" });
        if (userCmp !== 0) return userCmp;
        return (a.model || "").localeCompare(b.model || "", "es", { sensitivity: "base" });
      }

      default:
        return 0;
    }
  });
}

/**
 * Extrae y normaliza los usuarios asociados al equipo.
 * Soporta múltiples usuarios asignados, reasignaciones en el tiempo y cuentas múltiples del SO.
 */
function getDeviceUsers(dev) {
  if (!dev) {
    return [];
  }

  const users = [];
  const seen = new Set();

  const addName = (raw, type = "assigned") => {
    if (!raw) return;
    const clean = String(raw).trim();
    if (!clean) return;

    if (clean.includes(",") || clean.includes(";")) {
      clean.split(/[,;]+/).forEach((part) => addName(part, type));
      return;
    }

    const lower = clean.toLowerCase();
    if (!seen.has(lower)) {
      seen.add(lower);
      users.push({ name: clean, type });
    }
  };

  // 1. Usuario(s) asignado(s) explícito(s)
  if (dev.assignedUser) {
    addName(dev.assignedUser, "assigned");
  }

  // 2. Si no tiene asignado explícito, extraer de location si tiene formato "Nombre / Oficina"
  if (!dev.assignedUser && dev.location) {
    const parts = dev.location.split("/");
    const candidate = parts[0].trim();
    if (candidate && !/^(oficina|sala|recepci|remoto|central|laboratorio|red)/i.test(candidate)) {
      addName(candidate, "assigned");
    }
  }

  // 3. Cuentas en Sistema Operativo (windowsUser)
  if (dev.windowsUser) {
    const rawUsers = dev.windowsUser.split(/[,;]+/);
    rawUsers.forEach((raw) => {
      const trimmed = raw.trim();
      if (!trimmed) return;
      const nameOnly = trimmed.includes("\\") ? trimmed.split("\\")[1] : trimmed;
      const exists = users.some(
        (u) => u.name.toLowerCase() === nameOnly.toLowerCase() || u.name.toLowerCase() === trimmed.toLowerCase()
      );
      if (!exists) {
        addName(nameOnly, "os");
      }
    });
  }

  return users;
}

// Estados del ciclo de vida de una pieza
const PIECE_STATUSES = ["Instalada", "En stock", "En reparación", "Retirada", "Dada de baja"];

/**
 * Las piezas (CPU, RAM, discos, GPU, cargadores...) son registros propios con kind "pieza"
 */
function isPiece(dev) {
  return dev.kind === "pieza";
}

/**
 * Equipos completos: todo lo que no es pieza
 */
function getCompleteDevices() {
  return devices.filter((dev) => !isPiece(dev));
}

/**
 * Piezas instaladas actualmente en un equipo
 */
function getPiecesOf(dev) {
  return devices.filter((p) => isPiece(p) && p.installedIn === dev.id);
}

/**
 * Piezas que estuvieron en un equipo y ya no lo están (según su historial)
 */
function getFormerPiecesOf(dev) {
  return devices.filter((p) => isPiece(p) && p.installedIn !== dev.id && (p.history || []).some((h) => h.deviceId === dev.id));
}

/**
 * Filtrar y ordenar lista de equipos
 */
function getFilteredDevices() {
  const filtered = getCompleteDevices().filter((dev) => {
    if (currentFilterType !== "ALL" && getDeviceHwType(dev) !== currentFilterType) {
      return false;
    }
    if (currentFilterBrand !== "ALL" && dev.brand !== currentFilterBrand) {
      return false;
    }
    if (searchQuery) {
      let specsText = "";
      if (dev.specs) {
        specsText = `${dev.specs.cpu?.model || ""} ${dev.specs.cpu?.details || ""} ${dev.specs.ram?.capacity || ""} ${dev.specs.ram?.type || ""} ${dev.specs.gpu?.model || ""} ${dev.specs.gpu?.type || ""}`;
      }
      const credsText = `${dev.windowsUser || ""} ${dev.observaciones || ""}`;
      const officeText = dev.officeLicense ? `${dev.officeLicense.status || ""} ${dev.officeLicense.type || ""} ${dev.officeLicense.notes || ""}` : "";
      const target = `${dev.brand} ${dev.model} ${dev.type} ${dev.serial || ""} ${dev.mfgDate || ""} ${dev.assignedUser || ""} ${dev.location || ""} ${dev.notes || ""} ${specsText} ${credsText} ${officeText}`.toLowerCase();
      if (!target.includes(searchQuery)) {
        return false;
      }
    }
    return true;
  });

  return sortDevices(filtered, currentSort);
}

/**
 * Renderizado general
 */
function render() {
  updateStats();
  updateBrandFilterOptions();
  updateComponentCategoryOptions();
  applyViewVisibility();
  renderGrid();
}

/**
 * Mostrar los controles y la grilla de la vista activa
 */
function applyViewVisibility() {
  const isComponents = currentView === "components";
  document.querySelectorAll(".view-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === currentView);
  });
  document.querySelectorAll(".layout-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.layout === currentLayout);
  });
  document.querySelectorAll(".devices-only").forEach((el) => { el.style.display = isComponents ? "none" : ""; });
  document.querySelectorAll(".components-only").forEach((el) => { el.style.display = isComponents ? "" : "none"; });
  searchInput.placeholder = isComponents
    ? "Buscar pieza por modelo, serie, tipo, estado o equipo..."
    : "Buscar por marca, modelo, serie o asignado...";
  if (isComponents) {
    devicesGrid.style.display = "none";
    emptyState.style.display = "none";
  } else {
    componentsGrid.style.display = "none";
    componentsEmptyState.style.display = "none";
  }
}

/**
 * Lista de piezas con su categoría legible y el equipo donde están instaladas (o null)
 */
function getAllComponents() {
  return devices.filter(isPiece).map((p) => ({
    ...p,
    category: HARDWARE_TYPES[p.hardwareType]?.short || p.type,
    parent: p.installedIn ? devices.find((d) => d.id === p.installedIn) || null : null
  }));
}

/**
 * Actualizar dropdown de categorías de componentes
 */
function updateComponentCategoryOptions() {
  if (componentCategoryFilter) {
    currentComponentCategory = fillHwTypeOptions(
      componentCategoryFilter, getAllComponents().map(getComponentHwType), "Todos los tipos", currentComponentCategory
    );
  }
  if (typeFilter) {
    currentFilterType = fillHwTypeOptions(
      typeFilter, getCompleteDevices().map(getDeviceHwType), "Todos los tipos", currentFilterType
    );
  }
  if (pieceStatusFilter) {
    const counts = {};
    getAllComponents().forEach((p) => { counts[p.status] = (counts[p.status] || 0) + 1; });
    pieceStatusFilter.innerHTML = '<option value="ALL">Todos los estados</option>'
      + PIECE_STATUSES.filter((s) => counts[s]).map((s) => `<option value="${s}">${s} (${counts[s]})</option>`).join("");
    if (!counts[currentPieceStatus]) currentPieceStatus = "ALL";
    pieceStatusFilter.value = currentPieceStatus;
  }
}

/**
 * Piezas destacadas en la tarjeta de un equipo (ej. el cargador de un laptop)
 */
function getLinkedRows(dev) {
  return getPiecesOf(dev).filter((p) => p.hardwareType === "Cargador").map((p) => ({
    icon: "🔌",
    label: "Cargador",
    text: [p.brand, p.model.replace(/\s*\(.*\)$/, ""), p.capacity, p.details].filter(Boolean).join(" · "),
    targetId: p.id
  }));
}

/**
 * Renderizar la vista de componentes por separado
 */
function renderComponentsGrid() {
  const all = getAllComponents();
  const filtered = all.filter((c) => {
    if (currentComponentCategory !== "ALL" && getComponentHwType(c) !== currentComponentCategory) return false;
    if (currentPieceStatus !== "ALL" && c.status !== currentPieceStatus) return false;
    if (searchQuery) {
      const target = `${c.category} ${c.brand || ""} ${c.model} ${c.serial || ""} ${c.capacity || ""} ${c.details || ""} ${c.status || ""} ${c.parent ? `${c.parent.brand} ${c.parent.model}` : ""}`.toLowerCase();
      if (!target.includes(searchQuery)) return false;
    }
    return true;
  });

  // Orden por potencia de CPU o por año; los componentes sin dato van al final
  if (POWER_SORTS[currentComponentSort]) {
    filtered.sort((a, b) => compareBenchmarks(a.benchmark, b.benchmark, POWER_SORTS[currentComponentSort]));
  } else if (currentComponentSort === "year-desc" || currentComponentSort === "year-asc") {
    const dir = currentComponentSort === "year-desc" ? -1 : 1;
    filtered.sort((a, b) => compareBenchmarks(
      { year: getComponentYear(a) }, { year: getComponentYear(b) }, ["year", dir]
    ));
  }

  resultsCount.textContent = `Mostrando ${filtered.length} de ${all.length} pieza${all.length === 1 ? "" : "s"}`;
  componentsGrid.innerHTML = "";

  if (filtered.length === 0) {
    componentsGrid.style.display = "none";
    componentsEmptyState.style.display = "block";
    return;
  }
  componentsGrid.style.display = "grid";
  componentsEmptyState.style.display = "none";

  if (currentLayout === "list") {
    componentsGrid.style.display = "block";
    componentsGrid.innerHTML = buildComponentsTable(filtered);
    return;
  }

  filtered.forEach((c) => componentsGrid.appendChild(createComponentCard(c)));
}

/**
 * Clase CSS de un estado de pieza
 */
function statusSlug(status) {
  return String(status || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/s+/g, "-");
}

/**
 * Elementos integrados que viven dentro de una pieza o equipo (no se gestionan por separado)
 */
function integratedListHtml(list) {
  if (!Array.isArray(list) || list.length === 0) return "";
  const items = list.map((x) => `${HARDWARE_TYPES[x.hardwareType]?.emoji || "📦"} ${escapeHtml(x.model)}`).join(" · ");
  return `<div class="integrated-list" title="Integrado: vive dentro de esta pieza y no se gestiona por separado"><strong>Integra:</strong> ${items}</div>`;
}

/**
 * Estado de una pieza y, si está instalada, enlace al equipo
 */
function pieceLocationHtml(p) {
  const status = `<span class="piece-status status-${statusSlug(p.status)}">${escapeHtml(p.status || "Sin estado")}</span>`;
  if (!p.parent) return `<div class="card-linked-row piece-location">${status}</div>`;
  return `<button type="button" class="card-linked-row piece-location" title="Abrir ficha del equipo" onclick="event.stopPropagation(); openDeviceDetailModal('${escapeHtml(p.parent.id)}')">${status}<span>en <strong>${escapeHtml(p.parent.brand)} ${escapeHtml(p.parent.model)}</strong></span><span class="linked-arrow">➔</span></button>`;
}

/**
 * Tarjeta de una pieza (vista Piezas)
 */
function createComponentCard(c) {
  const card = document.createElement("div");
  card.className = "device-card device-card-compact component-card";
  card.style.setProperty("--card-accent-color", c.status === "Instalada" ? "#34d399" : "#fbbf24");
  card.title = "Ver ficha de la pieza";
  card.addEventListener("click", () => openDeviceDetailModal(c.id));

  const compImage = c.imageUrl || "";
  const compYear = getComponentYear(c);
  // Características oficiales (puertos, tasas de transferencia, etc.) en un desplegable
  const featuresHtml = Array.isArray(c.features) && c.features.length > 0
    ? `<details class="component-features" onclick="event.stopPropagation()">
         <summary>📋 Características (${c.features.length})</summary>
         <dl>${c.features.map((ft) => `<dt>${escapeHtml(ft.label)}</dt><dd>${escapeHtml(ft.value)}</dd>`).join("")}</dl>
         ${c.featuresSource ? `<a href="${escapeHtml(c.featuresSource.url)}" target="_blank" rel="noopener">Fuente oficial${c.featuresSource.date ? ` (${escapeHtml(c.featuresSource.date)})` : ""}</a>` : ""}
       </details>`
    : "";
  const thumbHtml = compImage
    ? `<div class="card-thumbnail-wrap">
         <img src="${escapeHtml(compImage)}" alt="${escapeHtml(c.model)}" class="card-thumbnail" loading="lazy" onerror="this.parentElement.style.display='none'">
       </div>`
    : "";

  card.innerHTML = `
    <div class="card-main-body">
      ${thumbHtml}
      <div class="card-headings">
        <div class="card-type-row">
          <span class="device-badge badge-other">${HARDWARE_TYPES[getComponentHwType(c)].emoji} ${escapeHtml(getComponentHwType(c) === "Otro" ? c.category : HARDWARE_TYPES[getComponentHwType(c)].short)}</span>
          ${compYear ? `<span class="spec-pill pill-year" title="${escapeHtml(c.yearNote || "Año de lanzamiento o fabricación")}">${compYear}</span>` : ""}
        </div>
        ${c.brand && !(c.model || "").toLowerCase().includes(c.brand.toLowerCase()) ? `<div class="card-brand-label">${escapeHtml(c.brand)}</div>` : ""}
        <h3 class="card-model-title" title="${escapeHtml(c.model)}">${escapeHtml(c.model || "Sin modelo")}</h3>
      </div>
    </div>
    <div class="card-specs-summary">
      ${c.capacity ? `<span class="compact-spec-pill">${escapeHtml(c.capacity)}</span>` : ""}
      ${c.details ? `<span class="compact-spec-pill">${escapeHtml(c.details)}</span>` : ""}
      ${c.benchmark ? `<span class="compact-spec-pill pill-benchmark" title="${escapeHtml(c.benchmark.source || "Benchmark")}: multinúcleo / mononúcleo">🏁 Multi ${formatBenchmark(c.benchmark.multi)} · Mono ${formatBenchmark(c.benchmark.single)}</span>` : ""}
    </div>
    ${integratedListHtml(c.integrated)}
    ${pieceLocationHtml(c)}
    ${featuresHtml}
    <div class="card-compact-footer">
      <span class="card-serial-text" title="Número de serie">${c.serial ? `S/N ${escapeHtml(c.serial)}` : "Sin S/N"}</span>
      <span class="btn-card-detail-hint">Ver ficha ➔</span>
    </div>
  `;
  return card;
}

/**
 * Actualizar estadísticas en los contadores superiores
 */
function updateStats() {
  const complete = getCompleteDevices();
  const total = complete.length;
  const laptops = complete.filter((d) => d.type === "Laptop").length;
  const desktops = complete.filter((d) => d.type === "Desktop").length;
  const printers = complete.filter((d) => d.type === "Impresora").length;
  const others = total - (laptops + desktops + printers);

  statTotal.textContent = total;
  statLaptops.textContent = laptops;
  statDesktops.textContent = desktops;
  statPrinters.textContent = printers;
  statOthers.textContent = others >= 0 ? others : 0;
}

/**
 * Actualizar dropdown de marcas dinámicamente
 */
function updateBrandFilterOptions() {
  const brands = Array.from(new Set(getCompleteDevices().map((d) => d.brand).filter(Boolean))).sort();
  const currentVal = brandFilter.value;

  brandFilter.innerHTML = '<option value="ALL">Todas las marcas</option>';
  brands.forEach((b) => {
    const opt = document.createElement("option");
    opt.value = b;
    opt.textContent = b;
    brandFilter.appendChild(opt);
  });

  if (brands.includes(currentVal)) {
    brandFilter.value = currentVal;
  } else {
    brandFilter.value = "ALL";
    currentFilterBrand = "ALL";
  }
}

/**
 * Generar bloque visual HTML para las especificaciones de hardware
 */
function buildSpecsHtml(specs) {
  if (!specs || (!specs.cpu?.model && !specs.ram?.capacity && !specs.gpu?.model)) {
    return "";
  }

  let html = `<div class="device-specs-box">`;

  // CPU
  if (specs.cpu?.model) {
    const yearBadge = specs.cpu.year ? `<span class="spec-pill pill-year">${specs.cpu.year}</span>` : "";
    const speedInfo = specs.cpu.speed ? ` • ${escapeHtml(specs.cpu.speed)}` : "";
    const coresInfo = specs.cpu.cores ? ` (${escapeHtml(specs.cpu.cores)})` : "";
    const detailsInfo = specs.cpu.details ? `<div class="spec-details">${escapeHtml(specs.cpu.details)}</div>` : "";
    const bench = specs.cpu.benchmark;
    const benchInfo = bench
      ? `<div class="spec-details">🏁 ${escapeHtml(bench.source || "Benchmark")}: multinúcleo <strong>${formatBenchmark(bench.multi)}</strong> · mononúcleo <strong>${formatBenchmark(bench.single)}</strong>${bench.url ? ` · <a href="${escapeHtml(bench.url)}" target="_blank" rel="noopener">ver fuente</a>` : ""}${bench.date ? ` (${escapeHtml(bench.date)})` : ""}</div>`
      : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-cpu-icon" title="Procesador / CPU">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
            <rect x="9" y="9" width="6" height="6"></rect>
            <line x1="9" y1="1" x2="9" y2="4"></line>
            <line x1="15" y1="1" x2="15" y2="4"></line>
            <line x1="9" y1="20" x2="9" y2="23"></line>
            <line x1="15" y1="20" x2="15" y2="23"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.cpu.model)}</span>
            ${yearBadge}
          </div>
          <div class="spec-details">${coresInfo}${speedInfo}</div>
          ${detailsInfo}
          ${benchInfo}
        </div>
      </div>
    `;
  }

  // RAM
  if (specs.ram?.capacity) {
    const ramType = specs.ram.type ? ` ${escapeHtml(specs.ram.type)}` : "";
    const ramSpeed = specs.ram.speed ? ` @ ${escapeHtml(specs.ram.speed)}` : "";
    const ramDetails = specs.ram.details ? `<div class="spec-details">${escapeHtml(specs.ram.details)}</div>` : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-ram-icon" title="Memoria RAM">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <line x1="6" y1="18" x2="6" y2="20"></line>
            <line x1="10" y1="18" x2="10" y2="20"></line>
            <line x1="14" y1="18" x2="14" y2="20"></line>
            <line x1="18" y1="18" x2="18" y2="20"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.ram.capacity)}${ramType}</span>
            <span class="spec-details">${ramSpeed}</span>
          </div>
          ${ramDetails}
        </div>
      </div>
    `;
  }

  // GPU
  if (specs.gpu?.model) {
    const isDedicated = specs.gpu.type?.toLowerCase().includes("dedicada");
    const gpuClass = isDedicated ? "pill-dedicated" : "pill-integrated";
    const gpuTypeBadge = specs.gpu.type ? `<span class="spec-pill ${gpuClass}">${escapeHtml(specs.gpu.type)}</span>` : "";
    const gpuDetails = specs.gpu.details ? `<div class="spec-details">${escapeHtml(specs.gpu.details)}</div>` : "";

    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap spec-gpu-icon" title="Tarjeta Gráfica / GPU">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="3" width="20" height="14" rx="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-title-row">
            <span class="spec-name">${escapeHtml(specs.gpu.model)}</span>
            ${gpuTypeBadge}
          </div>
          ${gpuDetails}
        </div>
      </div>
    `;
  }

  // Storage
  if (specs.storage) {
    html += `
      <div class="spec-item">
        <div class="spec-icon-wrap" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24;" title="Almacenamiento">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="16" rx="2"></rect>
            <circle cx="7.5" cy="12" r="1.5"></circle>
            <circle cx="16.5" cy="12" r="1.5"></circle>
          </svg>
        </div>
        <div class="spec-content">
          <div class="spec-name" style="font-size: 0.8rem;">${escapeHtml(specs.storage)}</div>
        </div>
      </div>
    `;
  }

  html += `</div>`;
  return html;
}

/**
 * Generar bloque visual para Credenciales de Windows
 */
function buildCredentialsHtml(dev) {
  if (!dev.windowsUser && !dev.windowsPassword) {
    return "";
  }

  const isRevealed = !!revealedPasswords[dev.id];
  const passDisplay = isRevealed ? escapeHtml(dev.windowsPassword) : "••••••••";
  const eyeIcon = isRevealed ? "🔒" : "👁️";

  return `
    <div class="device-credentials-box">
      <div class="cred-row">
        <span class="cred-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Usuario Windows:
        </span>
        <div class="cred-value-wrap">
          <span class="cred-value">${dev.windowsUser ? escapeHtml(dev.windowsUser) : "No asignado"}</span>
          ${dev.windowsUser ? `<button class="cred-icon-btn" title="Copiar usuario" onclick="copyText('${escapeHtml(dev.windowsUser)}', 'Usuario copiado')">📋</button>` : ""}
        </div>
      </div>

      ${dev.windowsPassword ? `
      <div class="cred-row">
        <span class="cred-label">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          Contraseña Windows:
        </span>
        <div class="cred-value-wrap">
          <span class="cred-value">${passDisplay}</span>
          <button class="cred-icon-btn" title="Mostrar/Ocultar contraseña" onclick="toggleCardPassword('${dev.id}')">${eyeIcon}</button>
          <button class="cred-icon-btn" title="Copiar contraseña" onclick="copyText('${escapeHtml(dev.windowsPassword)}', 'Contraseña copiada')">📋</button>
        </div>
      </div>
      ` : ""}
    </div>
  `;
}

/**
 * Generar bloque visual para Licenciamiento de Microsoft Office
 */
function buildOfficeLicenseHtml(dev) {
  if (dev.type === "Impresora" || !dev.officeLicense) {
    return "";
  }

  const lic = dev.officeLicense;
  const status = lic.status || "Sin Licencia";
  const type = lic.type || "No especificado";
  const deactivationDate = lic.deactivationDate || "";
  const notes = lic.notes || "";

  let badgeClass = "badge-office-none";
  let statusIcon = "⚪";
  if (status === "Activa") {
    badgeClass = "badge-office-active";
    statusIcon = "🟢";
  } else if (status === "Desactivada") {
    badgeClass = "badge-office-inactive";
    statusIcon = "🔴";
  } else if (status === "Pendiente") {
    badgeClass = "badge-office-pending";
    statusIcon = "🟡";
  }

  return `
    <div class="device-office-box">
      <div class="office-box-header">
        <div class="office-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
          <span>Licenciamiento Microsoft Office</span>
        </div>
        <span class="${badgeClass}">${statusIcon} ${escapeHtml(status)}</span>
      </div>

      <div class="detail-meta-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.5rem 1rem; margin-top: 0.2rem;">
        <div class="detail-meta-item">
          <span class="detail-meta-label">Versión / Edición:</span>
          <span class="detail-meta-value"><strong>${escapeHtml(type)}</strong></span>
        </div>
        ${deactivationDate ? `
        <div class="detail-meta-item">
          <span class="detail-meta-label">Fecha de Desactivación:</span>
          <span class="detail-meta-value" style="color: #fca5a5; font-weight: 600;">📅 ${escapeHtml(deactivationDate)}</span>
        </div>
        ` : ""}
        ${notes ? `
        <div class="detail-meta-item" style="grid-column: 1 / -1;">
          <span class="detail-meta-label">Cuenta / Observación de Licencia:</span>
          <span class="detail-meta-value">${escapeHtml(notes)}</span>
        </div>
        ` : ""}
      </div>
    </div>
  `;
}

/**
 * Generar bloque visual para Control de Consumibles de Impresora (Tóner y Tambor)
 */
function buildSuppliesHtml(dev) {
  if (dev.type !== "Impresora" && !dev.supplies) {
    return "";
  }

  const toner = dev.supplies?.toner || { model: "TN-2340 / TN-2370", lastWarningDate: "", lastReplacedDate: "" };
  const drum = dev.supplies?.drum || { model: "DR-2340", lastWarningDate: "", lastReplacedDate: "" };

  const formatD = (d) => {
    if (!d) return '<span class="date-empty">Sin registro</span>';
    const parts = d.split("-");
    if (parts.length === 3) return `<strong class="date-active">${parts[2]}/${parts[1]}/${parts[0]}</strong>`;
    return `<strong class="date-active">${escapeHtml(d)}</strong>`;
  };

  return `
    <div class="printer-supplies-box">
      <div class="supplies-box-header">
        <div class="supplies-header-title">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Control y Registro de Consumibles</span>
        </div>
        <button type="button" class="btn btn-outline" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;" onclick="handleEditDevice('${dev.id}')">
          ✏️ Editar Fechas y Eventos
        </button>
      </div>

      <!-- Fila Tóner -->
      <div class="supply-tracker-item">
        <div class="supply-item-top">
          <span class="supply-chip chip-toner">TÓNER</span>
          <span class="supply-model-code">${escapeHtml(toner.model || "TN-2340 / TN-2370")}</span>
        </div>
        <div class="supply-dates-row">
          <div class="supply-date-cell">
            <span class="date-cell-label">⚠️ Último aviso de fin:</span>
            <span class="date-cell-value">${formatD(toner.lastWarningDate)}</span>
          </div>
          <div class="supply-date-cell">
            <span class="date-cell-label">✅ Último reemplazo:</span>
            <span class="date-cell-value">${formatD(toner.lastReplacedDate)}</span>
          </div>
        </div>
      </div>

      <!-- Fila Tambor -->
      <div class="supply-tracker-item">
        <div class="supply-item-top">
          <span class="supply-chip chip-drum">TAMBOR</span>
          <span class="supply-model-code">${escapeHtml(drum.model || "DR-2340")}</span>
        </div>
        <div class="supply-dates-row">
          <div class="supply-date-cell">
            <span class="date-cell-label">⚠️ Último aviso de fin:</span>
            <span class="date-cell-value">${formatD(drum.lastWarningDate)}</span>
          </div>
          <div class="supply-date-cell">
            <span class="date-cell-label">✅ Último reemplazo:</span>
            <span class="date-cell-value">${formatD(drum.lastReplacedDate)}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Toggle para mostrar/ocultar contraseña en una tarjeta específica
 */
window.toggleCardPassword = function (id) {
  revealedPasswords[id] = !revealedPasswords[id];
  if (currentDetailDeviceId === id) {
    openDeviceDetailModal(id);
  } else {
    renderGrid();
  }
};

/**
 * Copiar texto arbitrario al portapapeles con mensaje toast
 */
window.copyText = function (text, msg = "Copiado al portapapeles") {
  navigator.clipboard.writeText(text).then(() => {
    showToast(msg);
  }).catch(() => {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    showToast(msg);
  });
};

/**
 * Redimensionar imagen a un tamaño óptimo para almacenamiento local (máx 1200px, JPEG 0.82)
 */
function resizeImageFile(file, maxWidth = 1200, maxHeight = 1200, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth || height > maxHeight) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = (err) => reject(err);
    reader.readAsDataURL(file);
  });
}

/**
 * Generar HTML del módulo de Fotografías del Equipo (sin categorías, solo tag de nombre sobrepuesto)
 * Exclusivamente para fotos de la unidad física subidas por el usuario; la imagen principal genérica de la tarjeta no se altera.
 */
function buildDevicePhotosHtml(dev) {
  const images = Array.isArray(dev.images) ? dev.images : [];

  let galleryHtml = "";
  if (images.length === 0) {
    galleryHtml = `
      <div class="photos-empty-state">
        <span>No hay fotografías adicionales registradas para esta unidad. Selecciona un archivo de imagen y asígnale un tag de nombre para subirla.</span>
      </div>
    `;
  } else {
    galleryHtml = `
      <div class="device-photos-grid">
        ${images.map((img) => `
          <div class="device-photo-item" title="Clic para ampliar: ${escapeHtml(img.name)}">
            <img src="${escapeHtml(img.url)}" alt="${escapeHtml(img.name)}" class="device-photo-img" onclick="handlePreviewPhotoById('${dev.id}', '${escapeHtml(img.id)}')">
            <div class="device-photo-tag" title="${escapeHtml(img.name)}">${escapeHtml(img.name)}</div>
            <button type="button" class="device-photo-delete" title="Eliminar foto" onclick="handleDeleteDevicePhoto('${dev.id}', '${escapeHtml(img.id)}')">&times;</button>
          </div>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="device-photos-section" id="device-photos-section">
      <div class="photos-section-header">
        <div class="photos-section-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <span>Fotografías del Equipo (${images.length})</span>
        </div>
      </div>

      <!-- Formulario para subir imagen con tag de nombre -->
      <div class="upload-photo-panel">
        <div class="upload-photo-row">
          <div class="upload-field-file">
            <label for="new-photo-file-${dev.id}" class="photo-file-label">
              📁 Seleccionar imagen
            </label>
            <input type="file" id="new-photo-file-${dev.id}" accept="image/*" class="photo-file-input-hidden" onchange="handlePhotoFileSelected('${dev.id}', this)">
            <span id="new-photo-filename-${dev.id}" class="photo-filename-display">Ningún archivo</span>
          </div>

          <div class="upload-field-name">
            <input type="text" id="new-photo-name-${dev.id}" class="photo-name-input" placeholder="Tag de nombre (ej. Frontal, Trasera, Teclado...)" maxlength="50">
          </div>

          <button type="button" class="btn btn-primary btn-upload-photo" onclick="handleSubmitNewPhoto('${dev.id}')">
            Subir Foto
          </button>
        </div>
      </div>

      ${galleryHtml}
    </div>
  `;
}

/**
 * Evento al seleccionar archivo en el modal de ficha técnica
 */
window.handlePhotoFileSelected = function (deviceId, input) {
  const filenameDisplay = document.getElementById(`new-photo-filename-${deviceId}`);
  const nameInput = document.getElementById(`new-photo-name-${deviceId}`);

  if (input.files && input.files[0]) {
    const file = input.files[0];
    if (filenameDisplay) {
      filenameDisplay.textContent = file.name;
    }
    if (nameInput && !nameInput.value.trim()) {
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      nameInput.value = cleanName.charAt(0).toUpperCase() + cleanName.slice(1);
    }
  } else if (filenameDisplay) {
    filenameDisplay.textContent = "Ningún archivo";
  }
};

/**
 * Subir fotografía a un equipo individual (no altera la foto principal genérica)
 */
window.handleSubmitNewPhoto = async function (deviceId) {
  const fileInput = document.getElementById(`new-photo-file-${deviceId}`);
  const nameInput = document.getElementById(`new-photo-name-${deviceId}`);

  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    showToast("Por favor selecciona un archivo de imagen para subir");
    return;
  }

  const file = fileInput.files[0];
  const tagName = (nameInput ? nameInput.value.trim() : "") || file.name.replace(/\.[^/.]+$/, "");

  try {
    const resizedDataUrl = await resizeImageFile(file);

    const dev = devices.find((d) => d.id === deviceId);
    if (!dev) return;

    if (!Array.isArray(dev.images)) {
      dev.images = [];
    }

    const newPhoto = {
      id: "img-" + Date.now() + "-" + Math.random().toString(36).substring(2, 6),
      name: tagName,
      url: resizedDataUrl
    };

    dev.images.push(newPhoto);

    saveDevices();
    renderGrid();
    openDeviceDetailModal(deviceId);
    showToast(`Fotografía guardada con tag: "${tagName}"`);
  } catch (err) {
    console.error("Error al procesar imagen:", err);
    showToast("Hubo un error al procesar el archivo de imagen");
  }
};

/**
 * Eliminar fotografía de un equipo (no altera la foto principal genérica)
 */
window.handleDeleteDevicePhoto = function (deviceId, photoId) {
  const dev = devices.find((d) => d.id === deviceId);
  if (!dev || !dev.images) return;

  const photo = dev.images.find((img) => img.id === photoId);
  const photoName = photo ? photo.name : "esta fotografía";

  if (!confirm(`¿Estás seguro de eliminar "${photoName}"?`)) {
    return;
  }

  dev.images = dev.images.filter((img) => img.id !== photoId);

  saveDevices();
  renderGrid();
  openDeviceDetailModal(deviceId);
  showToast("Fotografía eliminada");
};

/**
 * Vista previa ampliada de una foto específica por ID
 */
window.handlePreviewPhotoById = function (deviceId, photoId) {
  const dev = devices.find((d) => d.id === deviceId);
  if (!dev || !Array.isArray(dev.images)) return;
  const photo = dev.images.find((img) => img.id === photoId);
  if (photo) {
    openPhotoPreviewModal(photo.url, photo.name);
  }
};

/**
 * Visor ampliado de fotografía con tag sobrepuesto
 */
window.openPhotoPreviewModal = function (url, tagName) {
  const modal = document.getElementById("photo-preview-modal");
  const img = document.getElementById("photo-preview-img");
  const tag = document.getElementById("photo-preview-tag");
  if (!modal || !img) return;

  img.src = url;
  if (tag) {
    tag.textContent = tagName || "";
    tag.style.display = tagName ? "block" : "none";
  }
  modal.classList.add("active");
};

window.closePhotoPreviewModal = function () {
  const modal = document.getElementById("photo-preview-modal");
  const img = document.getElementById("photo-preview-img");
  if (modal) modal.classList.remove("active");
  if (img) img.src = "";
};

/**
 * Generar pastillas compactas de especificaciones básicas para la tarjeta resumida
 */
function buildCompactSpecsHtml(dev) {
  let pills = [];

  if (dev.type === "Impresora") {
    pills.push(`<span class="compact-spec-pill pill-printer">🖨️ Láser Monocromática</span>`);
    pills.push(`<span class="compact-spec-pill">🔌 USB 2.0</span>`);
    if (dev.supplies?.toner?.model) {
      const tonerShort = dev.supplies.toner.model.replace("Brother ", "");
      pills.push(`<span class="compact-spec-pill pill-storage">Tóner ${escapeHtml(tonerShort)}</span>`);
    }
  } else {
    // Procesador
    if (dev.specs?.cpu?.model) {
      pills.push(`<span class="compact-spec-pill pill-cpu" title="${escapeHtml(dev.specs.cpu.model)}">⚡ ${escapeHtml(dev.specs.cpu.model)}</span>`);
    }
    const bench = getCpuBenchmark(dev);
    if (bench) {
      pills.push(`<span class="compact-spec-pill pill-benchmark" title="${escapeHtml(bench.source || "Benchmark")}: multinúcleo / mononúcleo">🏁 Multi ${formatBenchmark(bench.multi)} · Mono ${formatBenchmark(bench.single)}</span>`);
    }
    // Memoria RAM
    if (dev.specs?.ram?.capacity) {
      pills.push(`<span class="compact-spec-pill pill-ram">💾 ${escapeHtml(dev.specs.ram.capacity)} RAM</span>`);
    }
    // Almacenamiento
    if (dev.specs?.storage) {
      pills.push(`<span class="compact-spec-pill pill-storage">📁 ${escapeHtml(dev.specs.storage)}</span>`);
    }
    // GPU si es dedicada
    if (dev.specs?.gpu?.model && dev.specs.gpu.type?.toLowerCase().includes("dedicada")) {
      pills.push(`<span class="compact-spec-pill">🎮 ${escapeHtml(dev.specs.gpu.model)}</span>`);
    }

    // Licencia Office
    if (dev.officeLicense) {
      const oStatus = dev.officeLicense.status;
      const oType = dev.officeLicense.type || "Office";
      const shortType = oType.replace("Microsoft 365", "M365").replace("Standard", "Std").replace("Business", "Biz");
      if (oStatus === "Activa") {
        pills.push(`<span class="compact-spec-pill pill-office-active" title="Licencia Office Activa: ${escapeHtml(dev.officeLicense.type || '')}">💼 ${escapeHtml(shortType)}</span>`);
      } else if (oStatus === "Desactivada") {
        const deactStr = dev.officeLicense.deactivationDate ? ` (${dev.officeLicense.deactivationDate})` : "";
        pills.push(`<span class="compact-spec-pill pill-office-inactive" title="Licencia desactivada${escapeHtml(deactStr)}">⛔ Office Desact.${escapeHtml(deactStr)}</span>`);
      } else if (oStatus === "Pendiente") {
        pills.push(`<span class="compact-spec-pill pill-office-pending" title="Licencia Office pendiente de activación">🟡 Office Pendiente</span>`);
      }
    }
  }

  if (pills.length === 0 && dev.notes) {
    pills.push(`<span class="compact-spec-pill">${escapeHtml(dev.notes.slice(0, 40))}...</span>`);
  }

  return pills.join("");
}

/**
 * Renderizar tarjetas de equipos en formato compacto (ahorro de espacio)
 */
function renderGrid() {
  if (currentView === "components") {
    renderComponentsGrid();
    return;
  }
  const filtered = getFilteredDevices();
  devicesGrid.innerHTML = "";

  const completeCount = getCompleteDevices().length;
  resultsCount.textContent = `Mostrando ${filtered.length} de ${completeCount} equipo${completeCount === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    devicesGrid.style.display = "none";
    emptyState.style.display = "block";
    return;
  }

  devicesGrid.style.display = "grid";
  emptyState.style.display = "none";

  if (currentLayout === "list") {
    devicesGrid.style.display = "block";
    devicesGrid.innerHTML = buildDevicesTable(filtered);
    return;
  }

  filtered.forEach((dev) => {
    const card = document.createElement("div");
    card.className = "device-card device-card-compact";

    let badgeClass = "badge-other";
    let accentColor = "#94a3b8";

    switch (dev.type) {
      case "Laptop":
        badgeClass = "badge-laptop";
        accentColor = "#818cf8";
        break;
      case "Desktop":
        badgeClass = "badge-desktop";
        accentColor = "#34d399";
        break;
      case "Impresora":
        badgeClass = "badge-printer";
        accentColor = "#fbbf24";
        break;
      case "Monitor":
        badgeClass = "badge-monitor";
        accentColor = "#38bdf8";
        break;
      case "Servidor / Red":
        badgeClass = "badge-network";
        accentColor = "#f472b6";
        break;
    }
    card.style.setProperty("--card-accent-color", accentColor);

    // Clic en la tarjeta abre la ficha técnica completa
    card.addEventListener("click", () => {
      openDeviceDetailModal(dev.id);
    });

    // Año de fabricación o lanzamiento
    let yearBadge = "";
    if (dev.mfgDate) {
      const yrMatch = dev.mfgDate.match(/\b(19\d\d|20\d\d)\b/);
      if (yrMatch) {
        yearBadge = `<span class="spec-pill pill-year">${yrMatch[1]}</span>`;
      }
    }

    const compactSpecsHtml = buildCompactSpecsHtml(dev);
    // Cargador del laptop, o equipo al que pertenece un cargador
    const linkedRowsHtml = getLinkedRows(dev).map((row) => {
      const content = `<span class="linked-icon">${row.icon}</span><span><strong>${escapeHtml(row.label)}:</strong> ${escapeHtml(row.text)}</span>`;
      return row.targetId
        ? `<button type="button" class="card-linked-row" title="Abrir ficha" onclick="event.stopPropagation(); openDeviceDetailModal('${escapeHtml(row.targetId)}')">${content}<span class="linked-arrow">➔</span></button>`
        : `<div class="card-linked-row">${content}</div>`;
    }).join("");
    const usersList = getDeviceUsers(dev);
    let usersBadgesHtml = "";

    if (dev.type === "Impresora" && !dev.assignedUser) {
      usersBadgesHtml = `
        <div class="card-user-badge badge-printer-shared" title="Ubicación: ${escapeHtml(dev.location || "Hogar")}">
          <span class="user-avatar">🖨️</span>
          <span class="user-name">${escapeHtml(dev.location || "Uso Compartido")}</span>
        </div>
      `;
    } else if (usersList.length > 0) {
      usersBadgesHtml = usersList.map((u) => {
        const icon = u.type === "os" ? "💻" : "👤";
        const roleTitle = u.type === "os" ? `Cuenta SO: ${escapeHtml(u.name)}` : `Usuario asignado: ${escapeHtml(u.name)}`;
        const badgeClass = u.type === "os" ? "badge-user-os" : "badge-user-assigned";
        return `
          <div class="card-user-badge ${badgeClass}" title="${roleTitle}">
            <span class="user-avatar">${icon}</span>
            <span class="user-name">${escapeHtml(u.name)}</span>
          </div>
        `;
      }).join("");
    } else {
      usersBadgesHtml = `
        <div class="card-user-badge badge-user-empty" title="Sin usuario asignado">
          <span class="user-avatar">👤</span>
          <span class="user-name">${escapeHtml(dev.location || "Sin asignar")}</span>
        </div>
      `;
    }

    // Miniatura
    const thumbHtml = dev.imageUrl
      ? `<div class="card-thumbnail-wrap">
           <img src="${escapeHtml(dev.imageUrl)}" alt="${escapeHtml(dev.brand)} ${escapeHtml(dev.model)}" class="card-thumbnail" loading="lazy" onerror="this.parentElement.style.display='none'">
         </div>`
      : "";

    card.innerHTML = `
      <!-- Fila Superior: Prioridad en el Usuario / Cuentas Asignadas -->
      <div class="card-user-strip">
        <div class="card-users-list">
          ${usersBadgesHtml}
        </div>
        <div class="card-quick-actions" onclick="event.stopPropagation()">
          <button class="icon-btn edit-btn" title="Editar equipo" onclick="event.stopPropagation(); handleEditDevice('${dev.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
            </svg>
          </button>
          <button class="icon-btn delete-btn" title="Eliminar equipo" onclick="event.stopPropagation(); handleDeleteDevice('${dev.id}')">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>

      <!-- Cuerpo Principal: Miniatura + Marca + Modelo + Tipo -->
      <div class="card-main-body">
        ${thumbHtml}
        <div class="card-headings">
          <div class="card-type-row">
            <span class="device-badge ${badgeClass}">${HARDWARE_TYPES[getDeviceHwType(dev)].emoji} ${escapeHtml(getDeviceHwType(dev) === "Otro" ? dev.type : HARDWARE_TYPES[getDeviceHwType(dev)].short)}</span>
            ${yearBadge}
          </div>
          <div class="card-brand-label">
            ${escapeHtml(dev.brand)}${dev.location ? ` • <span style="font-weight: normal; opacity: 0.85;">📍 ${escapeHtml(dev.location)}</span>` : ""}
          </div>
          <h3 class="card-model-title" title="${escapeHtml(dev.model)}">${escapeHtml(dev.model)}</h3>
        </div>
      </div>

      <!-- Pastillas de características básicas -->
      <div class="card-specs-summary">
        ${compactSpecsHtml}
      </div>

      ${linkedRowsHtml}

      <!-- Pie de tarjeta: Serie & Prompt de Clic -->
      <div class="card-compact-footer">
        <span class="card-serial-text" title="Número de Serie / Activo">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          ${dev.serial ? escapeHtml(dev.serial) : "Sin S/N"}
        </span>
        <span class="btn-card-detail-hint">Ver ficha completa ➔</span>
      </div>
    `;

    devicesGrid.appendChild(card);
  });
}

/**
 * Abrir modal con la ficha técnica completa del equipo
 */
window.openDeviceDetailModal = function (deviceId) {
  const dev = devices.find((d) => d.id === deviceId);
  if (!dev) return;

  currentDetailDeviceId = deviceId;

  if (detailModalTitle) {
    detailModalTitle.textContent = `${dev.brand} ${dev.model}`;
  }
  if (detailModalEyebrow) {
    detailModalEyebrow.textContent = `FICHA TÉCNICA COMPLETA • ${dev.type.toUpperCase()}`;
  }
  if (detailModalUser) {
    const users = getDeviceUsers(dev);
    const usersStr = users.length > 0 ? users.map((u) => u.name).join(", ") : (dev.assignedUser || "Sin asignar");
    const locStr = dev.location ? ` <span style="opacity: 0.85; font-weight: normal; margin-left: 0.6rem;">📍 ${escapeHtml(dev.location)}</span>` : "";
    detailModalUser.innerHTML = `👤 Usuario(s): <strong>${escapeHtml(usersStr)}</strong>${locStr}`;
  }
  if (detailModalDriverLink) {
    detailModalDriverLink.href = dev.driverUrl || "#";
    detailModalDriverLink.title = `Descargar drivers oficiales de ${dev.brand} ${dev.model}`;
    if (dev.driverUrl && !dev.driverUrl.startsWith("http")) {
      detailModalDriverLink.setAttribute("download", "");
    } else {
      detailModalDriverLink.removeAttribute("download");
    }
  }
  const bottomDriverLink = document.getElementById("detail-modal-bottom-driver-link");
  if (bottomDriverLink) {
    bottomDriverLink.href = dev.driverUrl || "#";
    bottomDriverLink.title = `Descargar drivers oficiales de ${dev.brand} ${dev.model}`;
    if (dev.driverUrl && !dev.driverUrl.startsWith("http")) {
      bottomDriverLink.setAttribute("download", "");
    } else {
      bottomDriverLink.removeAttribute("download");
    }
  }

  if (detailModalEditBtn) {
    detailModalEditBtn.onclick = () => {
      handleEditDevice(dev.id);
    };
  }
  const bottomEditBtn = document.getElementById("detail-modal-bottom-edit-btn");
  if (bottomEditBtn) {
    bottomEditBtn.onclick = () => {
      handleEditDevice(dev.id);
    };
  }
  const bottomBackBtn = document.getElementById("detail-modal-bottom-back-btn");
  if (bottomBackBtn) {
    bottomBackBtn.onclick = () => {
      closeDeviceDetailModal();
    };
  }

  // Componentes modulares completos
  const specsHtml = buildSpecsHtml(dev.specs);
  const credsHtml = buildCredentialsHtml(dev);
  const officeHtml = buildOfficeLicenseHtml(dev);
  const suppliesHtml = buildSuppliesHtml(dev);
  const photosHtml = buildDevicePhotosHtml(dev);

  let heroHtml = "";
  if (dev.imageUrl) {
    heroHtml = `
      <div class="detail-hero-box">
        <div class="detail-hero-img-wrap">
          <img src="${escapeHtml(dev.imageUrl)}" alt="${escapeHtml(dev.brand)} ${escapeHtml(dev.model)}" class="detail-hero-img">
        </div>
        <div class="detail-hero-specs">
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">
            ${escapeHtml(dev.brand)} • ${escapeHtml(dev.type)}
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 700; margin: 0; color: #ffffff;">
            ${escapeHtml(dev.model)}
          </h3>
          <div style="font-size: 0.85rem; color: #cbd5e1; margin-top: 0.2rem;">
            Serie / Activo: <code style="color: #7dd3fc; background: rgba(0,0,0,0.3); padding: 0.1rem 0.35rem; border-radius: 4px;">${dev.serial ? escapeHtml(dev.serial) : "Sin registrar"}</code>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-muted);">
            Fabricación / Lanzamiento: <strong>${dev.mfgDate ? escapeHtml(dev.mfgDate) : "No registrada"}</strong>
          </div>
        </div>
      </div>
    `;
  }

  const metaGridHtml = `
    <div class="detail-meta-grid">
      <div class="detail-meta-item">
        <span class="detail-meta-label">Fabricante / Marca:</span>
        <span class="detail-meta-value">${escapeHtml(dev.brand)}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Modelo:</span>
        <span class="detail-meta-value">${escapeHtml(dev.model)}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Número de Serie:</span>
        <span class="detail-meta-value" style="font-family: monospace;">${dev.serial ? escapeHtml(dev.serial) : "No registrado"}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Fabricación / Lanzamiento:</span>
        <span class="detail-meta-value">${dev.mfgDate ? escapeHtml(dev.mfgDate) : "No registrada"}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Asignado / Ubicación:</span>
        <span class="detail-meta-value">${escapeHtml(dev.location || "Hogar")}</span>
      </div>
      <div class="detail-meta-item">
        <span class="detail-meta-label">Última Actualización:</span>
        <span class="detail-meta-value">${dev.updatedAt || "Reciente"}</span>
      </div>
    </div>
  `;

  let notesHtml = "";
  if (dev.notes) {
    notesHtml = `
      <div class="device-notes" style="margin: 0;">
        <div style="font-size: 0.72rem; font-weight: 700; color: #a5b4fc; text-transform: uppercase; margin-bottom: 0.3rem;">
          ⚙️ Configuración de Fábrica & Datos Técnicos
        </div>
        <div>${escapeHtml(dev.notes)}</div>
      </div>
    `;
  }

  let obsHtml = "";
  if (dev.observaciones) {
    obsHtml = `
      <div class="device-observaciones" style="margin: 0;">
        <div class="observaciones-title">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          Observaciones, Mantenimiento & Repuestos
        </div>
        <div>${formatObservaciones(dev.observaciones)}</div>
      </div>
    `;
  }

  if (detailModalBody) {
    detailModalBody.innerHTML = `
      ${heroHtml}
      ${!dev.imageUrl ? metaGridHtml : ""}
      ${credsHtml}
      ${officeHtml}
      ${suppliesHtml}
      ${specsHtml}
      ${isPiece(dev) ? buildPieceRelationHtml(dev) : buildInstalledPiecesHtml(dev)}
      ${dev.imageUrl ? metaGridHtml : ""}
      ${notesHtml}
      ${obsHtml}
      ${photosHtml}
    `;
  }

  if (deviceDetailModal) {
    deviceDetailModal.classList.add("active");
    deviceDetailModal.scrollTop = 0;
  }
};

/**
 * Nombre corto de un equipo por id
 */
function deviceName(id) {
  const d = devices.find((x) => x.id === id);
  return d ? `${d.brand} ${d.model}` : (id || "—");
}

/**
 * Ficha de una pieza: estado, equipo, integrados, características, acciones e historial
 */
function buildPieceRelationHtml(p) {
  const parent = p.installedIn ? devices.find((d) => d.id === p.installedIn) : null;
  const today = new Date().toISOString().split("T")[0];
  const targets = getCompleteDevices().filter((d) => d.id !== p.installedIn);
  const history = (p.history || []).slice().sort((x, y) => (y.date || "").localeCompare(x.date || ""));
  const info = [p.capacity, p.details].filter(Boolean).join(" · ");
  const features = Array.isArray(p.features) && p.features.length
    ? `<dl class="piece-features">${p.features.map((ft) => `<dt>${escapeHtml(ft.label)}</dt><dd>${escapeHtml(ft.value)}</dd>`).join("")}</dl>
       ${p.featuresSource ? `<a href="${escapeHtml(p.featuresSource.url)}" target="_blank" rel="noopener">Fuente oficial (${escapeHtml(p.featuresSource.date || "")})</a>` : ""}`
    : "";
  const historyRows = history.map((h) => `
    <tr>
      <td>${escapeHtml(h.date || "—")}</td>
      <td>${escapeHtml(h.action)}</td>
      <td>${h.deviceId ? `<button type="button" class="link-btn" onclick="openDeviceDetailModal('${escapeHtml(h.deviceId)}')">${escapeHtml(deviceName(h.deviceId))}</button>` : "—"}</td>
      <td>${escapeHtml(h.note || "")}</td>
    </tr>`).join("");

  return `
    <div class="piece-relation">
      <div class="observaciones-title">🔗 Relación con equipos</div>
      <div class="piece-relation-status">
        <span class="piece-status status-${statusSlug(p.status)}">${escapeHtml(p.status || "Sin estado")}</span>
        ${parent ? `<span>en <button type="button" class="link-btn" onclick="openDeviceDetailModal('${escapeHtml(parent.id)}')">${escapeHtml(parent.brand)} ${escapeHtml(parent.model)} ➔</button></span>` : ""}
      </div>
      ${info ? `<div class="piece-info">${escapeHtml(info)}</div>` : ""}
      ${p.benchmark ? `<div class="piece-info">🏁 ${escapeHtml(p.benchmark.source)}: multinúcleo <strong>${formatBenchmark(p.benchmark.multi)}</strong> · mononúcleo <strong>${formatBenchmark(p.benchmark.single)}</strong></div>` : ""}
      ${integratedListHtml(p.integrated)}
      ${features}

      <div class="piece-actions">
        <div class="piece-action-row">
          <label>Fecha <input type="date" id="piece-action-date" value="${today}"></label>
          <label class="piece-note">Nota <input type="text" id="piece-action-note" placeholder="Motivo o detalle (opcional)"></label>
        </div>
        <div class="piece-action-row">
          <select id="piece-install-target">
            <option value="">Elegir equipo…</option>
            ${targets.map((d) => `<option value="${escapeHtml(d.id)}">${HARDWARE_TYPES[getDeviceHwType(d)].emoji} ${escapeHtml(d.brand)} ${escapeHtml(d.model)}</option>`).join("")}
          </select>
          <button type="button" class="btn btn-primary" onclick="installPiece('${escapeHtml(p.id)}')">${parent ? "Mover a este equipo" : "Instalar"}</button>
        </div>
        <div class="piece-action-row">
          <select id="piece-new-status">
            ${PIECE_STATUSES.filter((s) => s !== "Instalada").map((s) => `<option value="${s}">${s}</option>`).join("")}
          </select>
          <button type="button" class="btn btn-secondary" onclick="changePieceStatus('${escapeHtml(p.id)}')">${parent ? "Retirar del equipo" : "Cambiar estado"}</button>
        </div>
      </div>

      <div class="observaciones-title" style="margin-top: 1rem;">🕓 Historial</div>
      ${history.length
        ? `<table class="piece-history"><thead><tr><th>Fecha</th><th>Movimiento</th><th>Equipo</th><th>Nota</th></tr></thead><tbody>${historyRows}</tbody></table>`
        : `<p class="piece-info">Sin movimientos registrados.</p>`}
    </div>`;
}

/**
 * Ficha de un equipo: piezas instaladas, integrados y piezas que estuvieron antes
 */
function buildInstalledPiecesHtml(dev) {
  const pieces = getPiecesOf(dev);
  const former = getFormerPiecesOf(dev);
  const integratedHost = integratedListHtml(dev.integrated);
  if (!pieces.length && !former.length && !integratedHost) return "";
  const hwOf = (p) => HARDWARE_TYPES[p.hardwareType] || HARDWARE_TYPES.Otro;
  const nameOf = (p) => `${p.brand && !(p.model || "").toLowerCase().includes(p.brand.toLowerCase()) ? `<strong>${escapeHtml(p.brand)}</strong> ` : ""}${escapeHtml(p.model)}`;
  const rows = pieces.map((p) => {
    const detail = [p.capacity, p.details].filter(Boolean).join(" · ");
    const integrated = (p.integrated || []).map((x) => `${HARDWARE_TYPES[x.hardwareType]?.emoji || "📦"} ${escapeHtml(x.model)}`).join(" · ");
    return `<tr onclick="openDeviceDetailModal('${escapeHtml(p.id)}')" title="Ver ficha de la pieza">
      <td class="col-type"><span class="list-emoji">${hwOf(p).emoji}</span> ${escapeHtml(hwOf(p).short)}</td>
      <td>${nameOf(p)}${integrated ? `<div class="list-sub">Integra: ${integrated}</div>` : ""}</td>
      <td>${escapeHtml(detail) || "—"}</td>
      <td class="col-serial">${escapeHtml(p.serial || "—")}</td>
    </tr>`;
  }).join("");
  const formerRows = former.map((p) => {
    const last = (p.history || []).filter((h) => h.deviceId === dev.id).pop();
    return `<tr onclick="openDeviceDetailModal('${escapeHtml(p.id)}')" title="Ver ficha de la pieza">
      <td class="col-type"><span class="list-emoji">${hwOf(p).emoji}</span> ${escapeHtml(hwOf(p).short)}</td>
      <td>${nameOf(p)}</td>
      <td>${escapeHtml(last ? `${last.action} · ${last.date}` : "")}</td>
      <td><span class="piece-status status-${statusSlug(p.status)}">${escapeHtml(p.status)}</span></td>
    </tr>`;
  }).join("");

  return `
    <div class="piece-relation">
      <div class="observaciones-title">🧩 Piezas instaladas (${pieces.length})</div>
      ${integratedHost}
      ${pieces.length
        ? `<table class="piece-history"><thead><tr><th>Tipo</th><th>Pieza</th><th>Detalles</th><th>N.º de serie</th></tr></thead><tbody>${rows}</tbody></table>`
        : `<p class="piece-info">Sin piezas registradas por separado.</p>`}
      ${former.length
        ? `<div class="observaciones-title" style="margin-top: 1rem;">🕓 Piezas que estuvieron en este equipo</div>
           <table class="piece-history"><thead><tr><th>Tipo</th><th>Pieza</th><th>Último movimiento aquí</th><th>Estado actual</th></tr></thead><tbody>${formerRows}</tbody></table>`
        : ""}
    </div>`;
}

/**
 * Registrar un movimiento en el historial de una pieza
 */
function recordPieceMovement(piece, entry) {
  piece.history = [...(piece.history || []), entry];
  piece.updatedAt = new Date().toISOString().split("T")[0];
}

/**
 * Instalar una pieza en un equipo (o moverla desde otro)
 */
window.installPiece = function (pieceId) {
  const piece = devices.find((d) => d.id === pieceId);
  const target = document.getElementById("piece-install-target")?.value;
  if (!piece || !target) {
    showToast("Elige el equipo donde se instalará la pieza");
    return;
  }
  const date = document.getElementById("piece-action-date")?.value || new Date().toISOString().split("T")[0];
  const note = document.getElementById("piece-action-note")?.value.trim() || "";
  if (piece.installedIn && piece.installedIn !== target) {
    recordPieceMovement(piece, { date, action: "Retirada", deviceId: piece.installedIn, note: `Movida a ${deviceName(target)}` });
  }
  piece.installedIn = target;
  piece.status = "Instalada";
  recordPieceMovement(piece, { date, action: "Instalada", deviceId: target, note });
  saveDevices();
  render();
  openDeviceDetailModal(pieceId);
  showToast(`Pieza instalada en ${deviceName(target)}`);
};

/**
 * Retirar una pieza de su equipo o cambiar su estado (en stock, reparación, retirada, baja)
 */
window.changePieceStatus = function (pieceId) {
  const piece = devices.find((d) => d.id === pieceId);
  const status = document.getElementById("piece-new-status")?.value;
  if (!piece || !status) return;
  const date = document.getElementById("piece-action-date")?.value || new Date().toISOString().split("T")[0];
  const note = document.getElementById("piece-action-note")?.value.trim() || "";
  if (status === "Dada de baja" && !confirm(`¿Dar de baja "${piece.brand} ${piece.model}"? Lo que tenga integrado se da de baja con ella.`)) return;
  const previous = piece.installedIn;
  piece.installedIn = null;
  piece.status = status;
  recordPieceMovement(piece, { date, action: previous ? `Retirada → ${status}` : status, deviceId: previous || null, note });
  saveDevices();
  render();
  openDeviceDetailModal(pieceId);
  showToast(`Estado actualizado: ${status}`);
};

/**
 * Cerrar vista a pantalla completa de ficha técnica
 */
window.closeDeviceDetailModal = function () {
  if (deviceDetailModal) {
    deviceDetailModal.classList.remove("active");
  }
  currentDetailDeviceId = null;
};

/**
 * Función auxiliar para normalizar fechas al formato estándar YYYY-MM-DD para input[type=date]
 */
function toIsoDate(val) {
  if (!val) return "";
  const str = String(val).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const dm = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})$/);
  if (dm) {
    return `${dm[3]}-${dm[2].padStart(2, "0")}-${dm[1].padStart(2, "0")}`;
  }
  return str;
}

/**
 * Modal: Abrir para Crear o Editar con TODOS los campos en un solo lugar unificado
 */
function openDeviceModal(device = null) {
  deviceForm.reset();
  formWindowsPass.type = "password";
  if (btnToggleModalPass) btnToggleModalPass.textContent = "👁️";

  if (device) {
    modalTitle.textContent = `Editar Equipo: ${device.brand} ${device.model}`;
    formDeviceId.value = device.id;
    formBrand.value = device.brand;
    formType.value = device.type;
    formModel.value = device.model;
    formSerial.value = device.serial || "";
    if (formMfgDate) formMfgDate.value = device.mfgDate || "";
    if (formAssignedUser) formAssignedUser.value = device.assignedUser || "";
    formLocation.value = device.location || "";
    formImageUrl.value = device.imageUrl || "";
    formDriverUrl.value = device.driverUrl;
    formNotes.value = device.notes || "";
    formObservaciones.value = device.observaciones || "";

    // Credenciales
    formWindowsUser.value = device.windowsUser || "";
    formWindowsPass.value = device.windowsPassword || "";

    // Hardware Specs
    if (device.specs) {
      formCpuModel.value = device.specs.cpu?.model || "";
      formCpuYear.value = device.specs.cpu?.year || "";
      formCpuCores.value = device.specs.cpu?.cores || "";
      formCpuSpeed.value = device.specs.cpu?.speed || "";
      formCpuDetails.value = device.specs.cpu?.details || "";

      formRamCapacity.value = device.specs.ram?.capacity || "";
      formRamType.value = device.specs.ram?.type || "";
      formRamSpeed.value = device.specs.ram?.speed || "";
      formRamDetails.value = device.specs.ram?.details || "";

      formGpuModel.value = device.specs.gpu?.model || "";
      formGpuType.value = device.specs.gpu?.type || "Integrada";
      formGpuDetails.value = device.specs.gpu?.details || "";
      formStorage.value = device.specs.storage || "";
    }

    // Consumibles Impresora (unificado)
    if (device.supplies) {
      if (formTonerWarningDate) formTonerWarningDate.value = toIsoDate(device.supplies.toner?.lastWarningDate);
      if (formTonerReplacedDate) formTonerReplacedDate.value = toIsoDate(device.supplies.toner?.lastReplacedDate);
      if (formDrumWarningDate) formDrumWarningDate.value = toIsoDate(device.supplies.drum?.lastWarningDate);
      if (formDrumReplacedDate) formDrumReplacedDate.value = toIsoDate(device.supplies.drum?.lastReplacedDate);
    } else {
      if (formTonerWarningDate) formTonerWarningDate.value = "";
      if (formTonerReplacedDate) formTonerReplacedDate.value = "";
      if (formDrumWarningDate) formDrumWarningDate.value = "";
      if (formDrumReplacedDate) formDrumReplacedDate.value = "";
    }

    // Licencia Office
    if (device.officeLicense) {
      if (formOfficeStatus) formOfficeStatus.value = device.officeLicense.status || "Activa";
      if (formOfficeType) formOfficeType.value = device.officeLicense.type || "";
      if (formOfficeDeactivationDate) formOfficeDeactivationDate.value = toIsoDate(device.officeLicense.deactivationDate);
      if (formOfficeNotes) formOfficeNotes.value = device.officeLicense.notes || "";
    } else {
      if (formOfficeStatus) formOfficeStatus.value = "Activa";
      if (formOfficeType) formOfficeType.value = "";
      if (formOfficeDeactivationDate) formOfficeDeactivationDate.value = "";
      if (formOfficeNotes) formOfficeNotes.value = "";
    }
  } else {
    modalTitle.textContent = "Registrar Nuevo Equipo";
    formDeviceId.value = "";
    formType.value = "Laptop";
    formGpuType.value = "Integrada";
    if (formMfgDate) formMfgDate.value = "";
    if (formAssignedUser) formAssignedUser.value = "";
    if (formTonerWarningDate) formTonerWarningDate.value = "";
    if (formTonerReplacedDate) formTonerReplacedDate.value = "";
    if (formDrumWarningDate) formDrumWarningDate.value = "";
    if (formDrumReplacedDate) formDrumReplacedDate.value = "";
    if (formOfficeStatus) formOfficeStatus.value = "Activa";
    if (formOfficeType) formOfficeType.value = "";
    if (formOfficeDeactivationDate) formOfficeDeactivationDate.value = "";
    if (formOfficeNotes) formOfficeNotes.value = "";
  }
  updateFormSectionsVisibility(device ? device.type : formType.value);
  deviceModal.classList.add("active");
  formBrand.focus();
}

/**
 * Mostrar/ocultar secciones específicas del formulario según el tipo de equipo
 */
function updateFormSectionsVisibility(type) {
  if (type === "Impresora") {
    if (suppliesSection) suppliesSection.style.display = "block";
    if (hardwareSection) hardwareSection.style.display = "none";
    if (credentialsSection) credentialsSection.style.display = "none";
    if (officeSection) officeSection.style.display = "none";
  } else {
    if (suppliesSection) suppliesSection.style.display = "none";
    if (hardwareSection) hardwareSection.style.display = "block";
    if (credentialsSection) credentialsSection.style.display = "block";
    if (officeSection) officeSection.style.display = "block";
  }
}

/**
 * Modal: Cerrar
 */
function closeDeviceModal() {
  deviceModal.classList.remove("active");
}

/**
 * Manejar submit del formulario (Creación y Edición completa en un solo lugar)
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const id = formDeviceId.value;
  const brand = formBrand.value.trim();
  const type = formType.value;
  const model = formModel.value.trim();
  const serial = formSerial.value.trim();
  const mfgDate = formMfgDate ? formMfgDate.value.trim() : "";
  const assignedUser = formAssignedUser ? formAssignedUser.value.trim() : "";
  const location = formLocation.value.trim();
  const imageUrl = formImageUrl.value.trim();
  const driverUrl = formDriverUrl.value.trim();
  const notes = formNotes.value.trim();
  const observaciones = formObservaciones.value.trim();
  const windowsUser = formWindowsUser.value.trim();
  const windowsPassword = formWindowsPass.value.trim();
  const today = new Date().toISOString().split("T")[0];

  if (!brand || !model || !driverUrl) {
    showToast("Por favor completa los campos obligatorios (*)");
    return;
  }

  // Construir objeto de hardware specs si se llenó algún campo
  let specs = null;
  const cpuModel = formCpuModel.value.trim();
  const ramCap = formRamCapacity.value.trim();
  const gpuModel = formGpuModel.value.trim();
  const storage = formStorage.value.trim();

  if (cpuModel || ramCap || gpuModel || storage) {
    specs = {
      cpu: {
        model: cpuModel,
        year: formCpuYear.value ? parseInt(formCpuYear.value, 10) : undefined,
        cores: formCpuCores.value.trim(),
        speed: formCpuSpeed.value.trim(),
        details: formCpuDetails.value.trim()
      },
      ram: {
        capacity: ramCap,
        type: formRamType.value.trim(),
        speed: formRamSpeed.value.trim(),
        details: formRamDetails.value.trim()
      },
      gpu: {
        model: gpuModel,
        type: formGpuType.value,
        details: formGpuDetails.value.trim()
      },
      storage: storage
    };
  }

  // Construir objeto de consumibles de forma unificada si aplica
  let supplies = null;
  const tonerWarning = formTonerWarningDate ? formTonerWarningDate.value : "";
  const tonerReplaced = formTonerReplacedDate ? formTonerReplacedDate.value : "";
  const drumWarning = formDrumWarningDate ? formDrumWarningDate.value : "";
  const drumReplaced = formDrumReplacedDate ? formDrumReplacedDate.value : "";

  if (type === "Impresora" || tonerWarning || tonerReplaced || drumWarning || drumReplaced) {
    const existingDev = id ? devices.find((d) => d.id === id) : null;
    const prevSupplies = existingDev?.supplies || {};
    supplies = {
      toner: {
        model: prevSupplies.toner?.model || "Brother TN-2340 / TN-2370",
        lastWarningDate: tonerWarning,
        lastReplacedDate: tonerReplaced
      },
      drum: {
        model: prevSupplies.drum?.model || "Brother DR-2340",
        lastWarningDate: drumWarning,
        lastReplacedDate: drumReplaced
      }
    };
  }

  // Construir objeto de Licencia Office si aplica (no para impresora)
  let officeLicense = null;
  if (type !== "Impresora") {
    const oStatus = formOfficeStatus ? formOfficeStatus.value : "Activa";
    const oType = formOfficeType ? formOfficeType.value.trim() : "";
    const oDeactDate = formOfficeDeactivationDate ? formOfficeDeactivationDate.value : "";
    const oNotes = formOfficeNotes ? formOfficeNotes.value.trim() : "";

    officeLicense = {
      status: oStatus,
      type: oType,
      deactivationDate: oDeactDate,
      notes: oNotes
    };
  }

  if (id) {
    // Editar existente
    const index = devices.findIndex((d) => d.id === id);
    if (index !== -1) {
      devices[index] = {
        ...devices[index],
        brand,
        type,
        model,
        serial,
        mfgDate,
        assignedUser,
        location,
        imageUrl,
        driverUrl,
        windowsUser,
        windowsPassword,
        notes,
        observaciones,
        specs: specs || devices[index].specs,
        supplies: supplies !== null ? supplies : devices[index].supplies,
        officeLicense: officeLicense !== null ? officeLicense : devices[index].officeLicense,
        updatedAt: today
      };
      showToast(`Equipo "${brand} ${model}" actualizado correctamente`);
    }
  } else {
    // Nuevo equipo
    const newDevice = {
      id: "dev-" + Date.now(),
      brand,
      type,
      model,
      serial,
      mfgDate,
      assignedUser,
      location,
      imageUrl,
      driverUrl,
      windowsUser,
      windowsPassword,
      notes,
      observaciones,
      specs: specs,
      supplies: supplies,
      officeLicense: officeLicense,
      updatedAt: today
    };
    devices.unshift(newDevice);
    showToast(`Nuevo equipo "${brand} ${model}" registrado con éxito`);
  }

  saveDevices();
  closeDeviceModal();
  render();
  // Si la vista completa de este equipo está abierta, refrescarla de inmediato con los datos actualizados
  if (id && currentDetailDeviceId === id) {
    openDeviceDetailModal(id);
  }
}

/**
 * Abrir modal de edición para un ID específico
 */
window.handleEditDevice = function (id) {
  const dev = devices.find((d) => d.id === id);
  if (dev) {
    openDeviceModal(dev);
  }
};

/**
 * Eliminar un equipo
 */
window.handleDeleteDevice = function (id) {
  const dev = devices.find((d) => d.id === id);
  if (!dev) return;

  if (confirm(`¿Estás seguro de eliminar "${dev.brand} ${dev.model}" del inventario?`)) {
    devices = devices.filter((d) => d.id !== id);
    saveDevices();
    render();
    showToast("Equipo eliminado");
  }
};

/**
 * Asistente para autogenerar URL de soporte de drivers
 */
function handleSuggestDriver() {
  const brand = formBrand.value.trim();
  const model = formModel.value.trim();

  if (!brand && !model) {
    showToast("Escribe primero la Marca y Modelo para sugerir el enlace");
    formBrand.focus();
    return;
  }

  const query = encodeURIComponent(`${brand} ${model} drivers support oficial`);
  const searchUrl = `https://www.google.com/search?q=${query}`;
  
  let directLink = "";
  const brandLower = brand.toLowerCase();

  if (brandLower.includes("brother")) {
    directLink = `https://support.brother.com/g/b/productsearch.aspx?c=es&lang=es&content=dl&q=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("lenovo")) {
    directLink = `https://pcsupport.lenovo.com/search?query=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("dell")) {
    directLink = `https://www.dell.com/support/home/es-es/product-support/product/${encodeURIComponent(model.replace(/\s+/g, '-').toLowerCase())}/drivers`;
  } else if (brandLower.includes("hp")) {
    directLink = `https://support.hp.com/search?q=${encodeURIComponent(model)}`;
  } else if (brandLower.includes("epson")) {
    directLink = `https://epson.com.do/search?text=${encodeURIComponent(model)}`;
  } else {
    directLink = `https://www.google.com/search?q=${query}`;
  }

  formDriverUrl.value = directLink;
  window.open(searchUrl, "_blank");
  showToast("Búsqueda de drivers abierta en nueva pestaña");
}

/**
 * Generar el contenido completo en Markdown para contexto.md
 */
function generateMarkdownContent() {
  const dateStr = new Date().toISOString().split("T")[0];
  let md = `# Contexto del Proyecto: HomeInfra - Inventario de Equipos Personales\n\n`;
  md += `## 📌 Descripción General\n`;
  md += `Este archivo documenta el registro y contexto de los equipos tecnológicos personales de **HomeInfra**, incluyendo especificaciones clave (marca, modelo, tipo de equipo), número de serie o activo, responsable o ubicación física, imágenes de referencia de los equipos, especificaciones técnicas de hardware (**CPU**, **RAM**, **GPU**), **credenciales de acceso de Windows (Usuario y Contraseña)**, **observaciones técnicas e historial**, y enlaces directos para la descarga de controladores (drivers) oficiales.\n\n`;
  md += `La base de datos principal estructurada reside en el archivo [\`equipos.json\`](equipos.json) y se administra interactivamente a través de la aplicación web local \`HomeInfra\` (\`index.html\`, \`style.css\`, \`app.js\`).\n\n`;
  const equipos = devices.filter((d) => d.kind !== "pieza");
  const piezas = devices.filter((d) => d.kind === "pieza");
  const hwShort = (p) => (HARDWARE_TYPES[p.hardwareType] || HARDWARE_TYPES.Otro).short;
  const nameById = (id) => { const d = devices.find((x) => x.id === id); return d ? `${d.brand} ${d.model}` : id; };
  md += `*Última actualización sincronizada:* \`${dateStr}\` | *Equipos:* **${equipos.length}** | *Piezas:* **${piezas.length}**\n\n`;
  md += `---\n\n`;

  md += `## ⚠️ Directiva de Desarrollo y Alcance (Regla Estricta)\n`;
  md += `> **REGLA FUNDAMENTAL:**\n`;
  md += `> Evitar estrictamente cambiar, crear o implementar funcionalidades, textos o componentes que no vayan en directa y exclusiva relación con lo que el usuario solicita puntualmente.\n`;
  md += `> - No asumir requerimientos no pedidos.\n`;
  md += `> - No agregar elementos estéticos ni funcionales que no hayan sido solicitados expresamente.\n`;
  md += `> - No alterar partes del sistema ni comportamientos fuera del alcance directo de la petición actual.\n\n`;
  md += `---\n\n`;

  md += `## 🧩 Visión: Gestión de Infraestructura basada en ITIL (Planificado)\n`;
  md += `\n`;
  md += `> **Estado:** Implementado. Cada pieza reemplazable (CPU, RAM, placa base, GPU, discos, tarjetas, cargadores) es un registro propio en \`equipos.json\` con \`kind: "pieza"\`, un estado (Instalada, En stock, En reparación, Retirada, Dada de baja), el equipo donde está instalada (\`installedIn\`) y su historial de movimientos (\`history\`). Lo integrado (por ejemplo, el video o la red de una placa base, o los gráficos de un procesador) vive dentro de su pieza anfitriona (\`integrated\`) y no se gestiona por separado. La app permite instalar, mover y retirar piezas desde su ficha.\n`;
  md += `\n`;
  md += `HomeInfra evolucionará de un inventario de equipos a un sistema de gestión de infraestructura alineado con las prácticas de **ITIL** (Gestión de Activos y de la Configuración). Además de equipos completos, registrará **partes de computadores** (RAM, HDD/SSD, fuentes, tarjetas), **equipos de red** (routers, switches, puntos de acceso), **módulos** y otros elementos de infraestructura.\n`;
  md += `\n`;
  md += `### Elementos de Configuración (CI)\n`;
  md += `- Cada elemento registrado (equipo, pieza, módulo o equipo de red) es un **Elemento de Configuración (CI)** con identidad propia: tipo, marca, modelo, número de serie, estado y fotos.\n`;
  md += `- Los CI forman una **base de datos de configuración (CMDB)** que refleja qué existe y cómo se relaciona.\n`;
  md += `\n`;
  md += `### Equipos compuestos y piezas\n`;
  md += `- Un equipo que contiene piezas (por ejemplo, un notebook) es un **CI padre**, y sus piezas son **CI hijos** relacionados con él.\n`;
  md += `- Se distinguen dos clases de piezas:\n`;
  md += `  - **Componentes integrados:** no reemplazables, forman parte fija del equipo (por ejemplo, CPU soldada, GPU integrada o RAM soldada a la placa). Se registran como parte del equipo.\n`;
  md += `  - **Piezas reemplazables:** se gestionan por separado (por ejemplo, módulos de RAM SO-DIMM, HDD/SSD, tarjeta Wi-Fi, batería). Pueden instalarse, retirarse o moverse entre equipos.\n`;
  md += `- Una pieza reemplazable conserva su identidad aunque cambie de equipo o quede guardada sin instalar.\n`;
  md += `\n`;
  md += `### Ciclo de vida de las piezas\n`;
  md += `- Estados previstos: **En stock**, **Instalada**, **En reparación**, **Retirada** y **Dada de baja**.\n`;
  md += `- Cada pieza registra en qué equipo está instalada actualmente, si corresponde.\n`;
  md += `\n`;
  md += `### Gestión de Cambios\n`;
  md += `- Cada intervención sobre un equipo (por ejemplo, cambiar el HDD por un SSD o ampliar la RAM) se registra como un **cambio**: fecha, motivo, pieza retirada, pieza instalada y observaciones.\n`;
  md += `- El historial de cambios permite saber la configuración actual y pasada de cada equipo.\n`;
  md += `\n`;
  md += `### Ejemplo\n`;
  md += `**MSI Modern 14 B5M-011CL** (CI padre):\n`;
  md += `- Integrados: CPU AMD Ryzen 5 5500U, GPU AMD Radeon Graphics.\n`;
  md += `- Reemplazables (gestionados por separado): unidad de almacenamiento, tarjeta Wi-Fi Intel AX200 y módulos de RAM, si no van soldados a la placa.\n`;
  md += `- Si se reemplaza la unidad de almacenamiento, la unidad anterior pasa a **En stock** o **Dada de baja**, la nueva queda **Instalada** en el notebook y el cambio queda registrado en su historial.\n`;
  md += `\n---\n\n`;

  md += `## 💻 Resumen de Equipos Registrados\n\n`;
  md += `| # | Tipo | Marca | Modelo | Fabricación / Lanzamiento | CPU | RAM | GPU | Usuario Windows | Serie / Activo | Enlace a Drivers / Soporte |\n`;
  md += `|---|------|-------|--------|---------------------------|-----|-----|-----|-----------------|----------------|----------------------------|\n`;

  equipos.forEach((dev, idx) => {
    const serial = dev.serial ? dev.serial : "N/A";
    const mfgStr = dev.mfgDate ? dev.mfgDate : "N/A";
    const driverText = `Soporte Oficial ${dev.brand} ${dev.model}`;
    const userStr = dev.windowsUser ? `\`${dev.windowsUser}\`` : 'N/A';
    const cpuStr = dev.specs?.cpu?.model 
      ? `${dev.specs.cpu.model}${dev.specs.cpu.year ? ` [${dev.specs.cpu.year}]` : ''}` 
      : 'N/A';
    const ramStr = dev.specs?.ram?.capacity 
      ? `${dev.specs.ram.capacity} ${dev.specs.ram.type || ''}`.trim() 
      : 'N/A';
    const gpuStr = dev.specs?.gpu?.model 
      ? `${dev.specs.gpu.model} (${dev.specs.gpu.type || 'Integrada'})` 
      : 'N/A';

    md += `| ${idx + 1} | ${dev.type} | ${dev.brand} | ${dev.model} | ${mfgStr} | ${cpuStr} | ${ramStr} | ${gpuStr} | ${userStr} | ${serial} | [${driverText}](${dev.driverUrl}) |\n`;
  });

  md += `\n---\n\n`;
  md += `## 📋 Fichas Técnicas Detalladas de Equipos\n\n`;

  equipos.forEach((dev, idx) => {
    md += `### ${idx + 1}. ${dev.brand} ${dev.model}\n`;
    if (dev.imageUrl) {
      md += `![${dev.brand} ${dev.model}](${dev.imageUrl})\n\n`;
    }
    md += `- **Tipo:** ${dev.type}\n`;
    md += `- **Marca:** ${dev.brand}\n`;
    md += `- **Modelo:** ${dev.model}\n`;
    md += `- **Número de Serie / Activo:** ${dev.serial || "No registrado"}\n`;
    md += `- **Fecha de Fabricación / Lanzamiento:** ${dev.mfgDate || "No registrada"}\n`;
    if (dev.assignedUser) {
      md += `- **Usuario(s) Asignado(s):** ${dev.assignedUser}\n`;
    }
    md += `- **Asignación / Ubicación:** ${dev.location || "Hogar"}\n`;

    if (dev.windowsUser || dev.windowsPassword) {
      md += `- **Credenciales Windows:**\n`;
      if (dev.windowsUser) md += `  - *Usuario:* \`${dev.windowsUser}\`\n`;
      if (dev.windowsPassword) md += `  - *Contraseña:* \`${dev.windowsPassword}\`\n`;
    }

    if (dev.specs) {
      md += `- **Especificaciones de Hardware:**\n`;
      if (dev.specs.cpu?.model) {
        md += `  - **Procesador (CPU):** ${dev.specs.cpu.model}\n`;
        if (dev.specs.cpu.cores) md += `    - *Núcleos e Hilos:* ${dev.specs.cpu.cores}\n`;
        if (dev.specs.cpu.speed) md += `    - *Frecuencia:* ${dev.specs.cpu.speed}\n`;
        if (dev.specs.cpu.year) md += `    - *Año de salida:* ${dev.specs.cpu.year}\n`;
        if (dev.specs.cpu.details) md += `    - *Características:* ${dev.specs.cpu.details}\n`;
        if (dev.specs.cpu.benchmark) {
          const b = dev.specs.cpu.benchmark;
          md += `    - *Benchmark ${b.source}:* multinúcleo ${formatBenchmark(b.multi)} · mononúcleo ${formatBenchmark(b.single)} ([fuente](${b.url}), ${b.date})\n`;
        }
      }
      if (dev.specs.ram?.capacity) {
        md += `  - **Memoria RAM:** ${dev.specs.ram.capacity} ${dev.specs.ram.type || ''}\n`;
        if (dev.specs.ram.speed) md += `    - *Frecuencia:* ${dev.specs.ram.speed}\n`;
        if (dev.specs.ram.details) md += `    - *Configuración:* ${dev.specs.ram.details}\n`;
      }
      if (dev.specs.gpu?.model) {
        md += `  - **Tarjeta Gráfica (GPU):** ${dev.specs.gpu.model}\n`;
        if (dev.specs.gpu.type) md += `    - *Tipo:* **${dev.specs.gpu.type}**\n`;
        if (dev.specs.gpu.details) md += `    - *Características:* ${dev.specs.gpu.details}\n`;
      }
      if (dev.specs.storage) {
        md += `  - **Almacenamiento:** ${dev.specs.storage}\n`;
      }
    }

    md += `- **Enlace de Drivers:** [Soporte Oficial ${dev.brand} ${dev.model}](${dev.driverUrl})\n`;
    if (dev.notes) {
      md += `- **Notas:** ${dev.notes}\n`;
    }
    if (dev.supplies) {
      md += `- **Control de Consumibles y Mantenimiento:**\n`;
      if (dev.supplies.toner) {
        md += `  - **Tóner (${dev.supplies.toner.model || 'TN-2340 / TN-2370'}):**\n`;
        md += `    - *Último aviso de fin de tóner:* ${dev.supplies.toner.lastWarningDate || 'Sin registro'}\n`;
        md += `    - *Último reemplazo de tóner:* ${dev.supplies.toner.lastReplacedDate || 'Sin registro'}\n`;
      }
      if (dev.supplies.drum) {
        md += `  - **Tambor / Drum (${dev.supplies.drum.model || 'DR-2340'}):**\n`;
        md += `    - *Último aviso de fin de tambor:* ${dev.supplies.drum.lastWarningDate || 'Sin registro'}\n`;
        md += `    - *Último reemplazo de tambor:* ${dev.supplies.drum.lastReplacedDate || 'Sin registro'}\n`;
      }
    }
    if (dev.observaciones) {
      md += `- **Observaciones:** ${dev.observaciones}\n`;
    }
    if (Array.isArray(dev.integrated) && dev.integrated.length > 0) {
      md += `- **Integrado en el equipo:** ${dev.integrated.map((x) => x.model).join(" · ")}\n`;
    }
    const devPieces = piezas.filter((p) => p.installedIn === dev.id);
    if (devPieces.length > 0) {
      md += `- **Piezas instaladas:**\n`;
      devPieces.forEach((p) => {
        const parts = [p.brand && !(p.model || "").includes(p.brand) ? p.brand : "", p.model, p.capacity, p.details ? `(${p.details})` : ""].filter(Boolean).join(" ");
        const serialStr = p.serial ? ` · S/N ${p.serial}` : "";
        const yearStr = p.year ? ` · ${p.year}` : "";
        const benchStr = p.benchmark ? ` · ${p.benchmark.source} multi ${formatBenchmark(p.benchmark.multi)} / mono ${formatBenchmark(p.benchmark.single)}` : "";
        md += `  - *${hwShort(p)}:* ${parts}${serialStr}${yearStr}${benchStr} · pieza \`${p.id}\`\n`;
        if (Array.isArray(p.integrated) && p.integrated.length > 0) {
          md += `    - Integra: ${p.integrated.map((x) => x.model).join(" · ")}\n`;
        }
        if (Array.isArray(p.features)) {
          p.features.forEach((ft) => { md += `    - ${ft.label}: ${ft.value}\n`; });
          if (p.featuresSource) md += `    - Fuente: [especificaciones oficiales](${p.featuresSource.url}) (${p.featuresSource.date})\n`;
        }
      });
    }
    if (Array.isArray(dev.images) && dev.images.length > 0) {
      md += `- **Fotografías:**\n`;
      dev.images.forEach((img) => {
        // Las fotos subidas desde la app se guardan como data URL en el navegador
        const ref = img.url && !img.url.startsWith("data:") ? `[\`${img.url}\`](${img.url})` : "(guardada en el navegador)";
        md += `  - ${img.name}: ${ref}\n`;
      });
    }
    if (dev.officeLicense) {
      md += `- **Licencia Microsoft Office:**\n`;
      md += `  - *Estado:* ${dev.officeLicense.status || 'No especificado'}\n`;
      md += `  - *Tipo / Versión:* ${dev.officeLicense.type || 'No especificado'}\n`;
      if (dev.officeLicense.deactivationDate) {
        md += `  - *Fecha de Desactivación:* ${dev.officeLicense.deactivationDate}\n`;
      }
      if (dev.officeLicense.notes) {
        md += `  - *Observaciones / Cuenta:* ${dev.officeLicense.notes}\n`;
      }
    }
    md += `\n`;
  });

  md += `---\n\n`;
  md += `## 🧩 Piezas (estado, ubicación e historial)\n\n`;
  md += `| Tipo | Pieza | N.º de serie | Estado | Equipo | Año |\n`;
  md += `|------|-------|--------------|--------|--------|-----|\n`;
  piezas.forEach((p) => {
    const name = [p.brand && !(p.model || "").includes(p.brand) ? p.brand : "", p.model, p.capacity].filter(Boolean).join(" ");
    const year = String(p.year || p.mfgDate || "").match(/\b(19\d\d|20\d\d)\b/)?.[1] || "";
    md += `| ${hwShort(p)} | ${name} | ${p.serial || "N/A"} | ${p.status || ""} | ${p.installedIn ? nameById(p.installedIn) : "—"} | ${year} |\n`;
  });
  md += `\n### Historial de movimientos\n`;
  piezas.filter((p) => (p.history || []).length > 0).forEach((p) => {
    md += `- **${hwShort(p)} ${p.model}** (\`${p.id}\`):\n`;
    p.history.forEach((h) => {
      md += `  - ${h.date || ""} · ${h.action}${h.deviceId ? ` · ${nameById(h.deviceId)}` : ""}${h.note ? ` · ${h.note}` : ""}\n`;
    });
  });
  md += `\n---\n\n`;
  md += `## 🛠️ Guía de Uso del Inventario y Driver Hub\n`;
  md += `1. **Base de Datos:** El archivo [\`equipos.json\`](equipos.json) almacena los registros de los equipos, imágenes de referencia, especificaciones de hardware, credenciales y observaciones.\n`;
  md += `2. **Abrir la Aplicación:** Abre \`index.html\` en cualquier navegador web.\n`;
  md += `3. **Registro y Edición:** Pulsa en **"Registrar Equipo"** o en el botón de **Editar** (icono de lápiz) en cualquier tarjeta para modificar cualquier campo en cualquier momento.\n`;
  md += `4. **Acceso Rápido a Drivers:** Desde la tarjeta de cada equipo, el botón **"Descargar Drivers & Soporte"** te llevará directamente a la página oficial de descargas del fabricante.\n`;
  md += `5. **Sincronización:** Usa el botón **"Descargar contexto.md"**, **"Sincronizar contexto.md"** o **"Copiar Markdown"** en la barra superior para actualizar este archivo cada vez que ingreses o modifiques equipos.\n`;
  md += `6. **HomeInfra Collector:** El botón **"Collector"** muestra el comando para recolectar los datos de un equipo en Windows, Linux o macOS, y permite importar los registros \`.json\` generados (varios a la vez). El script también puede llevarse en un pendrive desde la carpeta [\`Collector\`](Collector/README.md).\n`;
  md += `7. **Equipos nuevos desde equipos.json:** Al abrir la app, los equipos de \`equipos.json\` que el navegador aún no conoce se agregan solos; los eliminados desde la app no vuelven a aparecer.\n`;

  return md;
}

/**
 * Copiar contenido Markdown al portapapeles
 */
async function handleCopyMarkdown() {
  const content = generateMarkdownContent();
  try {
    await navigator.clipboard.writeText(content);
    showToast("¡Markdown copiado al portapapeles! Listo para pegar en contexto.md");
  } catch (err) {
    const textarea = document.createElement("textarea");
    textarea.value = content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    showToast("¡Markdown copiado al portapapeles!");
  }
}

/**
 * Descargar archivo contexto.md
 */
function handleExportMarkdown() {
  const content = generateMarkdownContent();
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contexto.md";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Descargando contexto.md actualizado...");
}

/**
 * Sincronización directa mediante File System Access API
 */
async function handleSyncWithFile() {
  const content = generateMarkdownContent();

  if ("showSaveFilePicker" in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: "contexto.md",
        types: [
          {
            description: "Archivo Markdown (*.md)",
            accept: { "text/markdown": [".md"] }
          }
        ]
      });
      const writable = await handle.createWritable();
      await writable.write(content);
      await writable.close();
      showToast("¡contexto.md sincronizado y guardado con éxito!");
      return;
    } catch (err) {
      if (err.name !== "AbortError") {
        console.warn("File System API error, usando fallback descarga:", err);
      } else {
        return;
      }
    }
  }

  handleExportMarkdown();
}

/**
 * Exportar base de datos a archivo equipos.json
 */
function handleExportJson() {
  const dataStr = JSON.stringify(devices, null, 2);
  const blob = new Blob([dataStr], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "equipos.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("Base de datos equipos.json descargada");
}

/**
 * Modal Configuración: Abrir
 */
function openSettingsModal() {
  if (settingsDevicesCount) {
    settingsDevicesCount.textContent = `${devices.length} equipo${devices.length === 1 ? '' : 's'}`;
  }
  if (settingsStorageKey) {
    settingsStorageKey.textContent = STORAGE_KEY;
  }
  if (settingsModal) {
    settingsModal.classList.add("active");
  }
}

/**
 * Modal Configuración: Cerrar
 */
function closeSettingsModal() {
  if (settingsModal) {
    settingsModal.classList.remove("active");
  }
}

/**
 * Traer respaldo oficial del proyecto GitHub / equipos.json
 */
async function handleFetchRepoBackup() {
  const currentCount = devices.length;
  const msg = 
`⚠️ SINCRONIZAR CON RESPALDO OFICIAL DE GITHUB

Tienes actualmente ${currentCount} equipo(s) en uso en este navegador.
Esta acción consultará el archivo 'equipos.json' del repositorio GitHub y cargará la configuración oficial del proyecto.

¿Deseas sincronizar y aplicar el respaldo del proyecto ahora?`;

  if (!confirm(msg)) {
    return;
  }

  showToast("Consultando respaldo de GitHub...");
  try {
    const response = await fetch("equipos.json?t=" + Date.now());
    if (response.ok) {
      const json = await response.json();
      if (Array.isArray(json) && json.length > 0) {
        devices = json;
        markRepoIdsSeen(json);
        saveDevices();
        render();
        closeSettingsModal();
        showToast(`¡Respaldo de GitHub cargado! (${json.length} equipos sincronizados)`);
        return;
      }
    }
    throw new Error("No se pudo obtener la lista de equipos del archivo.");
  } catch (err) {
    console.warn("Fallo de red al consultar equipos.json, cargando plantilla base:", err);
    devices = [...DEFAULT_DEVICES];
    saveDevices();
    render();
    closeSettingsModal();
    showToast("Respaldo base oficial del proyecto cargado con éxito");
  }
}

/**
 * Restablecer catálogo a estado de fábrica (protegido con palabra clave)
 */
function handleFactoryReset() {
  const count = devices.length;
  const userInput = prompt(
`🛡️ CONFIRMACIÓN DE RESTABLECIMIENTO DE FÁBRICA

Actualmente tienes ${count} equipo(s) activos en tu sesión de trabajo.
Para evitar pérdidas accidentales de datos mientras usas la aplicación, escribe exactamente la palabra:

REINICIAR

(Si presionas Cancelar, tus datos permanecerán intactos).`
  );

  if (userInput === "REINICIAR") {
    devices = [...DEFAULT_DEVICES];
    saveDevices();
    render();
    closeSettingsModal();
    showToast("Catálogo restablecido a valores iniciales de fábrica");
  } else if (userInput !== null) {
    alert("Operación cancelada: No se ingresó la palabra clave requerida.");
  }
}

/**
 * Importar base de datos JSON con confirmación previa
 */
function handleImportJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (Array.isArray(imported)) {
        if (!confirm(`El archivo contiene ${imported.length} equipos. ¿Deseas reemplazar tu catálogo actual con los datos del archivo importado?`)) {
          importJsonInput.value = "";
          return;
        }
        devices = imported;
        saveDevices();
        render();
        closeSettingsModal();
        showToast(`Se importaron ${imported.length} equipos con éxito`);
      } else {
        alert("El archivo no contiene un formato de lista válido de equipos.");
      }
    } catch (err) {
      alert("Error al leer el archivo JSON: formato inválido.");
    }
    importJsonInput.value = "";
  };
  reader.readAsText(file);
}

/**
 * Detectar el sistema operativo del navegador para preseleccionar el comando
 */
function detectCollectorOs() {
  const platform = (navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || "").toLowerCase();
  if (platform.includes("mac")) return "macos";
  if (platform.includes("linux") || platform.includes("x11")) return "linux";
  return "windows";
}

/**
 * Mostrar el comando del Collector para el sistema elegido
 */
function selectCollectorOs(os) {
  const entry = COLLECTOR_COMMANDS[os];
  if (!entry || !collectorCommand) return;
  currentCollectorOs = os;
  if (collectorOutputDir) {
    collectorOutputDir.value = "";
    collectorOutputDir.placeholder = `Por defecto: ${entry.defaultLabel}`;
  }
  if (collectorOsHint) collectorOsHint.textContent = entry.hint;
  const pendriveExample = document.getElementById("collector-pendrive-example");
  if (pendriveExample) pendriveExample.textContent = entry.pendriveExample;
  const defaultLabel = document.getElementById("collector-default-label");
  if (defaultLabel) defaultLabel.textContent = entry.defaultLabel;
  document.querySelectorAll(".collector-os-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.os === os);
  });
  updateCollectorCommand();
}

/**
 * Armar el comando con la carpeta de destino elegida
 */
function updateCollectorCommand() {
  const entry = COLLECTOR_COMMANDS[currentCollectorOs];
  const dir = (collectorOutputDir?.value || "").trim().replace(/"/g, "") || entry.defaultDir;
  // Resaltar la carpeta de destino dentro del comando (el texto copiado no cambia)
  const marker = "\u0000DIR\u0000";
  collectorCommand.innerHTML = escapeHtml(entry.command(marker))
    .split(marker)
    .join(`<span class="collector-path">${escapeHtml(dir)}</span>`);
}

/**
 * Abrir Configuración directamente en la sección del Collector
 */
function openCollectorSection() {
  openSettingsModal();
  const block = document.getElementById("settings-collector-block");
  if (block) block.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Convertir un registro del HomeInfra Collector en datos de equipo
 */
function collectorReportToDevice(report) {
  const sys = report.system || {};
  const cpu = (report.cpu || [])[0] || {};
  const mem = report.memory || {};
  // Algunas BIOS antiguas rellenan la RAM con "Manufacturer0", "PartNum0", "SerNum0"
  const noFiller = (v) => (/^(Manufacturer|PartNum|ModulePartNumber|SerNum)\d*$/i.test(v || "") ? "" : v || "");
  const modules = (mem.modules || []).map((m) => ({
    ...m,
    manufacturer: noFiller(m.manufacturer),
    partNumber: noFiller(m.partNumber),
    serial: noFiller(m.serial)
  }));
  const gpus = report.gpu || [];
  // Excluir el pendrive desde el que se ejecutó el script
  const disks = (report.storage || [])
    .filter((d) => !/usb/i.test(d.busType || ""))
    // Windows informa "Unspecified" cuando no distingue SSD/HDD
    .map((d) => ({ ...d, mediaType: /unspecified/i.test(d.mediaType || "") ? "" : d.mediaType }));
  const join = (...parts) => parts.filter(Boolean).join(" ");

  const dedicatedGpu = gpus.find((g) => /nvidia|geforce|quadro|radeon\s+(rx|pro)/i.test(g.name || ""));
  const mainGpu = dedicatedGpu || gpus[0] || {};
  const ramType = modules.find((m) => m.type)?.type || "";
  const ramSpeed = modules.find((m) => m.speedMTs)?.speedMTs;

  const specs = {
    cpu: {
      model: cpu.name || "",
      year: undefined,
      cores: cpu.cores ? `${cpu.cores} núcleos / ${cpu.logicalProcessors} hilos` : "",
      speed: cpu.maxClockMHz ? `${(cpu.maxClockMHz / 1000).toFixed(1)} GHz` : "",
      details: ""
    },
    ram: {
      capacity: `${mem.installedGB || mem.totalGB || 0} GB`,
      type: ramType,
      speed: ramSpeed ? `${ramSpeed} MT/s` : "",
      details: modules.length ? `${mem.slotsUsed || modules.length} de ${mem.slotsTotal || "?"} ranuras usadas` : "Sin detalle de módulos"
    },
    gpu: {
      model: mainGpu.name || "",
      type: dedicatedGpu ? "Dedicada" : "Integrada",
      details: gpus.length > 1 ? gpus.map((g) => g.name).join(" + ") : ""
    },
    storage: disks.map((d) => join(d.mediaType, d.busType, `${Math.round(d.sizeGB)} GB`)).join(" + ")
  };

  // Piezas gestionadas por separado (visión ITIL en contexto.md)
  const components = [];
  // En escritorio la CPU va en socket y la GPU dedicada en una ranura PCIe; en laptops van soldadas
  const isDesktop = sys.type !== "Laptop";
  // Algunas BIOS informan el nombre del procesador en lugar del socket
  const socket = cpu.socket && cpu.socket !== cpu.name ? cpu.socket : "";
  if (cpu.name) components.push({ category: "CPU", model: cpu.name, serial: "", capacity: "", details: join(specs.cpu.cores, socket ? `socket ${socket}` : ""), replaceable: isDesktop });
  modules.forEach((m) => components.push({
    category: "RAM",
    model: join(m.manufacturer, m.partNumber),
    serial: m.serial || "",
    capacity: `${m.capacityGB} GB`,
    details: join(m.type, m.formFactor, m.speedMTs ? `${m.speedMTs} MT/s` : "", m.slot ? `[${m.slot}]` : ""),
    replaceable: m.formFactor === "SO-DIMM" || m.formFactor === "DIMM"
  }));
  disks.forEach((d) => components.push({
    category: "Almacenamiento",
    model: d.model || "",
    serial: d.serial || "",
    capacity: `${Math.round(d.sizeGB)} GB`,
    details: join(d.mediaType, d.busType),
    replaceable: true
  }));
  gpus.forEach((g) => components.push({
    category: "GPU",
    model: g.name || "",
    serial: "",
    // En gráficos integrados la memoria informada es compartida con el sistema
    capacity: g === dedicatedGpu && g.adapterRAMGB ? `${g.adapterRAMGB} GB` : "",
    details: g.vendor || "",
    replaceable: isDesktop && g === dedicatedGpu
  }));
  (report.network || []).forEach((n) => components.push({ category: "Red", model: n.name || "", serial: "", capacity: "", details: `MAC ${n.mac}`, replaceable: /wi-?fi|wireless|wlan/i.test(n.name || "") }));
  (report.battery || []).forEach((b) => components.push({
    category: "Batería",
    model: join(b.manufacturer, b.name),
    serial: b.serial || "",
    capacity: b.designedCapacityMWh ? `${b.designedCapacityMWh} mWh` : "",
    details: b.healthPercent != null ? `Salud ${b.healthPercent}%` : "",
    replaceable: true
  }));
  if (report.motherboard?.product) {
    const mb = report.motherboard;
    components.push({ category: "Placa base", model: join(mb.manufacturer, mb.product), serial: mb.serial || "", capacity: "", details: mb.version || "", replaceable: false });
  }

  const lines = [`Registro HomeInfra Collector (${(report.collectedAt || "").replace("T", " ")}):`];
  if (sys.sku) lines.push(`• SKU: ${sys.sku}`);
  if (sys.bios?.version) lines.push(`• BIOS: ${join(sys.bios.vendor, sys.bios.version)}${sys.bios.releaseDate ? ` (${sys.bios.releaseDate})` : ""}`);
  components.forEach((c) => {
    lines.push(`• ${c.category}: ${join(c.model, c.capacity, c.details ? `(${c.details})` : "")}${c.serial ? ` · S/N ${c.serial}` : ""}`);
  });

  return {
    brand: sys.brand || sys.manufacturer || "",
    model: sys.model || "",
    type: sys.type === "Laptop" ? "Laptop" : "Desktop",
    serial: sys.serial || "",
    specs,
    components,
    observaciones: lines.join("\n")
  };
}

/**
 * Crear o relacionar las piezas detectadas por el Collector con un equipo:
 * - piezas reemplazables: registro propio instalado en el equipo; si ya existe una pieza con
 *   el mismo número de serie, solo se anota en su historial que se detectó en este equipo
 * - integrados (red o video de la placa): quedan dentro de la placa base detectada
 */
function linkCollectorPieces(components, deviceId, collectedAt, fileName) {
  const date = (collectedAt || new Date().toISOString()).slice(0, 10);
  const note = `Detectada por el HomeInfra Collector (${fileName})`;
  const created = [];
  const integrated = [];
  (components || []).forEach((c, i) => {
    const hw = getComponentHwType(c);
    if (!c.replaceable && hw !== "PlacaBase") {
      integrated.push({ hardwareType: hw, model: c.model, details: c.details || "" });
      return;
    }
    const existing = c.serial ? devices.find((p) => isPiece(p) && (p.serial || "").toLowerCase() === c.serial.toLowerCase()) : null;
    if (existing) {
      recordPieceMovement(existing, { date, action: "Detectada", deviceId, note });
      return;
    }
    const piece = {
      id: `pz-${Date.now()}-${i}`,
      kind: "pieza",
      type: "Pieza",
      hardwareType: hw,
      brand: "",
      model: c.model,
      serial: c.serial || "",
      capacity: c.capacity || "",
      details: c.details || "",
      replaceable: true,
      imageUrl: "",
      driverUrl: `https://www.google.com/search?q=${encodeURIComponent(`${c.model} drivers soporte`)}`,
      assignedUser: "",
      location: "Hogar",
      windowsUser: "",
      windowsPassword: "",
      notes: "",
      observaciones: "",
      mfgDate: "",
      status: "Instalada",
      installedIn: deviceId,
      history: [{ date, action: "Instalada", deviceId, note }],
      updatedAt: date
    };
    if (c.benchmark) piece.benchmark = c.benchmark;
    devices.push(piece);
    created.push(piece);
  });
  if (integrated.length) {
    const board = created.find((p) => p.hardwareType === "PlacaBase");
    const host = board || devices.find((d) => d.id === deviceId);
    host.integrated = [...(host.integrated || []), ...integrated];
  }
}

/**
 * Importar uno o varios registros del HomeInfra Collector
 */
async function handleImportCollector(e) {
  const files = Array.from(e.target.files || []);
  if (files.length === 0) return;

  const today = new Date().toISOString().split("T")[0];
  let created = 0;
  let updated = 0;
  const skipped = [];

  for (const file of files) {
    let report;
    try {
      report = JSON.parse(await file.text());
    } catch (err) {
      skipped.push(`${file.name} (JSON inválido)`);
      continue;
    }
    if (report.schema !== "homeinfra-collector") {
      skipped.push(`${file.name} (no es un registro del Collector)`);
      continue;
    }

    const data = collectorReportToDevice(report);
    const existing = data.serial
      ? devices.find((d) => (d.serial || "").toLowerCase() === data.serial.toLowerCase())
      : null;

    if (existing) {
      if (!confirm(`Ya existe "${existing.brand} ${existing.model}" con el número de serie ${data.serial}.\n\n¿Deseas actualizar sus especificaciones y componentes con el registro ${file.name}?`)) {
        skipped.push(`${file.name} (no actualizado)`);
        continue;
      }
      existing.specs = data.specs;
      linkCollectorPieces(data.components, existing.id, report.collectedAt, file.name);
      existing.observaciones = [existing.observaciones, data.observaciones].filter(Boolean).join("\n\n");
      existing.updatedAt = today;
      updated++;
    } else {
      const newId = "dev-" + Date.now() + "-" + created;
      devices.push({
        id: newId,
        brand: data.brand,
        type: data.type,
        model: data.model,
        serial: data.serial,
        mfgDate: "",
        assignedUser: "",
        location: "Hogar",
        imageUrl: "",
        driverUrl: `https://www.google.com/search?q=${encodeURIComponent(`${data.brand} ${data.model} drivers support oficial`)}`,
        windowsUser: "",
        windowsPassword: "",
        notes: "",
        observaciones: data.observaciones,
        specs: data.specs,
        updatedAt: today
      });
      linkCollectorPieces(data.components, newId, report.collectedAt, file.name);
      created++;
    }
  }

  importCollectorInput.value = "";
  if (created || updated) {
    saveDevices();
    render();
    closeSettingsModal();
    showToast(`Collector: ${created} equipo(s) nuevo(s), ${updated} actualizado(s)`);
  }
  if (skipped.length) {
    alert(`No se importaron estos archivos:\n\n• ${skipped.join("\n• ")}`);
  }
}

/**
 * Mostrar notificación Toast
 */
let toastTimeout;
function showToast(message) {
  toastMsg.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/**
 * Sanitizar texto para inserción HTML segura
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Formatear texto de observaciones permitiendo enlaces markdown [texto](url) seguros
 */
function formatObservaciones(text) {
  if (!text) return "";
  let escaped = escapeHtml(text);
  escaped = escaped.replace(/\[([^\]]+)\]\(([^\)\s]+)\)/g, (match, label, url) => {
    const cleanUrl = url.replace(/&amp;/g, "&");
    const isLocal = !cleanUrl.startsWith("http");
    const downloadAttr = isLocal ? " download" : "";
    return `<a href="${cleanUrl}" target="_blank" rel="noopener noreferrer"${downloadAttr} class="obs-link">${label}</a>`;
  });
  return escaped;
}

/**
 * Redirigir cualquier llamado de registro de consumibles al editor unificado
 */
window.openSuppliesLogModal = function (deviceId) {
  handleEditDevice(deviceId);
};

window.closeSuppliesLogModal = function () {
  // Sin acción, modal redundante retirado
};

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
