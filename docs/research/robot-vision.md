# Robot Vision — Research Spec

**last_reviewed:** 2026-07-21  
**status:** Research / Future Vision  
**canonical:** https://dreamailab.com/research/robot-vision/  
**commercial:** **아니오** (상용 로봇 제품 아님)

## 한 줄 요약

AI Digital Care Log를 로봇의 AI Brain으로 확장하는 **도메인 횡단(cross-domain)** 연구 프로젝트.
Pet AI Digital Care Log와는 별도의 연구입니다.

## Pet AI와의 관계 (필수 구분)

| | Pet AI Digital Care Log | Robot Vision |
|---|---|---|
| 범위 | 반려동물(Animal) 단일 도메인 | 돌봄·교육·건강 등 도메인 횡단 |
| 로봇 위치 | 장기 Future Vision 중 하나 (teaser만) | 연구의 본 주제 |
| 데이터 소스 | 자람이·시니어앤라이프·베지케어 재사용 | 자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어·Pet AI 전체 재사용 |

Pet AI 상세 페이지의 로봇 섹션은 Robot Vision으로 링크되는 짧은 teaser로 축소되어 있습니다.

## 표현 규칙 (필수)

- 상용·출시·가입·운영처럼 쓰지 않음
- 「연구 개발」「장기 비전」「Future Vision」으로 명시
- 서비스 허브 6 Core Domains에 **포함하지 않음** (Research 영역)
- Header 메뉴에 노출하지 않음 (Footer/Research 허브에서만 연결)

## 현재 단계

| Stage | 의미 |
|-------|------|
| Research | 도메인 횡단 연구 과제 정의·가설 검증 |
| Future Vision | 물리적 실행체(로봇) 파트너십 탐색 등 장기 방향 |

## 핵심 아이디어

- 로봇 = 행동한다 (Acts)
- AI Digital Care Log = 관찰·판단·학습한다 (Observes · Judges · Learns) = Robot AI Brain
- 현재 DAL 서비스들이 도메인 데이터·기술을 제공하고, 로봇은 그 판단을 소비(실행)한다
- 같은 Care Log 코어가 돌봄(Care) · 교육(Education) · 건강(Health) 세 축에 공통 적용된다

## 아키텍처

Perception (Vision/Audio/Sensor/App) → Care Log Brain (Context Memory · Reasoning · Policy · Planner) →
Action (Speak/Guide · Remind/Alert · Assist/Fetch* · Report to Human) → Feedback (결과가 다시 Care Log에 기록)

\* 물리적 접촉 행위는 안전 정책 하에서만 장기 검토, 현재 상용화된 물리적 행위는 없음

## 데이터 흐름 & 원칙

사용자 데이터(동의·최소수집·가명/암호화) → AI Digital Care Log(표준화·분석·HITL 검토) → Robot AI Brain(판단·안전 필터) →
로봇 행동 → 결과가 다시 Care Log에 기록(환류 학습)

**핵심 원칙:** 로봇은 데이터를 소유하지 않고, Care Log가 맥락을 소유한다.

## 서비스 → 로봇 역할 매핑

| From (서비스) | 로봇 역할 |
|------|-----|
| 자람이 | 학습 보조 · 행동 코칭 로봇 |
| 시니어앤라이프 | 동행·순찰형 돌봄 로봇 |
| 토탈케어로그 | 건강 측정 보조 · 리포트 전달 로봇 |
| 에듀케어로그 | 튜터링 · 집중 코칭 로봇 |
| 베지케어 | 식사 리마인드 · 환경 안내 로봇 |
| Pet AI Digital Care Log | 펫 케어 로봇 (Research) |
| 글로벌커플케어 | (참고 축) 정착 안내·언어 보조 로봇 — 우선 검토 대상 아님 |

## 도메인 축 (Care / Education / Health)

세 축 모두 동일한 Care Log 코어를 사용하지만, 데이터·판단·행동 기준이 다름:

- **돌봄 Care**: 활력·행동·위치 → 위험도/우선순위 판단 → 알림/접근/기록
- **교육 Education**: 학습반응·정서 → 난이도/개입시점 판단 → 힌트/격려/기록
- **건강 Health**: 임상·생활로그 → 위험/권고 판단 → 안내/전달/환류

## 안전·윤리 원칙

Human-in-the-loop, Fail-safe 우선, 권한 계층(Policy), 데이터 최소 수집, 투명한 환류, 물리적 행위 제한

## 로드맵 (연구 방향, 출시 일정 아님)

1. Human AI Digital Care Log — 여러 서비스에서 운영·검증
2. 서비스 도메인 심화 — 각 서비스 Care Log 데이터 폭·깊이 확장
3. Robot Brain 연구 — Context Memory·Reasoning·Policy·Planner 구조 연구
4. 물리적 실행체(로봇) 파트너십 — 하드웨어 파트너와 실증 (장기)

## 사용 다이어그램

- `/images/research/robot-service-map.svg`
- `/images/research/robot-data-flow.svg`
- `/images/research/robot-domains-care-edu-health.svg`
- `/images/research/robot-architecture.svg`
- `/images/research/robot-scenario-examples.svg`
- `/images/research/one-ai-core-domains.svg` (+ mobile, 참고)

## DAL 페이지

- Research hub: `/research`
- Detail: `/research/robot-vision`
- Pet AI 상세: `/research/pet-ai` (로봇 섹션은 teaser로 축소, 상세는 이 문서로 연결)
- Vision / Technology / Services 허브에 Research 섹션으로만 연결 (Header 메뉴 없음)
