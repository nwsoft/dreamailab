import type { Metadata } from 'next'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '비전 - 드림에이아이랩',
  description: '데이터 표준화로 누구나 동등한 의료·돌봄·교육에 접근하도록 하고, 기술이 사람을 향하는 미래를 만듭니다.',
  keywords: '드림에이아이랩, 비전, 데이터 표준화, 사회적 가치, 임팩트, 투자',
}

export default function Vision() {
  const visionPoints = [
    {
      title: '동등한 기회',
      description: '부·지역·환경의 차이를 넘어 누구나 필수 서비스에 접근할 수 있도록 합니다.',
      icon: '⚖️'
    },
    {
      title: '데이터 표준화',
      description: '가정·학교·병원·기관의 기록을 하나의 표준으로 통합해 신뢰를 만듭니다.',
      icon: '📊'
    },
    {
      title: '사람을 향한 기술',
      description: 'AI는 사람을 대체하지 않습니다. 돌봄을 보조하고 삶의 질을 높이는 방향으로 사용합니다.',
      icon: '🤝'
    },
    {
      title: '지속 가능한 임팩트',
      description: '현장의 기록이 연구와 정책 개선으로 이어지고, 다시 현장에 환류되는 선순환을 만듭니다.',
      icon: '🔁'
    }
  ]


  const goals = [
    {
      year: '2025',
      title: '사회적 포용성 확대',
      description: '더 많은 소외계층과 취약계층이 우리의 AI 서비스를 통해 삶의 질을 향상시킬 수 있도록 서비스를 확장합니다.'
    },
    {
      year: '2026',
      title: '기술적 혁신',
      description: '최신 AI 기술을 활용하여 더욱 정교하고 효과적인 사회적 문제 해결 솔루션을 개발합니다.'
    },
    {
      year: '2027',
      title: '글로벌 영향력',
      description: '한국을 넘어 전 세계의 소외계층을 위한 AI 솔루션을 제공하여 글로벌 사회적 가치를 창출합니다.'
    },
    {
      year: '2030',
      title: '지속 가능한 미래',
      description: '기술과 인간이 조화롭게 공존하는 세상을 만들어 모든 사람이 더 나은 내일을 경험할 수 있도록 합니다.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20 md:py-24 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              비전
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              데이터 표준화로 누구나 동등한 의료·돌봄·교육에 접근하는 세상. 
              기술은 사람을 향하고, 기록은 신뢰가 됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="pt-16 pb-10 lg:pt-20 lg:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              우리의 미션
            </h2>
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
              <p className="text-2xl md:text-3xl font-bold mb-6">
                "기술의 힘으로 사회적 문제를 해결하고, 삶의 질을 향상시키는 것"
              </p>
              <p className="text-lg text-gray-100 max-w-4xl mx-auto">
                우리는 단순히 기술적 진보를 넘어, 실제로 사람들의 삶에 긍정적인 영향을 미치고자 합니다. 
                취약계층과 소외계층의 삶을 개선하고자 하는 깊은 관심에서 시작된 우리의 여정은, 
                모든 사람이 기술적 장벽 없이 혜택을 누릴 수 있는 세상을 꿈꿉니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision (Founder Statement) */}
      <section className="pt-6 lg:pt-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              우리의 비전
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              지속 가능한 미래와 혁신을 통한 변화를 추구합니다
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💫</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  가능성을 믿는 모든이들에게
                </h3>
                <p className="text-gray-600">
                  기술로 세상을 바꾸는 우리의 약속
                </p>
              </div>
              
              <blockquote className="relative">
                <div className="absolute -top-4 -left-4 text-6xl text-blue-200 opacity-60">"</div>
                <div className="relative z-10">
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 mb-8 font-medium">
                    우리는 세상에 불가능은 없다고 믿습니다.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                    기술은 한계를 넘어서는 도구이며, 도전은 새로운 가능성을 현실로 바꾸는 힘입니다. 
                    지금까지의 모든 기술은 누군가의 용기 있는 시도에서 비롯되었고, 
                    드림에이아이랩은 그 정신을 이어 오늘 필요한 미래를 지금 여기에서 만들어 가겠습니다.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6">
                    특히 <strong className="text-blue-600">발달장애, 노인질환·치매, 의료·항암 등 사회적 난제</strong>에 
                    우리의 역량을 집중하여, <strong className="text-cyan-600">데이터로 이해하고 AI로 돕는 방식</strong>으로 
                    사회 전반의 문제 해결에 기여하겠습니다.
                  </p>

                  <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                    <strong className="text-gray-900">누구나, 어디서나, 동등한 기회를 누리는 세상</strong> — 
                    그 미래를 앞당기겠습니다.
                  </p>
                </div>
                <div className="absolute -bottom-4 -right-4 text-6xl text-cyan-200 opacity-60">"</div>
              </blockquote>
              
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">DAL</span>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-semibold text-gray-900">드림에이아이랩</p>
                    <p className="text-sm text-gray-600">공동창업자 일동</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Future Goals */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              미래를 위한 우리의 약속
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              2030년까지 달성하고자 하는 우리의 구체적인 목표들입니다.
            </p>
          </div>

          <div className="space-y-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-100">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{goal.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              핵심 가치
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              우리가 추구하는 핵심 가치들이 미션과 비전을 실현하는 기반이 됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">사회적 가치</h3>
              <p className="text-gray-600">
                기술을 통해 사회적 문제를 해결하고 모든 사람의 삶의 질을 향상시킵니다.
              </p>
            </div>

            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">혁신</h3>
              <p className="text-gray-600">
                최신 AI 기술을 활용하여 혁신적인 사회적 문제 해결 솔루션을 개발합니다.
              </p>
            </div>

            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">🤝</span>
              </div>
              <h3 className="text-gray-900 mb-3">포용성</h3>
              <p className="text-gray-600">
                모든 사람이 기술적 장벽 없이 혜택을 누릴 수 있는 포용적인 솔루션을 제공합니다.
              </p>
            </div>

            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속가능성</h3>
              <p className="text-gray-600">
                지속 가능한 미래를 위해 기술과 인간이 조화롭게 공존하는 세상을 만듭니다.
              </p>
            </div>

            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">지속적 성장</h3>
              <p className="text-gray-600">
                사회적 가치 창출을 위해 끊임없이 노력하며 지속적으로 개선합니다.
              </p>
            </div>

            <div className="text-center border border-gray-100 shadow-md hover:shadow-lg rounded-xl p-8">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-secondary-600 text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">창의성</h3>
              <p className="text-gray-600">
                창의적인 사고를 통해 새로운 가능성을 발견하고 사회적 문제를 해결합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            비전을 함께 실현할 파트너를 찾습니다
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            우리의 기술과 서비스는 별도 페이지에서 자세히 확인하실 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/technology"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              기술 보기
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              서비스 보기
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 