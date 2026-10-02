export const researchUpdateDate = '2026-10-02'

// Product scope follows each project's canonical implementation and release documents.
export const researchApplications = [
  {
    name: 'NoahAI · 전략 검증 여권과 금융 실행',
    description: '시장·계정 데이터, 전략 정의와 버전, PAPER 평가, 설명 가능한 판단, 실행 권한과 결과 기록을 연결합니다. 전략 스튜디오→검증 전략 여권→전략 허브→사용자 재검증을 연결합니다. 원문과 실행 규칙, 전략 버전과 성과 근거를 추적하고 패키지 변조를 검사하며, 제작자의 미확인 결과와 확인된 근거를 분리해 전략 바꿔치기와 검증 수준의 허위 표시를 방지하는 구조입니다. 생활금융에서는 수입·지출·내 계좌 이체를 구분하고 월간 계획과 목표 점검을 어시스턴트 질문으로 연결합니다.',
    status: '공개 기준 v3.9.2.1. v3.9.2.2 보험 이해·보장 비교·상담 연계는 개발 후보이며 제공 완료로 표시하지 않습니다.',
    href: 'https://noahai.net/product-status',
  },
  {
    name: '자람이 · 역할과 생애를 잇는 발달지원',
    description: '가정·센터·병원·학교·지역사회의 기록을 9개 역할의 권한과 동의 아래 연결합니다. 구조화 행동·상황 관찰, 목적별 XAI 리포트, 건강·돌봄여권, 다기관 이용과 인수인계를 통해 기록을 다음 치료·학습·생활지원의 근거로 이어갑니다. JDS는 강수진 박사와 공동 설계한 의미 ID와 개인별 표현 단계의 발달지원 규격입니다.',
    status: '규칙 기반 기록 설명과 생성형 AI 초안을 구분합니다. 의료 진단·치료 효과 자동 판정, 실제 EMR·나이스 연동 완료를 뜻하지 않습니다.',
    href: 'https://jarame.or.kr/tech-docs',
  },
  {
    name: 'Global Couple Care · 신뢰와 파트너 운영',
    description: '국제커플의 정보 탐색과 상담을 파트너 프로필·서비스·문의·매칭·계약·수수료 기록으로 연결합니다. 업체 유형, 업무 권한과 상업 등급을 분리하고 업무 저장과 알림 대기열, 전송 이력·감사 기록을 연결해 담당자가 다음 업무를 이어받을 수 있도록 설계합니다.',
    status: '메신저 자동 알림은 업체별 연결·테스트 수신·활성화가 필요합니다. 실결제·은행 지급 완료와 구분합니다.',
    href: 'https://globalcouplecare.com/ai-digital-care-log',
  },
  {
    name: 'VeggieCare · 생활 기록과 웰니스 운영',
    description: '식사·수면·운동·기분의 케어로그를 규칙 기반 인사이트와 선택적 AI, 레시피·영양 추천으로 연결합니다. 센터 수업·예약·이용권, 파트너 소유권, 상품 승인과 외부 구매 전환·수수료 원장, 동의 기반 ePRO와 연구 데이터 반출 관리까지 제품 설계 범위를 넓혔습니다.',
    status: 'Beta. 실결제·환불·정산 수락은 별도이며 FHIR·웨어러블·연합학습은 향후 아키텍처입니다.',
    href: 'https://veggie.care/technology',
  },
] as const
