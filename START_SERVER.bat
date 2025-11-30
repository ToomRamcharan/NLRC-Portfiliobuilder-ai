@echo off
echo ========================================
echo  Starting Secure Portfolio Builder
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo [ERROR] Dependencies not installed!
    echo Please run INSTALL.bat first
    echo.
    pause
    exit /b 1
)

echo Starting server on http://localhost:3000
echo.
echo Keep this window open while using the app
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Start the server
call npm start
