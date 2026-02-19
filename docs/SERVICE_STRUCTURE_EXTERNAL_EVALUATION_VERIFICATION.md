# 외부 평가서 타당성 검증 — 서비스 페이지 실제 반영 여부

**검증 일자**: 2025-02-17  
**대상**: 외부 평가 의견 + `app/services/**/page.tsx` 실제 코드

---

## 1. 분석 타당성 — 결론: **타당함**

| 평가 항목 | 평가서 의견 | 실제 반영 여부 | 검증 결과 |
|-----------|-------------|----------------|-----------|
| 우선순위 순서 | healthcare → jarame → senior → educarelog → marriage → services → 기타 | 작업 순서대로 적용 완료 | ✅ 타당 |
| 7. Service Status | 투자자/사용자/공공 기대치·리스크 구분, 신뢰도 상승 | 15개 페이지 모두 7번 섹션에 Status 배지 존재 | ✅ 타당 |
| 8. Ecosystem Connection | DAL “데이터 인프라 위 노드” 강조, B2B/B2G 설득 | 15개 페이지 모두 8번 섹션에 Ecosystem 존재 | ✅ 타당 |
| 9. CTA | 사용자/기관/투자 3종 구분 권장 | 대부분 “서비스 이용 + 문의” 2종, 3종 명시적 구분은 일부만 | ⚠️ 개선 여지 |
| healthcare | Problem 상단, 9단, Live, Ecosystem | Problem 2번으로 상단 이동, Live(green), Ecosystem 8번 | ✅ 일치 |
| jarame | Beta, Ecosystem, 스토리텔링 강화 여지 | Beta(blue), Ecosystem 8번. 스토리텔링은 콘텐츠 단계 이슈 | ✅ 일치 |
| senior | Pilot, 공공 연계 강조 | Pilot 표기. 색상은 green 사용(권장은 Orange) | ⚠️ 색상만 정리 |
| educarelog | Pilot, jarame와 자연 연결 | Pilot(blue), Ecosystem에 자람이 연계 | ⚠️ Pilot 색상 정리 |
| marriage | In Development, 플랫폼·사회 문제 관점 | In Development(amber), Ecosystem 추가 | ✅ 일치 |
| veggie | 9단 재구성, Lifestyle 확장 상징 | 9단 구조 적용, Ecosystem 8번 | ✅ 일치 |
| finance (NoahAI) | Migrated, DAL 리스크 최소화·기술 전이 유지 | Hero 직하단 Migrated 안내, 8번에 “과거 기술 연계” | ✅ 일치 |

---

## 2. 현재 상태 요약 (실제 코드 기준)

### 2.1 Service Status 배지 위치 (개선 적용 완료)

| 페이지 | Hero 직하단 배지 | 7번 섹션 |
|--------|------------------|----------|
| **finance** | Migrated (기존) | — |
| **healthcare** | Live (추가) | Live 유지 |
| **jarame** | Beta (추가) | Beta 유지 |
| **senior** | Pilot (추가) | Pilot 유지 |
| **educarelog** | Pilot (추가) | Pilot 유지 |
| **marriage** | In Development (추가) | In Development 유지 |
| **veggie** | In Development (추가) | In Development 유지 |
| 나머지 서브 | — | 7번만 유지 |

→ 평가서 권장 “Hero 상단 근처 고정” 반영 완료.

### 2.2 Status 색상 (통일 적용 완료)

| 상태 | 적용 색상 | Tailwind |
|------|-----------|----------|
| Live | Green | `bg-green-100 text-green-800` |
| Beta | Blue | `bg-blue-100 text-blue-800` |
| Pilot | Orange | `bg-orange-100 text-orange-800` |
| In Development | Grey | `bg-gray-100 text-gray-800` |
| Migrated | Amber | `bg-amber-200 text-amber-900` (finance) |

### 2.3 Ecosystem 위치

- **모든 서비스**에서 `8. Ecosystem Connection`이 **9. CTA 직전** 동일 위치에 있음.  
→ 평가서 “같은 위치에 있어야 한다” 충족. ✅

### 2.4 CTA 구분 (사용자 / 기관 / 투자·공공)

| 페이지 | 사용자용 | 기관·기업용 | 투자·공공용 |
|--------|----------|-------------|-------------|
| healthcare | 토탈케어로그 체험하기 | 사업·연구 제휴 문의 | — |
| services (인덱스) | 서비스 체험 | 파트너십 문의 | 투자 문의 |
| 기타 대부분 | 서비스 이용 / 문의 | 문의 (혼합) | — |

→ **개선**: CTA 영역에 “사용자 / 기관 / 투자·공공” 라벨 또는 3종 버튼 구분 권장.

---

## 3. 개선 적용 현황 (평가서 반영)

| # | 항목 | 적용 여부 |
|---|------|-----------|
| 1 | **Status 색상 통일** | ✅ 적용 — Live=Green, Beta=Blue, Pilot=Orange, In Dev=Grey |
| 2 | **Ecosystem 위치** | ✅ 전 페이지 8번 동일 유지 |
| 3 | **Status Hero 근처** | ✅ healthcare, jarame, senior, educarelog, marriage, veggie Hero 직하단 배지 추가 |
| 4 | **CTA 3종 구분** | ⏳ 권장만 — 사용자/기관/투자·공공 라벨 구분은 콘텐츠 단계에서 적용 |
| 5 | **IR One Page** | ⏳ 별도 “Architecture Map” 페이지 기획 권장 |

---

## 4. 최종 판단

- **평가서 내용은 전반적으로 타당**하며, 실제 서비스·하위 페이지 구조와 대부분 일치함.
- **우선 적용 권장**: (1) Status 색상 통일, (2) Hero 직하단 Status 배지 추가, (3) CTA 3종 구분.
- **IR One Page**는 신규 페이지/섹션 기획으로 진행하는 것이 적절함.
