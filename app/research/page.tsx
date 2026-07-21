import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { MarketingIcon } from '../../components/MarketingIcon'
import { absoluteUrl, buildBreadcrumbJsonLd, buildPageMetadata, SITE_URL } from '../../lib/seo'

const pagePath = '/research'
const pageDescription =
  '드림에이아이랩 Research & Future Vision. AI Digital Care Log를 사람·동물·식물·로봇으로 확장하는 연구 방향. Pet AI Digital Care Log와 Robot Vision은 상용 서비스가 아닌 기술 개발 초기·연구 단계입니다.'

export const metadata: Metadata = buildPageMetadata({
  title: 'Research & Future Vision | 드림에이아이랩',
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
      '의료 플랫폼이 아니라, 반려동물의 삶 전체(행동·감정·환경·생활 추천)를 AI가 지속적으로 관찰·이해·학습하는 Life Companion Intelligence 연구입니다. 병원은 필요할 때만 연결되는 선택지 중 하나이며, 상용 서비스가 아닙니다.',
    href: '/research/pet-ai',
    accent: 'violet',
  },
  {
    name: 'Robot Vision',
    mark: 'RV',
    stage: 'Research',
    stages: ['Research', 'Future Vision'],
    summary:
      'AI Digital Care Log를 로봇의 AI Brain으로 확장하는 도메인 횡단 연구. 자람이·시니어앤라이프·토탈케어로그·에듀케어로그·베지케어·Pet AI의 데이터와 AI Core를 재사용하며, 상용 로봇 제품이 아닙니다.',
    href: '/research/robot-vision',
    accent: 'amber',
  },
]

export default function ResearchHubPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Header />

      <section className="bg-gradient-to-br from-slate-800 to-indigo-800 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
            <MarketingIcon name="flask" className="h-4 w-4" />
            Research · Future Vision · Technology Roadmap
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Research & Future Vision</h1>
          <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
            드림에이아이랩은 AI Digital Care Log를 사람에서 동물·식물·로봇으로 확장하는 장기 연구를
            진행합니다. 이 영역의 내용은 <strong>상용 서비스가 아닙니다</strong>.
          </p>
          <p className="text-sm text-white/70 mt-6 max-w-2xl mx-auto">
            기술 개발 초기 · 연구 개발 · 장기 비전으로 표시된 항목은 출시·운영을 의미하지 않습니다.
          </p>
          <p className="text-xs text-white/50 mt-3 max-w-2xl mx-auto">
            Research는 상단 메뉴가 아닌 서비스 생태계·푸터·관련 페이지에서 연결됩니다.
          </p>
        </div>
      </section>

      <section className="py-12 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-start">
            <div className="shrink-0 w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
              <MarketingIcon name="alert" className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-900 mb-2">Research vs Products</h2>
              <p className="text-sm text-amber-800 leading-relaxed">
                <Link href="/services" className="underline font-medium hover:text-amber-950">
                  서비스(Products)
                </Link>
                는 현재 운영·Pilot·개발 중인 도메인 플랫폼입니다.{' '}
                <strong>Research</strong>는 같은 AI Core를 새로운 대상(예: 반려동물)에 적용하기 위한
                연구·기술 로드맵이며, 판매·가입·출시 예정이 아닙니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">One AI Core</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              관찰 · 기록 · 분석 · 예측 · 맞춤형 관리 — 동일한 AI Core를 여러 Care Domain으로 확장합니다.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-indigo-100 shadow-sm mb-8">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/research/one-ai-core-domains-mobile.svg"
              />
              <img
                src="/images/research/one-ai-core-domains.svg"
                alt="One AI Core Multiple Care Domains — Human Animal Plant Robot"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
            {[
              { label: 'Human', desc: '사람 · 현재 축', href: '/services' },
              { label: 'Animal', desc: '반려동물 · 연구', href: '/research/pet-ai' },
              { label: 'Plant', desc: '웰니스 · 베지케어', href: '/services/veggie' },
              { label: 'Robot', desc: '장기 비전', href: '/research/robot-vision' },
            ].map((d) => (
              <Link
                key={d.label}
                href={d.href}
                className="rounded-xl border border-gray-200 bg-gray-50 p-4 hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
              >
                <div className="font-bold text-gray-900 mb-1">{d.label}</div>
                <div className="text-gray-600 text-xs">{d.desc}</div>
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
