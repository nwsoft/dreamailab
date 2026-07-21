import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import { MarketingIcon, type MarketingIconName } from '../../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../../lib/seo'

const pagePath = '/research/robot-vision'
const pageDescription =
  'Robot Vision — AI Digital Care Log를 로봇의 AI Brain으로 확장하는 연구 프로젝트. 로봇은 행동하고, Digital Care Log는 관찰·판단·학습합니다. 자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어·Pet AI 등 기존 서비스의 도메인 데이터와 AI Core를 재사용해 돌봄·교육·건강 세 축에서 로봇 연동 방향을 연구합니다. 상용 로봇 제품이 아닙니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Robot Vision | Research · Future Vision | 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Robot Vision — Research (Dream AI Lab)',
  type: 'article',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: 'Research', url: absoluteUrl('/research') },
  { name: 'Robot Vision', url: absoluteUrl(pagePath) },
])

const techLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Robot Vision — AI Digital Care Log as Robot AI Brain',
  description: pageDescription,
  author: { '@type': 'Organization', name: 'Dream AI Lab' },
  publisher: { '@type': 'Organization', name: 'Dream AI Lab', url: SITE_URL },
  inLanguage: 'ko-KR',
  dateModified: '2026-07-21',
  about: {
    '@type': 'Thing',
    name: 'Robot Vision',
    description: 'AI Digital Care Log를 로봇의 AI Brain으로 확장하는 도메인 횡단 연구 (상용 로봇 제품 아님)',
  },
}

const faqItems: { q: string; a: string }[] = [
  {
    q: 'Robot Vision은 이미 판매 중인 로봇 제품인가요?',
    a: '아닙니다. Robot Vision은 Research · Future Vision 단계입니다. 특정 로봇 하드웨어를 만들거나 판매하는 프로젝트가 아니라, AI Digital Care Log를 로봇의 AI Brain으로 확장할 수 있는지를 연구하는 기술 방향입니다. 출시 일정이나 가입·구매를 의미하지 않습니다.',
  },
  {
    q: 'Pet AI Digital Care Log와 Robot Vision은 같은 프로젝트인가요?',
    a: '아닙니다. Pet AI Digital Care Log는 반려동물(Animal) 도메인에 AI Digital Care Log를 적용하는 연구입니다. Robot Vision은 그보다 더 넓은 범위로, 돌봄·교육·건강 등 여러 도메인에서 이미 축적된 Care Log 데이터를 로봇이라는 물리적 실행체와 연결하는 도메인 횡단(cross-domain) 연구입니다. Pet AI는 Robot Vision이 다루는 여러 적용 축 중 하나로 연결될 수 있습니다.',
  },
  {
    q: '로봇이 직접 사람을 만지거나 돌보는 건가요?',
    a: '현재 연구 범위는 관찰·판단·안내·알림 중심입니다. 급식·이동 보조처럼 물리적 접촉이 필요한 행동은 안전 정책과 사람의 승인이 선행되는 범위에서만 장기적으로 검토하며, 지금 단계에서 상용화된 물리적 행위는 없습니다.',
  },
  {
    q: '어떤 서비스의 데이터가 로봇 연동에 쓰이나요?',
    a: '자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어·Pet AI Digital Care Log 등에서 이미 축적 중인 도메인 데이터와 AI Core(행동 분석·이상 탐지·리포트 생성 엔진 등)를 재사용하는 방향을 연구합니다. 새로운 로봇 전용 데이터베이스를 처음부터 만드는 것이 아닙니다.',
  },
  {
    q: '동의 없이 로봇이 데이터를 로봇 제조사나 외부에 넘기나요?',
    a: '아닙니다. 로봇은 데이터를 소유하지 않고, Care Log가 맥락을 소유한다는 원칙을 연구 전제로 두고 있습니다. 사용자 동의 범위를 벗어난 데이터 이전, 목적 외 활용, 제3자 판매는 연구 설계상 하지 않는 것을 원칙으로 합니다.',
  },
  {
    q: '투자·기술 협력·로봇 하드웨어 파트너십은 어떻게 논의하나요?',
    a: 'R&D·기술 협력 관점의 문의를 받고 있습니다. 페이지 하단 문의 채널을 통해 연구 단계, 재사용 가능한 AI Core 자산, 물리적 실행체(로봇) 파트너십 방향을 함께 설명드립니다.',
  },
]

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const stages = [
  { label: 'Research', desc: '도메인 횡단 연구 과제 정의 · 가설 검증' },
  { label: 'Future Vision', desc: '장기 방향 · 물리적 실행체(로봇) 파트너십 탐색' },
]

