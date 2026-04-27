# 비즈니스·IR·홈 — 서비스 서술 동기화 가이드

**last_reviewed:** 2026-04-28  

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

## 체크 PR 템플릿

- [ ] 홈 `services` 불릿 ⊂ 해당 `app/services/*/page.tsx`  
- [ ] `docs/services/<name>.md` `last_reviewed` 갱신  
- [ ] IR/공공/비즈니스 동일 서비스 줄 **같은 동사·같은 범위**  
