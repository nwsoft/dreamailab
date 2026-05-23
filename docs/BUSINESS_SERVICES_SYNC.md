# 비즈니스·IR·홈 — 서비스 서술 동기화 가이드

**last_reviewed:** 2026-05-23

## 관련 문서

- [docs/services/README.md](./services/README.md) — **개발↔DAL 동기화 규칙 (필수)**
- [BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md) — 법인·투자·R&D/TIPS/VC Living SSOT
- [EXTERNAL_READINESS_AND_CONTACT_PLAN.md](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) — 문의·웹 구현 Phase
- [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md) — 웹 vs 뉴스 아카이브 톤·역할
- [docs/README.md](./README.md) — 문서 인덱스

## 단일 진실 공급원 (SSOT) — 2계층

| 계층 | 정본 | 용도 |
|------|------|------|
| **구현·로드맵** | 각 플랫폼 저장소 코드 + `DAL_SYNC_*` / `PROJECT_STATUS` | 실제 운영 여부, P0/P1 일정 |
| **대외 스펙·스토리** | `docs/services/*.md` + `app/services/*/page.tsx` | IR·홈·허브·협력 제안 (구현 정본에서 **파생**) |

플랫폼별 개발 계획 문서:

| 서비스 | 경로 |
|--------|------|
| 자람이 | `Works/자람이/DAL_SYNC_DEVELOPMENT_PLAN.md` |
| 시니어앤라이프 | `Works/시니어앤라이프/DAL_SYNC_DEVELOPMENT_PLAN.md` |
| GCC | `Works/GlobalCoupleCare/docs/DAL_SYNC_DEVELOPMENT_PLAN.md` |
| 베지케어 | `Works/veggiecare/docs/DAL_SYNC_ROADMAP.md` |

## 이후 워크플로 (PR마다)

### 1. 과대 기재 (DAL·홈에만 있고 코드에 없음)

1. 해당 플랫폼 `DAL_SYNC_*`에 P0/P1·완료 기준·DAL 반영 조건이 있는지 확인
2. **없으면** 개발 계획 MD에 항목 추가
3. DAL `docs/services` + `page.tsx` + (해당 시) `app/page.tsx` 홈 불릿을 **「로드맵」「파일럿」「단계적」** 으로 수정 — **운영 완료처럼 쓰지 않음**

### 2. 과소 기재 (코드·개발 문서에 있는데 DAL에 없음)

1. `docs/services/<name>.md` §「개발 플랫폼에 있으나 DAL에 반영할 항목」 갱신
2. `app/services/<slug>/page.tsx` — coreFeatures·구현 현황 표·FAQ
3. `app/services/page.tsx` 허브 status가 구현 단계와 일치하는지 확인

### 3. P0/P1 완료 후 (개발팀 확인)

1. 개발 계획 MD 체크리스트 완료 표시
2. DAL 구현 현황 표에서 📄 → ✅ 또는 🔄 → ✅
3. Hero·홈 status를 Pilot/Beta/운영으로 **승격** (근거: 라우터 활성·UAT)

## 레거시 SSOT (톤·허브)

1. **허브·연결 구조:** `app/services/page.tsx` + `public/images/services/*.svg`
2. **홈 요약 카드:** `app/page.tsx` — **허브 status·해당 `/services/*` page와 정합** (과장·미기재 금지)
3. **문서 스펙:** `docs/services/*.md` — 웹 수정 시 같은 PR에서 `last_reviewed` 갱신

## 비즈니스·IR 페이지

- `app/business/page.tsx`, `app/ir/page.tsx` 포트폴리오 카드는 **docs/services** 및 해당 서비스 라우트와 용어를 맞출 것.
- 루트 `드림에이아이랩_서비스_상세설명.md`는 레거시 가이드; 법·대외용 최종 문구는 **개발 정본 → docs/services → 웹** 순.

## 금지·주의 (대외 톤)

- 근거 없는 **「국내 최초」「유일」「완전 해결」**
- 서비스 페이지·개발 코드에 없는 **구체 모듈명**을 홈·IR에만 추가
- **의료·치료 결정 대체** — AI는 권장·보조

## 뉴스 아카이브

- `app/news/data.ts`는 보도·홍보·검색용; 과거 표현 일괄 수정하지 않음.
- IR·계약·과제 제출용 인용은 **서비스 페이지·IR·본 가이드 SSOT**만 사용.

## 체크 PR 템플릿

- [ ] 과대 항목 → 플랫폼 `DAL_SYNC_*` 등록됨
- [ ] 과소 항목 → `docs/services` + `page.tsx` 반영됨
- [ ] 홈 `domainHubTiles` status ⊂ `/services` 허브
- [ ] 홈 `services` 불릿 ⊂ 해당 `app/services/*/page.tsx` (로드맵 문구 포함)
- [ ] `docs/services/<name>.md` `last_reviewed` 갱신
- [ ] IR/공공/비즈니스 동일 서비스 **같은 동사·같은 범위**
