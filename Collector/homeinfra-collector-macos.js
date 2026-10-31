// HomeInfra Collector - recolección en macOS (JavaScript for Automation).
// Se ejecuta desde homeinfra-collector.sh:
//   osascript -l JavaScript homeinfra-collector-macos.js <carpeta-de-salida> <versión>
ObjC.import("Foundation");

function run(argv) {
  const outputDir = argv[0] || "/tmp/HomeInfra-Registros";
  const version = argv[1] || "1.0.0";
  const app = Application.currentApplication();
  app.includeStandardAdditions = true;

  const sh = (cmd) => {
    try { return app.doShellScript(cmd).trim(); } catch (e) { return ""; }
  };
  const num = (v) => {
    const n = parseFloat(String(v || "").replace(",", "."));
    return isNaN(n) ? null : n;
  };
  // "16 GB" -> 16 ; "512 MB" -> 0.5
  const sizeToGB = (v) => {
    const m = String(v || "").match(/([\d.,]+)\s*(TB|GB|MB)/i);
    if (!m) return null;
    const n = num(m[1]);
    const unit = m[2].toUpperCase();
    return unit === "TB" ? n * 1024 : unit === "MB" ? Math.round((n / 1024) * 10) / 10 : n;
  };
  const bytesToGB = (b) => (b ? Math.round((b / 1073741824) * 10) / 10 : null);

  // system_profiler en JSON (doShellScript convierte \n en \r; JSON.parse lo tolera)
  let sp = {};
  try {
    sp = JSON.parse(sh("system_profiler -json SPHardwareDataType SPMemoryDataType SPStorageDataType SPNVMeDataType SPSerialATADataType SPDisplaysDataType SPNetworkDataType SPPowerDataType 2>/dev/null"));
  } catch (e) {
    sp = {};
  }
  const list = (key) => (Array.isArray(sp[key]) ? sp[key] : []);

  // ------------------------------------------------------------------------
  // Sistema
  // ------------------------------------------------------------------------
  const hw = list("SPHardwareDataType")[0] || {};
  const machineName = hw.machine_name || "";
  const modelId = hw.machine_model || hw.model_number || "";
  const isLaptop = /book/i.test(machineName);
  const bootRom = hw.boot_rom_version || "";

  const system = {
    brand: "Apple",
    manufacturer: "Apple Inc.",
    model: [machineName, modelId ? `(${modelId})` : ""].filter(Boolean).join(" "),
    modelRaw: modelId,
    sku: hw.model_number || "",
    family: machineName,
    serial: hw.serial_number || "",
    uuid: hw.platform_UUID || "",
    type: isLaptop ? "Laptop" : "Desktop",
    chassisTypes: [],
    bios: { vendor: "Apple", version: bootRom, releaseDate: "", serial: hw.serial_number || "" }
  };

  // ------------------------------------------------------------------------
  // CPU
  // ------------------------------------------------------------------------
  const cpuName = sh("sysctl -n machdep.cpu.brand_string") || hw.chip_type || hw.cpu_type || "";
  const cores = num(sh("sysctl -n hw.physicalcpu"));
  const threads = num(sh("sysctl -n hw.logicalcpu"));
  const freqHz = num(sh("sysctl -n hw.cpufrequency_max 2>/dev/null"));
  const cpu = [{
    name: cpuName,
    manufacturer: /apple/i.test(cpuName) ? "Apple" : /intel/i.test(cpuName) ? "Intel" : "",
    cores: cores,
    logicalProcessors: threads,
    maxClockMHz: freqHz ? Math.round(freqHz / 1e6) : null,
    socket: ""
  }];

  // ------------------------------------------------------------------------
  // Memoria RAM
  // ------------------------------------------------------------------------
  const memInfo = list("SPMemoryDataType")[0] || {};
  const totalGB = sizeToGB(hw.physical_memory);
  let modules = [];
  if (Array.isArray(memInfo._items)) {
    // Mac Intel: un elemento por ranura
    memInfo._items.forEach((m) => {
      const empty = /empty/i.test(m.dimm_status || "") || !m.dimm_size;
      modules.push({
        slot: m._name || "",
        bank: "",
        capacityGB: empty ? 0 : sizeToGB(m.dimm_size),
        type: m.dimm_type || "",
        formFactor: "",
        speedMTs: num(m.dimm_speed),
        configuredMTs: null,
        manufacturer: m.dimm_manufacturer || "",
        partNumber: m.dimm_part_number || "",
        serial: m.dimm_serial_number || "",
        empty: empty
      });
    });
  } else if (memInfo.SPMemoryDataType || memInfo.dimm_type) {
    // Apple Silicon: memoria unificada soldada en el chip
    modules.push({
      slot: "Integrada (memoria unificada)",
      bank: "",
      capacityGB: sizeToGB(memInfo.SPMemoryDataType) || totalGB,
      type: memInfo.dimm_type || "",
      formFactor: "Soldada",
      speedMTs: null,
      configuredMTs: null,
      manufacturer: memInfo.dimm_manufacturer || "",
      partNumber: "",
      serial: "",
      empty: false
    });
  }
  const used = modules.filter((m) => !m.empty);
  const memory = {
    totalGB: totalGB,
    installedGB: used.reduce((s, m) => s + (m.capacityGB || 0), 0) || totalGB,
    slotsTotal: modules.length,
    slotsUsed: used.length,
    maxCapacityGB: null,
    upgradeable: /yes/i.test(memInfo.is_memory_upgradeable || ""),
    modules: used.map((m) => { const c = Object.assign({}, m); delete c.empty; return c; })
  };

  // ------------------------------------------------------------------------
  // Almacenamiento
  // ------------------------------------------------------------------------
  const storage = [];
  const seen = {};
  ["SPNVMeDataType", "SPSerialATADataType"].forEach((key) => {
    list(key).forEach((ctrl) => {
      (ctrl._items || []).forEach((d) => {
        const id = d.device_serial || d.device_model || d._name;
        if (seen[id]) return;
        seen[id] = true;
        storage.push({
          model: d.device_model || d._name || "",
          serial: d.device_serial || "",
          sizeGB: bytesToGB(d.size_in_bytes) || sizeToGB(d.size),
          mediaType: /ssd|solid/i.test(d.spsata_medium_type || "") || key === "SPNVMeDataType" ? "SSD" : "HDD",
          busType: key === "SPNVMeDataType" ? "NVMe" : "SATA",
          firmware: d.device_revision || "",
          health: d.smart_status || ""
        });
      });
    });
  });
  // Apple Silicon y discos externos: tomar los discos físicos de SPStorageDataType
  list("SPStorageDataType").forEach((vol) => {
    const pd = vol.physical_drive || {};
    const id = pd.device_name || vol._name;
    if (!pd.device_name || seen[id]) return;
    seen[id] = true;
    storage.push({
      model: pd.device_name,
      serial: "",
      sizeGB: bytesToGB(vol.size_in_bytes),
      mediaType: /ssd/i.test(pd.medium_type || "") ? "SSD" : pd.medium_type ? "HDD" : "",
      busType: /usb/i.test(pd.protocol || "") ? "USB" : pd.protocol || "",
      firmware: "",
      health: pd.smart_status || ""
    });
  });

  // ------------------------------------------------------------------------
  // GPU y monitores
  // ------------------------------------------------------------------------
  const gpu = [];
  const monitors = [];
  list("SPDisplaysDataType").forEach((g) => {
    gpu.push({
      name: g.sppci_model || g._name || "",
      vendor: String(g.spdisplays_vendor || "").replace(/^sppci_vendor_/, ""),
      driverVersion: "",
      adapterRAMGB: sizeToGB(g.spdisplays_vram || g.sppci_vram)
    });
    (g.spdisplays_ndrvs || []).forEach((d) => {
      monitors.push({
        manufacturer: "",
        model: d._name || "",
        serial: d._spdisplays_display_serial_number || d.spdisplays_display_serial_number || "",
        year: num(d._spdisplays_display_year || d.spdisplays_display_year)
      });
    });
  });

  // ------------------------------------------------------------------------
  // Red
  // ------------------------------------------------------------------------
  const network = [];
  list("SPNetworkDataType").forEach((n) => {
    const mac = (n.Ethernet && (n.Ethernet["MAC Address"] || n.Ethernet.MAC_Address)) || "";
    const iface = n.interface || "";
    if (!mac && !/^en\d/.test(iface)) return;
    network.push({
      name: `${n._name || iface}${iface ? ` (${iface})` : ""}`,
      manufacturer: "",
      mac: String(mac || sh(`ifconfig ${iface} 2>/dev/null | awk '/ether/{print $2}'`)).toUpperCase(),
      type: n.hardware || n.type || ""
    });
  });

  // ------------------------------------------------------------------------
  // Batería
  // ------------------------------------------------------------------------
  const battery = [];
  list("SPPowerDataType").forEach((p) => {
    const info = p.sppower_battery_model_info;
    const health = p.sppower_battery_health_info;
    if (!info && !health) return;
    const maxCap = health ? num(health.sppower_battery_health_maximum_capacity) : null;
    battery.push({
      name: (info && info.sppower_battery_device_name) || "",
      manufacturer: (info && info.sppower_battery_manufacturer) || "",
      serial: (info && info.sppower_battery_serial_number) || "",
      chemistry: "",
      designedCapacityMWh: null,
      fullChargeCapacityMWh: null,
      healthPercent: maxCap,
      cycleCount: health ? num(health.sppower_battery_cycle_count) : null,
      condition: health ? health.sppower_battery_health || "" : ""
    });
  });

  // ------------------------------------------------------------------------
  // Registro final
  // ------------------------------------------------------------------------
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const isoLocal = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  const stamp = isoLocal.replace(/-/g, "").replace("T", "-").replace(/:/g, "");

  const report = {
    schema: "homeinfra-collector",
    version: version,
    collectedAt: isoLocal,
    environment: {
      computerName: sh("scutil --get ComputerName") || sh("hostname"),
      platform: "macos",
      isWinPE: false,
      os: `macOS ${sh("sw_vers -productVersion")}`,
      osVersion: sh("sw_vers -productVersion"),
      osBuild: sh("sw_vers -buildVersion"),
      osInstallDate: ""
    },
    system: system,
    motherboard: { manufacturer: "Apple", product: modelId, version: "", serial: "" },
    cpu: cpu,
    memory: memory,
    storage: storage,
    gpu: gpu,
    network: network,
    battery: battery,
    monitors: monitors
  };

  const baseName = [system.brand, system.model, system.serial]
    .filter(Boolean).join("_").replace(/[\\/:*?"<>|\s]+/g, "-") + "_" + stamp;
  const jsonPath = `${outputDir}/${baseName}.json`;
  const txtPath = `${outputDir}/${baseName}.txt`;

  const lines = [];
  lines.push(`HomeInfra Collector v${version} - ${isoLocal.replace("T", " ").slice(0, 16)}`);
  lines.push("=".repeat(60));
  lines.push(`Equipo:        ${system.brand} ${system.model} (${system.type})`);
  lines.push(`N.º de serie:  ${system.serial}`);
  lines.push(`SKU:           ${system.sku}`);
  lines.push(`Firmware:      ${bootRom}`);
  lines.push(`Sistema:       ${report.environment.os} (${report.environment.osBuild})`);
  lines.push("");
  lines.push("CPU:");
  lines.push(`  - ${cpuName} | ${cores} núcleos / ${threads} hilos`);
  lines.push("");
  lines.push(`RAM: ${memory.installedGB} GB instalados | ranuras usadas ${memory.slotsUsed} de ${memory.slotsTotal}`);
  memory.modules.forEach((m) => lines.push(`  - [${m.slot}] ${m.capacityGB} GB ${m.type} ${m.formFactor} | ${m.manufacturer} ${m.partNumber} S/N ${m.serial}`));
  lines.push("");
  lines.push("Almacenamiento:");
  storage.forEach((d) => lines.push(`  - ${d.model} | ${d.sizeGB} GB | ${d.mediaType} ${d.busType} | S/N ${d.serial}`));
  lines.push("");
  lines.push("GPU:");
  gpu.forEach((g) => lines.push(`  - ${g.name}`));
  lines.push("");
  lines.push("Red:");
  network.forEach((n) => lines.push(`  - ${n.name} | MAC ${n.mac}`));
  if (battery.length) {
    lines.push("");
    lines.push("Batería:");
    battery.forEach((b) => lines.push(`  - ${b.name} ${b.manufacturer} S/N ${b.serial} | salud ${b.healthPercent}% | ciclos ${b.cycleCount}`));
  }
  if (monitors.length) {
    lines.push("");
    lines.push("Monitores:");
    monitors.forEach((m) => lines.push(`  - ${m.model} S/N ${m.serial}`));
  }

  const write = (path, text) => $.NSString.alloc.initWithUTF8String(text)
    .writeToFileAtomicallyEncodingError(path, true, $.NSUTF8StringEncoding, null);
  write(jsonPath, JSON.stringify(report, null, 2));
  write(txtPath, lines.join("\n"));

  return `\n${lines.join("\n")}\n\nRegistro guardado en:\n  ${jsonPath}\n  ${txtPath}`;
}
