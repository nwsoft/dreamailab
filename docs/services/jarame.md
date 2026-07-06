# 자람이 (Jarame) — 스펙 요약 (웹·플랫폼 정합)

- **last_reviewed:** 2026-07-06
- **canonical 웹:** https://dreamailab.com/services/jarame
- **외부 플랫폼:** https://jarame.or.kr
- **DAL 도메인:** 발달장애 (JR) · **상태:** Beta
- **개발 정본:** `Works/자람이` (`PROJECT_STATUS.md`, `자람이_시스템_완전_가이드.md`)
- **DAL 대외 스펙:** 본 MD + `app/services/jarame/page.tsx`

> **문의·CTA:** DAL `/contact`가 아니라 **jarame.or.kr** 로 연결. 본 MD는 DAL 허브·IR·대외 설명과의 **용어 정합** 참고용.

## 한 줄

가정·학교·센터·병원에 흩어진 발달 관찰·치료 데이터를 하나의 AI디지털케어로그로 연결해 조기개입과 다기관 협업 정확도를 높이는 DAL 1번 도메인 인프라.

## 허브(`/services`) 정합

| 항목 | 허브 카드 | 본 페이지 |
|------|-----------|-----------|
| summary | 가정·학교·센터·병원 통합 케어 인프라 | Hero·Executive Summary와 동일 축 |
| oneLiner | 치료·학습·행동 기록을 같은 기준으로 연결 | coreFeatures 8개 축과 일치 |
| value | 기관 운영 효율 + 보호자 신뢰 + 장기 데이터 | 비즈니스·연구·정책 환류 서술과 일치 |
| status | Beta | `Service Status: Beta Testing` |

## 홈(`app/page.tsx`) 정합

- 홈 「도메인별 핵심 플랫폼」 첫 카드.
- 불릿 6개는 `coreFeatures`·히어로와 동일 계열(케어로그, AI 상담·리포트, 자가진단, RBAC·학교, 홈티, 익명 집계).
- **치료 앱이 아닌 인프라·포용·골든타임** 톤 유지.

## 페이지 표준 구조 (9단)

| # | 섹션 | 본 페이지 대응 |
|---|------|----------------|
| 1 | Hero | 발달장애 기록 단절 → AI디지털케어로그 연결 |
| 2 | Problem | 기관별 문서·재입력·해석 차이 |
| 3 | Solution | 표준 케어로그 + AI 패턴 분석 + 환류 |
| 4 | User Workflow | 가족·교사·치료사·기관 역할별 시나리오 |
| 5 | Technology (Short) | 표준 스키마·RBAC·AI 리포트·강화학습 언급(심화는 `/technology`) |
| 6 | Business Impact | 기관 베타·정책·연구·SaaS 확장 |
| 7 | Service Status | Beta Testing (기관 베타·지속 업데이트) |
| 8 | Ecosystem | DAL 1번 도메인 → 에듀·헬스케어 연계 내러티브 |
| 9 | CTA | **jarame.or.kr** (DAL contact 미사용) |

## 개발 플랫폼에 있으나 DAL에 반영할 항목 (과소 기재 → DAL 반영)

| 영역 | 개발 저장소 | DAL 반영 |
|------|-------------|----------|
| XAI Phase 1~4 (의사결정·학습 루프) | `backend/routes/xai_*`, 문서 | Executive Summary·기술 섹션 |
| FHIR·표준 export | export/FHIR 라우트 | FAQ·Technology에 이미 일부 — 카드 강화 |
| 병원·센터·학교·홈티 API | `backend/routes/*`, 프론트 30+ 라우트 | coreFeatures 8축과 정합, 상세는 jarame.or.kr |
| 연합학습·강화학습 | PROJECT_STATUS, `DAL_SYNC_DEVELOPMENT_PLAN.md` P1~P2 | Hero·Technology — **베타·시뮬레이션** 명시 |
| AI 맞춤 교재·학습경로 | `ai_curriculum`, `ai_learning_path` | DAL page coreFeatures 반영 |
| 결제·구독 | `billing`, `webhook` | IR용 선택 반영 |
| 10종 치료 API | therapy routers | page 치료 모듈 섹션과 연계 |

