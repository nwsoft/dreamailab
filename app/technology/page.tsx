import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../components/CompanyNarrativeNav'
import PageClosingSection from '../../components/PageClosingSection'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'
import { buildPageMetadata } from '../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: '기술 | AI Digital Care Log와 결과 학습 아키텍처 - 드림에이아이랩',
    description: '시간축 기록, 맥락 모델, 설명 가능한 AI, 동의·권한, 실행과 결과 학습을 연결하는 드림에이아이랩의 핵심 기술 아키텍처를 소개합니다.',
    path: '/technology',
    ogTitle: 'Dream AI Lab Technology — 기록을 맥락과 다음 행동으로 연결하는 AI',
    ogDescription: 'AI Digital Care Log, Domain Blueprint, Outcome Feedback Loop와 Architecture Guardian 기술 구조.',
    ogImageAlt: '드림에이아이랩 AI Digital Care Log 기술 아키텍처',
  }),
  keywords: ['AI Digital Care Log', 'AI디지털케어로그', 'AI 아키텍처', '시계열 데이터', '설명 가능한 AI', '데이터 거버넌스', 'Architecture Guardian'],
}

const architecture = [
  ['01', '관찰·수집', '생활·행동·업무·환경 데이터를 사용자의 동의와 역할에 맞춰 수집합니다.'],
  ['02', '시간축 연결', '단편 기록을 사람·상황·기관·사건의 연속된 맥락으로 정리합니다.'],
  ['03', '맥락 이해', '도메인 규칙과 AI가 현재 상태, 변화, 누락된 정보와 위험 신호를 함께 봅니다.'],
  ['04', '설명 가능한 판단', '권고의 근거·불확실성·확인이 필요한 조건을 사용자 역할에 맞게 제시합니다.'],
  ['05', '실행·협업', '알림·기록·업무·전문가 검토 등 실제 다음 행동으로 연결합니다.'],
  ['06', '결과 학습', '실행 이후의 반응과 결과를 다시 기록해 다음 판단과 제품을 개선합니다.'],
]

const assets: Array<{ title: string; description: string; role: string; icon: MarketingIconName }> = [
  { title: 'AI Digital Care Log', description: '시간에 따라 달라지는 상태와 맥락, 행동과 결과를 연결하는 공통 데이터·AI 아키텍처입니다.', role: '여섯 산업 서비스의 기술 코어', icon: 'brain' },
  { title: 'Domain Blueprints', description: '발달·돌봄·의료·교육·가족·웰니스별 사용자 역할, 데이터, 업무 흐름과 검증 기준을 구조화합니다.', role: '범용 기술을 산업 제품으로 번역', icon: 'blocks' },
  { title: 'Consent · RBAC · Audit', description: '동의, 최소권한, 변경 이력, 보존과 삭제를 제품 데이터 흐름 안에서 다룹니다.', role: '민감한 현장을 위한 신뢰 기반', icon: 'lock' },
  { title: 'Outcome Feedback Loop', description: '사용과 운영의 결과를 다음 모델·규칙·화면·업무 결정으로 되돌립니다.', role: '코드가 아닌 결과를 학습하는 구조', icon: 'refresh' },
  { title: 'Project Knowledge Graph', description: '요구사항, 구성요소, 의사결정, 테스트, 오류와 배포 이력의 관계를 보존하는 신규 기술 후보입니다.', role: 'DAL Vibe Architect 연구 축', icon: 'link' },
  { title: 'Architecture Guardian', description: '변경 전후의 의존성·보안·회귀·복구 영향을 추적하고 승인된 구조를 지키는 신규 기술 후보입니다.', role: '소프트웨어 제작 안전성 연구 축', icon: 'shield' },
]

const principles = [
  ['데이터 최소화', '필요한 목적과 기간을 먼저 정하고 과도한 수집을 피합니다.'],
  ['사람의 최종 판단', '의료·돌봄·교육 등 책임이 큰 영역에서 AI 결과만으로 결정을 확정하지 않습니다.'],
  ['설명과 불확실성', '추천 이유뿐 아니라 데이터 부족과 한계를 함께 보여줍니다.'],
  ['변경과 복구', '데이터 모델과 업무 흐름의 변경 영향을 추적하고 되돌릴 수 있게 설계합니다.'],
  ['접근 가능한 경험', '키보드·스크린리더·쉬운 언어 등 다양한 사용 방식을 고려합니다.'],
  ['현장별 검증', '한 산업의 성능을 다른 산업에 그대로 주장하지 않고 별도로 검증합니다.'],
]

