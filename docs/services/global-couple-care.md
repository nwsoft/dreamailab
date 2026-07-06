# 글로벌커플케어 (GCC) — 스펙 요약 (웹·플랫폼 정합)

- **last_reviewed:** 2026-07-06
- **canonical 웹:** https://dreamailab.com/services/marriage
- **외부 플랫폼:** https://globalcouplecare.com
- **DAL 도메인:** 글로벌커플케어 (GC) · **상태:** Pilot (베타·MVP ~93%)
- **개발 정본:** `Works/GlobalCoupleCare` (`docs/PROJECT_STATUS.md`, `docs/gcc.md`)
- **DAL 대외 스펙:** 본 MD + `app/services/marriage/page.tsx`

> **정체성:** 국제결혼 **정보·비교·절차·정착** 플랫폼. **직접 중개 아님** — 검증된 파트너·전문가 연결 (FAQ 1번).

## 한 줄

국제결혼·다문화 가족의 정보·절차·신뢰를 하나의 기준으로 연결하고, 결혼 이후 정착·가족 케어까지 이어지는 글로벌 가족 인프라.

## 허브(`/services`) 정합

| 항목 | 허브 카드 |
|------|-----------|
| summary | 정보·절차·신뢰 연결 |
| oneLiner | 결혼 전 비대칭 완화 → 정착 데이터 |
| value | 신뢰 거래 + 다문화·공공 연계 |
| status | Pilot |

## 홈(`app/page.tsx`) 정합

불릿: 업체 비교, AI 상담·번역, 법무·비자 워크플로, 커뮤니티·후기, 정착·가족 라이프로그, KYC·윤리 — `coreFeatures`·혁신 문단과 동일 층위.

## 페이지 표준 구조 (9단)

| # | 섹션 | 본 페이지 대응 |
|---|------|----------------|
| 1 | Hero | 정보 불균형 → 신뢰 인프라 |
| 2 | Problem | 가격 비대칭·비윤리·법무 복잡·정착 공백 |
| 3 | Solution | solutions 4 + cultureChange |
| 4 | User Workflow | lifecycle 3단 (Pre-Match → 법무 → 정착) |
| 5 | Technology | KYC·AI 성향 분석·표준 워크플로 (심화 X) |
| 6 | Business Impact | bizPillars 4 · businessDesign |
| 7 | Service Status | Pilot (베타·지속 업데이트) |
| 8 | Ecosystem | DAL 정착 → 토탈·에듀 연계 |
| 9 | CTA | globalcouplecare.com + DAL contact |

## 개발 플랫폼에 있으나 DAL에 반영할 항목 (과소 기재)

| 영역 | 개발 (GCC) | DAL 반영 |
|------|------------|----------|
| 프로필·매칭·에스크로·계약 | 프론트 46+ 페이지, PROJECT_STATUS ~93% | coreFeatures·status Pilot |
| 교육·커뮤니티·여행·웨딩·ai-tools | `frontend/app/**` | 상세 페이지·본 MD |
| 이벤트·채팅·정산 | `/events`, `/chat`, `settlement` | coreFeatures 반영 |
| 문화·법률 도움 | `/culture`, `/legal-help` | lifecycle·법무 축 |
| 신고·검수·face v2 | admin·`profile_photos_v2` | KYC·안전 FAQ |
| 직접 중개 아님 | FAQ·비즈니스 모델 | 유지 |

## DAL 과대 기재 → 개발 계획

| DAL 표현 | 개발 계획 |
|----------|-----------|
| AI 상담·번역 운영 톤 | `docs/DAL_SYNC_DEVELOPMENT_PLAN.md` **P0** |
| 서류 자동화 | **P1** |
| 가족 라이프로그 구축 | **P2** |

## 핵심 기능 (`coreFeatures`)

1. **한눈에 정보 비교** — 베트남·태국·필리핀·일본·중국 등
2. **전문가 참여** — 홈페이지 없는 상담사도 플랫폼 참여
3. **법무·비자 표준 워크플로** — 체크리스트·타임라인
4. **언어·문화·자녀양육** — 정착 단계 (자람이 언어치료 노하우 참고)
5. **DAL 생태계 연계** — 정착 이후 헬스·교육 축
6. **커뮤니티·경험 공유**

## Lifecycle (3단)

| 단계 | 내용 |
|------|------|
| Pre-Match | KYC, 성향·문화 AI, 안전 가이드 |
| 상담–법무–비자 | 상담·미팅, 서류 자동화, 파트너 직접 계약 |
| Post-Marriage | 언어·취업·주거·금융·자녀교육, 가족 라이프로그, 커뮤니티 |

## FAQ (필수 대외 메시지)

1. **직접 중개?** → 아니오, 정보 플랫폼 + 파트너 연결
2. **가격·절차 비교** → 표준 견적·리뷰·완료율·응답 속도
3. **결혼 후** → 정착 가이드·커뮤니티·라이프로그
4. **안전·윤리** → KYC·신고·블랙리스트·윤리 가이드

## 비즈니스 4기둥 (`bizPillars`)

Agency SaaS · Marketplace · Consumer App · Data & Risk

## DAL 생태계 연결

- 허브: 글로벌커플케어 → **토탈케어로그·에듀케어로그** (정착 이후)
- expansionAreas: 다문화 자녀 교육·체류·금융·원격 상담 등

## CTA·문의

| 대상 | 경로 |
|------|------|
| 서비스 이용·탐색 | https://globalcouplecare.com |
| 일반 | `/contact?service=marriage&type=general` |
| B2B·파트너 | `/contact?service=marriage&type=b2b` |

## 외부 플랫폼 정합 (2026-05-23)

| 항목 | globalcouplecare.com | DAL 페이지 | 판정 |
|------|----------------------|------------|------|
| 접근 | fetch timeout (응답 지연) | In Development | ⚠️ 재확인 필요 |
| JSON-LD | serviceUrl: globalcouplecare.com | 동일 | ✅ |
| 중개 여부 | _(외부 미확인)_ | FAQ: 직접 중개 아님 | — |

**권장:** 외부 사이트 재점검 시 FAQ 1번(중개 아님)·lifecycle·KYC 문구 일치 확인.

## 톤·금지

- 「플랫폼이 직접 중개」 오해 방지
- 뉴스 아카이브 「국내 최초」와 **현재 웹 톤** 분리 ([CONTENT_SSOT_AND_NEWS_POLICY.md](../CONTENT_SSOT_AND_NEWS_POLICY.md))
- 인권·윤리: 「상품화된 배우자」류 표현 금지 (cultureChangePoints)

## 정합 체크리스트

- [ ] FAQ 「중개 아님」↔ IR·비즈니스
- [ ] 허브 status In Development
- [ ] globalcouplecare.com 오픈·기능 변경 시 본 MD·외부 정합 재검
- [ ] 정착 연계 ↔ educarelog·totalcarelog MD 교차 일치
