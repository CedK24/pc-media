@echo off
title PC-Media - Deploiement Optimise
color 0A

echo ========================================
echo     PC-Media - Deploiement Optimise
echo ========================================
echo.

:: Vérifier Node.js et npm
echo Verification de l'environnement...
node --version > nul 2>&1
if errorlevel 1 (
    echo Erreur: Node.js n'est pas installe
    exit /b 1
)

:: Installation des dépendances si nécessaire
echo Verification des dependances...
if not exist "node_modules" (
    echo Installation des dependances...
    call npm install
)

:: Build optimisé
echo.
echo Build du projet...
cd client
call npm run build
cd ..

:: Vérifier les modifications
echo.
echo Verification des modifications...
git status
echo.

:: Ajouter les modifications
echo Ajout des modifications...
git add .
echo.

:: Demander la description des modifications
set /p COMMIT_MSG="Description des modifications : "
echo.

:: Commit et push
echo Creation du commit...
git commit -m "%COMMIT_MSG%"
echo.

echo Envoi vers GitHub...
git push
echo.

echo ========================================
echo     Deploiement en cours...
echo ========================================
echo.
echo Le deploiement est en cours sur Vercel et Render...
echo.
echo Statut du deploiement :
echo.
echo [Frontend - Vercel]
echo - Dashboard : https://vercel.com/dashboard
echo - Temps estime : 1-2 minutes
echo - Cache optimise : Oui
echo - Build incremental : Actif
echo.
echo [Backend - Render]
echo - Dashboard : https://dashboard.render.com/
echo - Temps estime : 2-5 minutes
echo - Auto-scaling : Actif
echo.
echo Note: Le site restera disponible pendant le deploiement
echo grace au zero-downtime deployment.
echo.
echo Pour verifier que tout fonctionne :
echo 1. Attendez environ 2-3 minutes
echo 2. Visitez votre site
echo 3. Verifiez que les nouvelles fonctionnalites sont presentes
echo 4. Testez les principales fonctionnalites
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
