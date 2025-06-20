#!/bin/bash

echo "🔧 بدء تثبيت مشروع Samer AI..."

# Navigate to project directory
cd "$(dirname "$0")"

# Install backend dependencies
echo "📦 تثبيت تبعيات الباك إند..."
npm install

# Navigate to frontend
cd frontend

# Install frontend dependencies
echo "📦 تثبيت تبعيات الواجهة..."
npm install

# Build frontend
echo "🏗️ بناء تطبيق الواجهة..."
npm run build

echo "✅ تم إعداد مشروع Samer AI بنجاح!"
echo "🚀 لتشغيل الخادم المحلي استخدم: node ../server.js"
