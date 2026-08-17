# DAL Vibe Architect — AI Software Creation Platform

> **Master Vision v1.0**
> **기준일:** 2026-08-17
> **상태:** 제품 비전 기준선 · 설계 공개 단계 · 미출시
> **프로젝트명:** DAL Vibe Architect(가칭)

## 0. 문서의 역할

이 문서는 DAL Vibe Architect의 1차 마스터 비전을 고정한다. 앞으로 경쟁제품 분석, MVP, 기술 아키텍처, 모델과 개발 스택, 3개월 로드맵, 데이터 플라이휠과 사업모델은 이 문서의 상위 원칙을 기준으로 구체화한다.

이 문서에 적힌 Architecture Guardian, Project Knowledge Graph, Software Engineering Outcome Dataset, Self-Healing Software는 현재 구현 완료 기능이 아니라 검증해야 할 핵심 기술 후보와 장기 방향이다. 공개 빌더, 요금제, 확정 출시일은 아직 없다.

### 메시지 결정

- 제품을 특정 경쟁제품의 반대말로 정의하지 않는다.
- 상위 비교축은 `기존 바이브코딩의 코드 생성 중심 틀`과 `DAL의 소프트웨어 생명주기 중심 구조`다.
- Cursor를 포함한 개별 제품은 시장을 이해하기 위한 사례로만 다룬다.
- 핵심 명제는 `Prompt → Code`가 아니라 `Intent → Architecture → Software → Operation → Learning`이다.

### 명칭 결정

- 외부 시장 분류는 **바이브코딩 · AI 앱 빌더**를 사용한다.
- `AI Software Creation Platform`은 제품을 설명하는 문구이며, 새로운 시장 범주나 독점 명칭으로 주장하지 않는다.
- `DAL Vibe Architect`는 제품 작업명이며 확정 브랜드가 아니다.
- DAL의 독자성은 시장 범주를 새로 선언하는 데 있지 않고, 의도부터 운영 결과까지 연결하는 아키텍처와 데이터 구조에 둔다.
- AI Digital Care Log와 같은 상위 고유 개념의 후보로 **AI Software Creation Log**를 검토한다. 사용자의 의도, 요구사항, 설계 결정, 코드 변경, 오류, 수정, 테스트, 배포, 운영 결과를 시간축으로 연결하는 개념이다.
- `AI Software Creation Log`는 현재 내부 후보명이다. 공개 확정 전 유사 서비스·상표·도메인 및 한국어 표현 검토를 거친다.

---

## 1. 우리가 만들려는 것은 무엇인가

우리가 만들려는 것은 또 하나의 AI 코드 에디터가 아니다.

현재의 AI 코딩·바이브코딩 도구는 코드를 작성하고 수정하는 장벽을 크게 낮췄다. 그러나 실제 소프트웨어를 만들고 운영하는 사람에게는 여전히 다음 책임이 남아 있다.

- 무엇을 만들어야 하는지 정의
- 사용자 역할과 업무 흐름 설계
- 데이터베이스, 인증, 권한 설계
- 개인정보, 결제, 보안, 감사 대응
- 변경 영향과 회귀 오류 판단
- 테스트, 배포, 모니터링, 장애 복구

코드를 몰라도 코드를 생성할 수 있게 되었지만, 좋은 소프트웨어가 무엇인지 판단해야 하는 책임은 아직 인간에게 남아 있다.

DAL이 제거하려는 것은 코드가 아니라 **소프트웨어를 만들기 위해 인간이 감당해 온 불필요한 복잡성**이다.

---

## 2. 제품의 핵심 철학

> 사용자가 시스템을 배우는 것이 아니라, 시스템이 사용자를 이해해야 한다.

사용자는 자신이 해결하려는 문제, 현장, 고객, 운영 방식과 성공 기준을 설명한다. 시스템은 그 의도를 요구사항, 제품 구조, 시스템 아키텍처, 구현 계획, 검증, 배포와 운영으로 변환한다.

사람은 목적과 중요한 사업 결정을 책임진다. AI는 기술 복잡성을 흡수하되, 중요한 결정과 위험을 숨기지 않고 쉬운 언어로 설명한다.

---

## 3. Vibe Coding에서 Intent Engineering으로

기존 바이브코딩의 대표적인 흐름은 다음과 같다.

`Human → Prompt → AI → Code`

DAL이 지향하는 흐름은 다음과 같다.

`Human Intent`

→ `Intent Understanding`

→ `Requirement Modeling`

→ `Product Architecture`

→ `System Architecture`

→ `Implementation Planning`

→ `Code Generation`

→ `Verification`

→ `Deployment`

→ `Monitoring`

→ `Maintenance`

→ `Continuous Improvement`