const tocSections: { id: string; label: string }[] = [
  { id: 'why-separate', label: '왜 별도 연구인가' },
  { id: 'core-idea', label: '핵심 아이디어' },
  { id: 'architecture', label: '아키텍처' },
  { id: 'data-flow', label: '데이터 흐름' },
  { id: 'services', label: '서비스 연계' },
  { id: 'domains', label: '돌봄 · 교육 · 건강' },
  { id: 'scenarios', label: '시나리오' },
  { id: 'tech-reuse', label: '재사용 기술' },
  { id: 'data-usage', label: '데이터 사용 범위' },
  { id: 'safety', label: '안전 · 윤리' },
  { id: 'roadmap', label: '연구 로드맵' },
  { id: 'value', label: '가치 제안' },
  { id: 'faq', label: 'FAQ' },
]

type ServiceRobot = {
  service: string
  mark: string
  url: string
  domain: string
  currentData: string
  robotRole: string
  examples: string[]
  icon: MarketingIconName
}

const serviceRobotMap: ServiceRobot[] = [
  {
    service: '자람이',
    mark: 'JR',
    url: '/services/jarame',
    domain: '발달 · 학습 · 행동',
    currentData: '행동/학습 로그, 치료 루틴',
    robotRole: '학습 보조 · 행동 코칭 로봇',
    examples: ['학습 보조', '루틴 리마인드', '집중 이탈 감지 시 짧은 개입'],
    icon: 'child',
  },
  {
    service: '시니어앤라이프',
    mark: 'SL',
    url: '/services/senior',
    domain: '시니어 · 노인돌봄',
    currentData: '돌봄/낙상 신호, 복약/활력',
    robotRole: '동행 · 순찰형 돌봄 로봇',
    examples: ['순찰/알림', '동행 보조', '야간 이상 움직임 감지 시 확인'],
    icon: 'accessibility',
  },
  {
    service: '토탈케어로그',
    mark: 'TC',
    url: '/services/healthcare',
    domain: '의료 · 건강',
    currentData: '건강 로그, 약물/증상',
    robotRole: '건강 측정 보조 · 리포트 전달 로봇',
    examples: ['측정 보조', '병원 전 리포트 전달', '복약 리마인드'],
    icon: 'stethoscope',
  },
  {
    service: '에듀케어로그',
    mark: 'ED',
    url: '/services/educarelog',
    domain: '교육',
    currentData: '학습 반응, 맞춤 경로',
    robotRole: '튜터링 · 집중 코칭 로봇',
    examples: ['튜터링', '집중 코칭', '난이도 조절 신호 전달'],
    icon: 'graduation',
  },
  {
    service: '베지케어',
    mark: 'VG',
    url: '/services/veggie',
    domain: '라이프스타일 · 영양',
    currentData: '식습관 로그, 영양 목표',
    robotRole: '식사 리마인드 · 환경 안내 로봇',
    examples: ['식사 리마인드', '환경 안내', '식습관 변화 알림'],
    icon: 'leaf',
  },
]

const petAiRobot: ServiceRobot = {
  service: 'Pet AI Digital Care Log',
  mark: 'PA',
  url: '/research/pet-ai',
  domain: '반려동물 (Research)',
  currentData: '행동 관찰, 케어 로그',
  robotRole: '펫 케어 로봇 (Research)',
  examples: ['급식/놀이 보조', '이상 행동 감지 시 알림', '보호자 부재 시 관찰'],
  icon: 'eye',
}

const marriageRobotNote =
  '글로벌커플케어의 정착 데이터(언어 · 생활 정보)도 장기적으로 정착 안내 · 언어 보조 로봇 연구로 연결될 수 있는 확장 가능성이 있지만, 현재는 우선 검토 대상이 아닌 참고 축입니다.'

const architectureLayers: { title: string; items: string[]; icon: MarketingIconName; accent: string }[] = [
  {
    title: 'Perception (인지)',
    items: ['Vision / Audio', 'Sensor / Wearable', 'App / Manual Log', '현장 신호 수집'],
    icon: 'camera',
    accent: 'sky',
  },
  {
    title: 'Care Log Brain (판단)',
    items: ['Context Memory (타임라인)', 'Reasoning (상태/위험/목표)', 'Policy (안전/윤리/권한)', 'Planner (다음 행동 후보)'],
    icon: 'brain',
    accent: 'violet',
  },
  {
    title: 'Action (행동)',
    items: ['Speak / Guide', 'Remind / Alert', 'Assist / Fetch*', 'Report to Human'],
    icon: 'robot',
    accent: 'amber',
  },
]

