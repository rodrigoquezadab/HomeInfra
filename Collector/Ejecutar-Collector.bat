@echo off
rem HomeInfra Collector - lanzador para doble clic (Windows / WinPE desde pendrive)

rem ==========================================================================
rem  CARPETA DE DESTINO DE LOS REGISTROS  (editar aqui)
rem  Vacio: se guardan en la carpeta Registros, junto a este archivo.
rem  Para guardarlos en otro lugar, escribe la ruta despues del signo =
rem  Ejemplo:  set "DESTINO=E:\HomeInfra-Registros"
rem ==========================================================================
set "DESTINO="

chcp 65001 >nul
if "%DESTINO%"=="" goto sin_destino
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0HomeInfra-Collector.ps1" -OutputDir "%DESTINO%" %*
goto fin

:sin_destino
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0HomeInfra-Collector.ps1" %*

:fin
echo.
pause