사용자는 코드를 지시하는 사람이 아니라 목적을 정의하는 사람이다. 핵심 경쟁력은 Code Generation 자체가 아니라 **Intent-to-Software Transformation**이다.

---

## 4. AI가 사용자가 모르는 질문까지 책임진다

사용자가 “학원 예약 서비스를 만들고 싶다”고 말했을 때 시스템은 바로 코드부터 생성하지 않는다.

### 사용자와 역할

- 학생, 학부모, 강사, 관리자 중 누가 사용하는가
- 여러 지점과 여러 역할이 존재하는가
- 역할별로 어떤 정보와 행동을 허용할 것인가

### 예약과 운영

- 시간 단위인지 수업 단위인지
- 강사가 시간을 공개하는지 고객이 요청하는지
- 중복예약, 취소, 노쇼, 변경 이력을 어떻게 처리할지

### 결제와 개인정보

- 선결제, 현장결제, 정기결제 중 무엇인지
- 환불과 영수증을 어떻게 처리할지
- 어떤 정보를 왜 수집하고 언제 삭제할지
- 미성년자 동의가 필요한지

사용자는 기술적 의미를 몰라도 된다. AI는 사업에 필요한 질문만 쉬운 한국어로 묻고, 답을 기술 구조로 번역한다.

---

## 5. 역할별 Agent와 Orchestrator

하나의 거대한 AI가 모든 것을 임의로 처리하기보다, 승인된 설계 아래 역할별 전문 Agent를 조정하는 구조를 지향한다.

1. **Intent AI** — 실제 문제, 사용자, 목적, 성공 기준 이해
2. **Product Architect AI** — 역할, 여정, 기능, 정책, 예외, 운영과 수익구조 설계
3. **System Architect AI** — Frontend, Backend, Database, API, 인증, 권한, 저장소, 인프라 설계
4. **Security & Compliance AI** — 개인정보, 보안, 비밀정보, 의존성, 로그, 감사, 한국 규제 점검
5. **Developer Agents** — 승인된 명세에 따라 UI, 서버, 데이터, API, 인프라 구현
6. **QA & Deploy Agents** — 정적분석, 빌드, 테스트, 보안, 회귀검증, 미리보기, 배포와 복구
7. **Monitoring & Maintenance Agents** — 운영 이상 탐지, 진단, 수정 제안, 안전한 패치와 결과 관측

Developer Agent는 승인 없이 핵심 아키텍처를 임의 변경하지 않는다. Orchestrator는 작업 순서, 승인 상태, 증거와 책임 경계를 관리한다.

---

## 6. 핵심 기술 후보 1 — Architecture Guardian

Architecture Guardian은 변경 전후에 소프트웨어의 전체 구조와 영향을 추적하는 계층이다.

사용자가 “회원가입에 전화번호를 추가해 달라”고 요청하면 다음 연결을 함께 본다.

`Requirement → User Schema → Migration → Validation → Backend API → Frontend → Privacy → Existing User Compatibility → Test → Deployment`

### 핵심 원칙

- 코드 생성 전에 현재 요구사항과 승인된 아키텍처를 확인한다.
- 변경 전에 DB, API, 권한, 개인정보, 보안, 접근성, 비용과 회귀 영향을 분석한다.
- 변경 후 구현 결과를 승인된 아키텍처와 다시 비교한다.
- 자동 테스트, 사람의 승인, 복구 경로와 변경 증거를 함께 보존한다.

---

## 7. 핵심 기술 후보 2 — Project Knowledge Graph

AI는 대화만 기억해서는 안 된다. 프로젝트 자체의 현재 상태와 관계를 이해해야 한다.

Project Knowledge Graph 또는 이에 준하는 구조에는 다음이 포함된다.

- 제품 목적, 사용자, 역할, 요구사항
- 기능, 데이터 모델, API, 화면과 컴포넌트
- 의존성, 외부 연동, 인프라
- Architecture Decision과 Security Policy
- 변경 이력, 테스트, 오류, 해결 방법
- 배포, 운영 사건, 복구와 승인 이력

6개월 뒤 요구사항이 바뀌어도 AI가 프로젝트 전체 맥락과 과거 결정의 이유를 설명할 수 있어야 한다.

---

## 8. 검증이 완료 여부를 결정한다

AI가 “완료했다”고 말하는 것은 완료 증거가 아니다. 모든 변경은 위험도에 맞춰 다음 파이프라인을 통과한다.

`Generate → Static Analysis → Build → Unit Test → Integration Test → Security Check → Architecture Check → Regression Test → Preview → Approval → Deploy`

AI의 자신감이 아니라 빌드, 테스트, 실제 화면, 배포 상태와 운영 결과가 완료 여부를 결정한다.

---

