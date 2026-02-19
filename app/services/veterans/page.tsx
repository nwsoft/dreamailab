import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '용감이AI - 참전용사 기념 AI 서비스 | 드림에이아이랩',
  description: '한국전쟁 참전용사들의 헌신과 희생을 기념하고, 역사적 인식을 증진시키는 AI 서비스입니다.',
  keywords: '참전용사, 한국전쟁, 용감이AI, 역사교육, 평화, 자람이유니버스'
}

export default function VeteransService() {
  const features = [
    {
      title: '참전국가 정보',
      description: '한국전쟁에 참전한 모든 국가들의 명단과 각국의 기여도 및 역할을 상세히 제공합니다.',
      icon: '🌍',
      details: [
        '참전국가 명단',
        '각국 기여도 분석',
        '참여 부대 정보',
        '역할 및 임무'
      ]
    },
    {
      title: '전투 정보',
      description: '주요 전투의 이름, 발생 일시, 위치, 결과, 그리고 역사적 중요성에 대한 정보를 제공합니다.',
      icon: '⚔️',
      details: [
        '전투 명칭 및 일시',
        '전투 위치 및 규모',
        '전투 결과 분석',
        '역사적 중요성'
      ]
    },
    {
      title: '용사들의 이야기',
      description: '참전 용사들의 개인적 경험, 인터뷰, 수상 내역 등 상세한 정보를 제공합니다.',
      icon: '👨‍✈️',
      details: [
        '개인 경험담',
        '인터뷰 기록',
        '수상 내역',
        '헌신과 희생'
      ]
    },
    {
      title: '교육 자료',
      description: '역사적 인식을 증진시키고 평화의 중요성을 재인식할 수 있는 교육 자료를 제공합니다.',
      icon: '📚',
      details: [
        '역사 교육 자료',
        '평화 교육 콘텐츠',
        '인터랙티브 학습',
        '세대 간 소통'
      ]
    }
  ]

  const projectGoals = [
    {
      title: '역사 기념',
      description: '참전용사들의 헌신과 숭고한 희생을 잊지 않고 기념합니다.',
      icon: '🕊️'
    },
    {
      title: '평화 교육',
      description: '역사적 인식을 증진시키고 평화의 중요성을 재인식합니다.',
      icon: '☮️'
    },
    {
      title: '세대 간 소통',
      description: '현재와 미래 세대에게 역사의 교훈을 전달합니다.',
      icon: '🤝'
    },
    {
      title: '사회적 가치',
      description: '자람이 유니버스의 사회적 문제 해결 목표를 실현합니다.',
      icon: '💝'
    }
  ]

  const informationProvided = [
    {
      category: '참전국가 정보',
      items: [
        '참전한 모든 국가들의 명단',
        '각국의 기여도 및 역할',
        '각 국가별 참여 부대의 명칭',
        '부대 규모 및 주요 활동'
      ]
    },
    {
      category: '전투 정보',
      items: [
        '주요 전투의 이름과 발생 일시',
        '전투 위치 및 규모',
        '전투 결과 및 영향',
        '역사적 중요성 분석'
      ]
    },
    {
      category: '용사 정보',
      items: [
        '참전 용사들의 개인적 경험',
        '인터뷰 및 증언 기록',
        '수상 내역 및 공적',
        '헌신과 희생의 이야기'
      ]
    },
    {
      category: '교육 자료',
      items: [
        '역사 교육 콘텐츠',
        '평화 교육 자료',
        '인터랙티브 학습 도구',
        '세대 간 소통 프로그램'
      ]
    }
  ]

  const jarameUniverse = [
    {
      title: '자람이 유니버스',
      description: '자람이팀에서 만든 AI 프로젝트의 통칭으로, 세계 최초 발달장애 인공지능 모델 자람이를 만든 프로젝트입니다.',
      icon: '🌌'
    },
    {
      title: '다양한 AI 프로젝트',
      description: '현대사회에 필요한 다양한 인공지능 프로젝트를 진행하고, 그것들을 기반으로 세계관을 구축합니다.',
      icon: '🚀'
    },
    {
      title: '자람이AI 연계',
      description: '모든 프로젝트를 기반으로 세계관을 구축하여 자람이AI와 연계하는 것이 최종 목표입니다.',
      icon: '🔗'
    },
    {
      title: '사회적 문제 해결',
      description: '기술이 인간의 삶을 어떻게 풍요롭게 하고 역사적 이해를 어떻게 돕는지를 탐구합니다.',
      icon: '🎯'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🇰🇷</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              용감이AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              참전용사 기념 AI 서비스
            </p>
            <p className="text-lg max-w-2xl mx-auto text-red-100">
              1950년 한국전쟁 당시 민주주의를 수호하기 위해 참전한 국가들과 
              목숨을 걸고 먼나라까지 와서 이땅의 자유를 위해 청춘을 희생한 
              용사들의 헌신과 숭고한 희생에 대한 감사를 표현합니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://thankstounveterans.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                서비스 이용하기
              </a>
              <Link 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
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
                우리가 잊지 말아야 할 역사
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                용감이AI는 자람이 유니버스 프로젝트의 일환으로 개발된 서비스입니다. 
                이 프로젝트는 역사적 인식을 증진시키고, 평화의 중요성을 재인식하는 것을 목표로 합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                1950년 북한의 남침으로 발발한 한국전쟁 당시, 민주주의를 수호하기 위해 
                참전한 국가들과 목숨을 걸고 먼나라까지 와서 이땅의 자유를 위해 
                청춘을 희생한 용사들의 헌신과 숭고한 희생에 대한 감사를 표현합니다.
              </p>
              <p className="text-lg text-gray-600">
                우리가 그들을 잊지 않기 위해 진행된 이 프로젝트는 
                현재와 미래 세대에게 역사의 교훈을 전달하고, 
                더 나은 미래를 위한 교육적 기반을 마련합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 목표</h3>
              <div className="space-y-4">
                {projectGoals.map((goal, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-2xl mr-3">{goal.icon}</span>
                    <div>
                      <h4 className="font-semibold text-gray-900">{goal.title}</h4>
                      <p className="text-gray-600">{goal.description}</p>
                    </div>
                  </div>
                ))}
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
              제공 정보
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              용감이AI는 한국전쟁 참전용사들과 관련된 포괄적이고 상세한 정보를 제공합니다.
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
                      <span className="text-red-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              상세 정보 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적으로 분류된 정보로 한국전쟁과 참전용사에 대한 깊이 있는 이해를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {informationProvided.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="text-red-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jarame Universe */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자람이 유니버스 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              용감이AI는 자람이 유니버스의 일환으로, 사회적 가치를 추구하는 AI 프로젝트입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jarameUniverse.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-red-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            평화와 자유를 위한 헌신을 기억합니다
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-red-100">
            용감이AI는 참전용사들의 헌신과 희생을 잊지 않고, 
            현재와 미래 세대에게 역사의 교훈을 전달하여 
            더 나은 평화로운 세상을 만들어가는데 기여합니다.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-red-100">
            이는 단순한 정보 제공을 넘어, 우리 모두가 역사를 기억하고 
            평화의 소중함을 되새기는 교육적 플랫폼입니다.
          </p>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Live Service</span>
          <p className="text-gray-600">용감이AI는 무료로 제공되는 서비스입니다. 참전용사들의 이야기와 한국전쟁 역사를 학습할 수 있습니다.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">용감이AI는 드림에이아이랩의 AI 챗봇 서비스로, 법률이AI·마음이AI·히포크라테스AI 등과 함께 DAL AI 플랫폼을 구성합니다.</p>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 용감이AI를 이용해보세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            무료로 제공되는 서비스로, 누구나 쉽게 참전용사들의 이야기와 
            한국전쟁의 역사를 학습할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://thankstounveterans.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              서비스 이용하기
            </a>
            <Link 
              href="/contact"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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