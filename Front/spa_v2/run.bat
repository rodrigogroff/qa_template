xcopy .\src\static\css .\dist\src\static\css /E /D  /S /I /Q /Y /F
xcopy .\src\static\fonts .\dist\src\static\fonts /E /D /S /I /Q /Y /F
xcopy .\src\static\img .\dist\src\static\img /E /D /S /I /Q /Y /F
xcopy .\src\static\vendor .\dist\src\static\vendor /E /D /S /I /Q /Y /F

node dist/server.js