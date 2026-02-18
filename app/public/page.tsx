import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '공공 협력 - 정부·지자체·공공기관 | 드림에이아이랩',
  description: 'DAL AI디지털케어로그 플랫폼의 정책 정합성, 데이터 표준, 개인정보 보호 구조. 시범사업·공공 협력 문의.',
  openGraph: {
    title: '공공 협력 - 정부·지자체·공공기관 | 드림에이아이랩',
    description: 'DAL 플랫폼의 정책 정합성 및 사회적 가치. 시범사업 적용 가능 영역.',
    url: 'https://dreamailab.com/public',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 공공 협력' }],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function PublicPage() {
  const policyAreas = [
    { icon: '👶', title: '발달장애', desc: '2026년 국가 시범사업 추진. 발달장애 케어 표준화, IRB/RWE 연구' },
    { icon: '👴', title: '고령화·돌봄', desc: '장기요양보험·재가돌봄 정책과 연계. 시니어 케어 표준화' },
    { icon: '🏥', title: '디지털 헬스케어', desc: '초고령사회 대응, AI 의료 정책과 정합성' },
    { icon: '🎓', title: '개별화교육', desc: '2026 개별화교육 전환 대응, 교육 데이터 표준화' },
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
            DAL AI디지털케어로그 플랫폼은 정부 정책과 정합성을 갖추고 있으며, 
            시범사업·실증사업 적용이 가능한 구조입니다.
          </p>
        </div>
      </section>

      {/* 1. DAL 플랫폼 개요 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DAL 플랫폼 개요</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl">
            드림에이아이랩(DAL)은 돌봄·의료·교육 데이터를 표준화하는 플랫폼 기업입니다. 
            AI디지털케어로그 기술로 하나의 데이터 인프라 위에 발달장애, 시니어 돌봄, 의료 헬스케어, 교육, 국제결혼, 라이프스타일, 금융 등 7개 도메인을 연결합니다. 
            시범사업 적용 가능 구조, 지자체 및 공공기관 협력 모델, 데이터 기반 정책 지원 플랫폼입니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">5,700+</div>
              <div className="text-sm text-gray-600">등록 기관</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">22,000+</div>
              <div className="text-sm text-gray-600">돌봄사업자</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">7</div>
              <div className="text-sm text-gray-600">도메인</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary-700">국내 최초</div>
              <div className="text-sm text-gray-600">시장 선도 구조</div>
            </div>
          </div>
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
                <div className="text-3xl mb-3">{area.icon}</div>
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
              <p className="text-gray-600">2026년 정부 국가 시범사업 추진. 전국 5,700개 기관 기반.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">고령화·돌봄 디지털화</h3>
              <p className="text-gray-600">지자체·요양기관 연계 시범, 장기요양보험 정책 정합.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">개별화교육</h3>
              <p className="text-gray-600">2026 개별화교육 전환 대응, 특수학급 파일럿 검증 완료.</p>
            </div>
            <div className="bg-white rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">RWE·임상 연구</h3>
              <p className="text-gray-600">IRB 협약, 현장 근거(RWE) 데이터 기반 연구 지원.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">공공 협력 문의</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            정부·지자체·공공기관 담당자분들의 협력 문의를 환영합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              공공 협력 문의
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              투자 문의
            </Link>
            <Link href="/business" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              파트너십 문의
            </Link>
            <Link href="/services" className="border-2 border-white/70 text-white/95 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              서비스 체험
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
