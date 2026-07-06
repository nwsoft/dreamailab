# 서비스 문서 — DAL ↔ 개발 플랫폼 동기화

**last_reviewed:** 2026-07-06

## 역할 분리 (SSOT)

| 계층 | 경로 | 용도 |
|------|------|------|
| **개발 정본** | 각 플랫폼 저장소 코드 + 아래 개발 계획 MD | 실제 구현·로드맵 |
| **DAL 대외 스펙** | `docs/services/*.md` | IR·홈·허브와의 **용어·상태** 정합 (last_reviewed: 2026-07-06) |
| **DAL 소개 웹** | `app/services/<slug>/page.tsx` | 투자·협력용 **요약·스토리** (개발 정본에서 파생) |

## 개발 저장소 ↔ DAL 문서

| 서비스 | 개발 폴더 | 개발 계획·상태 문서 | DAL 스펙 |
|--------|-----------|---------------------|----------|
| 자람이 | `../자람이` | [DAL_SYNC_DEVELOPMENT_PLAN.md](../../자람이/DAL_SYNC_DEVELOPMENT_PLAN.md), `PROJECT_STATUS.md` | [jarame.md](./jarame.md) |
| 시니어앤라이프 | `../시니어앤라이프` | [DAL_SYNC_DEVELOPMENT_PLAN.md](../../시니어앤라이프/DAL_SYNC_DEVELOPMENT_PLAN.md) | [senior.md](./senior.md) |
| 글로벌커플케어 | `../GlobalCoupleCare` | [DAL_SYNC_DEVELOPMENT_PLAN.md](../../GlobalCoupleCare/docs/DAL_SYNC_DEVELOPMENT_PLAN.md), `docs/PROJECT_STATUS.md` | [global-couple-care.md](./global-couple-care.md) |
| 베지케어 | `../veggiecare` | `docs/DAL_SYNC_ROADMAP.md`, `docs/PRIORITY.md` | [veggie.md](./veggie.md) |

## 동기화 규칙

### 과대 기재 (DAL·소개 웹에만 있고 코드에 없음)

1. 해당 플랫폼 **개발 계획 MD**에 P0/P1으로 있는지 확인
2. **없으면** 개발 계획 MD에 항목·체크리스트·완료 기준 작성 (위 표 참고)
3. DAL `docs/services`·`page.tsx`에는 **「로드맵」「소개 단계」** 로 표기 (운영처럼 쓰지 않음)

### 과소 기재 (코드·개발 문서에 있는데 DAL에 없음)

1. `docs/services/<name>.md` **「개발 플랫폼에 있으나 DAL에 반영할 항목」** 섹션에 추가
2. 같은 내용을 `app/services/<slug>/page.tsx`에 반영 (기능 카드·상태 배지·FAQ)
3. 필요 시 `app/services/page.tsx` 허브 status 갱신

## PR 체크

- [ ] 과대 항목이 개발 계획 MD에 등록됨
- [ ] 과소 항목이 `docs/services` + `page.tsx`에 반영됨
- [ ] `last_reviewed` 갱신
- [ ] [BUSINESS_SERVICES_SYNC.md](../BUSINESS_SERVICES_SYNC.md) 톤 규칙 유지
