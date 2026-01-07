@echo off
:: Pega a hora do sistema (apenas HH:MM)
set hora=%time:~0,5%

echo ==========================================
echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Realizando commit (Horario: %hora%)...
git commit -m "%hora%"

echo.
echo [3/3] Enviando para o GitHub...
git push

echo.
echo ==========================================
echo TUDO PRONTO!
echo A janela fechara em 5 segundos.
echo ==========================================
timeout /t 5 >nul