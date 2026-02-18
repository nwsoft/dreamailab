#!/bin/bash

# Synology 설정
SYNOLOGY_HOST="your-synology-ip"
SYNOLOGY_USER="your-username"
WEB_DIR="/volume1/web"

# 빌드
echo "Building the project..."
npm run build:static

# 파일 업로드
echo "Uploading files to Synology..."
scp -r out/* $SYNOLOGY_USER@$SYNOLOGY_HOST:$WEB_DIR/

echo "Deployment completed!" 