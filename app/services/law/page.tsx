import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '법률이AI - 무료법률상담 AI 챗봇 | 드림에이아이랩',
  description: '자람이 유니버스 프로젝트의 일환으로 개발된 법률상담AI입니다. 누구나 쉽게 법률 정보를 접하고 초기 법률 상담을 받을 수 있으며, 사회적 약자들에게 법률 지원을 제공합니다.',
  keywords: '법률이AI, 무료법률상담, 법률상담AI, 법률챗봇, 법적조언, 사회적약자, 드림에이아이랩, 자람이유니버스',
}

export default function LawService() {
  const features = [
    {
      title: '무료 법률 상담',
      description: '누구나 무료로 이용할 수 있는 초기 법률 상담 서비스를 제공합니다.',
      icon: '💬'
    },
    {
      title: '법적 문제 분석',
      description: '사용자가 경험하는 법적 문제를 분석하고 적절한 조언을 제공합니다.',
      icon: '🔍'
    },
    {
      title: '권리 보호 방법',
      description: '법률에 대한 정보와 권리 보호 방법을 안내합니다.',
      icon: '🛡️'
    },
    {
      title: '법적 절차 안내',
      description: '복잡한 법적 절차를 이해하기 쉽게 설명하고 안내합니다.',
      icon: '📋'
    },
    {
      title: '실시간 상담',
      description: '24시간 언제든지 법률 상담을 받을 수 있는 접근성을 제공합니다.',
      icon: '⏰'
    },
    {
      title: '사회적 약자 지원',
      description: '법적 문제로 인한 금전적 부담이나 심리적 위축을 줄입니다.',
      icon: '🤝'
    }
  ]

  const businessModel = [
    {
      title: '무료 기본 상담',
      description: '모든 사용자가 무료로 이용할 수 있는 기본 법률 상담 서비스',
      icon: '💰',
      color: 'text-green-600'
    },
    {
      title: '포인트 충전 시스템',
      description: '1,000~10,000포인트 단위로 충전하여 고급 서비스 이용',
      icon: '💳',
      color: 'text-blue-600'
    },
    {
      title: 'AI 문서작성',
      description: '소장, 고소장, 답변서 등 법적 문서 자동 생성 (3,000포인트)',
      icon: '📄',
      color: 'text-purple-600'
    },
    {
      title: '변호사 매칭',
      description: '전문 분야와 지역 기반 변호사 추천 및 연결 서비스',
      icon: '⚖️',
      color: 'text-orange-600'
    }
  ]

  const pointServices = [
    {
      service: 'AI 문서작성',
      description: '소장, 고소장, 답변서 등',
      points: '3,000포인트',
      icon: '📝'
    },
    {
      service: '문서검토',
      description: '기존 문서 검토 및 수정',
      points: '1,500포인트',
      icon: '🔍'
    },
    {
      service: '서식 다운로드',
      description: '법적 서식 템플릿',
      points: '500포인트',
      icon: '📋'
    },
    {
      service: '변호사 즉시 연결',
      description: '특정 변호사 상담 연결',
      points: '2,000포인트',
      icon: '📞'
    }
  ]

  const matchingSystem = [
    {
      title: '전문 분야 분류',
      description: 'GPT로 대화내용에서 사건 유형 자동 분류 (이혼, 상속, 계약 등)',
      icon: '🏷️'
    },
    {
      title: '지역 기반 필터링',
      description: '사용자 입력 또는 GPS 기반 지역별 변호사 추천',
      icon: '📍'
    },
    {
      title: '상위 추천 시스템',
      description: '후기, 응답속도, 전문성 등을 종합한 스코어링',
      icon: '⭐'
    },
    {
      title: '입점자 관리',
      description: '변호사 등록 및 관리자 승인 시스템',
      icon: '👨‍💼'
    }
  ]

  const howToUse = [
    {
      step: '01',
      title: '법적 문제 입력',
      description: '경험하고 있는 법적 문제나 궁금한 사항을 자세히 입력합니다.'
    },
    {
      step: '02',
      title: 'AI 분석 및 조언',
      description: 'AI가 법적 문제를 분석하여 관련 법률 정보와 조언을 제공합니다.'
    },
    {
      step: '03',
      title: '추가 서비스 선택',
      description: '필요시 포인트를 충전하여 문서작성이나 변호사 연결 서비스를 이용합니다.'
    },
    {
      step: '04',
      title: '변호사 매칭',
      description: '전문 분야와 지역 기반으로 적합한 변호사를 추천받습니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">⚖️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              법률이AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              무료법률상담 AI 챗봇
            </p>
            <p className="text-lg max-w-2xl mx-auto text-blue-100">
              누구나 쉽게 법률 정보를 접하고, 법적 전문가와 상담하기 어려운 상황에서 
              초기 법률 상담 정보를 받을 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://legalconsultai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                서비스 이용하기
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
                법률이AI에 대하여
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                법률상담AI는 자람이 유니버스 프로젝트의 일환으로 시작되어 
                드림에이아이랩에서 개발된 서비스입니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                자람이 유니버스는 자람이팀에서 만든 AI 프로젝트의 통칭이며, 
                세계 최초 발달장애 인공지능 모델 자람이를 만든 프로젝트입니다.
              </p>
              <p className="text-lg text-gray-600">
                법적 문제로 인한 금전적 부담이나 심리적 위축을 줄이고, 
                사회적 약자들에게 법률 지원을 제공하기 위해 개발되었습니다.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚖️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">무료 법률 상담</h3>
                  <p className="text-gray-600 mb-6">
                    누구나 무료로 이용할 수 있는 법률 상담 서비스
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-gray-600">상담 가능</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">100%</div>
                      <div className="text-gray-600">무료</div>
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
              법률이AI가 제공하는 혁신적인 법률 상담 기능들입니다.
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

      {/* Business Model */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              비즈니스 모델
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              무료 기본 상담과 포인트 충전 시스템을 통한 현실적인 수익 모델
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessModel.map((model, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Point Services */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              포인트 서비스
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              1,000~10,000포인트 단위로 충전하여 고급 법률 서비스를 이용하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pointServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.service}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {service.points}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">결제 수단</h3>
              <p className="text-gray-600 mb-6">
                카드, 카카오페이, 토스, 네이버페이 연동으로 편리하게 결제하세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">💳 신용카드</span>
                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">💛 카카오페이</span>
                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">💙 토스</span>
                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold text-gray-700">🟢 네이버페이</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Matching System */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              변호사 매칭 시스템
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              전문 분야와 지역 기반으로 최적의 변호사를 추천해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {matchingSystem.map((system, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{system.title}</h3>
                <p className="text-gray-600">{system.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              이용 방법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 4단계로 법률이AI 서비스를 이용하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howToUse.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            사회적 약자를 위한 법률 지원
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            법적 문제로 인한 금전적 부담이나 심리적 위축을 줄이고, 
            사회적 약자들에게 법률 지원을 제공하기 위해 개발되었습니다.
          </p>
          <p className="text-lg max-w-2xl mx-auto">
            법률이AI는 누구나 무료로 이용할 수 있으며, 
            법적 문제로 인해 어려움을 겪고 있는 사회적 약자들에게 특히 유용합니다.
            실시간 법률 상담 및 법률 정보 접근성을 높여 모든 사람이 
            법적 권리를 보호받을 수 있도록 돕습니다.
          </p>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Live Service</span>
          <p className="text-gray-600">법률이AI는 legalconsultai.com에서 24/7 무료 법률 상담을 제공합니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">법률이AI는 DAL의 AI 챗봇 서비스로, 마음이AI·히포크라테스AI·글로벌커플케어 등과 연동하여 법률·의료·정착 지원을 연결합니다.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 법률이AI와 함께하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            누구나 쉽게 법률 정보를 접하고 초기 법률 상담을 받을 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <a 
               href="https://legalconsultai.com"
               target="_blank"
               rel="noopener noreferrer"
               className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
             >
               무료 상담 시작하기
             </a>
            <Link 
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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