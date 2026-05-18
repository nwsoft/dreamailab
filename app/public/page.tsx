import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageClosingSection from '../../components/PageClosingSection'
import Link from 'next/link'
import { COMPANY_META_LINE } from '../../lib/company-copy'
import { MarketingIcon, type MarketingIconName } from '../../components/MarketingIcon'

const publicCanonical = 'https://dreamailab.com/public'
const publicDescription =
  'DAL AI디지털케어로그 플랫폼의 정책 정합성, 데이터 표준, 개인정보 보호 구조. 시범사업·공공 협력 문의.'

export const metadata: Metadata = {
  title: '공공 협력 - 정부·지자체·공공기관 | 드림에이아이랩',
  description: publicDescription,
  alternates: { canonical: publicCanonical },
  openGraph: {
    title: '공공 협력 - 정부·지자체·공공기관 | 드림에이아이랩',
    description: 'DAL 플랫폼의 정책 정합성 및 사회적 가치. 시범사업 적용 가능 영역.',
    url: publicCanonical,
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 공공 협력' }],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '공공 협력 - 정부·지자체·공공기관 | 드림에이아이랩',
    description: publicDescription,
    images: ['/og-image.png'],
  },
}

export default function PublicPage() {
  const policyAreas: { icon: MarketingIconName; title: string; desc: string }[] = [
    { icon: 'sprout', title: '발달장애', desc: '2026년 국가 시범사업 추진. 발달장애 케어 표준화, IRB/RWE 연구' },
    { icon: 'user', title: '고령화·돌봄', desc: '장기요양보험·재가돌봄 정책과 연계. 시니어 케어 표준화' },
    { icon: 'hospital', title: '디지털 헬스케어', desc: '초고령사회 대응, AI 의료 정책과 정합성' },
    { icon: 'graduation', title: '개별화교육', desc: '2026 개별화교육 전환 대응, 교육 데이터 표준화' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
            정부·지자체·공공기관
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">공공 협력</h1>
          <p className="text-xl max-w-3xl mx-auto">
            DAL AI디지털케어로그 플랫폼은 정부 정책 방향과 정합성을 지향하며,
            시범·실증 사업 논의에 필요한 표준·보안·동의 구조를 갖추고 있습니다.
          </p>
        </div>
      </section>

      {/* 1. DAL 플랫폼 개요 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DAL 플랫폼 개요</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl">
            {COMPANY_META_LINE}입니다.
            AI디지털케어로그로 공공·기관 협력과 시범사업에 대응합니다.
            시범·실증 사업 논의에 적합한 구조를 지향하며, 지자체·공공기관 협력과 데이터 기반 정책 지원을 함께 염두에 둔 플랫폼입니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">5,700+</div>
              <div className="text-sm text-gray-600">등록 기관</div>
              <div className="text-[11px] text-gray-400 mt-0.5">자람이(연계·등록)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">22,000+</div>
              <div className="text-sm text-gray-600">등록 사업자</div>
              <div className="text-[11px] text-gray-400 mt-0.5">시니어앤라이프(연계·등록)</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">6</div>
              <div className="text-sm text-gray-600">핵심 도메인</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">표준·시범</div>
              <div className="text-sm text-gray-600">정책 정합·파일럿</div>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-6 max-w-3xl">
            5,700+·22,000+는 공공·연계 등으로 플랫폼에 등록된 기관·사업자 규모이며, 전원의 일상적 제품 사용을 뜻하지 않습니다.
          </p>
        </div>
      </section>

      {/* 2. 정책 정합성 및 사회적 가치 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">정책 정합성 및 사회적 가치</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            DAL 플랫폼은 초고령사회 진입, 발달장애 국가 정책 강화, 디지털 헬스케어 확대, AI 정부 정책, 교육 개별화 정책 등 
            국내 정책 방향과 일치합니다.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policyAreas.map((area, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="mb-3 flex text-primary-600">
                  <MarketingIcon name={area.icon} className="h-9 w-9" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 데이터 표준 및 개인정보 보호 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">데이터 표준 및 개인정보 보호 구조</h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-4xl">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              FHIR/HL7 등 국제 표준 스키마 적용
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              동의 관리(Consent)·역할 기반 권한(RBAC)·감사로그
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              가명처리·비식별화·암호화
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              개인정보보호법·GDPR 준수
            </li>
          </ul>
        </div>
      </section>

      {/* 4. 실증 및 시범사업 적용 영역 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">실증 및 시범사업 적용 가능 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">발달장애 시범사업</h3>
              <p className="text-gray-600">2026년 정부 국가 시범사업 추진. 연계·등록으로 확보한 약 5,700개 기관 풀을 바탕으로 시범·확산을 논의합니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">고령화·돌봄 디지털화</h3>
              <p className="text-gray-600">지자체·요양기관 연계 시범, 장기요양보험 정책 정합.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">개별화교육</h3>
              <p className="text-gray-600">2026 개별화교육 전환 대응, 특수학급 등 파일럿·교육청 협력을 확대하는 단계입니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">RWE·임상 연구</h3>
              <p className="text-gray-600">IRB 협약, 현장 근거(RWE) 데이터 기반 연구 지원.</p>
            </div>
          </div>
        </div>
      </section>

      <PageClosingSection
        title="공공·기관 협력"
        description="정부·지자체·공공기관 담당자분의 협력·시범 문의를 받습니다."
        primary={{ label: '협력 문의', href: '/contact?type=b2b&service=platform' }}
      />

      <Footer />
    </div>
  )
}
