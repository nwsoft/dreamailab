# 정해성 연구자·제품 적용 업데이트 근거

기준일: 2026-10-02 (KST). 이번 작업은 공개 소개의 소스 갱신이며 신규 제품 기능 개발이나 배포 완료 보고서가 아니다.

## 판단

기존 연구자 프로필은 기원·역할·초안 논문 중심이고 최근 역할별 협업, 실행 통제, 파트너 운영과 데이터 거버넌스를 설명하지 못했다. 제품 기능은 팀·현장 전문가와 함께 발전한 결과로 설명한다. 이번 확인만으로 모든 코드의 단독 저작, 임상 효능, 학술 검증 완료를 주장하지 않는다.

## 근거와 공개 표현

| 분야 | 검토한 프로젝트 문서 (Works 기준 상대 경로) | 반영 범위와 경계 |
|---|---|---|
| NoahAI | `noahai_client/config/app_version.py`, `docs/CHANGELOG.md`, `docs/UPDATE_PLAN.md`, `docs/TEST_STATUS.md`, `Noahailabs/docs/reports/WEBSITE_UPDATE_LOG.md` | 소스 후보 3.9.2.2와 공개 3.9.2.1을 구분. 전략 정의·버전/PAPER/검증 여권/Hub, 실행 권한, 생활금융 점검과 어시스턴트. 보험 이해·보장 비교는 개발 후보. |
| 자람이 | `자람이/docs/00-index/SITE_CHANGELOG_2026-06-18.md` §37–39 및 최신 기록, `docs/01-operations/발달지원_역할별_기능_데이터_XAI_정본_2026-09.md`, `docs/07-verification-logs/AI디지털케어로그_기술아키텍처_공개정합_검증_2026-09-19.md` | 9개 역할·동의·출처·관찰/XAI/건강 돌봄여권/다기관 인수인계. 규칙 집계와 AI 초안 구분. EMR·나이스 실연동/임상 효과 확정은 별도. JDS는 기존 DAL 기술 기사에서 강수진 박사 공동 설계로 귀속. |
| GCC | `GlobalCoupleCare/docs/TECHNICAL_OVERVIEW.md`, `docs/AGENCY_OPERATIONS_NOTIFICATIONS_AUDIT_2026-09-24.md`, `docs/ADMIN_AGENCY_NOTIFICATION_TEST_2026-09-25.md` | 업체 유형/권한/상업 등급 분리, 프로필·문의·매칭·계약·수수료·알림 대기열. 운영 배포 기록과 실제 업체 수신 시험 구분. 실결제·은행 지급 완료로 표현하지 않음. |
| VeggieCare | `veggiecare/docs/CHANGELOG.md`, `docs/ARCHITECTURE.md`, `docs/TECHNOLOGY.md`, `docs/UPDATE_PLAN.md` | 케어로그 CRUD/규칙·선택적 AI/레시피·영양, 센터 예약/파트너 소유권/상품 승인·전환 원장/ePRO·연구 반출 관리. Beta·유료 상용 No-Go, 실 PG 수락 별도. FHIR/웨어러블/연합학습은 계획. |

## 실제 공개 사이트 대조

- `https://dreamailab.com/research/jung-haesung/`: 최근 분야별 적용 설명이 없는 기존 프로필을 확인.
- `https://noahailabs.com/ko`: 검색 도구 응답은 3.9.2.0 표기. 최신 UPDATE_PLAN의 공개 배포 기록과 다름.
- `https://noahai.net/product-status`: 직접 HTTP 본문을 수집했으며 3.9.2.0/3.9.2.1/3.9.2.2가 함께 존재. 단순 버전 문자열 존재를 제공 완료로 해석하지 않음. 최신 개발·배포 문서의 공개 3.9.2.1, 차기 3.9.2.2 구분을 채택.
- `https://globalcouplecare.com/`, `https://jarame.or.kr/tech-docs`, `https://veggie.care/technology`: 공개 응답과 현행 소스 대조. 검색 도구의 베지케어 기술 페이지는 오래된 수집본으로 멀티모달·연합학습을 현재형으로 서술함. 이번 추가 설명에서 현행/계획 경계를 명시했으나 기존 기술 페이지 전체의 목표 아키텍처 본문 전면 정비는 별도 과제.

## 변경 위치

- DAL: 한국어·영어 프로필, Person 연구 분야, 기술 페이지, 자람이/국제커플/베지케어 서비스별 적용, 금융 서비스의 구버전 3.8.9.27 안내, 사이트맵 수정일.
- 공통 데이터: `lib/research-applications.ts`; 표시: `components/ResearchApplications.tsx`. 서비스 페이지에는 해당 분야만 표시한다.
- NoahAI Labs: 한국어 founder-origin의 금융 설계와 공식 현재 기능 링크. 로컬에 별도 기존 변경과 원격 선행 배포가 있어 이 작업본 전체 재배포는 하지 않는다.
- GCC: `/dream-ai-lab`의 파트너 운영·권한·알림 구조 설명.
- VeggieCare: `/technology`의 연구자 적용·현재 범위 설명.
- 자람이: `TechOverview.vue` 연구자 카드의 현재 역할별 제품 구조 설명.

