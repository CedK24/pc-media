@echo off
echo Demarrage du site PC-Media...

:: Se deplacer dans le repertoire du client
cd /d "%~dp0client"

:: Installer les dependances si necessaire
if not exist "node_modules\" (
    echo Installation des dependances...
    npm install
)

:: Demarrer le serveur React
npm start

pause
