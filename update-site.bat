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
echo     Mise a jour terminee !
echo ========================================
echo.
echo Vos modifications seront deployees automatiquement dans quelques minutes.
echo Verifiez le statut sur :
echo - Frontend : https://vercel.com/
echo - Backend : https://dashboard.render.com/
echo.
echo Appuyez sur une touche pour fermer...
pause >nul
