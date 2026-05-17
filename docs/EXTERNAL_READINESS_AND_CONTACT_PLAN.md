# 외부 방문·문의·IR 대비 수정 계획

**last_reviewed:** 2026-05-17  
**상태:** Phase 0·2·3(Status)·4 완료 / Phase 1 — **CF `NEXT_PUBLIC_FORMSPREE_FORM_ID` + 재배포 + 수신 1건 테스트만 잔여**

관련: [BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md) (비즈니스·법인 Living SSOT), [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md), [BUSINESS_SERVICES_SYNC.md](./BUSINESS_SERVICES_SYNC.md)

---

## 1. 배경·목표

- **배경:** 모두의창업 본선·우수성과 등으로 투자자가 **AI디지털케어로그·자람이·정해성·DAL·Noah** 를 검색할 수 있음. DAL은 **R&D·TIPS·VC** 본격화. 자람이는 노아처럼 **독립 법인 가능성** (로드맵 §2.2).
- **목표:** [BUSINESS_ROADMAP](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md)와 맞게 **문의 실동화·CTA 통일·IR 정합**.
- **범위 제외:** **자람이** — jarame.or.kr·자람이 전용 웹에서 별도 관리. DAL dreamailab.com의 `/services/jarame` CTA·문의 통일 작업 **하지 않음**.
- **비목표:** 뉴스 아카이브 전면 톤 수정, 모두의창업 전용 랜딩 페이지 신설.

---

## 2. 주체·제품 맥락 (모순 방지용)

| 주체 | 역할 | 웹에서의 위치 |
|------|------|----------------|
| **드림에이아이랩(DAL)** | AI디지털케어로그 플랫폼·6대 도메인 | dreamailab.com |
| **자람이** | 발달장애 축 **대표 제품** (베타·기관 풀) | `/services/jarame` + jarame.or.kr |
| **정해성** | 창업자·기술 아키텍트 (**개인** 활동 가능) | `/about`, 기술 페이지 |
| **모두의 창업** | **정해성 개인** 출전·**자람이 기준** 신청 | 뉴스·about. **전용 페이지 없음** |
| **Noah AI Labs** | 노아AI **분리 법인** | `/services/finance` → noahailabs.com |
| **자람이 (전망)** | 투자 시 **독립 법인 가능** (노아 선례) | 분리 시 Migrated 패턴 — 로드맵 §2.2·§8 |

**대외 한 줄:**  
「플랫폼·R&D/TIPS/VC = DAL; 발달·오디션·자람이 투자 = 자람이(분리 가능); 금융 = Noah; 오디션 출전 = 정해성 개인」

