#!/bin/bash

# Script to copy static assets that should be directly available in the dist folder
# Run this after npm run build

echo "Copying static assets to dist folder..."

# Create necessary directories
mkdir -p dist/favicon
mkdir -p dist/assets/social

# Copy favicon files
cp -r client/public/favicon/* dist/favicon/

# Copy social sharing assets
cp -r client/public/assets/social/* dist/assets/social/

echo "Static assets copied successfully!" 