## 검증과 게시 상태

검증 결과는 작업 완료 시 아래에 기록한다. 다섯 저장소의 기존 미커밋 변경은 보존한다. 커밋·푸시·운영 배포는 수행하지 않았다. 사이트맵 갱신과 소스 변경은 검색 재색인·외부 AI 답변 갱신 증거가 아니다.

검증 완료: DAL Next.js 정적 production build 통과, 4개 외부 프런트 전체 TypeScript/Vue 타입검사 통과. DAL 한국어 연구자 페이지의 새 카드 실제 브라우저 렌더링 확인. 생성 HTML의 한국어·영어 ProfilePage 수정일, 4개 분야 카드, 서비스별 단일 분야와 금융 버전, 사이트맵을 점검했다. 외부 4개 사이트의 변경 소스를 새로 운영 배포하거나 운영 화면에서 확인하지는 않았다.

## 전략 검증 여권 설명 보강

사용자 지적에 따라 `noahai_client/docs/STRATEGY_VALIDATION_MARKET_POSITIONING_39119.md`와 `AI_CUSTOM_STRATEGY_SHARING_AND_PASSPORT.md`, `trading/strategy_package.py`, NoahAI 공식 전략 여권 페이지를 추가 대조했다. 세계 최초의 대상은 원문·실행 규칙·버전별 근거·무결성 패키지·유통·사용자 재검증의 통합 생태계라는 NoahAI의 정의로 귀속해 설명한다. 독립 선행 사례 조사를 완료했다고 표기하지 않는다.

한국어 프로필·기술·금융 페이지에 별도 `StrategyPassportResearch` 설명을 추가하고 영어 프로필과 공통 카드도 보강했다. 해시 불일치 차단, 조건부 서명 검사, 비활성 가져오기 코드와 E0/E1 랭킹 제외 계약을 설명한다. E2~E5 계약을 모든 기관에서 실제 근거 취득 완료한 것으로 표현하지 않는다. 해시만으로 입력 주장 자체의 진실성을 보장하거나 모든 사기를 원천 불가능하게 만든다고 표현하지 않는다. 금융 전략 유통이 현재 적용이며 산업 자동화·AI 에이전트는 확장 연구 방향이다.

## 최종 운영 배포 · 2026-10-02 KST

아래 기록이 앞선 배포 전 상태를 대체한다.

| 사이트 | 배포 소스 | 운영 근거 |
|---|---|---|
| DreamAI Lab | `685bb02842ef27c5a01dfb877ed50d61cd8d8a8b` | Cloudflare Worker `dreamailab`, version `2230b77d-89d9-430d-a9be-291308b7c31f`. 프로필·기술·금융 설명 공개 확인. |
| NoahAI Labs | `6170851ff82e7259a9e8cfd66f2646f5729f4a4a` | 최신 origin/main 기반 Cloudflare Production/main Pages `52fa146b`; founder-origin 새 여권 설명 공개 확인. |
| Global Couple Care | 소개 파일 소스 `53255130683d43b6a8331d962f0301ed51ff4f0d` | GitHub 배포는 SSH reachability timeout. 직접 서버 격리 빌드 후 프런트 교체. 기존 운영 미커밋 변경 보존. 전체 서버 HEAD가 이 커밋과 동일하다는 뜻은 아님. 페이지 SHA256 `ac6023818c7695aa956319325aa5a70d71dd37dd4515b0380c371892a45d7e49`. frontend/backend active. |
| VeggieCare | `52c6db563d5040bb0f93b096d106e57ad16e0efb` | Backend CI `36981276724` 및 Deploy `36981426944` 성공. 서버 HEAD 동일, `/healthz` 정상, 기술 페이지 새 설명 공개 확인. |
| 자람이 | `6674c6764bd6215e9b8e8f0a3613ee0a3faefe23` | 프런트 정적 빌드·SEO 76개·문서 분류·npm audit 0건 확인 후 dist 교체. 서버 소스 HEAD 동일, backend/nginx active. 전체 백엔드 배포 아님. |

다섯 사이트 실제 브라우저에서 새 연구자 설명을 확인했다. 최종 측정에서 화면 가로 넘침 없음. 공개 HTTP 확인 기록과 프로필 화면은 로컬 `output/researcher-release-20261002/`에 저장했다. 검색 재색인이나 외부 AI 응답 갱신은 검증하지 않았다.

자람이 통합 사전검사는 기존 backend PyJWT 2.13.0·urllib3 2.7.0의 16개 감사 항목에서 중단돼 전체 37단계 통과를 주장하지 않는다. 이번 배포는 소개 변경 프런트로 한정했고 backend·DB·권한은 변경하지 않았다. 프런트 Axios만 패치 버전으로 갱신해 감사 0건을 확인했다.

복구용 기존 산출물: GCC `/home/ubuntu/gcc-researcher-backup.3eFfZr`, 자람이 `/home/ubuntu/jarame-researcher-backup.Hh8mLK`. 기존 사용자 작업과 운영 데이터를 보존했다.
