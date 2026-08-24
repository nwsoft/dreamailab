import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import CompanyPageHero from '../../components/CompanyPageHero'
import CompanyNarrativeNav from '../../components/CompanyNarrativeNav'
import ResearchLifeIntelligence from '../../components/ResearchLifeIntelligence'
import { MarketingIcon } from '../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../lib/seo'

const pagePath = '/research'
const pageDescription =
  '드림에이아이랩의 미래 연구. 돌봄·교육·생활·금융에서 축적한 시간축 데이터와 판단·실행·결과 학습 구조를 Pet AI와 Robot Vision의 초개인화 Life Intelligence로 확장합니다.'

export const metadata: Metadata = buildPageMetadata({
  title: '미래 연구 | Pet AI와 Robot Vision 연구 방향 - 드림에이아이랩',
  description: pageDescription,
  path: pagePath,
  ogTitle: 'Research & Future Vision — Dream AI Lab',
})

const breadcrumbLd = buildBreadcrumbJsonLd([
  { name: '홈', url: `${SITE_URL}/` },
  { name: 'Research', url: absoluteUrl(pagePath) },
])

const researchProjects = [
  {
    name: 'Pet AI Digital Care Log',
    mark: 'PA',
    stage: 'Research',
    stages: ['Research', 'Technology Development', 'Future Vision', 'Long-term Vision'],
    summary:
      '반려동물의 행동·생활·환경을 시간축으로 연결하고, 개체별 기준선과 실제 반응을 학습해 보호자의 이해와 돌봄을 돕는 Life Companion Intelligence 연구입니다.',
    href: '/research/pet-ai',
    accent: 'violet',
  },
  {
    name: 'Robot Vision',
    mark: 'RV',
    stage: 'Research',
    stages: ['Research', 'Future Vision'],
    summary:
      '돌봄·교육·생활·금융 등 인간 삶의 시간축 맥락과 현실의 결과를 연결해, 로봇이 누구에게 왜 지금 어떤 도움이 필요한지 이해하도록 만드는 Embodied AI 연구입니다.',
    href: '/research/robot-vision',
    accent: 'amber',
  },
]

export default function ResearchHubPage() {
  return (
    <div className="company-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />

      <CompanyPageHero
        eyebrow="Research · Life Intelligence"
        title={<>현실의 삶에서 배우고,<br className="hidden sm:block" /> 다음 지능으로 확장합니다</>}
        description={
          <p>
            드림에이아이랩은 돌봄·교육·생활·금융의 현실세계 기록과 결과를 이해하는 기술에서 출발해,
            반려동물과 로봇까지 <strong>개별 존재의 맥락을 이해하는 AI</strong>를 연구합니다.
          </p>
        }
        badges={['RWD · RWE', 'Outcome learning', 'Hyper-personalization', 'Pet · Robot research']}
        status={
          <p>
            연구의 공통 기반은{' '}
            <Link href="/technology" className="font-semibold underline underline-offset-4">
              AI디지털케어로그 정본 기술
            </Link>
            이며, 최초 고안·개발과 도메인 실증 이력은{' '}
            <Link href="/research/jung-haesung" className="font-semibold underline underline-offset-4">
              AI 연구자 정해성 공식 프로필
            </Link>
            에서 확인할 수 있습니다.
          </p>
        }
      />
      <CompanyNarrativeNav current="/research" />

      <ResearchLifeIntelligence mode="hub" />

      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-primary-700">
              <MarketingIcon name="alert" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="mb-2 text-lg font-bold text-slate-950">Research vs Products</h2>
              <p className="text-sm leading-relaxed text-slate-600">
                <Link href="/services" className="font-medium text-primary-700 underline underline-offset-4">
                  서비스(Products)
                </Link>
                는 현재 운영·Pilot·개발 중인 도메인 플랫폼입니다.{' '}
                <strong>Research</strong>는 공통 아키텍처를 새로운 대상과 물리적 실행체에 적용하기 위한
                연구·검증 로드맵입니다. 현재 제품의 데이터가 자동으로 연구에 합쳐진다는 뜻이 아니며,
                목적별 동의·권한·품질 기준을 먼저 통과해야 합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="company-section">
        <div className="company-container">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-primary-700">Research horizons</p>
            <h2 className="company-section-title mt-3">갑작스러운 확장이 아니라, 현재의 학습을 다음 연구로 연결합니다</h2>
            <p className="company-section-lead">모든 영역을 하나의 제품으로 묶는다는 뜻이 아닙니다. 관찰·시간축·맥락·행동·결과라는 공통 연구 질문을 각 대상의 권리와 환경에 맞게 새로 검증합니다.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {[
              { step: 'NOW · Domain systems', title: '인간 삶의 시간축 지능', description: '돌봄·교육·건강·생활·금융에서 관찰→판단→실행→결과를 연결하고, 각 도메인의 안전·권한 안에서 개인화를 검증합니다.', href: '/services' },
              { step: 'NEXT · Animal intelligence', title: 'Pet AI', description: '반려동물의 행동·환경을 개체별 기준선과 연결하고 실제 반응으로 다음 돌봄을 조정하는 Life Companion Intelligence를 연구합니다.', href: '/research/pet-ai' },
              { step: 'HORIZON · Embodied AI', title: 'Robot Vision', description: '로봇이 장면을 인식하는 데서 나아가 인간 삶의 장기 맥락과 행동 권한을 이해하고 안전하게 돕는 방향을 연구합니다.', href: '/research/robot-vision' },
            ].map((item) => (
              <Link key={item.step} href={item.href} className="company-card group transition hover:border-primary-200 hover:bg-blue-50">
                <p className="text-xs font-black uppercase tracking-wider text-primary-700">{item.step}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950 group-hover:text-primary-700">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                <span className="mt-6 inline-flex text-sm font-bold text-primary-700">자세히 보기 →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">연구 프로젝트</h2>
            <p className="text-gray-600">현재 공개하는 Research / Future Vision 항목입니다.</p>
          </div>
          <div className="space-y-6">
            {researchProjects.map((p) => {
              const isAmber = p.accent === 'amber'
              return (
                <Link
                  key={p.name}
                  href={p.href}
                  className={
                    isAmber
                      ? 'block rounded-2xl border border-amber-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-amber-300 transition-all'
                      : 'block rounded-2xl border border-violet-200 bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-violet-300 transition-all'
                  }
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div
                      className={
                        isAmber
                          ? 'shrink-0 w-14 h-14 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-lg'
                          : 'shrink-0 w-14 h-14 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-lg'
                      }
                    >
                      {p.mark}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{p.name}</h3>
                        {p.stages.map((s) => (
                          <span
                            key={s}
                            className={
                              isAmber
                                ? 'inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900'
                                : 'inline-flex px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-100 text-violet-800'
                            }
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.summary}</p>
                      <span className={isAmber ? 'text-amber-700 font-semibold text-sm' : 'text-violet-700 font-semibold text-sm'}>
                        연구 상세 보기 →
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-6">관련 페이지</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/technology"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              기술
            </Link>
            <Link
              href="/vision"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              비전
            </Link>
            <Link
              href="/services"
              className="px-5 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-800 font-semibold hover:bg-gray-50 text-sm"
            >
              서비스 (Products)
            </Link>
            <Link
              href="/contact?type=tech&service=research"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 text-sm"
            >
              R&D 문의
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
