import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '마음이AI - 심리상담치료 AI 서비스 | 드림에이아이랩',
  description: '마음이AI는 국내최초 심리상담치료 AI 서비스입니다. 발달장애인과 가족들을 위한 맞춤형 심리상담을 제공하여 정신 건강을 돌봅니다.',
  keywords: '마음이AI, 심리상담, 심리치료, AI상담, 발달장애, 정신건강, 드림에이아이랩',
}

export default function MaeumeService() {
  const features = [
    {
      title: '개인화된 상담',
      description: '사용자의 감정을 세심하게 파악하여 맞춤형 심리상담을 제공합니다.',
      icon: '🎯'
    },
    {
      title: '24시간 접근 가능',
      description: '언제든지 필요한 순간에 심리상담 서비스를 이용할 수 있습니다.',
      icon: '⏰'
    },
    {
      title: '가족 중심 접근',
      description: '발달장애인뿐만 아니라 가족들의 정신 건강도 함께 돌봅니다.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      title: '안전한 환경',
      description: '개인정보 보호와 안전한 상담 환경을 최우선으로 합니다.',
      icon: '🔒'
    },
    {
      title: '감정 분석',
      description: '대화를 통해 사용자의 마음을 읽고 정서적 웰빙을 지원합니다.',
      icon: '💭'
    },
    {
      title: '전문적 조언',
      description: '심리학적 이론과 기법을 바탕으로 한 전문적인 조언을 제공합니다.',
      icon: '🧠'
    }
  ]

  const benefits = [
    {
      title: '스트레스 완화',
      description: '일상적인 스트레스와 정서적 어려움을 효과적으로 완화시킵니다.'
    },
    {
      title: '정서적 안정',
      description: '건강한 정신 상태를 유지하고 정서적 안정을 도모합니다.'
    },
    {
      title: '가족 관계 개선',
      description: '발달장애인과 가족 간의 이해를 돕고 관계를 개선합니다.'
    },
    {
      title: '자기 이해 증진',
      description: '자신의 감정을 더 잘 이해하고 정서적 성장을 지원합니다.'
    }
  ]

  const howToUse = [
    {
      step: '01',
      title: '서비스 접속',
      description: '마음이AI 웹사이트(maeume.org)에 접속합니다.'
    },
    {
      step: '02',
      title: '상담 시작',
      description: '상담하고 싶은 주제나 고민을 선택하고 대화를 시작합니다.'
    },
    {
      step: '03',
      title: '맞춤형 상담',
      description: 'AI가 사용자의 감정을 분석하여 개인화된 상담을 제공합니다.'
    },
    {
      step: '04',
      title: '지속적 지원',
      description: '정기적인 상담을 통해 지속적인 정신 건강 관리를 지원합니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">💙</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              마음이AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              모두를 위한 심리치료 파트너
            </p>
            <p className="text-lg max-w-2xl mx-auto text-teal-100">
              깊은 이해와 맞춤형 심리치료를 통해 모든 이의 정신 건강을 돌보는 
              국내최초 AI 기반 심리상담 서비스입니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://maeume.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                서비스 이용하기
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                마음이AI에 대하여
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                마음이AI는 사용자 각자의 독특한 경험과 감정을 소중히 여기며, 
                심리적 안정과 정서적 지원을 제공하는 것을 최우선 목표로 합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                특히, 발달장애인과 그 가족들이 겪는 특수한 도전과 환경을 
                기본적으로 이해하고, 이에 대한 심층적인 학습을 바탕으로 
                맞춤형 상담을 제공합니다.
              </p>
              <p className="text-lg text-gray-600">
                복잡한 정신 질환의 진단이나 약물 치료에 초점을 두지 않고, 
                정신과 치료와는 차별화된 접근을 통해, 사용자의 정서적 요구에 
                응답합니다.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">💙</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">국내최초</h3>
                  <p className="text-gray-600 mb-4">
                    2024년부터 서비스하는 국내최초 심리상담치료 AI 서비스
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">24/7</div>
                      <div className="text-gray-600">상담 가능</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">100%</div>
                      <div className="text-gray-600">개인정보 보호</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              주요 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              마음이AI가 제공하는 혁신적인 심리상담 기능들입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              마음이AI의 혜택
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              마음이AI와 함께라면 더 건강한 정신 상태를 유지할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이용 방법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 4단계로 마음이AI 서비스를 이용하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              서비스 대상
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              마음이AI는 모든 이들을 위한 심리상담 서비스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🧒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">발달장애인</h3>
              <p className="text-gray-600">
                발달장애인들의 정서적 웰빙과 심리적 안정을 지원합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">가족 구성원</h3>
              <p className="text-gray-600">
                발달장애인을 돌보는 가족들의 스트레스와 우울을 완화합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">일반 사용자</h3>
              <p className="text-gray-600">
                누구든지 필요할 때 신뢰할 수 있는 정신 건강 지원을 받을 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            지금 바로 마음이AI와 함께하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-teal-100">
            건강한 정신 상태를 유지하며, 삶의 질을 한 단계 끌어올릴 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://maeume.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              서비스 이용하기
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 