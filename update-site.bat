@echo off
title PC-Media - Mise a jour du site
color 0A

echo ========================================
echo     PC-Media - Mise a jour du site
echo ========================================
echo.

:: Vérifier les modifications
echo Verification des modifications...
git status
echo.

:: Ajouter les modifications
echo Ajout des modifications...
git add .
echo.

:: Demander la description des modifications
set /p COMMIT_MSG="Description des modifications (ex: Mise a jour du design) : "
echo.

:: Commit et push
echo Creation du commit...
git commit -m "%COMMIT_MSG%"
echo.

echo Envoi vers GitHub...
git push
echo.

echo ========================================
echo     Mise a jour en cours...
echo ========================================
echo.
echo Le deploiement est en cours. Veuillez patienter...
echo.
echo Pour suivre le deploiement en temps reel :
echo.
echo Frontend (Vercel) :
echo 1. Allez sur https://vercel.com/dashboard
echo 2. Selectionnez votre projet
echo 3. Cliquez sur "Deployments" pour voir le statut
echo.
echo Backend (Render) :
echo 1. Allez sur https://dashboard.render.com/
echo 2. Selectionnez votre service
echo 3. Regardez la section "Deploy" pour le statut
echo.
echo Note: Le deploiement prend generalement :
echo - Frontend : 1-2 minutes
echo - Backend : 2-5 minutes
echo.
echo Une fois le deploiement termine, votre site sera automatiquement mis a jour.
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
