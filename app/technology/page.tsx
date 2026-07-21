import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageClosingSection from '../../components/PageClosingSection'
import Link from 'next/link'
import { COMPANY_HERO_LINE } from '../../lib/company-copy'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'

const technologyCanonical = 'https://dreamailab.com/technology'
const technologyDescription =
  'AI디지털케어로그: 표준 기록 수집→AI 분석→실행→환류 파이프라인. 발달·돌봄·의료·교육·가족·웰니스 등 사람 중심 영역에 적용하는 DAL의 핵심 기술입니다.'

export const metadata: Metadata = {
  title: '핵심 기술 - AI디지털케어로그 플랫폼 구조 | 드림에이아이랩',
  description: technologyDescription,
  alternates: { canonical: technologyCanonical },
  openGraph: {
    title: '핵심 기술 - AI디지털케어로그 플랫폼 구조 | 드림에이아이랩',
    description: technologyDescription,
    url: technologyCanonical,
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 기술' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '핵심 기술 - AI디지털케어로그 플랫폼 구조 | 드림에이아이랩',
    description: technologyDescription,
    images: ['/og-image.png'],
  },
}

const technologyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: '핵심 기술 - AI디지털케어로그',
  description: technologyDescription,
  url: technologyCanonical,
  inLanguage: 'ko-KR',
  isPartOf: { '@type': 'WebSite', name: '드림에이아이랩', url: 'https://dreamailab.com' },
  about: {
    '@type': 'TechArticle',
    headline: 'AI디지털케어로그',
    description: technologyDescription,
    inLanguage: 'ko-KR',
  },
}

