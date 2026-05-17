# 비즈니스·IR·홈 — 서비스 서술 동기화 가이드

**last_reviewed:** 2026-05-17  

## 관련 문서

- [BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md](./BUSINESS_ROADMAP_AND_ENTITY_STRATEGY.md) — 법인·투자·R&D/TIPS/VC **Living SSOT**
- [EXTERNAL_READINESS_AND_CONTACT_PLAN.md](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) — 문의·웹 구현 Phase
- [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md) — 웹 vs 뉴스 아카이브 톤·역할
- [docs/README.md](./README.md) — 문서 인덱스

## 단일 진실 공급원(SSOT)

1. **제품 기능·톤:** `app/services/<slug>/page.tsx`  
2. **허브·연결 구조:** `app/services/page.tsx` + `public/images/services/*.svg`  
3. **홈 요약 카드:** `app/page.tsx` 내 `services` 배열 — **위 1과 정합** (과장·미기재 기능 금지)  
4. **문서 스펙:** `docs/services/*.md` — 웹 수정 시 같은 PR에서 `last_reviewed` 갱신 권장  

## 비즈니스·IR 페이지

- `app/business/page.tsx`, `app/ir/page.tsx`의 포트폴리오 카드는 **docs/services** 및 해당 서비스 라우트와 용어를 맞출 것.  
- 루트 `드림에이아이랩_서비스_상세설명.md`는 **레거시 가이드**로 두고, 법·대외용 최종 문구는 웹+`docs/services`를 우선한다.

## 금지·주의 (대외 톤)

- 근거 없는 **「국내 최초」「유일」「완전 해결」**  
- 서비스 페이지에 없는 **구체 모듈명**(예: 홈에만 있는 “번아웃 전용 프로그램” 등)  

## 뉴스 아카이브

- `app/news/data.ts`는 **보도·홍보·검색용**이며, 과거 「세계 최초」 등 표현을 **일괄 수정하지 않는다**.
- IR·계약·과제 제출용 인용은 **서비스 페이지·IR·본 가이드 SSOT**만 사용. 상세: [CONTENT_SSOT_AND_NEWS_POLICY.md](./CONTENT_SSOT_AND_NEWS_POLICY.md).

## 체크 PR 템플릿

- [ ] 홈 `services` 불릿 ⊂ 해당 `app/services/*/page.tsx`  
- [ ] `docs/services/<name>.md` `last_reviewed` 갱신  
- [ ] IR/공공/비즈니스 동일 서비스 줄 **같은 동사·같은 범위**
- [ ] 문의·CTA 변경 시 [EXTERNAL_READINESS_AND_CONTACT_PLAN.md](./EXTERNAL_READINESS_AND_CONTACT_PLAN.md) §Phase 2 스펙 준수  