**검색 유입 → 페이지:** 로드맵 [§1](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md#1-외부-유입-시나리오-검색--기대--ssot)

---

## 3. 이전 권장안 재검토

### 3.1 뉴스 아카이브

- **이전 우려:** 「세계 최초」 등이 IR과 모순.  
- **재판단:** [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md) — **아카이브 유지**, 웹 SSOT와 **역할 분리**로 충분. **전면 수정 불필요.**

### 3.2 「창업·TIPS 전용 UX」

- **이전 제안 이유:** 외부 방문자가 오디션·과제 스토리를 **3클릭 안에** 찾게 하려는 UX였음.  
- **재판단 (사용자 확인 반영):**
  - 출전 주체 ≠ DAL 법인 → **전용 랜딩 페이지는 만들지 않음.**
  - TIPS·R&D·VC는 **이미 `/ir`, `/business`, `/public`** 에 수익 모델·정부·R&D 언급 있음.
  - **필요한 것은 “페이지 추가”가 아니라** (1) 문의 실동화 (2) about/뉴스에서 **개인·자람이 맥락이 검색 가능** (3) IR 각주로 **현재 Status** 강조.

### 3.3 작업 순서 정합성

이전 순서(문의 → `?type=` → contact 목록 → CTA 통일 → 데모 문구 → 오디션 랜딩)를 아래 **Phase 0~4**로 재정렬. **오디션 랜딩(구 6번) 삭제.**

---

## 4. 현재 인프라 (개발 전제)

| 항목 | 내용 |
|------|------|
| 빌드 | Next.js `output: 'export'` → `out/` 정적 파일 |
| 호스팅 | Cloudflare Pages (`배포_가이드.md`) |
| 백엔드 | **없음** (`app/api` 없음) |
| 문의 폼 | `app/contact/page.tsx` + `lib/contact-form.ts` — Formspree 또는 mailto |
| `?type=` / `?service=` | contact 페이지 **prefill 구현** |

Formspree: `NEXT_PUBLIC_FORMSPREE_FORM_ID` (Cloudflare Pages 환경 변수). 미설정 시 mailto fallback. 상세: `배포_가이드.md` §문의 폼.

---

## 5. 모순·갭 맵 (수정 대상)

| # | 문제 | 영향 | Phase |
|---|------|------|-------|
| A | 문의 양식 미전송 | 외부인 “문의했는데 무응답” | 1 |
| B | 성공 토스트가 실제 전송처럼 보임 | 신뢰 손실 | 1 |
| C | `serviceInquiries`에 노아·히포크라테스 | 구조와 불일치 | 2 |
| D | 서비스 CTA `?type=` 무효 | UX 허상 | 2 |
| E | 시니어만 mailto, 나머지는 /contact | 채널 분산 | 2 |
| F | `/contact` vs 6도메인 메일 혼재 | 운영 혼란 | 2 |
| G | 뉴스↔IR 톤 차이 | 심사 시 과장 인상 | 0 (정책만) |
| H | GCC status 표현 차이 (business vs service) | 정합 | 3 |
| I | jarame.or.kr vs DAL 웹 | **자람이 별도 트랙** | DAL 웹 작업 **제외** |

---

## 6. 수정 Phase (진행 순서)

### Phase 0 — 정책·문서 (**완료**)

- [x] `CONTENT_SSOT_AND_NEWS_POLICY.md`
- [x] `EXTERNAL_READINESS_AND_CONTACT_PLAN.md`
- [x] `BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md` (비즈니스 Living SSOT)
- [x] `docs/README.md` 인덱스
- [x] `/ir`·`/contact`·`/about` 투자·오디션·뉴스 각주·구조 — **Phase 3 일부**
- [x] Status 표 전면 대조 — business·services 허브·서비스 배지·로드맵 §4 (2026-05-17)

**산출:** 개발자·홍보·대표가 “뉴스는 홍보 아카이브, 계약·IR은 서비스/IR”에 동의.

---

### Phase 1 — 문의 **실동화** (최우선·블로커)

**목표:** 제출 → 실제 수신(이메일 또는 스프레드시트/CRM).

- [x] 가짜 2초 시뮬레이션·허위 “전송 완료” 제거
- [x] **mailto** 방식: 메일 앱에서 최종 발송 (정적 사이트 호환)
- [x] Formspree 연동 코드 (`lib/contact-form.ts`, `.env.example`)
- [ ] Cloudflare에 `NEXT_PUBLIC_FORMSPREE_FORM_ID` 설정 + **자동 수신 1건 테스트**
- [x] 수신 주소 표기: `contact@dreamailab.com`

**완료 기준 (현재):** mailto prefill 동작. **완료 기준 (목표):** Formspree env 설정 후 자동 수신 1건 테스트.

---

### Phase 2 — 문의 **단일 UX** (노아·구의료 정리 포함)

**목표:** `/contact` 하나 + 선택 필드. 별도 서비스 메일 나열 최소화.

#### 2-1. Contact 페이지 스펙 (2026-05-17 부분 반영)

- [x] 6도메인 + platform 드롭다운, 노아·히포크라테스 목록 제거
- [x] `?type=` / `?service=` prefill (`institution`→b2b, `partner`→b2b 등)
- [x] 자람이 **제외**, 나머지 서비스·공통 페이지 CTA URL 통일 (PR-3)

#### 2-1b. Contact 페이지 스펙 (상세)

| 필드 | 값 |
|------|-----|
| 문의 유형 | `general` / `b2b` / `ir` / `tech` / `press` |
| 관심 서비스 | `jarame` / `senior` / `healthcare` / `educarelog` / `marriage` / `veggie` / `platform` / `other` |
| Noah AI | 드롭다운에 넣지 않음 → 안내 문구 + `https://noahailabs.com` 링크 |

**URL prefill (구현):**

- `/contact?type=ir` → 문의 유형 = IR
- `/contact?service=jarame&type=b2b` → 서비스 + B2B

**제거·교체:**

- `히포크라테스AI` → **삭제** (토탈케어로그로 안내)
- `노아AI` + `finance@` → **삭제**, finance 페이지 링크만

#### 2-2. 서비스 페이지 CTA 통일

`app/services/*/page.tsx` CTA (**jarame 제외**):

- 기본: `/contact?service=<slug>&type=b2b` (기관) / `type=general` (이용)
- IR: `/contact?service=<slug>&type=ir`
- 시니어 mailto → `/contact?service=senior&type=b2b` ✅

**완료 기준:** 임의 서비스에서 문의 클릭 → contact에 서비스·유형 prefill.

---

### Phase 3 — IR·비즈니스·Status **정합** (중요·비긴급)

1. [BUSINESS_ROADMAP §4](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md#4-엔티티status-마스터-표-모순-방지) ↔ `app/business` ↔ `app/services` ↔ `docs/services` 1회 대조.
2. `/ir` 하단: 뉴스 아카이브 각주 + 투자 라우팅 (`/contact?type=ir`).
3. `/about`: 정해성·자람이·DAL·모두의창업(개인·자람이)·노아 분리·**자람이 분리 가능성** 1단락.
4. 홈: 플랫폼 지표·투자 CTA — Phase 4 또는 별도 이슈.
5. 자람이 **법인 분리 확정 시:** 로드맵 §8 체크리스트 + `/services/jarame` Migrated 패턴 (노아와 동일).

---

### Phase 4 — 기술·SEO (DAL, 자람이 제외) (**완료**)

- [x] `/technology/platform` (IR·R&D용 플랫폼 기술 개요)
- [x] `/technology` Hero → 플랫폼 링크, `keywords` 메타 제거
- [x] `app/sitemap.ts`에 `/technology/platform` 추가
- [x] 서비스·vision `keywords` 정리 (jarame·blog 일부는 유지)
- **jarame.or.kr** — DAL 웹 범위 **외**, 자람이 팀 별도 진행.

---

## 7. 하지 않을 것 (명시)

| 항목 | 이유 |
|------|------|
| 모두의창업 **전용 페이지** | 출전 = 정해성 개인, 신청 = 자람이 기준. DAL 사이트에 오디션 허브 불필요 |
| 뉴스 아카이브 **전면 톤 수정** | 홍보·검색·내부 자료. SSOT는 서비스/IR |
| dreamailab.com에 **백엔드 API 서버 신설** | 정적 호스팅 유지. 문의는 서드파티/Worker |
| 서비스별 **별도 문의 이메일 6개** 유지 | 운영 부담·외부 혼란. 단일 수신 + 필드 분류 권장 |

---

## 8. TIPS·R&D·VC — “UX”가 의미하는 것 (재정의)

| 필요함 | 불필요함 |
|--------|----------|
| `/ir`, `/business`의 수익 모델·지표·각주 | TIPS 전용 `/tips` 페이지 |
| 문의 `type=ir` + 실제 수신 | 모두의창업 랜딩 |
| `/public` 공공·시범·R&D 언급 (있으면 유지) | 뉴스 톤을 IR과 동일하게 맞추기 |
| about에 **개인·자람이·DAL** 역할 구분 | DAL = 오디션 출전사 표기 |

---

## 9. 구현 시 PR 단위 (권장)

| PR | 내용 | 문서 갱신 |
|----|------|-----------|
| PR-1 | Phase 1 문의 연동 + 가짜 성공 제거 | 본 문서 Phase 1 체크 |
| PR-2 | Contact 필드·prefill·서비스 목록 | `docs/services/README` — 문의는 contact SSOT |
| PR-3 | 전 서비스 CTA → `/contact?...` | `BUSINESS_SERVICES_SYNC` |
| PR-4 | IR 각주·Status 표 정합 | 해당 `docs/services/*.md` |
| PR-5 | (후순위) 홈·기술백서 | 별도 이슈 |

---

## 10. 의사결정 대기 (구현 전 확인)

1. **문의 연동 방식:** Formspree / Resend / Cloudflare Worker 중 선호?
2. **서비스별 이메일** (`jarame@` 등) 완전 폐지 vs mailto 보조 유지?
3. **about**에 모두의창업 1문장 노출 여부 (링크: 해당 뉴스 기사만)?

---

## 11. 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-05-17 | 초안: 뉴스 정책, 오디션 페이지 제외, Phase 0~4 |
| 2026-05-17 | BUSINESS_ROADMAP 연동, 검색 유입·자람이 분리 시나리오, Phase 0 완료 표시 |
| 2026-05-17 | contact mailto·prefill, IR/about 정합, Phase 1·2·3 부분 완료 표시 |
| 2026-05-17 | 자람이 제외, PR-3 CTA 통일(시니어·베지·에듀·토탈·GCC·공통 페이지) |
| 2026-05-17 | Phase 4: `/technology/platform`, sitemap, keywords 정리; Formspree 코드·배포 가이드 |