export default function Technology() {
  const problems: {
    icon: MarketingIconName
    title: string
    desc: string
    impact: string
  }[] = [
    {
      icon: 'chart',
      title: '데이터 분산·비표준화',
      desc: '가정·현장·기관·앱·디바이스 등 출처마다 형식이 달라 연결과 통합 분석이 어렵습니다.',
      impact: '조직/도메인 전체 관점의 분석과 재현성이 떨어집니다',
    },
    {
      icon: 'link',
      title: '연속성 없는 기록',
      desc: '사람·사건·기간을 잇는 타임라인/에피소드 모델이 없어 역할·조직 간 인수인계에서 맥락이 끊깁니다.',
      impact: '적시 개입과 책임/성과 추적이 어려워집니다',
    },
    {
      icon: 'brain',
      title: '개인화의 한계',
      desc: '일괄 지침·커리큘럼·워크플로우로는 개인/상황별 반응을 충분히 반영하기 어렵습니다.',
      impact: '성과 편차가 커지고, 불필요 개입·부작용·비효율이 늘어납니다',
    },
    {
      icon: 'trend',
      title: '현장 검증 데이터 부족',
      desc: '소표본·단기 파일럿·실험실 중심 데이터에 의존하여 장기·대규모의 실제 효과를 반영하기 어렵습니다.',
      impact: '의사결정의 편향과 불확실성이 커지고, 혁신 속도가 느려집니다',
    },
  ]

  const solutions: {
    icon: MarketingIconName
    title: string
    desc: string
    benefit: string
  }[] = [
    {
      icon: 'blocks',
      title: '표준 스키마 & 데이터 통합',
      desc: '발생 위치와 형태가 제각각인 의료·교육·돌봄 데이터를 공통 스키마로 구조화하여 연결합니다.',
      benefit: '데이터 호환성 강화 및 장기적 추적 가능',
    },
    {
      icon: 'puzzle',
      title: '멀티모달 AI 분석',
      desc: '텍스트·시계열·영상·센서 데이터를 결합해 개인 상태와 집단 패턴을 동시에 분석합니다.',
      benefit: '정확한 개인 맞춤 해석과 새로운 집단적 발견',
    },
    {
      icon: 'bolt',
      title: '권고·매칭·실행 엔진',
      desc: 'AI 분석 결과를 바탕으로 치료·교육·생활 관리 실행안을 제시하고 전문가와 기관을 매칭합니다.',
      benefit: '실제 실행으로 이어지는 AI 기반 맞춤 지원',
    },
  ]

  const architecture = [
    { n: '01', t: '수집·정규화', d: '동의·권한을 바탕으로 다양한 출처 데이터를 도메인 표준 스키마(FHIR/Ed‑Fi/xAPI/Open mHealth 등)로 정규화·가명처리' },
    { n: '02', t: 'AI 분석·추론', d: '멀티모달 AI로 상태/리스크 추정, 상관·원인 탐색, 권고 후보 생성(추천·매칭·우선순위)' },
    { n: '03', t: '실행·오케스트레이션', d: '전문가 검토(HITL) 후 권고·매칭·알림 실행, 워크플로우/캘린더/메시징·파트너 API 연동' },
    { n: '04', t: '피드백·학습', d: '실행 결과·성과지표 재기록 → 개인화 업데이트·모델 재학습(연합/온라인) → A/B·모니터링으로 지속 개선' },
  ]

  const layers = [
    {
      title: '데이터 수집·연동 레이어',
      desc: '멀티채널 입력을 수용하고 표준 스키마로 정규화하여 안정적으로 연동합니다.',
      points: [
        '텍스트·영상·음성·센서·웨어러블 멀티채널 입력',
        '표준 스키마(FHIR/HL7/Ed‑Fi/xAPI 등) 변환·검증',
        '읽기/쓰기 API·웹훅·이벤트 기반 동기화(near‑real‑time)'
      ],
      innovation: '도메인 표준 준수와 상호운용성 강화'
    },
    {
      title: '보안·프라이버시 레이어',
      desc: '규제 준수와 개인정보 보호를 전제로 데이터를 활용합니다.',
      points: [
        '동의 관리(Consent)·역할 기반 권한(RBAC)·감사로그',
        '가명처리·비식별화·암호화·키관리',
        'GDPR·개인정보보호법 등 규제 준수'
      ],
      innovation: '보호와 활용의 균형 설계'
    },
    {
      title: '케어로그 엔진(데이터 분석 코어)',
      desc: '타임라인/에피소드 모델로 맥락을 보존하고 상관·경보·권고를 생성합니다.',
      points: [
        '타임라인·에피소드 기반 데이터 모델',
        '약물·행동·부작용 등 상관분석',
        '경보·권고 생성(룰/ML 혼합)'
      ],
      innovation: '장기 추적·재현 가능한 분석'
    },
    {
      title: 'AI 모델 레이어',
      desc: '멀티모달 AI로 해석·예측·추천을 수행하고 개인화합니다.',
      points: [
        '초거대 AI 엔진(LLM·Vision Transformer·멀티모달)',
        '세부 엔진: NLP·시계열·CV·강화학습',
        '개인화 엔진: 도메인 파인튜닝·Federated Learning·XAI'
      ],
      innovation: '범용 모델 + 도메인 특화 + 개인화 결합'
    },
    {
      title: '실행·협업 레이어',
      desc: '맞춤 계획을 실행 가능한 태스크로 전개하고 협업을 오케스트레이션합니다.',
      points: [
        '맞춤 계획·콘텐츠 생성·개입 옵션 제시',
        '전문가 검토·역할별 승인 워크플로우',
        '대시보드·알림·오프라인 동기화·파트너 API 연동'
      ],
      innovation: '분석→실행의 마지막 1m 연결'
    },
    {
      title: '피드백·지속 개선 레이어',
      desc: '성과를 계량화하고 개인화·모델을 지속 개선합니다.',
      points: [
        '모니터링·성과지표 자동 집계',
        '실행 결과 재기록 → 모델 재학습(연합/온라인)',
        'A/B·모니터링 기반 고도화'
      ],
      innovation: '데이터가 쌓일수록 똑똑해지는 선순환'
    }
  ]

  const clinicalInnovations: {
    icon: MarketingIconName
    title: string
    desc: string
    advantage: string
    impact: string
  }[] = [
    {
      icon: 'dna',
      title: '치매 예방·관리 혁신',
      desc: '일상 행동 패턴과 활력징후를 AI로 분석하여 치매 조기 신호 탐지를 지원하도록 설계되었습니다.',
      advantage: '기존: 단발성 검사 → 우리: 지속 모니터링',
      impact: '조기 신호 탐지 가능성 향상, 개입 시기 최적화'
    },
    {
      icon: 'pill',
      title: '항암 치료 개인화',
      desc: '약물 반응·부작용을 지속 추적하여 개인별 용량·조합 제안을 지원합니다(의료진 검토 전제).',
      advantage: '기존: 표준 프로토콜 → 우리: 적응형 조정(near‑real‑time)',
      impact: '효과 향상, 부작용 저감 (프로토콜·개인·환경에 따라 상이)'
    },
    {
      icon: 'sprout',
      title: '발달장애 치료 표준화',
      desc: '행동·정서·교육 데이터를 통합 분석하여 발달 단계별 맞춤 개입을 지원합니다.',
      advantage: '기존: 주관적 평가 → 우리: 객관적 데이터 기반',
      impact: '맞춤 계획 수립, 가족·기관 만족도 상승'
    },
    {
      icon: 'trend',
      title: '비용·수집 효율',
      desc: '연구 설계에 따라 전통적 대규모 임상 대비 비용·기간을 줄일 수 있는 방향을 지향합니다. 보호자·이용자 자가 기록 참여로 수집 부담을 낮추는 설계를 병행할 수 있습니다.',
      advantage: '기존: 대규모 임상시험 중심 → 우리: 현장·자가 기록을 포함한 RWE 지향 설계',
      impact: '비용 대비 확보 가능한 근거 범위 확대 가능성(비교 설계·규모에 따름)'
    },
    {
      icon: 'hospital',
      title: 'EMR 연동 & 시스템 통합',
      desc: '병원 시스템과의 연동(FHIR 등 표준 지향)을 통해 임상·생활 데이터 통합 분석을 목표로 합니다.',
      advantage: '기존: 분리된 데이터 → 우리: 통합 분석 플랫폼 지향',
      impact: '맥락 보강 및 연구·운영 품질 향상 가능성(도입 범위에 따름)'
    }
  ]

  const applications: {
    name: string
    desc: string
    bullets: string[]
    icon: MarketingIconName
    href: string
  }[] = [
    {
      name: '자람이 (발달장애)',
      desc: '센터 행정 SaaS + 케어로그로 발달장애 케어 표준화',
      bullets: ['행동·정서·교육·약물 데이터 추적', '발달 추이 리포트·경고', '보호자·센터·병원 연결'],
      icon: 'sprout',
      href: '/services/jarame'
    },
    {
      name: '시니어앤라이프',
      desc: '요양·주간보호·재가 표준 행정 SaaS + 케어로그',
      bullets: ['복약·활력징후 분석·치매 리스크', '가족 리포트 & 알림', '기관 대시보드'],
      icon: 'user',
      href: '/services/senior'
    }
  ]

  const crossDomain: { icon: MarketingIconName; title: string; desc: string }[] = [
    {
      icon: 'bolt',
      title: '모빌리티 · 운전 습관',
      desc: '운전 로그(급가속/급제동/도로 유형 등) 표준화 → 개인 맞춤 보조·보험 연계·리스크 가이드',
    },
    {
      icon: 'blocks',
      title: '기업 HR · 직무 관리',
      desc: '업무 패턴·피로도·성과 로그 → 번아웃 조기 신호 탐지, 생산성 최적화 전략 제안',
    },
    {
      icon: 'trend',
      title: '스포츠 · 피트니스',
      desc: '훈련·경기 기록·부상 이력 → 개인 훈련 계획 최적화, 집단 데이터로 트레이닝 베스트 프랙티스 도출',
    },
    {
      icon: 'brain',
      title: '정신건강 · 웰빙',
      desc: '감정 일기·수면·활동 로그 → 스트레스 원인 분석, 우울/불안 조기 신호 파악 및 맞춤 가이드',
    }
  ]

  const healthcareVariants: {
    name: string
    desc: string
    bullets: string[]
    icon: MarketingIconName
    href: string
  }[] = [
    {
      name: '토탈케어로그 · 일반의학',
      desc: 'AI 주치의 + 케어로그로 개인 맞춤 의료와 병원 매칭을 지원',
      bullets: ['진료요약/검사/복약·상호작용 기록', '생활요법·자가관리 권고', '병원 매칭 & 주치의 리포트'],
      icon: 'stethoscope',
      href: '/services/healthcare?type=general'
    },
    {
      name: '토탈케어로그 · 한방의학',
      desc: '한의 진단·처방·경과를 표준 기록으로 통합, 체질·생활양식 기반 권고',
      bullets: ['침/한약/물리요법 효과 추적', '증상·맥진·설진 기록 구조화', '체질·환경 맥락 기반 권고'],
      icon: 'leaf',
      href: '/services/healthcare?type=oriental'
    }
  ]

  const kpis = [
    { title: '데이터 표준 확보율', value: '도메인별 커버리지 %', note: '표준 필드 적용 비율' },
    { title: '안전성 지표', value: '알람 정확도(예: PPV)', note: '환자/사용자 안전 관련' },
    { title: '전환율', value: '추천→상담→등록', note: '서비스 매칭 성과' },
    { title: '임상·제약 협력', value: 'IRB/PoC 진행 수', note: '연구/파트너십' },
    { title: '비용 절감률', value: '시나리오별 산출', note: '비교 설계·도메인에 따라 상이' },
    { title: '데이터 수집 속도', value: '목표 대비 개선', note: '실시간·연속 기록 vs 배치 수집' },
    { title: '표본 규모', value: '현장 중심 모집 지향', note: '연구 설계·윤리 심의에 따름' },
    { title: 'EMR 연동률', value: '병원·시스템별 상이', note: 'FHIR 등 표준 기반 연동 지향' },
  ]

  const dataFlowSteps: {
    step: string
    title: string
    desc: string
    details: string[]
    icon: MarketingIconName
  }[] = [
    {
      step: '0',
      title: '동의·계정·권한 (Consent & RBAC)',
      desc: '사용자 동의와 역할별 권한을 설정하고, 모든 활동을 감사 이력으로 기록합니다.',
      details: ['사용자 동의', '역할 권한(RBAC)', '감사 추적(로그)'],
      icon: 'lock',
    },
    {
      step: '1',
      title: '멀티채널 데이터 수집',
      desc: '사용자·담당자·전문가·관리자가 일상·지원·학습·의료 정보를 텍스트/사진/영상/음성으로 입력합니다.',
      details: ['일상 기록', '치료 일지', '교육 평가', '의료 기록', '사진·영상·오디오', '웨어러블/센서'],
      icon: 'mobile',
    },
    {
      step: '2',
      title: '데이터 검증 및 표준화',
      desc: '품질 검증과 표준 형식 변환을 수행하고, 민감 정보는 안전하게 처리합니다.',
      details: ['데이터 검증', '형식 표준화', '중복 제거', 'FHIR 매핑', '민감정보 마스킹'],
      icon: 'search',
    },
    {
      step: '3',
      title: '멀티모달 전처리·특징화',
      desc: '텍스트·시계열·이미지/영상 데이터를 AI가 이해할 수 있는 특징으로 변환하고, 기록 간 맥락을 연결합니다.',
      details: ['NLP 임베딩', '시계열 특징', '이미지/영상 특징', '맥락 연결'],
      icon: 'cog',
    },
    {
      step: '4',
      title: 'AI 분석·추론',
      desc: 'NLP·시계열·컴퓨터비전·강화학습을 결합해 패턴과 위험 신호를 탐지하고, 결과를 예측합니다.',
      details: [
        '패턴 탐지',
        '위험 신호',
        '상관 분석',
        '예측 모델',
        'Large‑Scale AI Engines',
        '도메인 특화 파인튜닝',
        'Federated Learning(선택)',
      ],
      icon: 'robot',
    },
    {
      step: '5',
      title: '맞춤 계획·콘텐츠 생성',
      desc: '개인 맞춤 케어 계획과 치료 개입 옵션을 생성하고 설명 가능한 근거를 제공합니다.',
      details: ['케어 계획', '치료/교육 콘텐츠', '개입 옵션', 'XAI 근거'],
      icon: 'document',
    },
    {
      step: '6',
      title: '전문가 검토·역할별 승인',
      desc: '전문가가 검토·수정·확정하고, 관련자와 공유하여 협업합니다.',
      details: ['전문가 검토', '역할별 태스크', '관련자 공유/코멘트'],
      icon: 'handshake',
    },
    {
      step: '7',
      title: '전달·실행·알림',
      desc: '역할별 대시보드와 알림으로 실행을 지원하며, 현장 환경을 고려해 오프라인 입력도 동기화합니다.',
      details: ['맞춤 대시보드', '일정/경고 알림', '오프라인 동기화'],
      icon: 'upload',
    },
    {
      step: '8',
      title: '모니터링·피드백·지속 개선',
      desc: '이행도와 성과지표를 자동 집계하고, 피드백과 데이터를 반영해 개인화·모델을 지속 개선합니다.',
      details: ['이행도/성과지표', '개인화 업데이트', '모델 재학습'],
      icon: 'chart',
    },
  ]

  const aiEngineCards: {
    title: string
    subtitle: string
    desc: string
    features: string[]
    icon: MarketingIconName
  }[] = [
    {
      title: '자연어 처리 (NLP)',
      subtitle: 'Natural Language Processing',
      desc: 'AI 기반 초거대 언어모델을 활용하여 사용자의 일상 기록과 상담 요청을 정확하게 이해하고 분석합니다.',
      features: [
        '감정 분석: 일지 텍스트에서 정서 상태 자동 탐지',
        '의미 추출/요약: 복잡한 상황 설명에서 핵심 정보 정리',
        '맞춤형 상담 응답: 개인 이력·맥락 기반 상담 및 가이드 제공',
      ],
      icon: 'chat',
    },
    {
      title: '시계열 데이터 분석',
      subtitle: 'Time-Series Analysis',
      desc: 'LSTM · Transformer 기반 모델을 적용하여 시간의 흐름에 따른 행동 패턴과 치료 효과 변화를 정밀하게 분석합니다.',
      features: [
        '행동 패턴 탐지: 반복되는 이상행동 및 긍정행동 자동 식별',
        '장기 트렌드 분석: 상태 변화, 약물 효과, 진행도 변화 추적',
        '미래 예측: 행동·상태 패턴의 향후 변화를 AI가 시뮬레이션',
      ],
      icon: 'trend',
    },
    {
      title: '컴퓨터 비전 (CV)',
      subtitle: 'Computer Vision',
      desc: 'CNN · Vision Transformer 기반 이미지·비디오 분석을 통해 사용자의 행동과 감정 상태를 시각적으로 정확하게 파악합니다.',
      features: [
        '행동 인식: 영상에서 특정 행동 자동 검출',
        '표정 감정 분석: 얼굴 인식으로 정서 상태 분석',
        '활동량 측정: 움직임·신체 데이터를 통한 활동 수준 평가',
      ],
      icon: 'eye',
    },
    {
      title: '강화학습 (RL)',
      subtitle: 'Reinforcement Learning',
      desc: 'Q-Learning · Policy Gradient · Actor-Critic을 활용하여 개인별 최적의 개입 전략을 지속적으로 학습하고 개선합니다.',
      features: [
        '최적 개입 전략 학습: 개인별 가장 효과적인 지원 방법 탐색',
        '적응형 조정: 환경 변화에 따른 지원 방법 자동 최적화',
        '성과 예측: 특정 개입의 성공 가능성을 미리 계산',
      ],
      icon: 'target',
    },
    {
      title: '초거대 AI 엔진',
      subtitle: 'Large-Scale AI Engines',
      desc: 'AI·BERT 계열 LLM, Vision Transformer, Multi-Modal AI를 통합하여 도메인·협력기관 기반의 대규모 데이터셋을 학습하고 범용성과 정밀성을 확보합니다.',
      features: [
        '통합 AI 모델: 텍스트, 이미지, 비디오를 동시에 처리하는 멀티모달 AI 시스템',
        '대규모 데이터 학습: 도메인·협력기관 기반의 대규모 데이터셋을 통한 범용적 패턴 인식',
        '도메인 특화 파인튜닝: 현장 데이터를 기반으로 맞춤 학습하여 도메인 전용 전문성 강화',
        '고정밀 분석: 다양한 AI 모델의 장점을 결합해 더욱 정밀한 해석 및 예측 지원',
      ],
      icon: 'rocket',
    },
    {
      title: '고급 개인화 엔진',
      subtitle: 'Advanced Personalization',
      desc: '고급 AI 기술을 통해 치료의 새로운 패러다임을 제시하고 개인별 맞춤형 솔루션을 제공합니다.',
      features: [
        '멀티모달 학습: 텍스트·영상·음성·센서 데이터를 통합 이해',
        '연합학습(옵션): 병원·학교·가정 데이터를 분산 학습, 개인정보 보호 + 집단지능',
        '개인화 AI: 개인 특성을 고려한 맞춤형 리포트 및 개입 제안',
        '설명 가능한 AI(XAI): 사용자·전문가가 쉽게 이해할 수 있는 분석 근거 제공',
      ],
      icon: 'brain',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(technologyJsonLd) }}
      />
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-24 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
            DAL 핵심 기술
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI디지털케어로그</h1>
          <p className="text-xl max-w-4xl mx-auto mb-6">
            표준 기록 → AI 분석 → 실행 연결 → 환류(학습). 하나의 데이터 파이프라인으로 서비스가 연결됩니다. {COMPANY_HERO_LINE}입니다.
          </p>
          <div className="bg-white/10 rounded-2xl p-6 max-w-3xl mx-auto mb-8">
            <p className="text-lg font-semibold">
              &quot;분산·비표준 데이터를 표준 기록으로 정렬하고, AI가 분석해 개인 맞춤 실행으로 잇는 통합 인프라&quot;
            </p>
          </div>
          <Link
            href="/technology/platform"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-primary-700 font-semibold hover:bg-gray-100 transition-colors"
          >
            플랫폼 기술 개요 (요약)
          </Link>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">서비스 연결 구조</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">모든 도메인은 하나의 AI디지털케어로그 플랫폼 위에 연결됩니다.</p>
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="bg-primary-600 text-white rounded-xl px-8 py-4 font-bold text-lg">DAL Platform</div>
            <div className="my-2 text-gray-500">↓</div>
            <div className="bg-primary-100 text-primary-900 rounded-xl px-8 py-3 font-semibold">AI디지털케어로그</div>
            <div className="my-2 text-gray-500">↓</div>
            <div className="text-sm text-gray-600 font-medium">도메인 확장</div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {(
              [
                { name: '발달장애', icon: 'sprout', href: '/services/jarame' },
                { name: '시니어', icon: 'user', href: '/services/senior' },
                { name: '의료', icon: 'hospital', href: '/services/healthcare' },
                { name: '교육', icon: 'graduation', href: '/services/educarelog' },
                { name: '글로벌커플케어', icon: 'heart', href: '/services/marriage' },
                { name: '라이프스타일', icon: 'leaf', href: '/services/veggie' },
                { name: '노아AI 이전안내', icon: 'trend', href: '/services/finance' },
              ] satisfies { name: string; icon: MarketingIconName; href: string }[]
            ).map((d, i) => (
              <Link
                key={i}
                href={d.href}
                className="inline-flex items-center gap-2 bg-white rounded-lg px-4 py-2 shadow-sm hover:shadow-md border border-gray-100 transition-shadow"
              >
                <MarketingIcon name={d.icon} className="h-5 w-5 shrink-0 text-primary-600" />
                <span className="font-medium text-gray-700">{d.name}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-violet-200 bg-violet-50 px-5 py-4 text-center">
            <p className="text-sm text-violet-900 mb-2">
              <span className="font-semibold">Research · Future Vision</span> — Pet AI Digital Care Log
              (동물 도메인 확장 연구, 상용 서비스 아님)
            </p>
            <Link href="/research/pet-ai" className="text-sm font-semibold text-violet-700 hover:underline">
              연구 상세 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* AI디지털케어로그란 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI+디지털케어로그란?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              DAL의 <strong>AI디지털케어로그</strong>는 행동·학습·치료·반응·생활습관·임상 데이터 등 
              <strong>다양한 시계열 기록</strong>을 표준화된 디지털 로그로 수집·연결하고,
              이를 <strong>AI</strong>(머신러닝·강화학습·집단지능 분석)으로 해석하여 
              <strong>개인별 맞춤형 서비스</strong>를 제공합니다. 또한 축적된 데이터를 통해 지금까지 고착화된 
              기존 기준의 한계를 넘어, <strong>새로운 기준과 발견</strong>을 가능하게 하는 지능형 기록·분석·케어 
              기술로서 의료·돌봄·교육·웰니스 등 다양한 분야에 적용할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <div className="mb-4 flex justify-center text-primary-600">
                  <MarketingIcon name={solution.icon} className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{solution.desc}</p>
                <div className="bg-primary-50 border-l-4 border-primary-400 p-3 rounded-r">
                  <p className="text-sm text-primary-700 font-medium">{solution.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 왜 디지털케어로그인가 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">왜 AI디지털케어로그인가?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  디지털케어로그는 의료·돌봄·교육을 넘어, 사람이 기록하거나 발생시키는 모든 행위를 데이터화하여 AI로 최적화할 수 있는 <strong>범용 플랫폼</strong>입니다. 즉, 특정 산업에 국한되지 않고 인간 활동 전반에 적용 가능한 <strong>확장성</strong>을 지닙니다. 이러한 확장성을 바탕으로, 현장 시스템 전반의 한계를 <strong>데이터 표준화와 AI</strong>로 단계적으로 개선합니다.
</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="mb-4 flex justify-center text-primary-600">
                    <MarketingIcon name={problem.icon} className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{problem.desc}</p>
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
                    <p className="text-sm text-red-700 font-medium">{problem.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 아키텍처 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">아키텍처</h2>
            <p className="text-xl text-gray-600">4단계 선순환 구조로 지속적 가치 창출</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {architecture.map((step, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 shadow-lg border border-primary-100">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.n}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.t}</h3>
                <p className="text-gray-600 text-sm">{step.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700">
                <strong className="text-primary-600">핵심 혁신:</strong> 각 단계가 유기적으로 연결되어 데이터가 축적될수록 개인화가 업데이트되고, 
                연합/온라인 학습으로 모델이 정교해지며, 더 정확한 개입과 운영 최적화가 이루어집니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 플랫폼 레이어 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">플랫폼 6개 레이어</h2>
            <p className="text-xl text-gray-600">레이어와 서브 모듈 체계(중복 제거·일관성 강화)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {layers.map((module, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{module.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{module.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {module.points.map((point, idx) => (
                      <li key={idx} className="text-gray-700 flex items-start gap-2 text-sm">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-primary-50 border-l-4 border-primary-400 p-3 rounded-r">
                    <p className="text-sm text-primary-700 font-medium">{module.innovation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 디지털케어로그 기술 상세 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">디지털케어로그 기술 상세</h2>
            <p className="text-xl text-gray-600">AI디지털케어로그의 핵심 기술이 어떻게 작동하는지 구체적으로 설명합니다</p>
          </div>

          {/* 데이터 흐름 및 처리 과정 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-2">
              <MarketingIcon name="refresh" className="h-7 w-7 text-primary-600 shrink-0" aria-hidden />
              데이터 흐름 및 처리 과정
            </h3>
            <div className="relative">
              {/* 연결선 */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
              
              <div className="space-y-6">
                {dataFlowSteps.map((item, index) => (
                  <div key={index} className="relative">
                    {/* 단계별 연결선 */}
                    {index < 8 && (
                      <div className="absolute left-6 top-16 w-0.5 h-6 bg-gradient-to-b from-primary-400 to-secondary-400"></div>
                    )}
                    
                    <div className="flex items-start gap-6">
                      {/* 단계 번호와 아이콘 */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                          <span className="text-white font-bold text-lg">{item.step}</span>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-primary-600">
                          <MarketingIcon name={item.icon} className="h-6 w-6" aria-hidden />
                        </div>
                      </div>
                      
                      {/* 내용 */}
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                        <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.details.map((detail, idx) => (
                            <span key={idx} className="px-3 py-1 bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700 text-sm rounded-full border border-primary-200">
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 하단 화살표 */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full">
                  <MarketingIcon name="refresh" className="h-5 w-5 shrink-0 text-white" aria-hidden />
                  <span className="font-semibold">선순환 구조로 지속적 개선</span>
                  <MarketingIcon name="refresh" className="h-5 w-5 shrink-0 text-white" aria-hidden />
                </div>
              </div>
            </div>
          </div>

          {/* AI 기술 상세 설명 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">세부 엔진 (Layer 4: AI 모델 레이어)</h3>
            <p className="text-sm text-gray-500 mb-6 text-center">NLP·시계열·CV·강화학습·대규모 멀티모달·개인화 엔진 등 Layer 4의 서브 모듈 상세</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {aiEngineCards.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="p-6">
                    {/* 헤더 */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 text-primary-600">
                        <MarketingIcon name={tech.icon} className="h-6 w-6" aria-hidden />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-1">{tech.title}</h4>
                        <p className="text-sm text-gray-500 font-medium">{tech.subtitle}</p>
                      </div>
                    </div>
                    
                    {/* 설명 */}
                    <p className="text-gray-700 mb-4 leading-relaxed text-sm">{tech.desc}</p>
                    
                    {/* 기능 목록 */}
                    <div className="space-y-2">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* 하단 요약 */}
            <div className="mt-10 text-center">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-3">통합 AI 시스템</h4>
                <p className="text-gray-700 max-w-3xl mx-auto">
                  위의 6가지 AI 기술이 유기적으로 결합되어 멀티모달 데이터를 통합 분석하고, 
                  개인별 맞춤형 계획을 생성하는 강력한 AI디지털케어로그 시스템을 구축합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 임상·신약 데이터 혁신 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">임상·신약 데이터 혁신</h2>
            <p className="text-xl text-gray-600">
              Real-World Evidence(RWE)를 활용한 연구·운영 개선 방향을 제시합니다.
            </p>
          </div>
          <div className="space-y-6">
            {clinicalInnovations.map((innovation, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 rounded-lg bg-primary-50 p-2 text-primary-600">
                      <MarketingIcon name={innovation.icon} className="h-8 w-8" aria-hidden />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{innovation.title}</h3>
                      <p className="text-gray-700 mb-4 text-sm">{innovation.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">기존 vs 우리</h4>
                      <p className="text-sm text-gray-600">{innovation.advantage}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">기대 효과</h4>
                      <p className="text-sm text-gray-600">{innovation.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 응용 사례 요약 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">응용 사례 요약</h2>
            <p className="text-xl text-gray-600">플래그십(임상 혁신) 외 확장형 도메인 사례</p>
          </div>
          {/* 1) 자람이 / 시니어앤라이프 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6">
                  <div className="mb-4 text-primary-600">
                    <MarketingIcon name={app.icon} className="h-10 w-10" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{app.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {app.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-primary-600 mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Link href={app.href} className="text-primary-600 font-semibold hover:underline text-sm">
                      자세히 보기 →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2) 토탈케어로그 (2종) */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">토탈케어로그 (2종)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {healthcareVariants.map((app, index) => (
                <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
                  <div className="p-8">
                    <div className="mb-6 flex justify-center text-primary-600">
                      <MarketingIcon name={app.icon} className="h-14 w-14" aria-hidden />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{app.name}</h3>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed text-center">{app.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {app.bullets.map((bullet, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start gap-3">
                          <span className="text-primary-600 mt-1 text-lg">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-center">
                      <Link href={app.href} className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-base">
                        자세히 보기
                        <span className="text-lg">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Domain Expansion */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">의료·돌봄·교육을 넘어</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              AI디지털케어로그의 본질은 “사람의 행위·경험·상태를 기록 → AI 분석 → 맞춤형 최적화 → 집단지능 학습”입니다.
              따라서 특정 산업에 국한되지 않고, 다양한 분야에 범용적으로 적용할 수 있습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crossDomain.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:scale-[1.02] group">
                <div className="mb-4 flex justify-center text-primary-600 transition-transform duration-200 group-hover:scale-110">
                  <MarketingIcon name={item.icon} className="h-10 w-10" aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed text-center">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xs text-gray-500">
              ※ 예시는 확장 가능성을 보여주기 위한 것이며, 적용 시 도메인 규제·안전 기준을 준수합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Pet AI Research · Technology Roadmap */}
      <section className="py-16 lg:py-24 bg-violet-50/60 border-t border-violet-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-800 text-xs font-semibold mb-4">
              Research · Technology Development · Future Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pet AI Digital Care Log
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              반려동물의 삶 전체(행동 · 감정 · 환경 · 생활 추천)를 AI가 이해하는 Life Companion
              Intelligence 연구입니다. 병원은 필요할 때만 연결되는 선택지 중 하나이며, 의료 플랫폼이
              아닙니다. 자람이·시니어·베지케어의 공통 AI Core를 재사용합니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-violet-100 shadow-sm mb-8 max-w-5xl mx-auto">
            <img
              src="/images/research/pet-life-companion.svg"
              alt="Pet AI Life Companion Intelligence"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="max-w-3xl mx-auto rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900 text-center mb-8">
            상용 서비스·출시 예정이 아닙니다. 기술 개발 초기 · 연구 개발 · 장기 비전입니다.
          </div>
          <div className="text-center">
            <Link
              href="/research/pet-ai"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-700 text-white font-semibold hover:bg-violet-800 transition-colors"
            >
              Pet AI 연구 상세
            </Link>
          </div>
        </div>
      </section>

      {/* Robot Vision Research */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-200 text-xs font-semibold mb-4 border border-amber-400/30">
              Research · Future Vision
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Robot Vision</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              로봇은 행동하고, AI Digital Care Log는 관찰·판단·학습합니다. 자람이·시니어·토탈케어·에듀케어·베지케어의
              데이터가 돌봄·교육·건강 로봇의 AI Brain으로 연결되는 별도 Research입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-sm mb-8 max-w-5xl mx-auto">
            <img
              src="/images/research/robot-data-flow.svg"
              alt="사용자 데이터 - Care Log - Robot Brain 데이터 흐름"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="text-center">
            <Link
              href="/research/robot-vision"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 text-slate-900 font-semibold hover:bg-amber-400 transition-colors"
            >
              Robot Vision 연구 상세
            </Link>
          </div>
        </div>
      </section>

      {/* 핵심 지표 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 지표</h2>
            <p className="text-xl text-gray-600">운영·연구에서 추적하는 지표 예시(도메인·설계에 따라 정의)</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{kpi.title}</h3>
                  <p className="text-xl font-bold text-primary-600 mb-2">{kpi.value}</p>
                  <p className="text-sm text-gray-600">{kpi.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 비즈니스 가치 & 임상 효과 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">비즈니스 가치 & 임상 효과</h2>
            <p className="text-xl text-gray-600">기존 방식 대비 지향하는 개선 방향(도입·설계에 따라 상이)</p>
          </div>
          
          {/* 2x2 그리드로 4개 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 비용 효율성 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4 text-primary-600">
                <MarketingIcon name="trend" className="h-10 w-10" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">비용 효율성</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-gray-600">임상·연구 비용</span>
                  <span className="text-lg font-bold text-gray-900 text-right">설계별 산출</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-gray-600">수집·정합 기간</span>
                  <span className="text-lg font-bold text-gray-900 text-right">연속 기록 지향</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-gray-600">보호자 자가 기록</span>
                  <span className="text-lg font-bold text-gray-900 text-right">참여 가능</span>
                </div>
              </div>
            </div>

            {/* EMR 연동 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4 text-primary-600">
                <MarketingIcon name="hospital" className="h-10 w-10" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EMR 연동</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• FHIR 등 표준 기반 연동 지향</li>
                <li>• 병원·벤더별 상이한 호환 범위</li>
                <li>• 임상 데이터 + 생활 데이터 통합 목표</li>
                <li>• 연구·운영 맥락 보강</li>
              </ul>
            </div>

            {/* 보험 연계 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4 text-primary-600">
                <MarketingIcon name="shield" className="h-10 w-10" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">보험 설계 연계</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• RWE 기반 리스크 평가</li>
                <li>• 개인별 맞춤 보험료 산정</li>
                <li>• 예방적 케어 인센티브</li>
                <li>• 정책 설계 지원</li>
              </ul>
            </div>

            {/* 임상시험 비교 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-4 text-primary-600">
                <MarketingIcon name="chart" className="h-10 w-10" aria-hidden />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">임상시험 대비</h3>
              <div className="space-y-3">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">표본 규모</span>
                  <span className="font-bold text-gray-900 text-right">현장 모집 지향</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">데이터 다양성</span>
                  <span className="font-bold text-gray-900 text-right">실제 생활 맥락</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-600">취약 집단</span>
                  <span className="font-bold text-gray-900 text-right">희귀질환·소아·노인 등</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API & 통합 */}
      <section id="api" className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">API & 통합</h2>
            <p className="text-xl text-gray-600">파트너와의 빠른 연동을 위한 표준화된 인터페이스</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">표준화된 통합 API</h3>
              <p className="text-gray-600 mb-6">FHIR/REST/GraphQL 기반 통합 인터페이스</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• FHIR/REST/GraphQL</li>
                <li>• 이벤트 웹훅(near‑real‑time)</li>
                <li>• 표준 매핑 가이드</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">빠른 파트너 온보딩 도구</h3>
              <p className="text-gray-600 mb-6">빠른 파트너 온보딩 도구</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• SDK</li>
                <li>• 샘플 데이터/앱</li>
                <li>• 통합 가이드</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">권한·프라이버시</h3>
              <p className="text-gray-600 mb-6">역할 기반 최소 권한 모델</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• RBAC</li>
                <li>• 감사로그</li>
                <li>• 가명처리/암호화</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/contact?type=tech&service=platform" className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg">
              기술 협력/라이선스 문의
            </Link>
          </div>
        </div>
      </section>



      <PageClosingSection
        title="기술·플랫폼이 궁금하신가요?"
        description="도입·연구·협력 등 기술 관련 문의는 편하게 남겨 주세요."
        primary={{ label: '기술 문의', href: '/contact?type=tech&service=platform' }}
        secondary={[
          { label: '플랫폼 기술 개요', href: '/technology/platform' },
          { label: '서비스 보기', href: '/services' },
        ]}
      />

      <Footer />
    </div>
  )
}
