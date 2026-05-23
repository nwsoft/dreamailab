# 베지케어 (VeggieCare) — 스펙 요약 (웹·플랫폼 정합)

- **last_reviewed:** 2026-05-23
- **canonical 웹:** https://dreamailab.com/services/veggie
- **외부 플랫폼:** https://veggie.care
- **DAL 도메인:** 라이프스타일 (VG) · **상태:** Beta
- **개발 정본:** `Works/veggiecare` (`docs/PRIORITY.md`, `docs/DAL_SYNC_ROADMAP.md`)
- **DAL 대외 스펙:** 본 MD + `app/services/veggie/page.tsx`

## 한 줄

채식·비건·플렉시테리언 식단을 전제로 식습관·영양·건강을 AI디지털케어로그로 연결하고, 레시피·맛집·커뮤니티·커머스까지 **기록→분석→실행→환류** 한 줄기로 확장하는 DAL 웰니스 축.

## 허브(`/services`) 정합

| 항목 | 허브 카드 |
|------|-----------|
| summary | 식습관·영양·건강 → 실행·소비·환경 |
| oneLiner | 식단·영양·외식·커뮤니티 → 행동 변화 |
| value | ESG·커머스·헬스케어 연동 웰니스 축 |
| status | Beta |

## 홈과의 관계

- 홈 **전용 그린 블록 + VG 배지** (4대 카드 외)
- 세부 타깃·문제카드는 **본 페이지 정본**

## 페이지 표준 구조 (9단)

| # | 섹션 | 본 페이지 대응 |
|---|------|----------------|
| 1 | Hero | 채식 유형 전제, 기록→실행 한 줄기 |
| 2 | Problem | problemCards 6 (정보 많음·개인화 부족·실행 단절) |
| 3 | Solution | platformSteps 5 |
| 4 | User Workflow | personaRows 4 |
| 5 | Technology | AI 영양·케어로그 (심화 X) |
| 6 | Business Impact | ESG·커머스·파트너·헬스 연계 |
| 7 | Service Status | Beta |
| 8 | Ecosystem | 토탈케어로그 식사 실행 연계 |
| 9 | CTA | veggie.care + DAL contact |

## 5단계 플랫폼 (`platformSteps`)

1. 식습관·건강 목표 입력 (채식 유형·알레르기·질환)
2. AI 영양 분석 (단백질·철·B12·칼슘·오메가3)
3. 실행 추천 (식단·레시피·맛집·밀키트·제품)
4. 건강 변화 추적 (체중·혈압·혈당·운동)
5. 환류와 지속

## 개발 플랫폼에 있으나 DAL에 반영할 항목 (과소 기재)

| 기능 | 코드 | DAL |
|------|------|-----|
| 베지케어로그 CRUD + AI 인사이트 | `me/carelog.tsx` (UI) · API mount 진행 | ✅ UI 반영 · API 🔄 |
| 영양소 가이드·오늘의 식단 | `/nutrients`, `/today` | DAL 반영 |
| 문의·커뮤니티 AI | `inquiries`, `community_ai` | DAL 반영 |
| 레시피·맛집·커뮤니티·챌린지 | pages | ✅ 반영 |
| 베지 마켓·정기배송·파트너 | `market`, `subscriptions`, `partner/` | ✅ 본 MD·페이지 |
| OpenAI 레시피 | PRIORITY §7 미완 | 「차기」 표기 |

## 지향 모드 (`supportModes`) — **로드맵**

| 모드 | 개발 상태 | 문서 |
|------|-----------|------|
| 회복 식사 | carelog 필드 수준, **전용 UI 없음** | `docs/DAL_SYNC_ROADMAP.md` Phase B |
| 다이어트 | 동일 | Phase C |
| 운동 | `workout_minutes` 등 필드 | Phase C |

> DAL·소개 웹: **「로드맵: 맞춤 모드」** 로 표기. 운영 완료 전 「전용 모드 제공」처럼 쓰지 않음.

## 핵심 기능 (`coreFeatures`)

1. **베지케어로그** — 식단·컨디션·건강 지표 타임라인
2. **AI 영양 분석** — 부족·과잉·대체 식품
3. **AI 레시피·식단** — 재료·예산·알레르기·엄격도
4. **비건 맛집·외식 매칭**
5. **커머스·정기배송**
6. **챌린지·커뮤니티**

## 채식 유형 (`veggieTypes`)

비건 · 락토·오보 · 페스코 · 플렉시테리언

## DAL 생태계

- 허브: 베지케어 → **토탈케어로그** (식습관·예방)
- totalcarelog.md: 항암·회복기 **식사 실행** ↔ 본 서비스 (동의·단계적 파트너)

## CTA·문의

| 대상 | 경로 |
|------|------|
| 서비스·사전 이용 | https://veggie.care |
| 일반 | `/contact?service=veggie&type=general` |
| B2B·파트너 | `/contact?service=veggie&type=b2b` |
| 기술·연구 | `/contact?service=veggie&type=tech` |

## 외부 플랫폼 정합 (2026-05-23 확인)

| 항목 | veggie.care | DAL 페이지 | 판정 |
|------|-------------|------------|------|
| 포지셔닝 | AI 채식 맞춤 영양관리 | DAL 웰니스·케어로그 인프라 | ✅ (DAL이 더 인프라 톤) |
| 맛집·레시피·커뮤니티 | UI 있음, 일부 데이터 empty | In Development | ✅ |
| AI 레시피 | 「차기 작업 OpenAI 연동」 프리뷰 | In Development | ✅ |
| 회원·추천 수치 | 20,000+ 회원, 15만건 등 | **미기재** | ⚠️ DAL에 미검증 수치 복사 금지 |
| 회복·항암 모드 | 외부 랜딩에 약함 | supportModes 상세 | ⚠️ 외부 보강 여지 |

**결론:** 외부는 **MVP·프리뷰** 단계. DAL 「In Development」와 정합. 마케팅 수치는 DAL SSOT에 넣지 않음.

## 톤·금지

- 「국내 최초 베지…」 등 비즈니스 페이지와 **동시 사용** 주의
- ESG·헬스 연계는 **본문 수준** 넘지 않기
- 의료·항암 **치료 대체** 표현 금지 → 식사 실행·영양 **보조**

## 정합 체크리스트

- [ ] 헬스케어·ESG 표현 ⊂ 본문 범위
- [ ] totalcarelog.md 베지케어 연계 섹션 상호 일치
- [ ] veggie.care AI·데이터 오픈 시 status·CTA 갱신
- [ ] 외부 마케팅 수치를 IR·홈에 이식하지 않음
