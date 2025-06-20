#!/bin/bash

echo "🚀 بدء نشر Samer AI على Google Cloud..."

# تأكد من وجود gcloud
if ! command -v gcloud &> /dev/null; then
    echo "❌ لم يتم العثور على gcloud. الرجاء تثبيت Google Cloud SDK أولاً."
    exit 1
fi

# تسجيل الدخول إلى Google Cloud
echo "🔐 تسجيل الدخول إلى حساب Google Cloud..."
gcloud auth login

# تحديد المشروع (يمكنك تعديل PROJECT_ID هنا)
read -p "📝 أدخل معرف مشروع Google Cloud (project-id): " PROJECT_ID
gcloud config set project $PROJECT_ID

# نشر التطبيق
echo "🚢 نشر التطبيق على Google App Engine..."
gcloud app deploy app.yaml --quiet

echo "✅ تم نشر سامر AI بنجاح على Google Cloud!"