export default function TechnologyPage() {
  return (
    <div className="company-page">
      <Header />
      <CompanyPageHero
        eyebrow="Technology · How we build"
        title="기록을 저장하는 기술이 아니라, 맥락을 이해하고 다음 행동으로 연결하는 기술"
        description={<p>드림에이아이랩의 핵심은 특정 모델 하나가 아닙니다. 시간축 데이터, 도메인 지식, 설명 가능한 AI, 권한과 실행, 결과 학습을 하나의 운영 아키텍처로 연결하는 능력입니다.</p>}
        badges={['Time-series context', 'Explainable action', 'Consent & RBAC', 'Outcome learning']}
        actions={[{ label: '핵심 구조 보기', href: '#architecture' }, { label: '서비스 적용 보기', href: '/services', variant: 'secondary' }]}
      />
      <CompanyNarrativeNav current="/technology" />

      <section className="company-section" id="architecture">
        <div className="company-container">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Core architecture</p>
              <h2 className="company-section-title mt-3">AI Digital Care Log</h2>
              <p className="company-section-lead">사람과 현장의 상태는 한 장의 설문이나 한 번의 상담으로 이해할 수 없습니다. DAL은 무엇이 언제, 어떤 환경에서 일어났고 어떤 행동 뒤에 어떤 결과가 생겼는지를 연결합니다.</p>
              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-relaxed text-slate-700">이름에 Care가 들어가지만 핵심 원리는 기록·맥락·판단·실행·결과가 반복되는 다양한 산업 업무에 적용할 수 있습니다. 다만 각 산업의 데이터와 책임 기준은 별도로 설계합니다.</div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {architecture.map(([step, title, description]) => (
                <li key={step} className="company-card">
                  <span className="text-sm font-black text-primary-700">{step}</span>
                  <h3 className="mt-3 text-lg font-black text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Reusable technology assets</p>
            <h2 className="company-section-title mt-3">제품이 달라도 반복해서 축적되는 기술자산</h2>
            <p className="company-section-lead">현재 제품에 적용된 코어와 앞으로 검증할 신규 기술 후보를 명확히 구분합니다.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {assets.map((asset, index) => (
              <article key={asset.title} className="company-card">
                <div className="flex items-start justify-between gap-4">
                  <MarketingIcon name={asset.icon} className="h-8 w-8 text-primary-700" />
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${index < 4 ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{index < 4 ? 'Core' : 'R&D candidate'}</span>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">{asset.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{asset.description}</p>
                <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-bold text-primary-700">{asset.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">From core to products</p>
            <h2 className="company-section-title mt-3">하나의 코어를 복제하지 않고, 산업별 책임 구조로 재구체화합니다</h2>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid border-b border-slate-200 bg-slate-950 px-6 py-6 text-white lg:grid-cols-[220px_1fr_220px] lg:items-center">
              <strong>AI Digital Care Log</strong><span className="mt-2 text-sm text-slate-300 lg:mt-0">시간축 맥락 · 권한 · 설명 가능한 실행 · 결과 학습</span><span className="mt-2 text-sm font-bold text-cyan-300 lg:mt-0 lg:text-right">Common Core</span>
            </div>
            <div className="grid gap-px bg-slate-200 md:grid-cols-3">
              {[
                ['Care & Health', '자람이 · 시니어앤라이프 · 토탈케어로그', '관찰·치료·돌봄·건강의 연속성'],
                ['Education & Family', '에듀케어로그 · 글로벌커플케어', '학습과 가족 생애주기의 맥락'],
                ['Lifestyle & Creation', '베지케어 · DAL Vibe Architect', '행동 변화와 소프트웨어 제작의 결과 학습'],
              ].map(([label, names, description]) => (
                <div key={label} className="bg-white p-6"><p className="text-xs font-black uppercase tracking-wider text-primary-700">{label}</p><h3 className="mt-3 font-black text-slate-950">{names}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p></div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/technology/platform" className="rounded-xl bg-primary-600 px-5 py-3 text-sm font-bold text-white hover:bg-primary-700">플랫폼 기술 상세</Link>
            <Link href="/technology/educarelog" className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50">에듀케어로그 기술</Link>
          </div>
        </div>
      </section>

      <section className="company-section-muted">
        <div className="company-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-sm font-bold uppercase tracking-wider text-primary-700">Responsible engineering</p><h2 className="company-section-title mt-3">기술보다 먼저 지키는 설계 원칙</h2><p className="company-section-lead">특히 돌봄·의료·교육과 비개발자용 제작 도구에서는 성능만으로 좋은 시스템을 정의할 수 없습니다.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(([title, description]) => <div key={title} className="company-card"><h3 className="font-black text-slate-950">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p></div>)}
          </div>
        </div>
      </section>

      <PageClosingSection title="기술은 실제 제품과 운영에서 완성됩니다" description="현재 서비스와 사업 구조에서 공통 아키텍처가 어떻게 다른 산업의 가치로 이어지는지 확인해 보세요." primary={{ label: '서비스 포트폴리오', href: '/services' }} secondary={[{ label: '비즈니스 구조', href: '/business' }]} />
      <Footer />
    </div>
  )
}
