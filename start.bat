@echo off
title PC-Media Launcher
color 0A

echo ========================================
echo     PC-Media - Demarrage du site...
echo ========================================
echo.

:: Vérifier si Node.js est installé
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERREUR] Node.js n'est pas installe sur votre systeme.
    echo Veuillez installer Node.js depuis https://nodejs.org
    pause
    exit /b 1
)

:: Installer les dépendances si nécessaire
echo Verification des dependances...
echo.

cd client
if not exist node_modules (
    echo Installation des dependances frontend...
    call npm install
)

cd ../server
if not exist node_modules (
    echo Installation des dependances backend...
    call npm install
)

:: Démarrer les serveurs
echo.
echo Demarrage des serveurs...
echo.

cd ../client
start cmd /k "title PC-Media Frontend && color 0B && npm start"

cd ../server
start cmd /k "title PC-Media Backend && color 0E && npm start"

:: Attendre quelques secondes
timeout /t 5 /nobreak >nul

:: Afficher les informations d'accès
cls
echo ========================================
echo     PC-Media - Site en cours d'execution
echo ========================================
echo.
echo Frontend: http://localhost:3000
echo Backend: http://localhost:5000
echo.
echo Pour acceder depuis un mobile sur le meme reseau:
echo Utilisez l'adresse IP affichee dans la fenetre du backend
echo.
echo ----------------------------------------
echo Pour arreter le site :
echo 1. Fermez les fenetres de commande
echo 2. Ou appuyez sur Ctrl+C dans chaque fenetre
echo ----------------------------------------
echo.
echo Appuyez sur une touche pour fermer cette fenetre...
pause >nul