const dataFlowStages: { n: number; title: string; items: string[]; icon: MarketingIconName }[] = [
  {
    n: 1,
    title: '사용자 데이터',
    items: ['행동/학습/건강', '복약/식사/수면', '센서/카메라', '보호자 입력'],
    icon: 'upload',
  },
  {
    n: 2,
    title: 'AI Digital Care Log',
    items: ['표준 스키마 정규화', '타임라인/에피소드', '멀티모달 분석', '위험/권고 생성', 'HITL 전문가 검토', '개인화 모델'],
    icon: 'document',
  },
  {
    n: 3,
    title: 'Robot AI Brain',
    items: ['상황 이해', '행동 후보 생성', '안전 규칙 필터', '실행 우선순위', '실패/성공 기록', '환류 학습'],
    icon: 'cog',
  },
  {
    n: 4,
    title: '로봇 행동',
    items: ['알림 / 안내', '루틴 보조', '교육 코칭', '돌봄 순찰'],
    icon: 'robot',
  },
]

const domainPillars: {
  title: string;
  subtitle: string;
  services: string;
  data: string;
  judgment: string;
  action: string;
  icon: MarketingIconName;
  accent: string;
}[] = [
  {
    title: '돌봄 Care',
    subtitle: '시니어앤라이프 · Pet AI',
    services: '낙상/이상 감지, 복약/식사 리마인드, 순찰/동행 보조, 가족 알림 전달',
    data: '활력 · 행동 · 위치',
    judgment: '위험도 · 우선순위 판단',
    action: '알림 · 접근 · 기록',
    icon: 'heart',
    accent: 'rose',
  },
  {
    title: '교육 Education',
    subtitle: '자람이 · 에듀케어로그',
    services: '맞춤 학습 코칭, 집중/이탈 감지, 루틴/퀴즈 실행, 보호자/교사 리포트',
    data: '학습 반응 · 정서',
    judgment: '난이도 · 개입 시점 판단',
    action: '힌트 · 격려 · 기록',
    icon: 'graduation',
    accent: 'indigo',
  },
  {
    title: '건강 Health',
    subtitle: '토탈케어로그 · 시니어앤라이프',
    services: '증상/부작용 추적, 측정 보조/리마인드, 병원 전 Care Report, 생활습관 코칭',
    data: '임상 · 생활 로그',
    judgment: '위험 · 권고 판단',
    action: '안내 · 전달 · 환류',
    icon: 'stethoscope',
    accent: 'emerald',
  },
]

const scenarios: {
  title: string;
  based: string;
  data: string;
  steps: string[];
  icon: MarketingIconName;
}[] = [
  {
    title: '시니어 돌봄',
    based: '자람이 아닌 시니어앤라이프',
    data: '활동 / 복약 / 위치',
    steps: [
      'Care Log: 야간 움직임 감소 관찰',
      'Brain: 낙상 위험 상승 판단',
      'Robot: 음성 확인 + 조명',
      '가족/센터 알림 전달',
    ],
    icon: 'accessibility',
  },
  {
    title: '발달 · 학습 보조',
    based: '자람이 · 에듀케어로그',
    data: '학습 반응 / 정서',
    steps: [
      'Care Log: 집중도 하락 관찰',
      'Brain: 난이도 하향 권고 판단',
      'Robot: 짧은 휴식 안내',
      '교사/보호자 리포트 전달',
    ],
    icon: 'graduation',
  },
  {
    title: '건강 관리',
    based: '토탈케어로그',
    data: '약물 / 증상 / 활력',
    steps: [
      'Care Log: 부작용 패턴 감지',
      'Brain: 병원 전 요약 리포트 생성',
      'Robot: 복약 리마인드',
      'Care Report 전달',
    ],
    icon: 'stethoscope',
  },
]

const techReuseItems: { title: string; desc: string; icon: MarketingIconName }[] = [
  {
    title: 'Vision AI',
    desc: '자람이 · Pet AI Digital Care Log에서 검증한 영상 기반 자세 추정 · 행동 인식 모델을 로봇 카메라 신호에 재적용하는 연구입니다.',
    icon: 'camera',
  },
  {
    title: 'Care Log 엔진',
    desc: '표준 스키마로 타임라인·에피소드를 축적하는 Digital Care Log 엔진을 그대로 Robot Brain의 Context Memory로 재사용합니다.',
    icon: 'document',
  },
  {
    title: '행동 분석',
    desc: '자람이(상용)·시니어앤라이프(상용베타)에서 검증·전개 중인 행동 패턴 분석·이상 탐지 로직을 로봇이 관찰하는 신호에 재학습하는 방향을 연구합니다.',
    icon: 'eye',
  },
  {
    title: '건강 모니터링',
    desc: '토탈케어로그의 증상·복약·생활 데이터 모니터링 구조를 로봇의 건강 리마인드 · 병원 전 리포트 기능으로 확장합니다.',
    icon: 'pill',
  },
  {
    title: '추천 엔진',
    desc: '베지케어의 누적 로그 기반 추천 구조를 로봇의 다음 행동 제안(Planner)에 재사용하는 방향을 연구합니다.',
    icon: 'target',
  },
  {
    title: 'HITL (Human-in-the-loop)',
    desc: '자람이 AI 리포트에서 이미 적용 중인 전문가 검토 구조를 Robot Brain의 안전 정책(Policy) 계층에 그대로 반영합니다.',
    icon: 'shield',
  },
]

