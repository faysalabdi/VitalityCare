#!/bin/bash

# Script to copy static assets that should be directly available in the dist folder
# Run this after npm run build

echo "Copying static assets to dist folder..."

# Create necessary directories
mkdir -p dist/favicon
mkdir -p dist/assets/social
mkdir -p dist/seo

# Copy favicon files
cp -r client/public/favicon/* dist/favicon/

# Copy social sharing assets
cp -r client/public/assets/social/* dist/assets/social/

# Copy SEO files
cp client/public/robots.txt dist/
cp client/public/sitemap.xml dist/
cp -r client/public/seo/* dist/seo/
cp client/public/google-site-verification.html dist/

echo "Static assets copied successfully!" 