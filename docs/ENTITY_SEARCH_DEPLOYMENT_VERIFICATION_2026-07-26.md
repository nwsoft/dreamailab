# 다중 도메인 Entity Search 배포·검증 기록

- 기준일: 2026-07-26 KST
- 범위: VeggieCare, 시니어앤라이프, 자람이, Dream AI Lab, Global Couple Care, NoahAI Labs
- 목적: 서로 다른 서비스 도메인을 하나의 동일 법인으로 오인시키지 않으면서, 공통 연구자·기술의 정본 관계를 검색엔진과 AI 검색 시스템이 해석할 수 있게 한다.

## 배포 상태

| 도메인 | 운영 정본 | GitHub/배포 기준 | 운영 검증 |
|---|---|---|---|
| VeggieCare | `https://veggie.care/` | `nwsoft/veggiecare` `a4d299b` (`113f299` 공개 Entity 변경, 이후 CI 설정 보정) | EC2 직접 배포, `/technology`, `robots.txt`, `sitemap.xml`, `llms.txt` 200 |
| 시니어앤라이프 | `https://seniorandlife.com/` | `nwsoft/seniorlife` `d89d3e4` | EC2 `3.39.87.231` `/home/ubuntu/seniorlife`, PM2 frontend와 systemd backend 정상, DAL JSON-LD 서버 렌더 확인 |
| 자람이 | `https://jarame.or.kr/` | `nwsoft/jarame` `28ec57d` | EC2 배포, `/health`, `robots.txt`, `sitemap.xml`, `llms.txt` 200, 데모 계정 검증 14/14와 역할 QA 18/18 통과 |
| Dream AI Lab | `https://dreamailab.com/` | `nwsoft/dreamailab` `cd5ced5` | Cloudflare Worker version `5bddce29-95a5-427e-a234-19c5309a6959`, 한·영 연구자 프로필·뉴스 85·RSS·sitemap·llms 200 |
| Global Couple Care | `https://globalcouplecare.com/` | `nwsoft/globalcouplecare` `b60561c` | EC2 배포, backend/frontend systemd active, DAL·Dream AI Lab·robots·sitemap·llms 200 |
| NoahAI Labs | `https://noahailabs.com/` | `nwsoft/noahailabs-website` `d7ed6db` | Cloudflare Pages production `2309f23d-21d4-4fe6-9453-5d475a6b9b34`, 기술 기원·백서·sitemap·llms 200 |

## 정본 Entity 규칙

- 연구 조직: `https://dreamailab.com/#organization`
- 연구자: `https://dreamailab.com/research/jung-haesung/#person`
- 공통 기술: `https://dreamailab.com/technology/#ai-digital-care-log`
- 각 서비스는 자체 Organization 또는 Brand 정본 URL을 유지한다.
- 다른 서비스 도메인은 `sameAs`로 합치지 않고 `brand`, `parentOrganization`, `subjectOf`, `isBasedOn` 등 실제 관계로만 연결한다.
- 인물 표기는 대표 연구자 프로필과 기술 설명 페이지에 집중한다. 모든 서비스 페이지에 개인·가족 서사를 반복하지 않는다.

## 개인정보 조치

- 자람이 공개 페이지와 현재 작업 트리에서 특정 나이·장애 중증도·부모 관계를 결합한 반복 문구를 제거했다.
- 공감·개발 동기는 필요한 대표 소개 문맥에서 일반화된 가족 경험으로만 설명한다.
- 운영 데모 아동·보호자·기관은 실인물과 무관한 합성 식별자와 합성 복약 데이터로 정규화했다.
- 기존 Git 이력의 과거 문자열은 현재 배포와 별개로 남을 수 있다. 이력 재작성은 협업자 clone과 배포 기준을 바꾸는 파괴적 작업이므로 별도 승인·백업·공지가 필요하다.

## 검색·AI 발견성 구현

- 각 도메인의 canonical, Organization/Person/TechArticle/WebPage JSON-LD 관계를 정리했다.
- 공개 크롤러가 필요한 JS·JSON·정적 자산을 robots.txt에서 막지 않도록 조정했다.
- 검색 대상 공개 URL만 sitemap에 포함하고 로그인·관리·마이페이지 계열은 제외했다.
- 도메인별 `llms.txt`에 정본 URL, 서비스 범위, 과장 금지와 개인정보 경계를 기록했다.
- Dream AI Lab에 한·영 연구자 프로필, 한·영 뉴스 85, RSS 피드를 추가해 다국어 정본과 최신 변경 이력을 제공했다.

## 남은 외부 운영 작업

코드 배포는 완료했지만 색인과 AI 학습을 보장할 수는 없다. 다음 작업은 각 도메인의 소유권이 확인된 관리자 계정에서 실행한다.

1. Google Search Console: 6개 도메인 속성 확인, sitemap 제출, 대표 URL 색인 요청, 페이지 색인·리치 결과 오류 모니터링.
2. 네이버 서치어드바이저: 국내 대상 도메인 소유 확인, 사이트맵·RSS 제출, 수집 요청과 사이트 진단 확인.
3. Bing Webmaster Tools: 도메인 확인, sitemap 제출, 지원되는 도메인은 IndexNow 키 발급·운영 자동화.
4. 보도자료·기고·파트너 사례는 실제 계약·출시·연구 근거가 생긴 경우에만 배포하고, 자사 뉴스·블로그와 독립 언론 보도를 구분한다.
5. 다국어 페이지는 번역 품질과 지역별 제공 범위를 검수한 뒤 hreflang 묶음과 sitemap을 확장한다.

## 운영 이슈

- VeggieCare GitHub Backend CI는 `a4d299b`에서 통과했다. GitHub EC2 Deploy workflow는 SSH 연결 단계가 실패해 직접 배포로 완료했으며, Actions용 SSH secret/접근 경로는 별도 복구가 필요하다.
- Global Couple Care EC2의 기존 작업 파일은 배포 전 `pre-entity-seo-deploy-2026-07-26` stash로 보존했다.
- 시니어앤라이프 EC2 배포 폴더는 Git checkout이 아니라 rsync 방식이며 `DEPLOYED_COMMIT`으로 `d89d3e4`를 기록했다.