## 9. Software Creation에서 Software Operation으로

제품은 생성에서 끝나지 않는다.

`Detect → Diagnose → Impact Analysis → Fix Proposal → Test → Safe Patch → Monitor`

위험이 낮고 사전에 허용된 변경만 제한적으로 자동화하며, 개인정보·결제·권한·데이터 삭제·핵심 아키텍처 변경에는 사람의 승인을 요구한다. Self-Healing은 무제한 자동수정이 아니라 **위험 기반 승인과 복구가 있는 운영 구조**다.

---

## 10. 한국형 AI Software Creation Platform

한국형은 한국어 UI가 아니라 한국에서 실제 사업을 운영하는 방법을 이해한다는 뜻이다.

- 카카오·네이버 로그인과 국내 본인인증
- 국내 PG, 정산, 영수증과 세금계산서
- 알림톡, SMS와 한국형 주소·휴대전화 흐름
- 사업자·관리자 업무와 고객지원
- 개인정보 동의, 철회, 보유기간과 감사로그
- 돌봄, 교육, 재활, 소상공인, 공공 등 산업별 운영 블루프린트

실제 출시 전에는 최신 법령과 분야별 전문가 검토를 별도 게이트로 통과해야 한다.

---

## 11. 접근성과 장애인 공동설계

장애인을 위한 기능을 나중에 더하는 방식이 아니라 제작 도구와 생성 결과 모두에서 배제를 줄인다.

- 키보드, 스크린리더, 음성, 확대, 스위치와 대체입력 고려
- 쉬운 말과 단계형 의사결정
- 드래그, 색상, 시각적 캔버스만으로 조작하지 않는 흐름
- 생성 결과의 시맨틱 구조, 초점, 이름·역할·상태, 대비와 대체텍스트 검증
- 장애 당사자와 보조기술 사용자의 공동설계 및 실제 과업 테스트

자동검사만으로 접근성 적합을 선언하지 않는다.

---

## 12. Beginner, Builder, Professional Mode

동일한 엔진 위에서 사용자에게 노출하는 복잡성의 수준을 다르게 설계한다.

- **Beginner Mode:** 코드 최소 노출, 자연어와 사업 질문, 자동설계·검증·배포
- **Builder Mode:** 아키텍처, 데이터, API, Workflow와 Agent 설정 확인·편집
- **Professional Mode:** Code, Git, Terminal, CI/CD, 인프라, 모델, Custom Agent와 통제된 override

초보자를 돕되 전문개발자를 배제하지 않는다.

---

## 13. 핵심 기술 후보 3 — Software Engineering Outcome Dataset

장기적인 핵심 자산은 코드의 양보다 소프트웨어가 실제 환경에서 살아남은 결과 데이터다.

`Intent → Requirement → Architecture → Generated Code → Modification → Error → Fix → Deployment → Real-world Usage → Failure → Maintenance → Outcome`

핵심 질문은 “어떤 코드를 생성했는가”가 아니다.

> 어떤 요구에 어떤 아키텍처를 선택했고, 그것이 실제 운영환경에서 어떤 결과를 만들었는가?

개인정보와 고객 기밀을 보호하고 학습·분석 권한을 명확히 분리하는 데이터 거버넌스가 선행되어야 한다.

---

## 14. 데이터 플라이휠과 Architecture Intelligence

`사용자 증가 → 프로젝트 증가 → 아키텍처 사례 증가 → 오류·수정·운영 결과 증가 → Outcome Dataset 개선 → Architecture AI 개선 → 더 안정적인 소프트웨어 → 사용자 성공률 개선`

템플릿을 많이 보유하는 것보다 어떤 구조가 실제로 안정적이었는지 학습하는 것이 목표다. 장기적으로 Architecture Recommendation, Failure Prediction, Cost Optimization, Security Prediction과 Scalability Prediction을 검증한다.

---

## 15. 제품 범주와 경쟁축

개별 제품이 아니라 시장의 기본 문제 정의와 비교한다.

| 기존 AI 코딩·바이브코딩의 대표적 틀 | DAL이 지향하는 틀 |
| --- | --- |
| Developer Productivity | Software Creation Accessibility + Reliability |
| Prompt → Code | Intent → Architecture → Software → Operation → Learning |
| AI Coding Assistant | AI Software Architect & Operator |
| 코드 생성·수정 중심 | 전체 생명주기와 운영 결과 중심 |
| 사용자가 숨은 복잡성을 판단 | 시스템이 복잡성을 흡수하고 증거를 제시 |

Cursor를 비롯한 AI 코드 에디터, 에이전트형 개발도구, 노코드·로우코드 빌더는 경쟁·참고 분석 대상이지만 제품 정체성의 기준점은 아니다.

---

