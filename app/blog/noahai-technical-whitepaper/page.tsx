import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

export const metadata: Metadata = {
  title: '노아AI 공식 기술백서 | 세계 최초 AI 자율 재테크 플랫폼 기술 분석 | DreamAILab',
  description: 'DAL이 개발한 노아AI의 공식 기술백서. 세계 최초 실시간 AI 학습형 재테크 어시스턴트의 기술적 아키텍처, 강화학습 시스템, XAI 투명성 정책을 상세히 공개합니다.',
  keywords: [
    '노아AI 기술백서','AI 자율재테크 기술분석','강화학습 시스템','XAI 투명성',
    '멀티모달 AI 분석','실시간 학습','의료AI 금융적용','DAL 기술백서',
    'AI 디지털케어로그','트레이딩 케어로그','자율의사결정 AI','정해성',
    '드림에이아이랩','AI 트레이딩 엔진','패턴 유사성 분석','동적 임계값',
    '거래 파이프라인','AI 학습 데이터','실시간 모니터링','투명성 정책'
  ],
  openGraph: {
    title: '노아AI 공식 기술백서 | 세계 최초 AI 자율 재테크 플랫폼',
    description: 'DAL이 개발한 노아AI의 공식 기술백서. 세계 최초 실시간 AI 학습형 재테크 어시스턴트의 기술적 아키텍처를 상세히 공개합니다.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00Z',
    authors: ['정해성', 'DAL(드림에이아이랩)'],
    tags: ['AI 기술백서', '재테크 AI', '강화학습', 'XAI', '기술분석']
  }
}

