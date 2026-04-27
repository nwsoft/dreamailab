# 자람이 (Jarame) — 스펙 요약 (웹 정합)

- **last_reviewed:** 2026-04-28  
- **canonical 웹:** https://dreamailab.com/services/jarame  
- **외부:** https://jarame.or.kr  

## 한 줄

발달장애 가정·학교·센터·병원 기록을 AI디지털케어로그로 표준화하고, AI 상담·자가진단·리포트·기관 연동으로 개입을 돕는 DAL 1번 도메인.

## 홈(`app/page.tsx`) 요약과의 관계

홈 「도메인별 핵심 플랫폼」 첫 카드로 노출. 불릿 6개는 웹 `coreFeatures`·히어로 메시지와 동일 계열.

## 웹 페이지 기준 핵심 기능

1. AI 디지털케어로그(가정·학교·센터·병원 통합 기록)  
2. AI 상담·권장안  
3. AI 리포트(일·주·월)  
4. 자가진단 모듈(M-CHAT, AQ-50, Vanderbilt, ASRS 등)  
5. 기관 연동·RBAC  
6. 학교 관리자 대시보드  
7. 홈티 매칭  
8. 통계·연구(익명 집계)  

(상세 카피·FAQ·레퍼런스는 전부 `app/services/jarame/page.tsx` 본문을 따름.)

## 상태·지표(메타/히어로와 동기화)

- 베타 테스트, 기관 등록 수 등은 **웹 메타·히어로 숫자**를 따름. MD에 고정 수치를 두지 않음.

## 정합 체크리스트

- [ ] 홈 카드 불릿 ⊂ 본 페이지 기능 설명  
- [ ] `/services` 허브 카드 summary와 충돌 없음  
- [ ] `hasOfferCatalog` 등 JSON-LD 서비스명 일치  
