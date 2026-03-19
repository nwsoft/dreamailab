import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '독립운동AI - 독립운동가 정보 AI 서비스 | 드림에이아이랩',
  description: '대한민국 독립운동 및 친일 행적에 대한 깊이 있는 정보를 제공하는 AI 서비스입니다.',
  keywords: '독립운동, 독립운동가, 친일파, 일제강점기, 역사교육, 호국보은, 자람이프로젝트'
}

export default function IndependenceService() {
  const features = [
    {
      title: '독립운동가 정보',
      description: '일제강점기부터 대한민국 독립까지 독립운동가들의 생애, 활동, 업적에 대한 상세한 정보를 제공합니다.',
      icon: '🏛️',
      details: [
        '독립운동가 생애',
        '주요 활동 및 업적',
        '역사적 기여도',
        '수상 내역 및 공적'
      ]
    },
    {
      title: '친일 행적 정보',
      description: '일제강점기 동안의 친일 행적에 대한 깊은 이해를 통해 역사의 교훈을 되새길 수 있습니다.',
      icon: '📜',
      details: [
        '친일파 역사적 배경',
        '친일 행적 상세 정보',
        '역사적 영향 분석',
        '교훈 및 반성 자료'
      ]
    },
    {
      title: '역사적 사실',
      description: '우리가 잊지 말아야 할 역사적 사실과 독립운동의 과정을 체계적으로 정리하여 제공합니다.',
      icon: '📚',
      details: [
        '독립운동 주요 사건',
        '역사적 맥락 분석',
        '시대별 변화 과정',
        '결과 및 영향'
      ]
    },
    {
      title: '교육 자료',
      description: '호국보은의 의미를 기리고, 우리 역사에 대한 이해와 관심을 증진시키는 교육 자료를 제공합니다.',
      icon: '🎓',
      details: [
        '역사 교육 콘텐츠',
        '인터랙티브 학습',
        '세대 간 소통 자료',
        '정체성 교육 프로그램'
      ]
    }
  ]

  const projectGoals = [
    {
      title: '역사 기념',
      description: '독립운동가들의 노력과 헌신을 기리고, 그들의 이야기를 통해 영감을 전달합니다.',
      icon: '🕊️'
    },
    {
      title: '교육적 가치',
      description: '과거를 기리며 현재를 이해하고, 미래를 준비하는 데 필요한 지식과 영감을 제공합니다.',
      icon: '📖'
    },
    {
      title: '정체성 발견',
      description: '장애인, 다문화가정, 소외계층이 역사를 이해하고 자신의 정체성을 발견할 수 있도록 지원합니다.',
      icon: '🔍'
    },
    {
      title: '사회적 통합',
      description: '기술이 인간의 삶을 풍요롭게 하고 역사적 이해를 돕는 방식을 탐구합니다.',
      icon: '🤝'
    }
  ]

  const informationProvided = [
    {
      category: '독립운동가 정보',
      items: [
        '독립운동가들의 생애',
        '주요 활동 및 업적',
        '역사적 기여도 분석',
        '수상 내역 및 공적'
      ]
    },
    {
      category: '친일 행적 정보',
      items: [
        '친일파의 역사적 배경',
        '친일 행적 상세 정보',
        '역사적 영향 분석',
        '교훈 및 반성 자료'
      ]
    },
    {
      category: '역사적 사건',
      items: [
        '독립운동 주요 사건',
        '역사적 맥락 분석',
        '시대별 변화 과정',
        '결과 및 영향 평가'
      ]
    },
    {
      category: '교육 자료',
      items: [
        '역사 교육 콘텐츠',
        '인터랙티브 학습 도구',
        '세대 간 소통 자료',
        '정체성 교육 프로그램'
      ]
    }
  ]

  const targetUsers = [
    {
      title: '학생 및 교육자',
      description: '역사 교육을 통해 우리 민족의 정체성을 이해하고 학습합니다.',
      icon: '👨‍🎓',
      benefits: [
        '체계적인 역사 교육',
        '인터랙티브 학습 경험',
        '역사적 맥락 이해',
        '민족 정체성 확립'
      ]
    },
    {
      title: '장애인 및 소외계층',
      description: '접근성 높은 정보 제공으로 역사를 이해하고 자신의 정체성을 발견합니다.',
      icon: '♿',
      benefits: [
        '접근성 높은 정보 제공',
        '정체성 발견 지원',
        '사회적 통합 촉진',
        '역사적 소속감 형성'
      ]
    },
    {
      title: '다문화가정',
      description: '한국 역사를 이해하여 새로운 정체성을 형성하고 사회에 통합됩니다.',
      icon: '🌍',
      benefits: [
        '한국 역사 이해',
        '문화적 정체성 형성',
        '사회 통합 지원',
        '세대 간 소통 촉진'
      ]
    },
    {
      title: '일반 시민',
      description: '우리 역사에 대한 이해와 관심을 증진시키고 호국보은의 의미를 기립니다.',
      icon: '👥',
      benefits: [
        '역사적 인식 증진',
        '호국보은 정신 함양',
        '민족 자긍심 고취',
        '미래 지향적 사고'
      ]
    }
  ]

  const jarameProject = [
    {
      title: '자람이 프로젝트',
      description: '사회적 문제 해결을 위한 다양한 인공지능 기술을 개발하는 목표를 가지고 있습니다.',
      icon: '🌱'
    },
    {
      title: '기술과 인간',
      description: '기술이 인간의 삶을 어떻게 풍요롭게 하고 역사적 이해를 어떻게 돕는지를 탐구합니다.',
      icon: '🤖'
    },
    {
      title: '과거와 미래',
      description: '과거를 기리며 현재를 이해하고, 미래를 준비하는 데 필요한 지식과 영감을 제공합니다.',
      icon: '⏰'
    },
    {
      title: '사회적 가치',
      description: '소외계층과 취약계층을 위한 지원을 통해 사회적 통합을 촉진합니다.',
      icon: '💝'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">🏛️</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              독립운동AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              독립운동가 정보 AI 서비스
            </p>
            <p className="text-lg max-w-2xl mx-auto text-blue-100">
              대한민국 독립운동 및 친일 행적에 대한 깊이 있는 정보를 제공하는 서비스입니다. 
              일제강점기부터 대한민국의 독립까지, 우리가 잊지 말아야 할 역사적 사실과 
              독립운동가들의 업적을 탐색할 수 있습니다.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://koreanheroes.or.kr"
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
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                우리 역사를 잊지 말아야 합니다
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                독립운동AI는 자람이 프로젝트의 일환으로, 기술이 인간의 삶을 어떻게 풍요롭게 하고 
                역사적 이해를 어떻게 돕는지를 탐구합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                이 프로젝트는 역사 속에서 중요한 역할을 한 독립운동가들의 노력과 헌신을 기리고, 
                그들의 이야기를 통해 현재와 미래 세대에게 영감을 주기 위해 시작되었습니다.
              </p>
              <p className="text-lg text-gray-600">
                일제 강점기 동안의 친일 행적에 대한 깊은 이해를 통해 역사의 교훈을 되새기며, 
                더 나은 미래를 위한 교육적 기반을 마련하고자 합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8">
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
              독립운동AI는 대한민국 독립운동과 관련된 포괄적이고 상세한 정보를 제공합니다.
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
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              대상 사용자
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              모든 이들이 우리 역사를 이해하고 자신의 정체성을 발견할 수 있도록 지원합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div className="text-3xl mb-4">{user.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{user.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{user.description}</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {user.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              상세 정보 카테고리
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              체계적으로 분류된 정보로 독립운동과 관련된 깊이 있는 이해를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {informationProvided.map((category, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jarame Project */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              자람이 프로젝트
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              독립운동AI는 자람이 프로젝트의 일환으로, 사회적 가치를 추구하는 AI 서비스입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {jarameProject.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            호국보은의 의미를 기립니다
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            독립운동AI는 독립운동가들의 노력과 헌신을 기리고, 
            현재와 미래 세대에게 역사의 교훈을 전달하여 
            더 나은 대한민국을 만들어가는데 기여합니다.
          </p>
          <p className="text-lg max-w-2xl mx-auto text-blue-100">
            이는 단순한 정보 제공을 넘어, 우리 모두가 역사를 기억하고 
            민족의 정체성을 되새기는 교육적 플랫폼입니다.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            지금 바로 독립운동AI를 이용해보세요
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            무료로 제공되는 서비스로, 누구나 쉽게 독립운동가들의 이야기와 
            우리 역사를 학습할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://koreanheroes.or.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              서비스 이용하기
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