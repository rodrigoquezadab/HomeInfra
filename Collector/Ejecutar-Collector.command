#!/bin/bash
# HomeInfra Collector - lanzador para doble clic en macOS
cd "$(dirname "$0")" || exit 1
bash ./homeinfra-collector.sh "$@"
echo ""
read -r -p "Presiona Enter para cerrar..."