## 16. 현실적인 제품화 단계

### Phase 1 — Architect MVP

Intent AI, Product Architect, System Architect, Architecture Guardian, 제한된 Code Agent, Preview, Git, 자동 Build/Test/Deploy로 작은 실제 서비스 한 종류를 완주한다.

### Phase 2 — Korean Service Layer

로그인, 본인인증, 결제, 메시징, 사업자, 개인정보와 한국형 관리자 Workflow를 표준화한다.

### Phase 3 — Autonomous QA & Maintenance

Test, Security, Monitoring, Maintenance Agent와 위험 기반 승인·복구 체계를 강화한다.

### Phase 4 — Architecture Intelligence

검증된 운영 결과를 바탕으로 아키텍처 추천, 실패·비용·보안·확장성 예측을 연구한다.

### Phase 5 — Software Creation OS

외부 개발자와 기업이 Agent, Component, Integration과 Architecture Pattern을 제공할 수 있는 생태계를 검토한다.

---

## 17. 다음 설계 단계 — 반드시 이 순서로 내려간다

1. **실제 경쟁제품과 현재 바이브코딩 실패지점 분석**
   AI 코드 에디터, 에이전트형 개발도구, 노코드·로우코드, 앱 빌더를 같은 평가축으로 비교한다.
2. **MVP 화면과 사용자 흐름**
   첫 사용자, 첫 산업, 첫 성공 과업, 승인·실패·복구 흐름을 화면 단위로 정의한다.
3. **Agent / Orchestrator / Architecture Guardian 기술 아키텍처**
   상태, 권한, 도구 실행, 지식그래프, 변경 영향, 검증 증거와 승인 경계를 설계한다.
4. **사용 모델과 개발 스택**
   모델 역할 분담, 평가, 비용·지연시간, 데이터 저장, 샌드박스, 배포와 관측 스택을 결정한다.
5. **3개월 개발 로드맵**
   주차별 산출물, 성공지표, 중단 기준, 파일럿 범위와 책임자를 정의한다.
6. **데이터 플라이휠과 사업모델**
   데이터 권리·격리·동의, 과금단위, 산업별 진입, 파트너 생태계와 장기 Moat를 설계한다.

기능 개발은 위 단계에서 MVP 사용자 흐름과 기술 경계를 합의한 뒤 시작한다.

---

## 18. 반드시 지켜야 할 원칙

1. 사용자가 개발을 배워야 해결되는 문제를 만들지 않는다.
2. AI가 생성했다는 이유로 신뢰하지 않고 검증한다.
3. 코드보다 승인된 아키텍처를 먼저 보호한다.
4. 모든 중요한 변경에는 영향분석이 선행된다.
5. 실제 운영결과를 다시 시스템의 지식으로 만든다.
6. 복잡성을 사용자에게 떠넘기지 않되 중요한 위험과 결정은 숨기지 않는다.
7. 한국형은 번역이 아니라 한국의 실제 사업환경을 이해하는 것이다.
8. 접근성은 옵션이 아니라 설계·검증·공동설계의 기본 조건이다.
9. 구현된 기능, 연구 후보, 장기 비전을 공개 문구에서 구분한다.

---

## 19. 한 문장 정의

> 인간의 의도를 실제 운영 가능한 소프트웨어로 변환하고, 그 소프트웨어의 전체 생명주기를 AI가 관리하도록 설계하는 Software Creation Platform.

사용자 메시지로 표현하면 다음과 같다.

> 당신은 무엇을 만들고 싶은지 설명하십시오. 나머지 복잡성은 시스템이 설계하고 검증합니다.

---

## 20. 이 프로젝트의 본질

이 프로젝트는 AI가 프로그램을 대신 작성하는 프로젝트가 아니다. 소프트웨어 엔지니어링이라는 전문 작업을 AI가 수행하고 검증할 수 있도록 재구성하는 프로젝트다.

프로그래밍 언어가 인간의 생각을 컴퓨터가 실행할 명령으로 변환했다면, DAL이 만들려는 시스템은 한 단계 위에서 인간의 목적을 운영 가능한 소프트웨어 시스템으로 변환한다.

최종적으로 사라져야 하는 것은 코드가 아니다. 소프트웨어를 만들기 위해 인간이 감당해야 했던 불필요한 복잡성이다.

---

## 버전 관리

- **v1.0 / 2026-08-17:** 1차 마스터 비전 고정. 특정 제품 중심 비교를 제거하고 기존 바이브코딩의 구조적 한계, 세 가지 독립 기술 후보, 단계별 제품화와 다음 설계 순서를 정의.
- 이 문서의 핵심 철학을 바꾸는 결정은 새 버전에서 변경 이유와 검증 근거를 기록한다.
