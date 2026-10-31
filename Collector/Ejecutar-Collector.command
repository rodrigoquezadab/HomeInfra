#!/bin/bash
# HomeInfra Collector - lanzador para doble clic en macOS

# ==========================================================================
#  CARPETA DE DESTINO DE LOS REGISTROS  (editar aquí)
#  Vacío: se guardan en la carpeta Registros, junto a este archivo.
#  Para guardarlos en otro lugar, escribe la ruta entre las comillas.
#  Ejemplo:  DESTINO="/Volumes/PENDRIVE/HomeInfra-Registros"
# ==========================================================================
DESTINO=""

cd "$(dirname "$0")" || exit 1
if [ -n "$DESTINO" ]; then
  bash ./homeinfra-collector.sh "$DESTINO"
else
  bash ./homeinfra-collector.sh "$@"
fi
echo ""
read -r -p "Presiona Enter para cerrar..."