export default function NoahAITechnicalWhitepaper() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            headline: '노아AI 공식 기술백서 | 세계 최초 AI 자율 재테크 플랫폼',
            description: 'DAL이 개발한 노아AI의 공식 기술백서. 세계 최초 실시간 AI 학습형 재테크 어시스턴트의 기술적 아키텍처를 상세히 공개합니다.',
            author: {
              '@type': 'Person',
              name: '정해성',
              affiliation: {
                '@type': 'Organization',
                name: 'DAL(드림에이아이랩)'
              }
            },
            publisher: {
              '@type': 'Organization',
              name: 'DreamAILab',
              logo: {
                '@type': 'ImageObject',
                url: 'https://dreamailab.com/favicon.svg'
              }
            },
            datePublished: '2025-01-20T00:00:00Z',
            dateModified: '2025-01-20T00:00:00Z',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://dreamailab.com/blog/noahai-technical-whitepaper'
            },
            about: {
              '@type': 'SoftwareApplication',
              name: '노아AI',
              applicationCategory: 'FinanceApplication',
              description: '세계 최초 실시간 AI 학습형 재테크 어시스턴트'
            },
            keywords: '노아AI 기술백서, AI 자율재테크, 강화학습, XAI, 멀티모달 AI',
            inLanguage: 'ko-KR'
          }) }} />
      </Head>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold mb-6">
              📖 공식 기술백서 v1.0
            </div>
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">노아AI 공식 기술백서</h1>
            <p className="text-lg md:text-xl mb-3 max-w-3xl mx-auto text-indigo-100">
              세계 최초 실시간 AI 학습형 재테크 어시스턴트의 기술적 아키텍처와 혁신을 상세히 공개
            </p>
            <p className="text-lg max-w-2xl mx-auto text-indigo-100">
              DAL의 의료 AI 기술을 금융에 적용한 혁신적 시스템의 모든 기술적 세부사항
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">목차</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">기술백서의 주요 구성과 핵심 내용을 확인하세요</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📖 서문 및 개요</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 프로젝트 개요 및 비전</li>
                <li>• 시장 문제 정의</li>
                <li>• 창안자 및 기술 기원</li>
                <li>• DAL의 기술 기반</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ 시스템 아키텍처</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 전체 시스템 구성도</li>
                <li>• 핵심 모듈 역할</li>
                <li>• 거래소별 구조 차이</li>
                <li>• 멀티모달 AI 시스템</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤖 AI 트레이딩 엔진</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 실시간 학습 메커니즘</li>
                <li>• 강화학습 구조</li>
                <li>• 패턴 유사성 분석</li>
                <li>• 동적 임계값 조정</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔄 거래 파이프라인</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 전체 거래 프로세스</li>
                <li>• 시장 분석 단계</li>
                <li>• AI 신호 생성</li>
                <li>• 실시간 모니터링</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 AI 학습 데이터</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 강화학습 구조와 보상 설계</li>
                <li>• 학습 데이터 구조</li>
                <li>• 거래 통계 영구 저장</li>
                <li>• 성능 및 기술 성과</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🔍 XAI 투명성 정책</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• 투명성 원칙</li>
                <li>• 완전한 로그 공개</li>
                <li>• AI 결정 과정 투명화</li>
                <li>• 검증 가능한 구조</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Technical Highlights */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 기술 하이라이트</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">노아AI의 혁신적 기술적 성취와 차별점</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">세계 최초 개념</h3>
              <p className="text-gray-600 text-sm">AI가 사용자를 대신해 자산을 분석·투자·운용하는 자율형 재테크 플랫폼</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">의료 AI 기술 전이</h3>
              <p className="text-gray-600 text-sm">DAL의 검증된 AI 디지털케어로그 기술을 금융 트레이딩에 적용</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🔄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">실시간 강화학습</h3>
              <p className="text-gray-600 text-sm">매 거래마다 학습하여 성능을 지속적으로 개선하는 진화형 AI</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-4xl mb-4 text-center">🔍</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">XAI 투명성</h3>
              <p className="text-gray-600 text-sm">모든 거래 결정 과정을 투명하게 공개하는 설명 가능한 AI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Architecture Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">시스템 아키텍처 미리보기</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">노아AI의 핵심 시스템 구성과 모듈 역할</p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-8 text-green-400 font-mono text-sm">
            <div className="text-center mb-6">
              <div className="text-lg font-bold text-white mb-2">전체 시스템 구성도</div>
            </div>
            <div className="space-y-2">
              <div>┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐</div>
              <div>│   UI Dashboard  │◄──►│   Main Core     │◄──►│  UnifiedTrader  │</div>
              <div>│  (Modern UI)    │    │  (Controller)   │    │ (Trading Engine)│</div>
              <div>└─────────────────┘    └─────────────────┘    └─────────────────┘</div>
              <div>         │                       │                       │</div>
              <div>         ▼                       ▼                       ▼</div>
              <div>┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐</div>
              <div>│  AI Manager     │◄──►│   Evaluator     │◄──►│    Recorder     │</div>
              <div>│ (AI Learning)   │    │ (Coin Selection)│    │ (Data Storage)  │</div>
              <div>└─────────────────┘    └─────────────────┘    └─────────────────┘</div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">핵심 모듈 역할</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li><strong>analyzer.py:</strong> 시장 분석 및 AI 신호 생성</li>
                <li><strong>evaluator.py:</strong> 코인 선정 알고리즘 (5가지 차원)</li>
                <li><strong>unified_trader.py:</strong> 거래 실행 및 모니터링</li>
                <li><strong>ai_manager.py:</strong> AI 학습 및 패턴 강화</li>
                <li><strong>recorder.py:</strong> 데이터베이스 및 학습 데이터 관리</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">AI 학습 데이터 구조</h4>
              <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-xs">
                <div>{"{"}</div>
                <div>  "ai_learning_data": {"{"}</div>
                <div>    "signal_history": [...],</div>
                <div>    "pattern_analysis": {"{"}</div>
                <div>      "similarity_threshold": 0.7</div>
                <div>    {"}"},</div>
                <div>    "dynamic_thresholds": {"{"}</div>
                <div>      "confidence_threshold": 0.4</div>
                <div>    {"}"}</div>
                <div>  {"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-3">성능 벤치마크</h4>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li><strong>시작 시간:</strong> 46초 → 즉시 시작 (99% 개선)</li>
                <li><strong>거래 주기:</strong> 5-10초 초단위 트레이딩</li>
                <li><strong>승률:</strong> 50% → 75% (학습 후)</li>
                <li><strong>시스템 안정성:</strong> 99% 이상</li>
                <li><strong>메모리 효율:</strong> 최적화된 캐싱 시스템</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download and Related Links */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">관련 자료 및 링크</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">노아AI에 대한 더 자세한 정보와 관련 자료</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">노아AI 서비스 페이지</h3>
              <p className="text-gray-600 mb-6">노아AI의 주요 기능과 특징을 확인하세요</p>
              <Link 
                href="/services/finance"
                className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                서비스 보기
              </Link>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">실시간 거래 로그</h3>
              <p className="text-gray-600 mb-6">XAI 투명성 정책에 따른 실제 거래 과정 로그</p>
              <div className="bg-black rounded-lg p-4 text-green-400 font-mono text-xs mb-4">
                <div>2025-10-20 03:25:00 | INFO - [analysis] 시장 분석 시작</div>
                <div>2025-10-20 03:25:03 | INFO - [trade] ADAUSDT 시그널: SHORT</div>
                <div>2025-10-20 03:25:06 | INFO - [exit] ADAUSDT 익절 청산 완료</div>
              </div>
              <p className="text-gray-500 text-sm">모든 거래 과정이 실시간 로그로 기록됩니다</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4 text-center">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">B2B 엔터프라이즈 도입</h3>
              <p className="text-gray-600 mb-6">금융·핀테크·리서치 조직을 위한 맞춤형 솔루션</p>
              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                문의하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Details Summary */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">기술적 혁신 요약</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">노아AI가 달성한 기술적 성취와 혁신</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🚀 기술적 선행성</h3>
              
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">국내 최초 · 세계적 기술 선행성</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• <strong>국내 최초</strong> 실시간 AI 학습형 재테크 어시스턴트 플랫폼</li>
                  <li>• <strong>세계 최초</strong> 의료 AI 기반 시계열 예측 엔진을 금융 자산 운용 시스템에 적용</li>
                  <li>• <strong>DAL 독자 기술 파이프라인</strong>: 의료-교육-돌봄-금융 전 영역을 하나의 AI 구조로 연결</li>
                  <li>• <strong>비교 불가 영역</strong>: 단순 거래 자동화가 아닌, AI 자율의사결정형 자산운용 시스템</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">기술 전이 경로</h4>
                <div className="text-sm text-gray-600 space-y-2">
                  <div><strong>의료 AI 디지털케어로그 → 금융 트레이딩 AI</strong></div>
                  <div>• 시계열 데이터 분석 엔진</div>
                  <div>• 패턴 인식 및 예측 모델</div>
                  <div>• 실시간 학습 시스템</div>
                  <div>• 멀티모달 데이터 처리</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎯 차별화 요소</h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">기존 시스템과의 구조적 차이</h4>
                <div className="text-sm text-gray-600 space-y-3">
                  <div>
                    <strong>기술 범주:</strong><br/>
                    기존 자동매매 봇 → <strong>AI 기반 자산 운용 어시스턴트</strong>
                  </div>
                  <div>
                    <strong>학습 방식:</strong><br/>
                    규칙 기반 (정적) → <strong>AI 학습형 (동적·적응형)</strong>
                  </div>
                  <div>
                    <strong>투명성:</strong><br/>
                    블랙박스 → <strong>모든 판단 과정 로깅 및 설명 가능</strong>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">DAL만 가능한 이유</h4>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• <strong>의료 AI에서 검증된 시계열 예측 엔진</strong></li>
                  <li>• <strong>고속 멀티모달 데이터 파이프라인</strong></li>
                  <li>• <strong>자체 AI 강화학습 프레임워크 보유</strong></li>
                  <li>• <strong>검증된 학습 알고리즘 적용</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            노아AI 기술백서로 더 깊이 알아보기
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-indigo-100">
            세계 최초 AI 자율 재테크 플랫폼의 기술적 혁신과 아키텍처를 상세히 확인하세요.
            DAL의 의료 AI 기술이 금융에 적용된 혁신적 시스템의 모든 세부사항을 공개합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services/finance"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              노아AI 서비스 보기
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              기술 문의하기
            </Link>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-8 bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600 space-y-1 text-center">
            <p>본 기술백서는 실제 구현된 코드 기반(NoahAI v3.8.8.3)을 토대로 작성되었습니다.</p>
            <p>모든 알고리즘은 실제 거래 로그와 데이터베이스 기록을 통해 검증되었습니다.</p>
            <p><strong>© 2025 DAL(드림에이아이랩). All Rights Reserved.</strong></p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