const dataUsageByDomain: { domain: string; used: string; icon: MarketingIconName }[] = [
  { domain: '돌봄', used: '활동량 · 낙상/이상 움직임 · 복약 시간 · 위치(실내 동선) 데이터', icon: 'heart' },
  { domain: '교육', used: '학습 반응 · 집중/이탈 시점 · 정서 신호 · 루틴 수행 기록', icon: 'graduation' },
  { domain: '건강', used: '증상 · 복약 기록 · 생활습관 로그 · 병원 전 요약에 필요한 최소 데이터', icon: 'stethoscope' },
]

const neverWithoutConsent: string[] = [
  '동의 범위를 벗어난 목적으로 데이터를 재사용하지 않습니다.',
  '로봇 제조사 · 외부 업체에 원본 데이터를 임의로 이전하지 않습니다.',
  '가명·암호화 없이 원본 영상/음성을 장기 보관하지 않습니다.',
  '의료적 판단(진단·처방)을 로봇이나 AI가 최종 결정하지 않습니다. 항상 사람(보호자·전문가)의 최종 확인을 전제로 합니다.',
  '수집한 데이터를 광고·마케팅 목적으로 판매하지 않습니다.',
]

const safetyPrinciples: { title: string; desc: string; icon: MarketingIconName }[] = [
  {
    title: 'Human-in-the-loop (HITL)',
    desc: '로봇의 판단은 참고안이며, 위험도가 높은 상황일수록 최종 확인은 보호자·전문가·가족에게 전달됩니다.',
    icon: 'shield',
  },
  {
    title: 'Fail-safe 우선',
    desc: '불확실하거나 신호가 충돌할 때는 물리적 행동을 확대하지 않고, 알림·확인 요청으로 안전하게 축소하는 것을 원칙으로 합니다.',
    icon: 'alert',
  },
  {
    title: '권한 계층 (Policy)',
    desc: 'Perception → Reasoning 이후 Action으로 넘어가기 전, 안전 규칙 필터(Policy)를 통과해야만 실행 후보가 살아남습니다.',
    icon: 'lock',
  },
  {
    title: '데이터 최소 수집',
    desc: '로봇 연동에 필요한 최소한의 신호만 수집하며, 목적을 벗어난 상시 녹화 · 광범위 수집은 지향하지 않습니다.',
    icon: 'scale',
  },
  {
    title: '투명한 환류',
    desc: '로봇 행동의 결과(성공/실패)는 다시 Care Log에 기록되어 보호자 · 전문가가 확인할 수 있도록 설계합니다.',
    icon: 'refresh',
  },
  {
    title: '물리적 행위의 제한',
    desc: '이동·급식 보조처럼 물리적 접촉이 필요한 행동(Assist/Fetch)은 안전 정책 하에서만 장기 검토하며, 현재 상용화된 물리적 행위는 없습니다.',
    icon: 'robot',
  },
]

const roadmapSteps: { t: string; d: string; icon: MarketingIconName }[] = [
  {
    t: '1',
    d: 'Human AI Digital Care Log — 자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어에서 베타·파일럿·개발 단계로 검증',
    icon: 'document',
  },
  {
    t: '2',
    d: '서비스 도메인 심화 — 각 서비스에서 Care Log 데이터 폭과 깊이를 확장 (Pet AI 등 Research 포함)',
    icon: 'trend',
  },
  {
    t: '3',
    d: 'Robot Brain 연구 — Care Log를 Context Memory · Reasoning · Policy · Planner 구조로 확장하는 기술 연구',
    icon: 'brain',
  },
  {
    t: '4',
    d: '물리적 실행체(로봇) 파트너십 — 하드웨어 파트너와 함께 Perception · Action 계층을 실증하는 장기 방향',
    icon: 'handshake',
  },
]

