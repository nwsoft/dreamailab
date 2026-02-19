import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '모두의AI - 누구나 만들 수 있는 AI 챗봇 플랫폼 | 드림에이아이랩',
  description: '대화만으로 나만의 AI 챗봇을 만들고, 커스터마이징하고, 공유할 수 있는 혁신적인 플랫폼입니다.',
  keywords: 'AI 챗봇, 챗봇 생성, AI 창작, 커스터마이징, 챗봇 플랫폼, 모두의AI'
}

export default function EveryoneService() {
  const features = [
    {
      title: '대화형 생성 마법사',
      description: 'ChatGPT처럼 대화로 챗봇을 만들 수 있습니다. 복잡한 설정 없이 자연스러운 대화만으로 나만의 AI를 창조하세요.',
      icon: '💬',
      details: [
        '프롬프트 자동 생성',
        '단계별 가이드',
        '실시간 미리보기',
        '직관적인 인터페이스'
      ]
    },
    {
      title: '무한한 창의성',
      description: '이상형, 연예인, 자영업자, 전문가 등 자유롭게 설정할 수 있습니다. 상상하는 모든 캐릭터를 AI로 구현하세요.',
      icon: '🎨',
      details: [
        '다양한 캐릭터 설정',
        '개성 있는 말투',
        '전문 분야 설정',
        '스타일 커스터마이징'
      ]
    },
    {
      title: '완벽한 커스터마이징',
      description: '이름, 말투, 스타일, 대화예시, 역할 등 모든 것을 세밀하게 조정할 수 있습니다.',
      icon: '⚙️',
      details: [
        '개인화된 설정',
        '고급 옵션',
        '템플릿 제공',
        '실시간 수정'
      ]
    },
    {
      title: '공유와 확산',
      description: '개인 사용 또는 플랫폼 상 공유를 선택할 수 있습니다. 다른 사용자들과 창작물을 나누세요.',
      icon: '🌐',
      details: [
        '공개/비공개 설정',
        'URL 공유',
        '커뮤니티 기능',
        '인기 챗봇 랭킹'
      ]
    }
  ]

  const useCases = [
    {
      title: '개인 창작',
      description: '나만의 이상형 AI를 만들어 대화를 나누거나, 특별한 캐릭터를 창조하여 즐거운 시간을 보내세요.',
      icon: '👤',
      examples: [
        '이상형 AI 연인',
        '좋아하는 연예인 AI',
        '상상 속 캐릭터',
        '개인 비서 AI'
      ]
    },
    {
      title: '전문가 활용',
      description: '의료, 법률, 교육 등 전문 분야에서 AI 어시스턴트를 만들어 업무 효율을 높이세요.',
      icon: '💼',
      examples: [
        '의료 상담 AI',
        '법률 자문 AI',
        '교육 도우미 AI',
        '비즈니스 컨설턴트 AI'
      ]
    },
    {
      title: '상업적 활용',
      description: '운세, 정보형 등 유료 서비스로 활용하여 새로운 수익 창출 기회를 만들어보세요.',
      icon: '💰',
      examples: [
        '운세 상담 AI',
        '투자 자문 AI',
        '쇼핑 도우미 AI',
        '고객 응대 AI'
      ]
    },
    {
      title: '커뮤니티',
      description: '다른 사용자들이 만든 챗봇과 대화하고, 인기 챗봇을 발견하여 새로운 경험을 해보세요.',
      icon: '👥',
      examples: [
        '인기 챗봇 탐색',
        '커뮤니티 참여',
        '피드백 공유',
        '창작자 네트워킹'
      ]
    }
  ]

  const businessModel = [
    {
      title: '프리미엄 기능',
      description: '고급 커스터마이징, 무제한 생성, 우선 지원 등 프리미엄 기능을 제공합니다.',
      icon: '⭐',
      features: [
        '무제한 챗봇 생성',
        '고급 설정 옵션',
        '우선 기술 지원',
        '전용 템플릿'
      ]
    },
    {
      title: '챗봇 마켓',
      description: '다른 사용자들이 만든 챗봇을 구독하거나 구매할 수 있는 마켓플레이스를 운영합니다.',
      icon: '🛒',
      features: [
        '프리미엄 챗봇 구매',
        '구독 서비스',
        '창작자 수익 분배',
        '품질 보증 시스템'
      ]
    },
    {
      title: 'B2B 솔루션',
      description: '기업과 자영업자를 위한 맞춤형 AI 챗봇 솔루션을 제공합니다.',
      icon: '🏢',
      features: [
        '기업 전용 플랫폼',
        '맞춤형 개발',
        'API 연동',
        '전담 지원팀'
      ]
    },
    {
      title: '광고 및 추천',
      description: '플랫폼 내 광고와 추천 시스템을 통한 수익 창출 모델을 구축합니다.',
      icon: '📢',
      features: [
        '타겟 광고',
        '추천 시스템',
        '파트너십',
        '데이터 분석'
      ]
    }
  ]

  const roadmap = [
    {
      phase: '1단계',
      title: '프로토타입',
      description: '기본적인 챗봇 생성 및 대화 기능',
      features: [
        '회원가입/로그인',
        '대화형 챗봇 생성',
        '기본 커스터마이징',
        '1:1 채팅 기능'
      ],
      timeline: '2024년 Q1'
    },
    {
      phase: '2단계',
      title: '베타 서비스',
      description: '공유 및 커뮤니티 기능 추가',
      features: [
        '챗봇 공유 기능',
        '커뮤니티 플랫폼',
        '랭킹 시스템',
        '고급 설정 옵션'
      ],
      timeline: '2024년 Q2'
    },
    {
      phase: '3단계',
      title: '상업화',
      description: '유료 서비스 및 마켓플레이스',
      features: [
        '프리미엄 기능',
        '챗봇 마켓',
        '결제 시스템',
        '창작자 수익 분배'
      ],
      timeline: '2024년 Q3'
    },
    {
      phase: '4단계',
      title: 'B2B 확장',
      description: '기업용 솔루션 및 API 제공',
      features: [
        'B2B 플랫폼',
        'API 서비스',
        '맞춤형 개발',
        '글로벌 확장'
      ],
      timeline: '2024년 Q4'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              모두의AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              누구나 만들 수 있는 AI 챗봇 플랫폼
            </p>
            <p className="text-lg max-w-2xl mx-auto text-violet-100">
              대화만으로 나만의 이상형/전문 캐릭터 챗봇을 만들고, 
              커스터마이징하고, 공유할 수 있는 혁신적인 플랫폼입니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                서비스 이용하기
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                모두가 AI 창작자가 되는 시대
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                모두의AI는 기존의 "소비" 중심 챗봇 서비스와 달리, 
                "창작과 소유"를 중심으로 한 혁신적인 플랫폼입니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                ChatGPT처럼 대화로 챗봇을 생성하고, 이상형, 연예인, 자영업자, 
                전문가 등 자유롭게 설정할 수 있습니다. 이름, 말투, 스타일, 
                대화예시, 역할 등 모든 것을 세밀하게 커스터마이징할 수 있습니다.
              </p>
              <p className="text-lg text-gray-600">
                개인 사용 또는 플랫폼 상 공유를 선택할 수 있으며, 
                다른 사용자들과 창작물을 나누고 새로운 경험을 할 수 있습니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">핵심 가치</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎯</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">사용 편의성</h4>
                    <p className="text-gray-600">ChatGPT처럼 대화로 챗봇 생성</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🧠</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">창의성 지원</h4>
                    <p className="text-gray-600">자유로운 캐릭터 설정</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🗂</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">커스터마이징</h4>
                    <p className="text-gray-600">디테일한 설정 가능</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-3">💬</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">공유와 확산</h4>
                    <p className="text-gray-600">커뮤니티 기반 성장</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 기능
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모두의AI만의 독특한 기능들로 누구나 쉽게 AI 챗봇을 만들 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <span className="text-violet-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              활용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              개인 창작부터 상업적 활용까지, 모두의AI는 다양한 목적으로 활용할 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{useCase.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>{example}</li>
                  ))}
                </ul>
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
              지속 가능한 성장을 위한 다양한 수익 창출 모델을 구축합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {businessModel.map((model, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{model.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{model.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="text-violet-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Roadmap */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              개발 로드맵
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적인 단계별 개발을 통해 완성도 높은 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-sm font-semibold mb-2">{phase.phase}</div>
                  <h3 className="text-lg font-bold mb-2">{phase.title}</h3>
                  <p className="text-violet-100 mb-4 text-sm">{phase.description}</p>
                  <ul className="text-sm space-y-1">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-xs text-violet-200">
                    {phase.timeline}
                  </div>
                </div>
                {index < roadmap.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-violet-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold mb-4">In Development</span>
          <p className="text-gray-600">모두의AI는 DAL의 AI 창작 플랫폼으로, 준비 중입니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">모두의AI는 DAL AI 플랫폼 위에 구축되며, 법률이AI·마음이AI 등 챗봇 서비스와 연동됩니다.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            지금 바로 모두의AI와 함께하세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-violet-100">
            모두가 AI 창작자가 되는 시대, 당신만의 특별한 AI 챗봇을 만들어보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-violet-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              서비스 이용하기
            </a>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors"
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