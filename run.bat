@echo off
echo ========================================
echo   Happy Birthday Papa - Project Runner
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Starting development server...
echo Server will be available at http://localhost:8080
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