const valueColumns: { title: string; icon: MarketingIconName; items: string[] }[] = [
  {
    title: '파트너(로봇 · 하드웨어)를 위한 가치',
    icon: 'robot',
    items: [
      '로봇 하드웨어를 처음부터 새로 설계하지 않고, 이미 검증된 Care Log AI Brain을 연동할 수 있습니다.',
      '돌봄 · 교육 · 건강 세 축 모두에서 실사용 데이터 기반 로직을 참고할 수 있습니다.',
      'Perception · Action 계층만 하드웨어에 맞게 통합하면 되는 구조를 지향합니다.',
    ],
  },
  {
    title: '비즈니스 파트너를 위한 가치',
    icon: 'handshake',
    items: [
      '자람이 · 시니어앤라이프 · 토탈케어로그 · 에듀케어로그 · 베지케어의 표준 위에서 확장되는 구조입니다.',
      'API · 임베드 연동으로 기존 로봇 · IoT 플랫폼에 얹을 수 있는 방향을 연구합니다.',
      '도메인별로 이미 쌓인 실사용 데이터를 리스크 낮게 재사용할 수 있습니다.',
    ],
  },
  {
    title: '투자자 · R&D를 위한 가치',
    icon: 'flask',
    items: [
      '하나의 AI Core가 사람 → 여러 서비스 도메인 → 로봇으로 확장되는 재사용성을 보여줍니다.',
      '베타·파일럿·개발 중인 여러 도메인에서 검증 중인 기술을 기반으로 로봇 연동 리스크를 낮추는 방향을 연구합니다.',
      '돌봄 · 교육 · 건강을 동시에 아우르는 도메인 횡단 로드맵을 제시합니다.',
    ],
  },
]

