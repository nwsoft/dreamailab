# 비즈니스·법인·투자 로드맵 (Living Document)

**last_reviewed:** 2026-05-17  
**maintainer:** 대표·CTO·웹/홍보 담당  
**목적:** R&D·TIPS·VC·모두의창업(외부 유입) 등 **사업 행보를 한곳에서 관리**하고, 웹·IR·뉴스·법인 구조 간 **일관성·모순**을 방지한다.

**연동 문서**

| 문서 | 역할 |
|------|------|
| [EXTERNAL_READINESS_AND_CONTACT_PLAN.md](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) | 웹·문의 **구현 Phase** |
| [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md) | 웹 vs 뉴스 톤 |
| [BUSINESS_SERVICES_SYNC.md](./BUSINESS_SERVICES_SYNC.md) | 페이지 간 용어 동기화 |
| [services/*.md](./services/) | 도메인별 스펙 |

**갱신 규칙:** 법인·투자·오디션·Status 변경 시 **본 문서 §4·§5 먼저** 수정 → 같은 주에 웹·`docs/services` 반영 (체크리스트 §8).

**DAL 웹 작업 범위:** dreamailab.com의 문의·CTA·IR 정합은 **자람이(jarame) 제외**. 자람이는 **jarame.or.kr** 별도 트랙.

---

## 1. 외부 유입 시나리오 (검색 → 기대 → SSOT)

모두의창업 본선·우수성과 등으로 **투자자·멘토·언론**이 검색할 때의 대표 경로.

| 검색어·키워드 | 찾는 것 | 1차 SSOT (대외) | 비고 |
|---------------|---------|-----------------|------|
| AI디지털케어로그, 디지털케어로그 | 기술·플랫폼 | `/technology`, `/business` | DAL **플랫폼 IP** |
| 자람이, Jarame | 제품·발달장애 | `/services/jarame`, jarame.or.kr | **모두의창업 신청 기준** 제품 |
| 정해성 | 창업자·기술 | `/about`, `/technology` | **개인** 출전·인터뷰 맥락 |
| 드림에이아이랩, DAL | 회사·IR | `/`, `/ir`, `/business` | **법인** 투자·B2B·R&D·TIPS |
| 노아AI, Noah AI Labs | 금융 AI (분리) | `/services/finance` → noahailabs.com | DAL과 **별도 법인** |

**투자자에게 맞는 한 줄 (2026-05 기준)**  
「플랫폼·다도메인·R&D/TIPS/VC는 **드림에이아이랩**; 발달장애 검증 축은 **자람이**(오디션·투자 유치 시 독립 법인 가능성); 금융 AI는 **Noah AI Labs**로 이미 분리.」

---

## 2. 법인·브랜드 구조 (현재 vs 전망)

### 2.1 현재 (As-Is)

| 엔티티 | 성격 | 웹·도메인 | 투자·과제 |
|--------|------|-----------|-----------|
| **드림에이아이랩 (DAL)** | AI디지털케어로그 플랫폼 법인 | dreamailab.com | R&D, TIPS, VC **주체** |
| **자람이** | DAL 1번 도메인 제품 (Beta) | dreamailab.com/services/jarame, jarame.or.kr | 모두의창업 **신청·스토리** 기준 |
| **정해성** | 창업자·CTO (개인) | about·기술 페이지 | 오디션 **개인** 출전 |
| **Noah AI Labs** | 노아AI **분리 완료** | noahailabs.com, DAL `/services/finance` 안내 | VC/TIPS 등 **별도** 진행 |

### 2.2 전망 (To-Be) — 자람이 우수성과·투자 시나리오

| 시점 | 가정 | DAL | 자람이 | Noah |
|------|------|-----|--------|------|
| **A. 현재~본선** | 오디션 진행 중 | 6도메인 + 플랫폼 IR | 제품·베타·기관 풀 | 분리 유지 |
| **B. 우수성과·투자 본격화** | 노아와 유사 **독립 법인** 가능성 **높음** | 시니어·토탈케어로그·에듀·GCC·베지 + **플랫폼 기술** | **Jarame Inc.(가칭)** 투자·상용화 주체 | 분리 유지 |
| **C. 분리 후** | 기술 라이선스·공동 브랜드 정리 | “Powered by AI디지털케어로그” **플랫폼사** | 발달장애 **수직 SaaS** | 금융 수직 |

**원칙 (노아 선례와 정합)**

- 분리 시에도 **기술 스토리 연속성**: DAL = 인프라·표준·다도메인; 자람이 = 발달 검증·데이터·B2G.
- dreamailab.com: 자람이 페이지는 **Migrated 안내** 또는 **자람이 법인 링크**로 전환 (노아 `/services/finance` 패턴).
- **투자 라운드 주체**를 문서·웹에 명시 (DAL 라운드 vs 자람이 라운드).

> ⚠️ 법인 설립·지분·라이선스는 **본 문서가 확정하지 않음**. 확정 시 §7 의사결정 로그에 날짜·요약 기록.

---

## 3. DAL 비즈니스 축 (R&D · TIPS · VC)

### 3.1 포트폴리오 (웹·docs 기준)

| 도메인 | 웹 | Status (서비스 페이지) | DAL 비즈니스 역할 |
|--------|-----|------------------------|-------------------|
| 자람이 | jarame | Beta | 오디션·투자 **전선** (분리 가능) |
| 시니어앤라이프 | senior | Pilot | B2B·공공·표준화 |
| 토탈케어로그 | healthcare | In Development | 의료·RWE·헬스케어 (공개 진입 재정비 중) |
| 에듀케어로그 | educarelog | Pilot | 교육·2026 정책 |
| 글로벌커플케어 | marriage | Pilot | B2B2C·파트너 (베타·MVP) |
| 베지케어 | veggie | Beta | 라이프스타일·ESG |

**DAL이 “남는” 사업:** 자람이 분리 후에도 **2~6번 + 플랫폼/API/표준화** + R&D·TIPS·VC (플랫폼사 narrative).

### 3.2 트랙별 웹·자료 역할

| 트랙 | 목적 | SSOT 페이지 | docs 갱신 |
|------|------|-------------|-----------|
| **R&D** | 과제·PoC·공동연구 | `/technology`, `/public`, `/business` | 본 문서 §5 타임라인 |
| **TIPS** | 팁스·민간투자 연계 | `/ir`, `/business` | §7 의사결정 |
| **VC** | 투자 유치 | `/ir`, `/business`, `/contact?type=ir` | 수치·Status §4 표 |
| **B2B·기관** | 도입·파트너 | `/services/*`, `/contact?type=b2b` | `docs/services/*.md` |
| **모두의창업** | 개인·자람이 노출 | 뉴스·about (전용 페이지 없음) | §2.2 시나리오 |

### 3.3 수치·표현 (대외 공통 각주)

- **5,700+ 기관, 22,000+ 사업자:** 등록·연계 **풀** 규모. 전원 상용·MAU 아님 → IR·business·jarame FAQ와 **동일 각주**.
- **Beta / Pilot / Live / In Development / Migrated:** [SERVICE_PAGE_STRUCTURE_ORDER.md](./SERVICE_PAGE_STRUCTURE_ORDER.md) — **과장 금지**.

---

## 4. 엔티티·Status 마스터 표 (모순 방지)

**웹·IR·business·docs/services가 이 표와 어긋나면 버그로 간주.**

| 엔티티 | 법인 소속 (현재) | Status | 투자 문의 라우팅 | 웹 canonical |
|--------|------------------|--------|------------------|--------------|
| DAL 플랫폼 | DAL | 운영 중 | `/contact?type=ir` | dreamailab.com |
| 자람이 | DAL (제품) | Beta | IR·B2B → contact (분리 전) | /services/jarame |
| 시니어앤라이프 | DAL | Pilot | contact + service=senior | /services/senior |
| 토탈케어로그 | DAL | In Development | contact + service=healthcare | /services/healthcare |
| 에듀케어로그 | DAL | Pilot | contact + service=educarelog | /services/educarelog |
| GCC | DAL | Pilot | contact + service=marriage | /services/marriage |
| 베지케어 | DAL | Beta | contact + service=veggie | /services/veggie |
| 노아AI | Noah AI Labs | Migrated | noahailabs.com | /services/finance |

**갱신 시:** 이 표 → `app/business` 카드 → `app/ir` 문단 → 해당 `docs/services/*.md` → (해당 시) 뉴스 **신규** 기사만.

---

## 5. 타임라인·마일스톤 (수동 갱신)

| 시기 | 이벤트 | DAL 액션 | 웹/docs 액션 |
|------|--------|----------|--------------|
| 2026-05 | 모두의창업 본선·외부 검색 증가 | IR·문의 정비 | [EXTERNAL_READINESS](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) Phase 1~3 |
| 2026-05~ | R&D·TIPS·VC 본격 | 과제·덱·미팅 | `/ir`·`/business` 수치 동기화 |
| TBD | 자람이 우수성과·투자 가속 | 법인 분리 검토 | §2.2 B→C, jarame Migrated 패턴 |
| 완료 | 노아AI 분리 | — | `/services/finance` 유지 |

*(행 추가 시 위 표만 수정 — 별도 Gantt 불필요)*

---

## 6. 투자자·심사위원 FAQ (내부·대외 브리핑용)

1. **DAL과 자람이 투자 대상이 다른가?**  
   현재는 DAL 산하 제품. 우수성과·투자 시 **자람이 독립 법인** 가능(노아 선례). 플랫폼 투자는 DAL.

2. **모두의창업에 DAL이 나가나?**  
   **정해성 개인** 출전, **자람이 기준** 신청. DAL은 기술·회사 백엔드 스토리.

3. **뉴스의 「세계 최초」와 IR이 다른 이유?**  
   뉴스=당시 홍보 아카이브. 계약·IR=서비스·IR SSOT. [CONTENT_SSOT](./CONTENT_SSOT_AND_NEWS_POLICY.md).

4. **노아AI는?**  
   Noah AI Labs 분리. dreamailab.com은 안내만.

---

## 7. 의사결정 로그 (Decision Log)

| 날짜 | 결정 | 담당 | 웹 반영 |
|------|------|------|---------|
| 2026-05-17 | 모두의창업 **전용 페이지 없음**; 출전=정해성·자람이 | — | 계획서 반영 |
| 2026-05-17 | 본 로드맵 문서를 **비즈니스 Living SSOT**로 지정 | — | docs/README |
| 2026-05-17 | contact·IR·about에 검색 유입·법인 구조·뉴스 각주 반영 | 웹 | Phase 1~3 |
| 2026-05-17 | Status 마스터 표·business·services 허브·서비스 배지 동기화 (토탈=In Development) | 웹 | §8 |
| 2026-05-17 | 자람이 CTA → jarame.or.kr (DAL /contact 미사용) | 웹 | jarame 페이지 |
| | *(분리 법인·라운드·TIPS 선정 등 추가)* | | §8 체크리스트 |

---

## 8. 변경 시 체크리스트 (웹·docs 동시)

법인·Status·투자·오디션 결과 변경 시:

- [ ] **§4 엔티티 마스터 표** 갱신
- [ ] **§5 타임라인** 한 줄 추가
- [ ] **§7 의사결정 로그** 기록
- [ ] `app/services/<slug>/page.tsx` Status 배지·메타
- [ ] `app/business/page.tsx` 포트폴리오 카드
- [ ] `app/ir/page.tsx` (수치·각주)
- [ ] `docs/services/<name>.md` `last_reviewed`
- [ ] `app/contact` 라우팅·안내 (분리 시 Migrated)
- [ ] 뉴스: **신규 기사**만 SSOT 톤 (구 아카이브 일괄 수정 X)
- [ ] [EXTERNAL_READINESS](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) Phase 완료 표시

---

## 9. 변경 이력

| 날짜 | 내용 |
|------|------|
| 2026-05-17 | 초안: 검색 유입, 자람이 분리 시나리오, R&D/TIPS/VC, 엔티티 마스터 표, Living Doc 규칙 |
