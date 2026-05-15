#!/bin/bash
# Dream AI Lab — GitHub 연결 및 배포 스크립트
# GitHub: nwsoft/dreamailab | Cloudflare Pages: dreamailab.com

set -e

REPO_URL="https://github.com/nwsoft/dreamailab.git"
BRANCH="main"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

echo "📁 프로젝트: $PROJECT_ROOT"
echo ""

# 1) Git 초기화 (필요 시)
if [ ! -d .git ]; then
  echo "🔧 Git 저장소 초기화..."
  git init
  git branch -M "$BRANCH"
  echo "   ✓ 완료"
else
  echo "✓ Git 저장소 이미 존재"
fi

# 2) 원격 저장소 설정
if ! git remote get-url origin &>/dev/null; then
  echo "🔗 GitHub 원격 저장소 연결..."
  git remote add origin "$REPO_URL"
  echo "   ✓ origin → $REPO_URL"
else
  echo "✓ 원격 저장소: $(git remote get-url origin)"
fi

# 3) 변경사항 스테이징 및 커밋
echo ""
echo "📦 변경사항 스테이징..."
git add .
if git diff --staged --quiet 2>/dev/null; then
  echo "   변경된 파일 없음 (이미 최신 상태일 수 있음)"
else
  COMMIT_MSG="${1:-Update: Dream AI Lab website}"
  git commit -m "$COMMIT_MSG"
  echo "   ✓ 커밋: $COMMIT_MSG"
fi

# 4) GitHub 푸시
echo ""
echo "🚀 GitHub 푸시 중... (nwsoft/dreamailab)"
git push -u origin "$BRANCH" 2>/dev/null || git push origin "$BRANCH"

echo ""
echo "✅ 완료! GitHub에 푸시되었습니다."
echo ""
echo "📌 Cloudflare Pages가 GitHub와 연결되어 있다면 1~3분 내 dreamailab.com 에 자동 배포됩니다."
echo "   대시보드: https://dash.cloudflare.com → Workers & Pages → dreamailab → Deployments"
echo ""