export default function RobotVisionResearchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(techLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />

      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-zinc-900 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-amber-300 mb-4 tracking-wide">Research · Future Vision</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <MarketingIcon name="robot" className="h-9 w-9 text-amber-300" />
            <h1 className="text-3xl md:text-5xl font-bold">Robot Vision</h1>
          </div>
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl mx-auto leading-relaxed">
            AI Digital Care Log를 로봇의 AI Brain으로 확장하는 도메인 횡단 연구 프로젝트
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {stages.map((s) => (
              <span
                key={s.label}
                className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white"
              >
                {s.label}
              </span>
            ))}
          </div>
          <div className="rounded-xl bg-amber-500/15 border border-amber-300/30 px-5 py-4 max-w-2xl mx-auto text-left">
            <p className="text-sm text-amber-50 leading-relaxed">
              <strong className="text-white">상용 로봇 제품이 아닙니다.</strong> 출시 일정 · 가입 · 판매를
              의미하지 않습니다. Robot Vision은 로봇을 만드는 프로젝트가 아니라, 로봇이{' '}
              <strong className="text-white">무엇을 근거로 행동할지</strong>를 결정하는 AI Brain 구조를
              연구하는 프로젝트입니다. 아래 내용은 자람이 · 시니어앤라이프 · 토탈케어로그 · 에듀케어로그 ·
              베지케어에서 이미 검증한 AI Core를 기반으로 한 연구 방향입니다.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TOC pills */}
      <section className="py-5 bg-white border-b border-gray-100 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {tocSections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-amber-900 transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Current stage */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">현재 단계</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stages.map((s, i) => (
              <div key={s.label} className="rounded-xl border border-amber-100 bg-amber-50/60 p-5 text-center">
                <div className="text-xs font-bold text-amber-600 mb-2">0{i + 1}</div>
                <h3 className="font-bold text-gray-900 mb-1">{s.label}</h3>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why separate from Pet Care */}
      <section id="why-separate" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            왜 Pet AI와 별도 연구인가
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-3xl mx-auto mb-10">
            둘 다 로봇이라는 단어와 연결되지만, 연구 범위와 목적이 다릅니다.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-violet-200 bg-white p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-700">
                  <MarketingIcon name="eye" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900">Pet AI Digital Care Log</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                반려동물(Animal)이라는 <strong className="text-gray-900">하나의 도메인</strong>에 AI Digital
                Care Log를 적용하는 연구입니다. 반려동물의 관찰 · 기록 · 해석 · 리포트가 중심이며, 로봇 연동은
                그 안에서 다루는 장기 Future Vision 중 하나입니다.
              </p>
              <Link href="/research/pet-ai" className="text-violet-700 font-semibold text-sm hover:underline">
                Pet AI Digital Care Log 연구 보기 →
              </Link>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white p-6 md:p-7">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-amber-700">
                  <MarketingIcon name="robot" className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900">Robot Vision</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                <strong className="text-gray-900">여러 도메인을 가로지르는(cross-domain)</strong> 로봇 실행
                구조 연구입니다. 돌봄 · 교육 · 건강 등 DAL 서비스(베타·파일럿·개발 중)의 Care Log를 공통 AI Brain
                구조로 다시 보고, 로봇이라는 물리적 실행체가 어떻게 그 판단을 행동으로 옮길 수 있는지를
                연구합니다. Pet AI는 이 구조가 연결될 수 있는 여러 축 중 하나입니다.
              </p>
              <span className="text-amber-700 font-semibold text-sm">이 페이지에서 계속 다룹니다 ↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core idea: Robot vs Care Log roles */}
      <section id="core-idea" className="scroll-mt-28 py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">핵심 아이디어</h2>
          <p className="text-center text-white/80 text-sm max-w-2xl mx-auto mb-10">
            로봇은 행동하고, AI Digital Care Log는 관찰하고 판단하고 학습합니다. 역할이 분리되어야 두 축 모두
            더 잘 발전할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-amber-400/30 bg-amber-500/10 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                  <MarketingIcon name="robot" className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-amber-200">로봇 — 행동한다 (Acts)</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="text-amber-300 shrink-0">•</span>
                  <span>물리적 실행체로서 이동 · 알림 · 안내 · 보조를 담당합니다.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-300 shrink-0">•</span>
                  <span>센서 · 카메라 · 오디오로 현장 신호를 수집하는 관찰 지점이기도 합니다.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-amber-300 shrink-0">•</span>
                  <span>스스로 판단을 처음부터 만들지 않고, Care Log Brain의 결정을 실행합니다.</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border border-violet-400/30 bg-violet-500/10 p-7">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/20 text-violet-300">
                  <MarketingIcon name="brain" className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-violet-200">AI Digital Care Log — 관찰 · 판단 · 학습</h3>
              </div>
              <ul className="space-y-2.5 text-sm text-white/85">
                <li className="flex gap-2">
                  <span className="text-violet-300 shrink-0">•</span>
                  <span>여러 서비스에서 축적된 데이터를 표준 타임라인으로 관찰(Observe)합니다.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-300 shrink-0">•</span>
                  <span>위험도 · 우선순위 · 다음 행동 후보를 판단(Judge)합니다.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-300 shrink-0">•</span>
                  <span>행동의 결과가 다시 기록되어 다음 판단 기준을 학습(Learn)합니다.</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-white/60 text-sm mt-8 max-w-2xl mx-auto">
            같은 Care Log 코어가 Care · Education · Health 도메인에 공통으로 적용되며, 로봇은 도메인마다 다른
            몸을 가질 수 있어도 판단 구조는 같은 Brain을 공유합니다.
          </p>
        </div>
      </section>

      {/* 5. Architecture diagram */}
      <section id="architecture" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Robot Vision Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Perception → Care Log Brain → Action → Feedback으로 이어지는 구조입니다. AI Digital Care Log가
              곧 Robot Brain입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/robot-architecture.svg"
              alt="Robot Vision Architecture — Perception, Care Log Brain (Context Memory, Reasoning, Policy, Planner), Action, Feedback loop"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {architectureLayers.map((layer) => (
              <div key={layer.title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-slate-700">
                  <MarketingIcon name={layer.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{layer.title}</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {layer.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-gray-400 shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            * 물리적 행위(Assist/Fetch)는 안전 정책 하에서만 장기 검토합니다.
          </p>
        </div>
      </section>

      {/* 6. Data flow diagram */}
      <section id="data-flow" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">사용자 데이터 → Care Log → Robot</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">동의 기반 데이터가 로봇 행동으로 이어지는 연구 구조입니다.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/robot-data-flow.svg"
              alt="사용자 데이터가 AI Digital Care Log를 거쳐 Robot AI Brain, 로봇 행동으로 이어지고 다시 Care Log에 기록되는 흐름"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dataFlowStages.map((stage) => (
              <div key={stage.n} className="rounded-xl border border-gray-200 bg-white p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-white text-xs font-bold">
                    {stage.n}
                  </span>
                  <MarketingIcon name={stage.icon} className="h-5 w-5 text-slate-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{stage.title}</h3>
                <ul className="space-y-1 text-xs text-gray-600">
                  {stage.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto rounded-xl border border-amber-200 bg-amber-50/70 p-5 text-center">
            <p className="text-sm font-semibold text-amber-900 leading-relaxed">
              핵심 원칙: 로봇은 데이터를 소유하지 않고, Care Log가 맥락을 소유합니다.
            </p>
            <p className="text-xs text-amber-800 mt-2">
              동의 · 최소수집 · 가명/암호화가 1단계부터 전제되며, Research 단계이지 상용 로봇 제품 · 판매가
              아닙니다.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Service connections */}
      <section id="services" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              현재 서비스가 로봇에 연결되는 방식
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              새로운 로봇 서비스를 처음부터 만들지 않습니다. 베타·파일럿·개발 중인 서비스의 데이터와 AI Core가
              각자의 방식으로 로봇 역할에 연결됩니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/robot-service-map.svg"
              alt="DAL Services x Robot Vision — 자람이, 시니어앤라이프, 토탈케어로그, 에듀케어로그, 베지케어, Pet AI가 각각 다른 로봇 역할로 연결되는 개념도"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceRobotMap.map((s) => (
              <div key={s.service} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-gray-200 text-slate-700">
                    <MarketingIcon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <Link href={s.url} className="font-bold text-gray-900 text-sm hover:text-amber-700">
                      {s.service}
                    </Link>
                    <p className="text-xs text-gray-500">{s.domain}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mb-2">
                  <span className="font-semibold text-gray-600">현재 데이터</span> · {s.currentData}
                </p>
                <p className="text-sm font-semibold text-amber-800 mb-2">→ {s.robotRole}</p>
                <ul className="space-y-1 text-xs text-gray-600">
                  {s.examples.map((ex) => (
                    <li key={ex} className="flex gap-2">
                      <span className="text-amber-500 shrink-0">·</span>
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-violet-200 text-violet-700">
                  <MarketingIcon name={petAiRobot.icon} className="h-5 w-5" />
                </div>
                <div>
                  <Link href={petAiRobot.url} className="font-bold text-gray-900 text-sm hover:text-violet-700">
                    {petAiRobot.service}
                  </Link>
                  <p className="text-xs text-gray-500">{petAiRobot.domain}</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-2">
                <span className="font-semibold text-gray-600">현재 데이터</span> · {petAiRobot.currentData}
              </p>
              <p className="text-sm font-semibold text-violet-800 mb-2">→ {petAiRobot.robotRole}</p>
              <ul className="space-y-1 text-xs text-gray-600 mb-3">
                {petAiRobot.examples.map((ex) => (
                  <li key={ex} className="flex gap-2">
                    <span className="text-violet-500 shrink-0">·</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
              <Link href={petAiRobot.url} className="text-violet-700 text-xs font-semibold hover:underline">
                Pet AI Digital Care Log 연구 보기 →
              </Link>
            </div>
          </div>
          <p className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto">{marriageRobotNote}</p>
        </div>
      </section>

      {/* 8. Care / Education / Health deep dive */}
      <section id="domains" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">돌봄 · 교육 · 건강 — 로봇 적용 축</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              동일한 Care Log 코어이지만, 도메인마다 로봇에게 요구되는 역할과 판단 기준이 달라집니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/robot-domains-care-edu-health.svg"
              alt="돌봄 교육 건강 로봇 적용 축 — 동일 Care Log 코어, 도메인별 데이터 판단 행동 구조"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {domainPillars.map((d) => (
              <div key={d.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <MarketingIcon name={d.icon} className="h-6 w-6 text-slate-700" />
                  <h3 className="font-bold text-gray-900">{d.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-4">{d.subtitle}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{d.services}</p>
                <div className="space-y-2 text-xs">
                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-2.5">
                    <span className="font-semibold text-gray-500">데이터</span>
                    <span className="text-gray-700 ml-1">{d.data}</span>
                  </div>
                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-2.5">
                    <span className="font-semibold text-gray-500">판단</span>
                    <span className="text-gray-700 ml-1">{d.judgment}</span>
                  </div>
                  <div className="rounded-lg bg-gray-50 border border-gray-100 p-2.5">
                    <span className="font-semibold text-gray-500">행동</span>
                    <span className="text-gray-700 ml-1">{d.action}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Scenario examples */}
      <section id="scenarios" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">시나리오 예시 (Research)</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              실제 출시 제품이 아닌, 기술 연결을 이해하기 위한 시나리오입니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm mb-10 bg-white">
            <img
              src="/images/research/robot-scenario-examples.svg"
              alt="시나리오 예시 — 시니어 돌봄, 발달 학습 보조, 건강 관리 각각 Care Log 관찰부터 로봇 행동, 가족 알림까지의 흐름"
              className="w-full h-auto"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {scenarios.map((sc) => (
              <div key={sc.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-1">
                  <MarketingIcon name={sc.icon} className="h-6 w-6 text-slate-700" />
                  <h3 className="font-bold text-gray-900">{sc.title}</h3>
                </div>
                <p className="text-xs text-gray-500 mb-1">기반: {sc.based}</p>
                <p className="text-xs text-gray-500 mb-4">데이터: {sc.data}</p>
                <ol className="space-y-2 text-sm text-gray-700">
                  {sc.steps.map((step, i) => (
                    <li key={step} className="flex gap-2">
                      <span className="shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-white text-[10px] font-bold">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Technology reuse */}
      <section id="tech-reuse" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">DAL 기술 재사용</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              로봇 전용 기술을 처음부터 만들지 않습니다. DAL 서비스에서 검증·전개 중인 여섯 가지 기술
              축을 Robot Brain 구조에 재사용합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {techReuseItems.map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="mb-3 text-slate-700">
                  <MarketingIcon name={item.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Data usage & consent */}
      <section id="data-usage" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">어떤 데이터를 사용하는가</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              도메인별로 로봇 연동에 필요한 최소한의 데이터만 사용하는 것을 연구 원칙으로 합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {dataUsageByDomain.map((d) => (
              <div key={d.domain} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MarketingIcon name={d.icon} className="h-6 w-6 text-slate-700" />
                  <h3 className="font-bold text-gray-900">{d.domain}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{d.used}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl border border-red-200 bg-red-50/60 p-6 md:p-7">
            <div className="flex items-center gap-3 mb-4">
              <MarketingIcon name="lock" className="h-6 w-6 text-red-700" />
              <h3 className="font-bold text-red-900">동의 없이는 절대 하지 않는 것</h3>
            </div>
            <ul className="space-y-2.5 text-sm text-red-800">
              {neverWithoutConsent.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-red-500 shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 12. Safety / Ethics / HITL */}
      <section id="safety" className="scroll-mt-28 py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">안전 · 윤리 · Fail-safe 원칙</h2>
            <p className="text-white/75 max-w-2xl mx-auto">
              로봇이 사람의 삶에 개입하는 만큼, 기술보다 원칙을 먼저 정의합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {safetyPrinciples.map((p) => (
              <div key={p.title} className="rounded-xl border border-white/15 bg-white/5 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-amber-300">
                  <MarketingIcon name={p.icon} className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                <p className="text-xs text-white/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Roadmap */}
      <section id="roadmap" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">연구 방향 (로드맵)</h2>
            <p className="text-gray-600">출시 일정이 아닌 연구 · 기술 개발 방향입니다.</p>
          </div>
          <ol className="max-w-2xl mx-auto space-y-4">
            {roadmapSteps.map((step) => (
              <li key={step.t} className="flex gap-4 items-start rounded-xl border border-gray-200 bg-white p-5">
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-white text-sm font-bold">
                  {step.t}
                </span>
                <div className="flex items-start gap-2 pt-1">
                  <MarketingIcon name={step.icon} className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 leading-relaxed">{step.d}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-center text-xs text-gray-400 mt-6">
            * 특정 연도 · 출시일을 명시하지 않습니다. 서비스 도메인 심화 속도에 따라 연구 우선순위가 조정됩니다.
          </p>
        </div>
      </section>

      {/* 14. Value for partners / investors */}
      <section id="value" className="scroll-mt-28 py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
            파트너 · 투자자를 위한 가치
          </h2>
          <p className="text-center text-gray-600 text-sm max-w-2xl mx-auto mb-10">
            로봇 하드웨어 파트너, 비즈니스 파트너, 투자자·R&D 관점에서 Robot Vision이 갖는 의미는 다릅니다.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {valueColumns.map((col) => (
              <div key={col.title} className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-gray-200 text-amber-700">
                  <MarketingIcon name={col.icon} className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-500 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FAQ */}
      <section id="faq" className="scroll-mt-28 py-14 bg-gray-50 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">자주 묻는 질문</h2>
          <p className="text-center text-gray-600 text-sm mb-10">
            연구 단계와 Pet AI와의 관계를 명확히 구분해 답합니다.
          </p>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-gray-200 bg-white p-5 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-3 font-bold text-gray-900 text-sm">
                  {item.q}
                  <span className="shrink-0 text-amber-600 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 16. Related links */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">관련 페이지</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/research"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              Research 허브
            </Link>
            <Link
              href="/research/pet-ai"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              Pet AI Digital Care Log
            </Link>
            <Link
              href="/technology"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              기술
            </Link>
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              서비스 (Products)
            </Link>
            <Link
              href="/contact?type=tech&service=research"
              className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-semibold hover:bg-slate-900 text-sm"
            >
              R&D 문의
            </Link>
          </div>
        </div>
      </section>

      {/* 17. CTA */}
      <section className="py-14 bg-gradient-to-r from-slate-900 to-zinc-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">연구 · 기술 협력 문의</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Robot Vision은 연구 · Future Vision 영역입니다. 제품 가입이 아닌 R&D · 기술 협력 · 로봇 하드웨어
            파트너십 관점으로 문의해 주세요. Care Log AI Brain 구조, 도메인별 재사용 가능한 기술 자산, 투자자
            관점의 확장성 모두 같은 담당자가 안내합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact?type=tech&service=research"
              className="inline-flex justify-center px-6 py-3 rounded-lg bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300"
            >
              R&D 문의
            </Link>
            <Link
              href="/research"
              className="inline-flex justify-center px-6 py-3 rounded-lg border-2 border-white text-white font-semibold hover:bg-white/10"
            >
              Research 허브
            </Link>
            <Link
              href="/research/pet-ai"
              className="inline-flex justify-center px-6 py-3 rounded-lg border-2 border-white/60 text-white font-semibold hover:bg-white/10"
            >
              Pet AI Digital Care Log
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
