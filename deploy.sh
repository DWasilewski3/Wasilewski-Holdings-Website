#!/bin/bash

# Build the project for production
echo "Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful!"
    echo "The built files are in the 'dist' directory."
    echo "You can now deploy these files to GitHub Pages."
else
    echo "Build failed!"
    exit 1
fi 