#!/bin/bash

echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Listing files:"
ls -la

echo "Checking for src/app directory..."
if [ -d "src/app" ]; then
    echo "src/app directory exists"
    
    echo "Removing existing app directory if it exists..."
    rm -rf app
    
    echo "Copying src/app to app..."
    cp -r src/app app
    
    echo "Verifying copy..."
    if [ -d "app" ]; then
        echo "app directory created successfully"
        echo "Files in app directory:"
        ls -la app/
    else
        echo "ERROR: app directory was not created"
        exit 1
    fi
else
    echo "ERROR: src/app directory does not exist"
    echo "Available directories in src:"
    ls -la src/
    exit 1
fi

echo "Build preparation complete"
