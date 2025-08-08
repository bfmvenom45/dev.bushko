#!/bin/bash

# Media Optimization Script for Portfolio
# This script optimizes images and videos for web performance

echo "🎬 Portfolio Media Optimization Script"
echo "======================================"

# Create optimized directories
IMAGES_DIR="public/images/images"
VIDEO_DIR="public/video"
OPTIMIZED_DIR="public/images/optimized"
OPTIMIZED_VIDEO_DIR="public/video/optimized"

mkdir -p "$OPTIMIZED_DIR"
mkdir -p "$OPTIMIZED_VIDEO_DIR"

echo "📁 Images directory: $IMAGES_DIR"
echo "🎥 Videos directory: $VIDEO_DIR"
echo "💾 Output directories: $OPTIMIZED_DIR, $OPTIMIZED_VIDEO_DIR"

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install ffmpeg if not present (macOS)
if ! command_exists ffmpeg; then
    echo "⚠️  FFmpeg not found. Installing via Homebrew..."
    if command_exists brew; then
        brew install ffmpeg
    else
        echo "❌ Please install Homebrew first: https://brew.sh"
        exit 1
    fi
fi

# Install ImageOptim CLI if not present (macOS)
if ! command_exists imageoptim; then
    echo "⚠️  ImageOptim CLI not found. Installing..."
    if command_exists brew; then
        brew install --cask imageoptim
        brew install imageoptim-cli
    fi
fi

echo ""
echo "🎥 OPTIMIZING VIDEOS"
echo "==================="

# Optimize Hero video
if [ -f "$VIDEO_DIR/bg-hero.mp4" ]; then
    echo "🔄 Optimizing bg-hero.mp4..."
    ffmpeg -i "$VIDEO_DIR/bg-hero.mp4" \
        -vcodec libx264 \
        -crf 28 \
        -preset medium \
        -vf "scale=1920:1080" \
        -r 30 \
        -an \
        -movflags +faststart \
        -y "$OPTIMIZED_VIDEO_DIR/bg-hero-optimized.mp4"
    
    # Create WebM version for better compression
    ffmpeg -i "$VIDEO_DIR/bg-hero.mp4" \
        -vcodec libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -vf "scale=1920:1080" \
        -r 30 \
        -an \
        -y "$OPTIMIZED_VIDEO_DIR/bg-hero-optimized.webm"
    
    echo "✅ Hero video optimized"
else
    echo "⚠️  bg-hero.mp4 not found"
fi

# Optimize Experience video
if [ -f "$VIDEO_DIR/bg-exp.mp4" ]; then
    echo "🔄 Optimizing bg-exp.mp4..."
    ffmpeg -i "$VIDEO_DIR/bg-exp.mp4" \
        -vcodec libx264 \
        -crf 28 \
        -preset medium \
        -vf "scale=1920:1080" \
        -r 30 \
        -an \
        -movflags +faststart \
        -y "$OPTIMIZED_VIDEO_DIR/bg-exp-optimized.mp4"
    
    # Create WebM version
    ffmpeg -i "$VIDEO_DIR/bg-exp.mp4" \
        -vcodec libvpx-vp9 \
        -crf 30 \
        -b:v 0 \
        -vf "scale=1920:1080" \
        -r 30 \
        -an \
        -y "$OPTIMIZED_VIDEO_DIR/bg-exp-optimized.webm"
    
    echo "✅ Experience video optimized"
else
    echo "⚠️  bg-exp.mp4 not found"
fi

echo ""
echo "🖼️  OPTIMIZING IMAGES"
echo "===================="

# Optimize background images
for img in bg-hero.jpg bg-portfolio.jpg bg-skills.jpg bg-exp.jpg bg-faq.jpg bg-contact.jpg zipp.jpg; do
    if [ -f "$IMAGES_DIR/$img" ]; then
        echo "🔄 Optimizing $img..."
        
        # Create different sizes for responsive design
        # Original size (1920px width)
        ffmpeg -i "$IMAGES_DIR/$img" \
            -vf "scale=1920:-1" \
            -q:v 2 \
            -y "$OPTIMIZED_DIR/${img%.*}-1920.jpg"
        
        # Medium size (1280px width)
        ffmpeg -i "$IMAGES_DIR/$img" \
            -vf "scale=1280:-1" \
            -q:v 2 \
            -y "$OPTIMIZED_DIR/${img%.*}-1280.jpg"
        
        # Small size (768px width) for mobile
        ffmpeg -i "$IMAGES_DIR/$img" \
            -vf "scale=768:-1" \
            -q:v 2 \
            -y "$OPTIMIZED_DIR/${img%.*}-768.jpg"
        
        # WebP versions for modern browsers
        ffmpeg -i "$IMAGES_DIR/$img" \
            -vf "scale=1920:-1" \
            -q:v 80 \
            -y "$OPTIMIZED_DIR/${img%.*}-1920.webp"
        
        echo "✅ $img optimized"
    else
        echo "⚠️  $img not found"
    fi
done

# Use ImageOptim CLI if available for additional optimization
if command_exists imageoptim; then
    echo ""
    echo "🔧 Additional optimization with ImageOptim..."
    imageoptim "$OPTIMIZED_DIR"/*.jpg
    echo "✅ Additional optimization complete"
fi

echo ""
echo "📊 OPTIMIZATION RESULTS"
echo "======================"

# Show file sizes comparison
echo "Original files:"
echo "Images:"
du -sh "$IMAGES_DIR"/* 2>/dev/null | grep -E '\.(jpg|png)$' || echo "No original images found"
echo "Videos:"
du -sh "$VIDEO_DIR"/* 2>/dev/null | grep -E '\.(mp4|webm)$' || echo "No original videos found"

echo ""
echo "Optimized files:"
echo "Images:"
du -sh "$OPTIMIZED_DIR"/* 2>/dev/null || echo "No optimized images created"
echo "Videos:"
du -sh "$OPTIMIZED_VIDEO_DIR"/* 2>/dev/null || echo "No optimized videos created"

echo ""
echo "🎉 OPTIMIZATION COMPLETE!"
echo "========================"
echo "📁 Optimized files are in: $OPTIMIZED_DIR"
echo ""
echo "📋 Next steps:"
echo "1. Replace original files with optimized versions"
echo "2. Update component paths if needed"
echo "3. Test video playback in browsers"
echo "4. Consider using <picture> elements for responsive images"

# Create optimization report
cat > "$OPTIMIZED_DIR/README.md" << EOF
# Optimized Media Files

## Video Optimizations
- **Format**: MP4 (H.264) and WebM (VP9)
- **Resolution**: 1920x1080
- **Frame Rate**: 30fps
- **Audio**: Removed (muted)
- **Optimization**: CRF 28-30 for good quality/size balance
- **Fast Start**: Enabled for web streaming

## Image Optimizations
- **Formats**: JPEG and WebP
- **Sizes**: 
  - 1920px (desktop)
  - 1280px (tablet)
  - 768px (mobile)
- **Quality**: High (85-90%)

## Usage
Replace original files with optimized versions and update paths in components if needed.

Generated on: $(date)
EOF

echo "📄 Optimization report created: $OPTIMIZED_DIR/README.md"
