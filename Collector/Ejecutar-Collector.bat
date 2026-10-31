@echo off
rem HomeInfra Collector - lanzador para doble clic (Windows / WinPE desde pendrive)
chcp 65001 >nul
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0HomeInfra-Collector.ps1" %*
echo.
pause
