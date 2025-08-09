#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Your portfolio is ready for deployment!"
    echo ""
    echo "📊 Build statistics:"
    echo "   📁 Output directory: dist/"
    ls -la dist/
    echo ""
    echo "🚀 Deployment options:"
    echo ""
    echo "1️⃣  Vercel (Recommended):"
    echo "   - Visit: https://vercel.com/"
    echo "   - Connect your GitHub repository"
    echo "   - Auto-deploy on every push"
    echo ""
    echo "2️⃣  Netlify:"
    echo "   - Visit: https://netlify.com/"
    echo "   - Drag & drop the 'dist' folder"
    echo "   - Or connect GitHub repository"
    echo ""
    echo "3️⃣  GitHub Pages:"
    echo "   - Push to GitHub first"
    echo "   - Enable GitHub Pages in repository settings"
    echo "   - GitHub Actions will deploy automatically"
    echo ""
    echo "4️⃣  Manual hosting:"
    echo "   - Upload 'dist' folder contents to any web server"
    echo ""
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi
