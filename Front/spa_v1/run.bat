 xcopy .\src\static\css .\dist\src\static\css /E /D
 xcopy .\src\static\images .\dist\src\static\images /E /D
 xcopy .\src\static\less .\dist\src\static\less /E /D
 xcopy .\src\static\vendor .\dist\src\static\vendor /E /D

node dist/server.js