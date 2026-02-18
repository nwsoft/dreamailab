# 드림에이아이랩 (Dream AI Lab) 공식 홈페이지

드림에이아이랩의 공식 홈페이지입니다. AI 기술을 통해 사회적 가치를 창출하는 혁신적인 기업의 서비스와 비전을 소개합니다.

## 🚀 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel (권장)

## 📁 프로젝트 구조

```
DreamaiLab/
├── app/                    # Next.js App Router
│   ├── globals.css        # 전역 스타일
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── about/             # 회사소개
│   ├── vision/            # 비전 및 미션
│   ├── services/          # 서비스 페이지들
│   │   ├── page.tsx       # 서비스 전체 요약
│   │   ├── jarame/        # 자람이 서비스
│   │   ├── senior/        # 시니어앤라이프
│   │   ├── healthcare/    # 의료 AI 서비스
│   │   ├── law/           # 법률 AI 서비스
│   │   └── finance/       # 재테크 AI 서비스
│   ├── team/              # 팀 소개
│   ├── contact/           # 문의하기
│   ├── blog/              # 블로그
│   ├── privacy/           # 개인정보처리방침
│   └── terms/             # 이용약관
├── components/            # 재사용 가능한 컴포넌트
│   ├── Header.tsx         # 헤더 컴포넌트
│   └── Footer.tsx         # 푸터 컴포넌트
├── public/                # 정적 파일들
├── package.json           # 프로젝트 의존성
├── tailwind.config.js     # Tailwind CSS 설정
├── next.config.js         # Next.js 설정
└── tsconfig.json          # TypeScript 설정
```

## 🛠️ 설치 및 실행

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

개발 서버가 `http://localhost:3000`에서 실행됩니다.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
# 또는
yarn build
yarn start
```

## 📱 주요 기능

### 🏠 홈페이지
- 회사 개요 및 서비스 소개
- 각 서비스별 카드 형태의 요약 정보
- 외부 서비스 링크 제공

### 🏢 회사소개
- 회사 개요 및 비전
- 핵심 가치 및 미션
- 성장 과정 타임라인

### 🔧 서비스 페이지
- **자람이**: 발달장애인을 위한 AI 커뮤니티 플랫폼
- **시니어앤라이프**: 노인돌봄을 위한 AI 플랫폼
- **의료 AI**: 히포크라테스AI, 한방이AI, 항암재활AI
- **법률 AI**: 법률 상담을 위한 AI 서비스
- **재테크 AI**: 노아AI 재테크 투자 플랫폼

### 📞 문의하기
- 문의 양식 (이름, 이메일, 회사, 제목, 내용)
- 연락처 정보
- 서비스별 문의 이메일
- FAQ 섹션

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: Blue 계열 (#3B82F6 ~ #1E3A8A)
- **Secondary**: Green 계열 (#22C55E ~ #14532D)
- **Neutral**: Gray 계열

### 반응형 디자인
- 모바일, 태블릿, 데스크톱 대응
- Tailwind CSS의 반응형 클래스 활용

## 🔗 외부 서비스 링크

| 서비스명 | URL | 설명 |
|---------|-----|------|
| 자람이 | https://jarame.or.kr | 발달장애인 커뮤니티 |
| 자람이 챗봇 | https://jarame.org | AI 챗봇 서비스 |
| 시니어앤라이프 | https://seniorandlife.com | 노인돌봄 플랫폼 |
| 히포크라테스AI | https://medicai.kr | 의료 AI |
| 한방이AI | https://hanbangai.kr | 한의학 AI |
| 항암재활AI | https://cancerrehabai.kr | 항암재활 AI |
| 노아AI | https://noahai.net | 재테크 AI |

## 📈 SEO 최적화

- 메타태그 최적화
- Open Graph 태그
- Twitter Card 태그
- 구조화된 데이터 (Schema.org)
- 반응형 이미지
- 빠른 로딩 속도

## 🚀 배포

### Vercel 배포 (권장)

1. Vercel 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### 수동 배포

```bash
npm run build
# 빌드된 파일을 웹 서버에 업로드
```

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 드림에이아이랩의 소유입니다.

## 📞 연락처

- **이메일**: contact@dreamailab.com
- **전화**: 02-1234-5678
- **주소**: 서울특별시 강남구 테헤란로 123

---

© 2024 드림에이아이랩. All rights reserved. 