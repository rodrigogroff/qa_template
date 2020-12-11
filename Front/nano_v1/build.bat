call npm run build

xcopy ".\src\static\js\server.js" ".\dist\server.js" /E /D /S /I /Q /Y /F
