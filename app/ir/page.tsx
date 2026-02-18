import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '투자·IR - 투자자 및 사업 협력 | 드림에이아이랩',
  description: 'DAL AI디지털케어로그 플랫폼의 시장 기회, 수익 모델, 데이터 자산. 투자 및 사업 협력 문의.',
  openGraph: {
    title: '투자·IR - 투자자 및 사업 협력 | 드림에이아이랩',
    description: 'DAL 플랫폼 시장 기회, 수익 모델, 확장성. 투자 검토 및 협력 문의.',
    url: 'https://dreamailab.com/ir',
    siteName: '드림에이아이랩',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: '드림에이아이랩 IR' }],
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function IRPage() {
  const marketOpportunities = [
    { icon: '🌱', title: '발달장애', desc: '383만+ 타겟, 5,700 기관 등록, 시장 선도', metric: '국내 최초' },
    { icon: '👴', title: '시니어', desc: '22,000+ 돌봄사업자, 초고령사회 진입', metric: '국내 유일' },
    { icon: '🏥', title: '의료·헬스케어', desc: '개인 맞춤 AI 주치의, RWE·항암 추적', metric: '확장 중' },
    { icon: '🎓', title: '교육', desc: '개별화교육 전환, 2026 정책 대응', metric: '파일럿 검증' },
  ]

  const revenueModels = [
    { title: 'B2B SaaS', items: ['기관 구독', '맞춤형 솔루션', 'API 사용료'] },
    { title: '라이센싱', items: ['AI 모델 라이선스', '기술 특허', '플랫폼 판매'] },
    { title: '정부·공공', items: ['시범사업', 'R&D 과제', '공공기관 계약'] },
    { title: '파트너십', items: ['공동 개발', '마케팅 협력', '배포 수수료'] },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/15 text-white/95 mb-6">
            투자자·사업 협력
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">투자·IR</h1>
          <p className="text-xl max-w-3xl mx-auto">
            DAL은 AI디지털케어로그 기반 플랫폼으로 
            플랫폼 확장 구조와 데이터 기반 확장성을 확보하고 있습니다.
          </p>
        </div>
      </section>

      {/* 1. DAL 플랫폼 핵심 요약 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">DAL 플랫폼 핵심 요약</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl">
            돌봄·의료·교육 데이터를 표준화하는 데이터 인프라 기업. 하나의 AI디지털케어로그 위에 7개 도메인을 연결하며, 
            초기 플랫폼 선점 단계의 4대 도메인(발달·시니어·국제결혼·베지터리안)을 확보하고 있습니다.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-primary-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">5,700+</div>
              <div className="text-sm text-gray-600">등록 기관</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">22,000+</div>
              <div className="text-sm text-gray-600">돌봄사업자</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">7</div>
              <div className="text-sm text-gray-600">도메인 확장</div>
            </div>
            <div className="bg-primary-50 rounded-xl p-5 text-center">
              <div className="text-2xl font-bold text-primary-700">1</div>
              <div className="text-sm text-gray-600">통합 플랫폼</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 시장 기회 및 성장 영역 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">시장 기회 및 성장 영역</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketOpportunities.map((opp, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl mb-2">{opp.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{opp.title}</h3>
                    <p className="text-gray-600">{opp.desc}</p>
                  </div>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                    {opp.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 수익 모델 구조 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">수익 모델 구조</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueModels.map((model, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{model.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {model.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 데이터 자산 및 플랫폼 확장성 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">데이터 자산 및 플랫폼 확장성</h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-4xl">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              표준 스키마 기반 데이터 축적 → 네트워크 효과
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              RWE(현장 근거) 데이터 → 임상·연구·신약 개발 연계
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              하나의 플랫폼 위 다도메인 확장 → 비용 효율
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              정부 정책 정합성 → 시범사업·R&D 과제 수주
            </li>
          </ul>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">투자 및 사업 협력 문의</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            투자자 및 사업 협력 파트너의 문의를 환영합니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              투자 문의
            </Link>
            <Link href="/business" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              비즈니스 상세
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
