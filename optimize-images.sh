#!/bin/bash

# Image optimization script for VitalityCare
# This script optimizes all PNG images in the assets directory

echo "🖼️  Starting image optimization..."

# Create optimized directory if it doesn't exist
mkdir -p client/src/assets/optimized

# Function to optimize a single image
optimize_image() {
    local input_file="$1"
    local filename=$(basename "$input_file" .png)
    local dir=$(dirname "$input_file")
    
    echo "Optimizing: $input_file"
    
    # Create WebP versions in different sizes
    magick "$input_file" -strip -quality 85 -resize 800x600 "${dir}/${filename}-800w.webp"
    magick "$input_file" -strip -quality 85 -resize 600x450 "${dir}/${filename}-600w.webp"
    magick "$input_file" -strip -quality 85 -resize 400x300 "${dir}/${filename}-400w.webp"
    
    # Create optimized JPEG fallback
    magick "$input_file" -strip -quality 85 -resize 800x600 "${dir}/${filename}-800w.jpg"
    
    # Get file sizes for comparison
    original_size=$(du -h "$input_file" | cut -f1)
    webp_size=$(du -h "${dir}/${filename}-800w.webp" | cut -f1)
    
    echo "  Original: $original_size → WebP: $webp_size"
}

# Find and optimize large PNG files (>500KB)
find client/src/assets -name "*.png" -size +500k -not -name "*-*w.*" | while read -r file; do
    optimize_image "$file"
done

echo "✅ Image optimization complete!"
echo ""
echo "📊 Usage in React components:"
echo "Replace single img tags with responsive picture elements:"
echo ""
echo "// Import optimized versions"
echo "import imageWebP800 from '@/assets/image-800w.webp';"
echo "import imageWebP600 from '@/assets/image-600w.webp';"
echo "import imageWebP400 from '@/assets/image-400w.webp';"
echo "import imageJPG800 from '@/assets/image-800w.jpg';"
echo ""
echo "// Use in component"
echo "<picture>"
echo "  <source media=\"(max-width: 480px)\" srcSet={imageWebP400} type=\"image/webp\" />"
echo "  <source media=\"(max-width: 768px)\" srcSet={imageWebP600} type=\"image/webp\" />"
echo "  <source media=\"(min-width: 769px)\" srcSet={imageWebP800} type=\"image/webp\" />"
echo "  <img src={imageJPG800} alt=\"Description\" loading=\"eager\" fetchPriority=\"high\" />"
echo "</picture>"
