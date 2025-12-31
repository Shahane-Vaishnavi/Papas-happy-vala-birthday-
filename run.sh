#!/bin/bash

echo "========================================"
echo "  Happy Birthday Papa - Project Runner"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

echo "Starting development server..."
echo "Server will be available at http://localhost:8080"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

