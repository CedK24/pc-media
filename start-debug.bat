@echo off
echo Verification de l'environnement...

REM Verifier si Node.js est installe
node --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ERREUR: Node.js n'est pas installe!
    echo Veuillez installer Node.js depuis https://nodejs.org/
    pause
    exit /b 1
)

REM Verifier si le dossier client existe
if not exist "client" (
    echo ERREUR: Le dossier client n'existe pas!
    echo Verifiez que vous etes dans le bon repertoire
    pause
    exit /b 1
)

REM Verifier si le dossier server existe
if not exist "server" (
    echo ERREUR: Le dossier server n'existe pas!
    echo Verifiez que vous etes dans le bon repertoire
    pause
    exit /b 1
)

REM Verifier les node_modules du client
if not exist "client\node_modules" (
    echo Le dossier node_modules du client est manquant
    echo Installation des dependances du client...
    cd client
    call npm install
    cd ..
)

REM Verifier les node_modules du server
if not exist "server\node_modules" (
    echo Le dossier node_modules du server est manquant
    echo Installation des dependances du serveur...
    cd server
    call npm install
    cd ..
)

echo.
echo Demarrage du client...
cd client
start cmd /k "echo Demarrage du client... && npm start"

echo.
echo Demarrage du serveur...
cd ../server
start cmd /k "echo Demarrage du serveur... && npm start"

echo.
echo Si le site ne demarre pas automatiquement, ouvrez:
echo Frontend: http://localhost:3000
echo Backend: http://localhost:3001
echo.
echo Pour arreter le site, fermez les fenetres de commande.
pause
