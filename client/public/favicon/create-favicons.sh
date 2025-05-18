#!/bin/bash

# Check if logo.png exists
if [ ! -f "logo.png" ]; then
  echo "Error: logo.png not found in current directory."
  exit 1
fi

# Create a circular mask
convert -size 512x512 xc:none -fill white -draw "circle 256,256 256,0" circle_mask.png

# Apply circular mask to logo and create different sizes
convert logo.png -resize 512x512 -gravity center \
  circle_mask.png -alpha Off -compose CopyOpacity -composite \
  -background "#7BC043" -alpha remove -alpha off tmp_circle.png

# Create favicon.ico (multiple sizes in one file)
convert tmp_circle.png -define icon:auto-resize=64,48,32,16 favicon.ico

# Create various PNG sizes
convert tmp_circle.png -resize 16x16 favicon-16x16.png
convert tmp_circle.png -resize 32x32 favicon-32x32.png
convert tmp_circle.png -resize 180x180 apple-touch-icon.png
convert tmp_circle.png -resize 192x192 android-chrome-192x192.png
convert tmp_circle.png -resize 512x512 android-chrome-512x512.png

# Clean up temporary files
rm circle_mask.png tmp_circle.png

echo "Favicon files created successfully!"
