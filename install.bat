@echo off
echo Installation des dependances du site PC-Media...

echo.
echo Installation des dependances du client...
cd client
call npm install

echo.
echo Installation des dependances du serveur...
cd ../server
call npm install

echo.
echo Installation terminee !
echo Vous pouvez maintenant lancer le site avec start.bat
pause
