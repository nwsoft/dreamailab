import Link from 'next/link'
import { MarketingIcon, type MarketingIconName } from './MarketingIcon'

type Domain = {
  label: string
  source: string
  data: string
  learning: string
  href: string
  icon: MarketingIconName
}

const domains: Domain[] = [
  {
    label: '돌봄 · 건강',
    source: '자람이 · 시니어앤라이프 · 토탈케어로그',
    data: '일상·행동·돌봄·건강 기록과 시간에 따른 변화',
    learning: '개인 기준선, 위험 신호, 개입 전후 결과',
    href: '/services',
    icon: 'heart',
  },
  {
    label: '교육 · 발달',
    source: '자람이 · 에듀케어로그',
    data: '학습 반응, 목표, 지원 과정, 현장 관찰 기록',
    learning: '맞춤 난이도, 지원 타이밍, 장기 변화',
    href: '/services/educarelog',
    icon: 'graduation',
  },
  {
    label: '생활 · 가족',
    source: '베지케어 · 글로벌커플케어',
    data: '식생활·환경·문화 적응과 생활 맥락',
    learning: '개인의 선택과 환경에 맞는 다음 안내',
    href: '/services',
    icon: 'home',
  },
  {
    label: '금융 · 재테크',
    source: 'NoahAI · 별도 운영: Noah AI Labs',
    data: '시장·자산·계좌 맥락과 판단·실행·위험·복기 기록',
    learning: '개인별 전략 결과, 위험 통제, 설명 가능한 다음 판단',
    href: '/services/finance',
    icon: 'chart',
  },
]

const loop = [
  ['01', '관찰·기록', '현실에서 생긴 사건과 변화를 시간축으로 남깁니다.'],
  ['02', '맥락 이해', '개인의 기준선·환경·목표·위험을 함께 봅니다.'],
  ['03', '판단·권고', '가능한 다음 행동과 그 이유를 제시합니다.'],
  ['04', '승인·실행', '도메인별 권한과 안전 규칙 안에서만 실행합니다.'],
  ['05', '결과·복기', '무엇이 실제로 달라졌는지 다시 기록합니다.'],
  ['06', '초개인화', '누적된 결과로 다음 판단을 더 개인에게 맞춥니다.'],
]

export default function ResearchLifeIntelligence({
  mode,
}: {
  mode: 'pet' | 'robot' | 'hub'
}) {
  const isRobot = mode === 'robot'
  const title =
    mode === 'hub'
      ? '현실의 결과를 학습하는 Human Life Intelligence'
      : isRobot
        ? '로봇에 필요한 것은 더 큰 모델보다, 사람의 삶을 이해하는 맥락입니다'
        : '반려동물의 하루도 현실세계 데이터에서 시작합니다'
  const intro =
    mode === 'hub'
      ? '드림에이아이랩은 서로 다른 서비스를 무리하게 하나의 데이터베이스로 합치지 않습니다. 각 도메인의 동의·권한·법적 경계 안에서 고품질 시간축 데이터를 만들고, 관찰→판단→실행→결과라는 공통 아키텍처를 축적합니다.'
      : isRobot
        ? '로봇이 카메라로 장면을 보는 것만으로는 돌봄·교육·생활을 이해할 수 없습니다. DAL은 사람의 장기 기록과 현재 상황을 연결해 “누구에게, 왜, 지금 무엇을 해야 하는가”를 판단하는 Life Intelligence Brain을 연구합니다.'
        : '한 번의 사진이나 평균값이 아니라, 그 아이의 평소 기준선과 오늘의 환경·행동·보호자 관찰을 시간축으로 연결해야 의미 있는 개인화가 시작됩니다.'

  return (
    <section id="life-intelligence" className="company-section border-y border-slate-200 bg-slate-950 text-white">
      <div className="company-container">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-300">DAL Human Life Intelligence</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">{intro}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {domains.map((domain) => (
            <Link
              key={domain.label}
              href={domain.href}
              className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition hover:border-sky-300/50 hover:bg-white/10"
            >
              <MarketingIcon name={domain.icon} className="h-7 w-7 text-sky-300" />
              <h3 className="mt-4 text-lg font-black">{domain.label}</h3>
              <p className="mt-2 text-xs font-bold text-sky-200">{domain.source}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{domain.data}</p>
              <p className="mt-3 border-t border-white/10 pt-3 text-xs leading-5 text-slate-400">학습 질문 · {domain.learning}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
          <div className="grid md:grid-cols-3 xl:grid-cols-6">
            {loop.map(([step, label, body], index) => (
              <div key={step} className={`p-5 ${index > 0 ? 'border-t border-white/10 md:border-l md:border-t-0' : ''}`}>
                <p className="text-xs font-black text-sky-300">{step}</p>
                <h3 className="mt-2 text-base font-black">{label}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-wider text-emerald-300">RWD · Real-World Data</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">서비스와 일상에서 실제로 생성된 기록입니다. 연구 목적, 동의, 권한, 품질 기준을 충족한 범위만 사용합니다.</p>
          </div>
          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-wider text-violet-300">RWE · Real-World Evidence</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">정의된 연구 질문과 검증 절차로 RWD를 분석해 얻는 근거입니다. 데이터가 쌓였다는 사실만으로 RWE가 되지는 않습니다.</p>
          </div>
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5">
            <p className="text-xs font-black uppercase tracking-wider text-amber-300">Domain boundary</p>
            <p className="mt-3 text-sm leading-6 text-slate-200">금융은 의료 RWD/RWE가 아니라 시장·판단·실행·위험 결과 로그로 다룹니다. 서비스 간 원본 데이터는 임의로 결합하지 않습니다.</p>
          </div>
        </div>

        <p className="mt-6 text-xs leading-5 text-slate-500">
          NoahAI는 드림에이아이랩에서 고안·개발된 금융 AI 적용 사례이며 현재는 별도 법인·브랜드인 Noah AI Labs가 독립 운영합니다. 이 페이지의 연결은 법인이나 데이터베이스의 통합이 아니라, 설계 철학과 학습 아키텍처의 전이를 뜻합니다.
        </p>
      </div>
    </section>
  )
}