## 핵심 기능 (`coreFeatures`)

1. **AI 디지털케어로그** — 행동/세션/숙제/출석/약물/평가 표준화, RBAC, IEP·진료 메모 연계
2. **AI 상담 & 권장안** — 증상 Q&A, 케어로그 맥락 조언, 위험 신호 알림
3. **AI 리포트(일·주·월)** — 추이·목표-개입-결과, PDF/링크 공유
4. **자가진단** — M-CHAT, AQ-50, Vanderbilt, ASRS 등
5. **기관 연동 & RBAC** — 권한·공유 범위·감사 로그
6. **학교 관리자 대시보드** — 학급·출석·성과·교육과정
7. **홈티 매칭** — 특수교사 연결, 세션=케어로그 연동
8. **통계/연구(익명 집계)** — 정책·연구·서비스 개선 환류

## 대상·페르소나

- 발달장애 아동 가족, 특수교사·치료사, 센터·병원·학교 관리자
- 공공·연구(익명 집계·표준 데이터)

## 지표·상태 (웹 메타 기준)

- 공공·개방 데이터 기반 **센터 약 5,700+**, **병원 약 2,200+**, **특수학교 약 130+** (각각 별도 집계·수치 변동, MAU·도입과 별개). 5,700은 센터 수
- 2022년 착수 · Gate2·XAI 골격(코드 기준) · **Gate3·기관 베타** 진행 — 「2025 기술 완성」은 IR 과대 표현으로 사용하지 않음
- MD에 고정 수치를 두지 않고 **웹 메타·히어로 숫자**를 따름

## DAL 생태계 연결

- 성장·건강 연속 관리 → **토탈케어로그·에듀케어로그** 연계 (허브 connectionMap)
- 발달·행동·치료 맥락 = DAL 검증 1축

## CTA·문의 라우팅

| 대상 | 경로 |
|------|------|
| 이용·도입·일반 문의 | https://jarame.or.kr |
| DAL IR·기술 협력 | jarame.or.kr 또는 DAL `/contact?service=jarame` (페이지 하단 CTA는 jarame.or.kr 우선) |

## 외부 플랫폼 정합 (2026-05-23 확인)

| 항목 | jarame.or.kr | DAL 페이지 | 판정 |
|------|--------------|------------|------|
| 포지셔닝 | 발달장애 AI 디지털 케어 플랫폼 | Care Data Infrastructure, DAL 1번 | ✅ |
| 공개 상태 | 서비스 운영 중 | Beta Testing | ✅ (베타 표기 일치) |
| CTA | jarame.or.kr 자체 | jarame.or.kr 링크 | ✅ |
| 기능 나열 | 커뮤니티·AI 상담 중심 랜딩 | 8개 coreFeatures 상세 | ⚠️ 외부는 요약, DAL이 정본 |

**주의:** 외부 랜딩 톤이 DAL보다 마케팅에 가까울 수 있음. IR·계약용 최종 문구는 **DAL 웹 + 본 MD** 우선 ([BUSINESS_SERVICES_SYNC.md](../BUSINESS_SERVICES_SYNC.md)).

## 톤·금지

- 근거 없는 「국내 최초」「유일」「완치」
- DAL 페이지에 없는 구체 모듈명을 홈·IR에 추가 금지
- **의료·치료 결정 대체** 표현 금지 → AI는 권장·보조

## 정합 체크리스트

- [ ] 홈 카드 불릿 ⊂ `coreFeatures`·본문
- [ ] `/services` 허브 summary·status(Beta) 일치
- [ ] JSON-LD 서비스명·FAQ와 본문 일치
- [ ] CTA가 jarame.or.kr로만 연결(DAL `/contact` 혼선 없음)
- [ ] jarame.or.kr 기능·톤 변경 시 본 MD `last_reviewed` 갱신
