#!/bin/bash

echo "🚀 Quick Deploy to Netlify"
echo "=========================="

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Creating deployment package..."
    
    # Create a deployment package
    cd dist
    zip -r ../portfolio-deployment.zip .
    cd ..
    
    echo "✅ Deployment package created: portfolio-deployment.zip"
    echo ""
    echo "🌐 Quick deployment options:"
    echo ""
    echo "1️⃣  Netlify Drop:"
    echo "   - Go to: https://app.netlify.com/drop"
    echo "   - Drag & drop the 'portfolio-deployment.zip' file"
    echo "   - Get instant live URL!"
    echo ""
    echo "2️⃣  Vercel CLI:"
    echo "   - Install: npm i -g vercel"
    echo "   - Run: vercel --prod"
    echo "   - Follow prompts"
    echo ""
    echo "3️⃣  Manual upload:"
    echo "   - Upload 'dist' folder contents to any web hosting"
    echo ""
    echo "📁 Files ready in:"
    echo "   - dist/ (individual files)"
    echo "   - portfolio-deployment.zip (complete package)"
    
else
    echo "❌ Build failed! Please check for errors above."
    exit 1
fi
