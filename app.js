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
        details: "Deducido del SKU (GGAR555U)"
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
    updatedAt: "2026-10-31"
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
    components: [
      {
        category: "Red",
        model: "WLAN + Bluetooth combo QCWB335",
        serial: "",
        capacity: "",
        details: "FCC ID PPD-QCWB335",
        replaceable: true
      },
      {
        category: "Cargador",
        model: "Lite-On PA-1650-02",
        serial: "AP06503016824OB7E6P606",
        capacity: "65 W",
        details: "19V ⎓ 3.42A",
        replaceable: true,
        deviceId: "dev-acer-e3-112-cargador"
      }
    ],
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
    updatedAt: "2026-10-31"
  },
  {
    id: "dev-acer-e3-112-cargador",
    brand: "Lite-On",
    model: "PA-1650-02 (Adaptador AC 65W)",
    type: "Periférico",
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
    updatedAt: "2026-10-31"
  },
  {
    id: "dev-pc-i5-12400f-h610m",
    brand: "PC armado",
    model: "Core i5-12400F · MSI PRO H610M-G DDR4",
    type: "Desktop",
    serial: "07D4612_M21D142444",
    assignedUser: "",
    location: "Hogar",
    imageUrl: "",
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
        details: ""
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
    components: [
      {
        category: "CPU",
        model: "12th Gen Intel(R) Core(TM) i5-12400F",
        serial: "",
        capacity: "",
        details: "6 núcleos / 12 hilos socket U3E1",
        replaceable: true,
        imageUrl: "img/componente_cpu_intel_core_i5.png"
      },
      {
        category: "RAM",
        model: "Corsair CMK8GX4M1Z3600C18",
        serial: "",
        capacity: "8 GB",
        details: "DDR4 DIMM 2667 MT/s [Controller0-DIMMA1] · módulo de 3600 MT/s funcionando a 2667 MT/s",
        replaceable: true,
        imageUrl: "img/componente_ram_corsair_vengeance_lpx.png"
      },
      {
        category: "RAM",
        model: "Corsair CMK8GX4M1Z3600C18",
        serial: "",
        capacity: "8 GB",
        details: "DDR4 DIMM 2667 MT/s [Controller1-DIMMB1] · módulo de 3600 MT/s funcionando a 2667 MT/s",
        replaceable: true,
        imageUrl: "img/componente_ram_corsair_vengeance_lpx.png"
      },
      {
        category: "Almacenamiento",
        model: "WD Blue SN570 500GB",
        serial: "E823_8FA6_BF53_0001_001B_448B_4569_B02C.",
        capacity: "466 GB",
        details: "SSD NVMe",
        replaceable: true
      },
      {
        category: "Almacenamiento",
        model: "WDC WD800BD-22MRA1",
        serial: "WD-WMAM9AMY4260",
        capacity: "75 GB",
        details: "HDD SATA",
        replaceable: true
      },
      {
        category: "GPU",
        model: "NVIDIA GeForce GTX 1660 SUPER",
        serial: "",
        capacity: "4 GB",
        details: "NVIDIA",
        replaceable: true
      },
      {
        category: "Red",
        model: "Intel(R) Ethernet Connection (17) I219-V",
        serial: "",
        capacity: "",
        details: "MAC 04:7C:16:05:0E:B3",
        replaceable: false
      },
      {
        category: "Placa base",
        model: "Micro-Star International Co., Ltd. PRO H610M-G DDR4 (MS-7D46)",
        serial: "07D4612_M21D142444",
        capacity: "",
        details: "1.0",
        replaceable: false,
        imageUrl: "img/componente_placa_msi_pro_h610m-g_ddr4.jpg"
      },
      {
        category: "Monitor",
        model: "LG TV (fabricante EDID GSM)",
        serial: "",
        capacity: "",
        details: "Pantalla externa conectada; año 2011 según EDID",
        replaceable: true
      }
    ],
    mfgDate: "",
    updatedAt: "2026-10-31"
  }
];

// Clave de almacenamiento HomeInfra v3
const STORAGE_KEY = "homeinfra_devices_inventory_v3";
// IDs de equipos.json ya incorporados al inventario local
const REPO_SEEN_IDS_KEY = "homeinfra_repo_seen_ids";

// Estado de la aplicación
let devices = [];
let currentFilterType = "ALL";
let currentFilterBrand = "ALL";
let currentSort = localStorage.getItem("homeinfra_devices_sort") || "category";
let searchQuery = "";
let currentView = localStorage.getItem("homeinfra_view") === "components" ? "components" : "devices";
let currentComponentCategory = "ALL";
const revealedPasswords = {};

// Elementos del DOM
const devicesGrid = document.getElementById("devices-grid");
const componentsGrid = document.getElementById("components-grid");
const componentsEmptyState = document.getElementById("components-empty-state");
const componentCategoryFilter = document.getElementById("component-category-filter");
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
 * Agregar al inventario local los equipos nuevos de equipos.json.
 * Solo se agregan IDs que nunca se habían visto, para no revivir equipos eliminados.
 */
async function mergeNewRepoDevices() {
  try {
    const response = await fetch("equipos.json?t=" + Date.now());
    if (!response.ok) return false;
    const json = await response.json();
    if (!Array.isArray(json)) return false;

    const seenIds = new Set(JSON.parse(localStorage.getItem(REPO_SEEN_IDS_KEY) || "[]"));
    const localIds = new Set(devices.map((d) => d.id));
    const newDevices = json.filter((d) => !localIds.has(d.id) && !seenIds.has(d.id));

    markRepoIdsSeen(json);

    if (newDevices.length === 0) return false;
    devices.push(...newDevices);
    return true;
  } catch (_) {
    // Ignorar si fetch falla (ej. file:// protocol)
    return false;
  }
}

/**
 * Registrar como vistos los IDs de equipos.json
 */
function markRepoIdsSeen(list) {
  try {
    const seenIds = new Set(JSON.parse(localStorage.getItem(REPO_SEEN_IDS_KEY) || "[]"));
    list.forEach((d) => seenIds.add(d.id));
    localStorage.setItem(REPO_SEEN_IDS_KEY, JSON.stringify([...seenIds]));
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
function sortDevices(list, sortType) {
  return list.slice().sort((a, b) => {
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

/**
 * Accesorios enlazados a otro equipo (ej. el cargador de un laptop): se ven dentro de ese equipo
 * y en la vista de componentes, no como equipo completo aparte
 */
function isLinkedAccessory(dev) {
  return devices.some((owner) => (owner.components || []).some((c) => c.deviceId === dev.id));
}

/**
 * Equipos completos: todos menos los accesorios enlazados
 */
function getCompleteDevices() {
  return devices.filter((dev) => !isLinkedAccessory(dev));
}

/**
 * Filtrar y ordenar lista de equipos
 */
function getFilteredDevices() {
  const filtered = getCompleteDevices().filter((dev) => {
    if (currentFilterType !== "ALL" && dev.type !== currentFilterType) {
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
  document.querySelectorAll(".devices-only").forEach((el) => { el.style.display = isComponents ? "none" : ""; });
  document.querySelectorAll(".components-only").forEach((el) => { el.style.display = isComponents ? "" : "none"; });
  searchInput.placeholder = isComponents
    ? "Buscar componente por modelo, serie, categoría o equipo..."
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
 * Lista plana de componentes de todos los equipos, con su equipo de origen
 */
function getAllComponents() {
  const list = [];
  devices.forEach((dev) => {
    (dev.components || []).forEach((comp) => list.push({ ...comp, parent: dev }));
  });
  return list;
}

/**
 * Actualizar dropdown de categorías de componentes
 */
function updateComponentCategoryOptions() {
  if (!componentCategoryFilter) return;
  const categories = Array.from(new Set(getAllComponents().map((c) => c.category).filter(Boolean))).sort();
  componentCategoryFilter.innerHTML = '<option value="ALL">Todas las categorías</option>';
  categories.forEach((cat) => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    componentCategoryFilter.appendChild(opt);
  });
  if (!categories.includes(currentComponentCategory)) currentComponentCategory = "ALL";
  componentCategoryFilter.value = currentComponentCategory;
}

/**
 * Componentes relacionados por deviceId: cargador de un laptop, o laptop de un cargador
 */
function getLinkedRows(dev) {
  const rows = [];
  (dev.components || []).filter((c) => c.category === "Cargador").forEach((c) => {
    rows.push({
      icon: "🔌",
      label: "Cargador",
      text: [c.model, c.capacity, c.details].filter(Boolean).join(" · "),
      targetId: devices.some((d) => d.id === c.deviceId) ? c.deviceId : null
    });
  });
  devices.forEach((owner) => {
    (owner.components || []).forEach((c) => {
      if (c.deviceId === dev.id) {
        rows.push({ icon: "💻", label: `${c.category} de`, text: `${owner.brand} ${owner.model}`, targetId: owner.id });
      }
    });
  });
  return rows;
}

/**
 * Renderizar la vista de componentes por separado
 */
function renderComponentsGrid() {
  const all = getAllComponents();
  const filtered = all.filter((c) => {
    if (currentComponentCategory !== "ALL" && c.category !== currentComponentCategory) return false;
    if (searchQuery) {
      const target = `${c.category} ${c.model} ${c.serial || ""} ${c.capacity || ""} ${c.details || ""} ${c.parent.brand} ${c.parent.model}`.toLowerCase();
      if (!target.includes(searchQuery)) return false;
    }
    return true;
  });

  resultsCount.textContent = `Mostrando ${filtered.length} de ${all.length} componente${all.length === 1 ? "" : "s"}`;
  componentsGrid.innerHTML = "";

  if (filtered.length === 0) {
    componentsGrid.style.display = "none";
    componentsEmptyState.style.display = "block";
    return;
  }
  componentsGrid.style.display = "grid";
  componentsEmptyState.style.display = "none";

  filtered.forEach((c) => {
    const card = document.createElement("div");
    card.className = "device-card device-card-compact component-card";
    card.style.setProperty("--card-accent-color", c.replaceable ? "#fbbf24" : "#94a3b8");
    card.title = `Instalado en ${c.parent.brand} ${c.parent.model}`;
    card.addEventListener("click", () => openDeviceDetailModal(c.parent.id));

    const linked = c.deviceId && devices.some((d) => d.id === c.deviceId)
      ? `<button type="button" class="card-linked-row" onclick="event.stopPropagation(); openDeviceDetailModal('${escapeHtml(c.deviceId)}')">📄 Ver ficha del ${escapeHtml(c.category.toLowerCase())} ➔</button>`
      : "";

    // Imagen propia del componente, o la del equipo enlazado (ej. un cargador registrado aparte)
    const linkedDevice = c.deviceId ? devices.find((d) => d.id === c.deviceId) : null;
    const compImage = c.imageUrl || linkedDevice?.imageUrl || "";
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
            <span class="device-badge badge-other">${escapeHtml(c.category)}</span>
            <span class="spec-pill ${c.replaceable ? "pill-replaceable" : "pill-integrated"}">${c.replaceable ? "Reemplazable" : "Integrado"}</span>
          </div>
          <h3 class="card-model-title" title="${escapeHtml(c.model)}">${escapeHtml(c.model || "Sin modelo")}</h3>
        </div>
      </div>
      <div class="card-specs-summary">
        ${c.capacity ? `<span class="compact-spec-pill">${escapeHtml(c.capacity)}</span>` : ""}
        ${c.details ? `<span class="compact-spec-pill">${escapeHtml(c.details)}</span>` : ""}
      </div>
      ${linked}
      <div class="card-compact-footer">
        <span class="card-serial-text" title="Número de serie">${c.serial ? `S/N ${escapeHtml(c.serial)}` : "Sin S/N"}</span>
        <span class="btn-card-detail-hint" title="Equipo donde está instalado">${escapeHtml(c.parent.brand)} ${escapeHtml(c.parent.model)} ➔</span>
      </div>
    `;
    componentsGrid.appendChild(card);
  });
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
            <span class="device-badge ${badgeClass}">${escapeHtml(dev.type)}</span>
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
  md += `*Última actualización sincronizada:* \`${dateStr}\` | *Total de equipos:* **${devices.length}**\n\n`;
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
  md += `> **Estado:** Implementación parcial. Los equipos ya guardan sus piezas en el campo \`components\` (categoría, modelo, serie, capacidad, si es reemplazable y, para accesorios registrados aparte como un cargador, el \`deviceId\` del equipo relacionado). Faltan la vista de componentes en la interfaz, los estados del ciclo de vida y el historial de cambios.\n`;
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

  devices.forEach((dev, idx) => {
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

  devices.forEach((dev, idx) => {
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
    if (Array.isArray(dev.components) && dev.components.length > 0) {
      md += `- **Componentes:**\n`;
      dev.components.forEach((c) => {
        const parts = [c.model, c.capacity, c.details ? `(${c.details})` : ""].filter(Boolean).join(" ");
        const serialStr = c.serial ? ` · S/N ${c.serial}` : "";
        const replaceStr = c.replaceable ? "reemplazable" : "integrado";
        const linkStr = c.deviceId ? ` · equipo relacionado: \`${c.deviceId}\`` : "";
        md += `  - *${c.category}:* ${parts}${serialStr} · ${replaceStr}${linkStr}\n`;
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
  const modules = mem.modules || [];
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
  if (cpu.name) components.push({ category: "CPU", model: cpu.name, serial: "", capacity: "", details: join(specs.cpu.cores, cpu.socket ? `socket ${cpu.socket}` : ""), replaceable: isDesktop });
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
    capacity: g.adapterRAMGB ? `${g.adapterRAMGB} GB` : "",
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
      existing.components = data.components;
      existing.observaciones = [existing.observaciones, data.observaciones].filter(Boolean).join("\n\n");
      existing.updatedAt = today;
      updated++;
    } else {
      devices.push({
        id: "dev-" + Date.now() + "-" + created,
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
        components: data.components,
        updatedAt: today
      });
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
