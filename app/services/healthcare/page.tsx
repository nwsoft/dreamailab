import type { Metadata } from 'next'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '헬스케어AI 플랫폼 | AI 디지털케어로그 | 토탈케어로그',
  description:
    '토탈케어로그는 표준화된 AI 디지털케어로그를 기반으로 일상 기록→AI 분석→병원/약국/요양 연계를 통합 제공합니다. 항암집중 모드, 정신건강 맞춤 대화 챗봇까지 하나의 헬스케어AI 플랫폼으로 운영됩니다.',
  keywords:
    '토탈케어로그, 헬스케어AI, AI 디지털케어로그, 항암집중 모드, 정신건강 챗봇, 온라인 상담, AI 건강분석, 만성질환관리, 복약관리, 병원 비즈니스, 약국 연동, RWE 데이터',
}

export default function HealthcareService() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">토탈케어로그 — AI 디지털케어로그, 당신 삶의 케어 동반자</h1>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
              <strong>탄생부터 마지막까지</strong> 이어지는 전 생애 케어. AI 디지털케어로그가 생활 <strong>전방향</strong>을 잇습니다.
            </p>
            <p className="text-lg max-w-2xl mx-auto text-white/80">
              이 페이지는 <strong>헬스케어 적용</strong>을 소개합니다: 케어로그 → AI 분석 → 권고 → 의료 연계.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">전 생애</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">전방향(생활·교육·건강)</span>
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1 rounded-full">AI 디지털케어로그</span>
            </div>
            <div className="mt-6">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">Live Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Definition */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">올바른 의료 문화 — 정보 비대칭을 줄입니다</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              과장·광고 중심의 정보 대신, <strong>근거 기반</strong> 설명과 <strong>투명한 기대치</strong>를 제공합니다. 사용자가 스스로 이해하고 결정하도록 돕습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">근거 기반 설명(XAI)</h3>
              <p className="text-sm text-gray-700">권고·경보에는 <strong>이유</strong>와 <strong>근거</strong>(가이드라인·공식 라벨·통계)를 함께 제시합니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">과잉 진료 예방</h3>
              <p className="text-sm text-gray-700">고위험·비가역 결정은 <strong>세컨드 오피니언</strong>·경과 관찰 옵션을 안내해 성급한 결정을 줄입니다.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">광고·과장 검증</h3>
              <p className="text-sm text-gray-700">미용·한방·치과 등 다양한 치료에 대해 <strong>기대 효과·한계·부작용</strong>을 교육적으로 설명합니다.</p>
            </div>
          </div>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">산업 트렌드 — 광고 중심에서 케어 성과 중심으로</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <strong>광고·마케팅 중심</strong>에서 <strong>케어 성과 중심</strong>으로. 이제 블로그·검색 노출이 아니라 AI 케어로그가 선택 기준입니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">🏥 병원</h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 광고·내원 후 단절</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 케어로그 기반 리드 → 진료 준비 단축 → 재내원율↑</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">🏪 약국</h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 단발 판매</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 복약 순응도 → 리필 자동화 → 구독 모델</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2 text-lg">📢 마케팅</h3>
              <p className="text-sm text-gray-700"><strong>변화 전:</strong> 광고비 소진·효과 불명</p>
              <p className="text-sm text-gray-700"><strong>변화 후:</strong> 케어 성과로 평가 → 신뢰 기반 매칭</p>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-gray-500">본 서비스는 의료교육·의사결정을 돕는 정보 제공을 목표로 하며, 구체적 진단·치료는 의료전문가 판단을 따릅니다.</p>
        </div>
      </section>

      {/* 3. Solution */}
      {/* 토탈케어로그란 무엇인가 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">토탈케어로그란 무엇인가</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              인공지능 시대의 <strong>새로운 의료 운영체계</strong> — <strong>AI 디지털케어로그</strong>를 중심으로 진료실 중심에서
              <strong>일상 중심</strong>으로 전환하고, 개인에 맞춘 병원 여정을 재구성합니다.
            </p>
            <p className="mt-3 text-base text-gray-500 max-w-3xl mx-auto">
              토탈케어로그는 <strong>AI 디지털케어로그</strong>를 기반으로 진료실 밖의 시간을 의료의 일부로 바꾸는 
              <strong>헬스케어AI</strong>입니다. 아래 섹션에서 작동 원리와 실제 사용 흐름을 차근히 설명합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">일상 기록</h3>
              <p className="text-gray-700 text-center">
                증상·복약·수면·식사·운동·정서를 <strong>원클릭/음성</strong>으로 간편 기록합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">AI 분석</h3>
              <p className="text-gray-700 text-center">
                개인 기준치·추세·이상치를 자동 탐지. <strong>위험 신호</strong>를 조기 경보하고 권고합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg">
              <div className="text-4xl mb-4 text-center">🏥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">병원·약국 연계</h3>
              <p className="text-gray-700 text-center">
                플랫폼에 <strong>연동된 병원·약국</strong>과 안전하게 연계하고, 리포트를 공유해 진료 준비 시간을 줄입니다.
              </p>
            </div>
          </div>
          <div className="mt-10 bg-blue-600 text-white rounded-2xl p-8 shadow-lg text-center">
            <p className="text-xl font-semibold">
              <span className="text-yellow-300">핵심:</span> 플랫폼의 중심은 <strong>AI 디지털케어로그</strong>. 
              진료실 밖의 시간을 의료의 일부로 바꿔, 내원 전후로 <strong>케어가 끊기지 않도록</strong> 설계했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4. User Workflow */}
      {/* 전 생애 케어 흐름 — 한눈에 */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">전 생애 케어 흐름 — 한눈에</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              아이에서 시니어까지, 기록이 이어지고 AI가 보조하며 필요할 때 의료와 연결됩니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-1">👶</div>
              <p className="font-semibold text-gray-900">영유아</p>
              <p className="text-gray-700">보호자 기록(수면/수유/증상)</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-1">🧒</div>
              <p className="font-semibold text-gray-900">성장기</p>
              <p className="text-gray-700">예방접종·활동·학습/스트레스</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-1">🧑</div>
              <p className="font-semibold text-gray-900">성인</p>
              <p className="text-gray-700">웨어러블·자가기록·AI 상담</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-1">🏥</div>
              <p className="font-semibold text-gray-900">의료 연계</p>
              <p className="text-gray-700">필요 시 연동 병원/약국 연결</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-5 text-center">
              <div className="text-2xl mb-1">🥗</div>
              <p className="font-semibold text-gray-900">개인 맞춤</p>
              <p className="text-gray-700">영양·생활습관·복약 코칭</p>
            </div>
          </div>
        </div>
      </section>


      {/* 4. User Workflow — 사용자 체감 예시 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">사용자는 무엇을, 어떻게 체감하나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">일반 의료와 항암 환자 사례로 구체적인 워크플로우를 확인하세요.</p>
          </div>

          {/* 시나리오 3종 — 카드형 레이아웃 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 일반 의료 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">🩺<span>일반 의료 시나리오</span></h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li><strong>아침</strong>: 수면·증상 원클릭 기록 → AI가 패턴·트리거 분석</li>
                <li><strong>점심</strong>: 복약 알림·순응도 체크 → 누락 시 리마인드</li>
                <li><strong>오후</strong>: 이상치 감지 → 병원 예약 제안(연동 병원 리스트)</li>
                <li><strong>저녁</strong>: 식단 기록 → 영양 균형 가이드·약국 링크</li>
                <li><strong>주말</strong>: 1주 리포트(PDF) 생성 → 가족/의료진 공유</li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">이상치 경보</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">복약 순응도</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">PDF 리포트</span>
              </div>
            </div>

            {/* 항암 환자 */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">🎗️<span>항암 환자 시나리오</span></h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li><strong>시작</strong>: 레짐·스케줄 입력 → 부작용·체중 집중 추적 모드</li>
                <li><strong>매일</strong>: 오심/통증/피로 기록 → 위험 신호 조기 경보</li>
                <li><strong>식단</strong>: 약물·증상 기반 영양식 추천 → 체중·수분 관리</li>
                <li><strong>가족</strong>: 보호자 공유·상태 변화 알림</li>
                <li><strong>장기</strong>: 재발 징후·만성 부작용 모니터링</li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">부작용 경보</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">영양 코칭</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">가족 공유</span>
              </div>
            </div>

            {/* 한방병원 */}
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">🌿<span>한방병원 시나리오</span></h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-800">
                <li><strong>문진</strong>: 증상·체질·생활기록 입력 → 케어로그와 통합</li>
                <li><strong>권고</strong>: 한약/침/온열·생활 가이드(근거·주의 포함)</li>
                <li><strong>경과</strong>: 수면·통증·식사 변화 기록 → 권고 자동 조정</li>
                <li><strong>연계</strong>: 필요 시 양방 검사·병원 협진 안내</li>
                <li><strong>리포트</strong>: 주간 요약(PDF) 생성·공유</li>
              </ol>
              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">근거/주의 고지</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">협진 연계</span>
                <span className="px-2 py-1 rounded-full bg-white/70 text-gray-800">경과 모니터링</span>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-500">본 시나리오는 사용자 교육 목적의 예시이며, 진단·치료는 의료전문가의 판단을 따릅니다.</p>
        </div>
      </section>

      {/* 5. Technology Advantage (Short) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">어떻게 작동하나 — 디지털케어로그 파이프라인</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              수집 → 표준화 → AI 분석 → 권고 → 연계, 5단계로 일상 데이터를 <strong>실사용 증거(RWE)</strong>로 전환합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">📥</div>
              <h3 className="font-bold text-gray-900 mb-2">1. 수집</h3>
              <p className="text-sm text-gray-700">앱·음성·웨어러블·설문으로 자동/수동 수집</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">2. 표준화</h3>
              <p className="text-sm text-gray-700">통일된 스키마로 정규화 (의료 상호운용성)</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="font-bold text-gray-900 mb-2">3. AI 분석</h3>
              <p className="text-sm text-gray-700">개인 기준치·추세·이상치·트리거 탐지</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold text-gray-900 mb-2">4. 권고</h3>
              <p className="text-sm text-gray-700">
                행동 가이드·복약 스케줄·식단 개선 제안을 통해, 
                의료진과 상의할 수 있는 <strong>질문 포인트</strong>를 정리해 줍니다.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-2">🔗</div>
              <h3 className="font-bold text-gray-900 mb-2">5. 연계</h3>
              <p className="text-sm text-gray-700">병원/약국/요양/가족과 리포트·알림 공유</p>
            </div>
          </div>
          <div className="mt-8 bg-cyan-600 text-white rounded-xl p-6 shadow-lg">
            <p className="text-center text-lg font-semibold">
              이 파이프라인은 <strong>RWE(실사용 증거)</strong> 생성으로 이어집니다. 자세한 연구 협력과 학습 방법은 
              <a href="#rwe" className="underline font-bold">아래 '데이터·연구 협력(RWE)'</a>에서 확인하세요.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Technology Advantage — XAI (계속) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">설명 가능한 AI(XAI) — 환자가 이해하는 내 치료</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              "무슨 치료를 받는지, 이 약이 왜 필요한지, 내 몸은 어떻게 변하는지"를 <strong>쉬운 언어</strong>와 <strong>시각 자료</strong>로 설명합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">처방·검사 요약</h3>
              <p className="text-sm text-gray-700">무엇을, 왜 했는지 한 줄 요약과 근거 출처 링크.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">약물 설명</h3>
              <p className="text-sm text-gray-700">성분·목적·주의·상호작용을 이해하기 쉬운 용어로.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">내 몸의 변화</h3>
              <p className="text-sm text-gray-700">혈압·수면·활동과 증상의 <strong>상관관계</strong>를 그래프로.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-bold text-gray-900 mb-2">왜 이 권고?</h3>
              <p className="text-sm text-gray-700">권고 이유·대안·주의점을 함께 제시(XAI 철학).</p>
            </div>
          </div>

          <div className="mt-10 bg-white rounded-2xl p-8 shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">환자 리포트 예시 (요약)</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">항목</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">요약</th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">메모</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">약물 A</td>
                    <td className="px-4 py-2 text-gray-700">혈압 조절 목적, 아침 복용 권장</td>
                    <td className="px-4 py-2 text-gray-700">졸림 시 취침 전으로 조정</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">검사 결과</td>
                    <td className="px-4 py-2 text-gray-700">최근 2주 평균 혈압 하락 추세</td>
                    <td className="px-4 py-2 text-gray-700">염분 섭취·수면 시간과 상관</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-medium text-gray-900">권고</td>
                    <td className="px-4 py-2 text-gray-700">저염 식단·수분 섭취·저녁 산책 20분</td>
                    <td className="px-4 py-2 text-gray-700">가이드라인 링크 제공</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500">PDF로 저장·공유 가능. 어려운 용어는 쉬운 설명과 함께 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 6. Business Impact */}
      {/* 병원·약국 연계 (입점 파트너 대시보드) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">병원·약국은 어떻게 연계되나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              입점 파트너는 <strong>대시보드</strong>로 환자 기본정보·운동·식습관·AI 질문 이력을 확인해 <strong>진료 시간을 줄이고</strong> 빠르게 파악합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">환자 기본정보</h3>
              <p className="text-sm text-gray-700">연령·체중·기저질환·알레르기·복약 이력을 한눈에.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">생활 패턴</h3>
              <p className="text-sm text-gray-700">운동·식습관·수면·스트레스 추세 그래프.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">AI 질문 이력</h3>
              <p className="text-sm text-gray-700">환자가 AI에게 물어본 의료 정보 로그 → 관심사 파악.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">리포트 요약</h3>
              <p className="text-sm text-gray-700">14일 변화·이상치·권고 이행률을 1장 PDF로.</p>
            </div>
          </div>
          <div className="mt-8 bg-blue-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">결과:</span> 진료 대기시간 30% 단축, 환자 만족도↑, 의료진 부담↓ → <strong>훌륭한 의료 보조 도구</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 병원별 맞춤 AI 챗봇 */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">병원별 맞춤 AI 챗봇 — 24시간 나만의 병원봇</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
              <strong>"제일치과봇", "서울성형외과봇"</strong> — 각 병원이 자신만의 AI 챗봇을 보유해, 
              해당 병원의 <strong>가격·시술·의료진·사진·FAQ</strong>를 24시간 상담합니다.
            </p>
            <p className="text-base text-gray-500 max-w-3xl mx-auto">
              플랫폼 전체에 단일 챗봇이 아닌, <strong>병원마다 개인화된 브랜드 챗봇</strong>을 제공해 환자 유치와 비즈니스를 혁신합니다.
            </p>
          </div>

          {/* 작동 방식 */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">어떻게 작동하나</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3 text-center">🏥</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">1. 병원 정보 입력</h4>
                <p className="text-sm text-gray-700">시술 메뉴·가격·의료진 소개·전문 분야·사진·후기 등을 플랫폼에 등록</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3 text-center">🤖</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">2. AI 챗봇 생성</h4>
                <p className="text-sm text-gray-700">"나만의 AI 만들기" 노하우로 해당 병원 전용 챗봇을 자동 생성 (예: "제일치과봇")</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3 text-center">💬</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">3. 환자 상담</h4>
                <p className="text-sm text-gray-700">환자가 24시간 언제든 "임플란트 가격은?" "이 선생님 경력?" 질문 → 즉시 답변</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3 text-center">📊</div>
                <h4 className="font-bold text-gray-900 mb-2 text-center">4. 예약 연계</h4>
                <p className="text-sm text-gray-700">상담 후 바로 예약 연결 → 병원 대시보드에서 리드·문의 이력 확인</p>
              </div>
            </div>
          </div>

          {/* 병원 입장의 혜택 */}
          <div className="mb-10 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">병원 입장의 혜택</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h4 className="font-bold text-gray-900 mb-2">광고비 절감</h4>
                <p className="text-sm text-gray-700">키워드 광고·전화 상담 비용 대폭 감소, 챗봇이 1차 필터링</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">고품질 리드</h4>
                <p className="text-sm text-gray-700">이미 병원 정보를 확인한 <strong>진지한 관심자</strong>만 예약 → 전환율↑</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">브랜드 차별화</h4>
                <p className="text-sm text-gray-700">나만의 챗봇으로 병원 정체성 강화, 환자 신뢰도↑</p>
              </div>
            </div>
          </div>

          {/* 플랫폼 락인 효과 */}
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-center">플랫폼 독점 효과 (Lock-in)</h3>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2">🔒 환자 데이터 축적</h4>
                  <p className="text-sm text-white/90">
                    케어로그·복약·증상·AI 상담 이력이 모두 플랫폼에 축적 → 다른 플랫폼으로 옮기기 어려움
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2">🏥 병원 네트워크</h4>
                  <p className="text-sm text-white/90">
                    연동된 병원·약국·한방·성형이 많을수록 <strong>전환 비용</strong>↑ → 플랫폼 의존도 증가
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2">🤖 개인화 학습</h4>
                  <p className="text-sm text-white/90">
                    AI가 개인 패턴·약물 반응·선호도를 학습 → 새 플랫폼에서 처음부터 다시 시작 불가
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <h4 className="font-bold text-white mb-2">📈 네트워크 효과</h4>
                  <p className="text-sm text-white/90">
                    사용자·병원이 많을수록 매칭 품질·데이터 정확도↑ → <strong>선순환</strong> 구조
                  </p>
                </div>
              </div>
              <p className="text-center text-lg font-semibold">
                <span className="text-yellow-300">결론:</span> 환자가 한번 들어오면 <strong>쉽게 나갈 수 없는</strong> 구조 
                → 투자 관점에서 <strong>매우 강력한 비즈니스 모델</strong>
              </p>
            </div>
          </div>

          {/* 예시 시나리오 */}
          <div className="mt-10 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">실제 사용 예시</h3>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-800">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦷</span>
                <div>
                  <p className="font-semibold">제일치과</p>
                  <p className="text-sm text-gray-700">환자: "임플란트 가격이 얼마에요?" → 제일치과봇: "1개 150만원, 이벤트 중 120만원입니다. 김OO 원장 경력 15년, 후기 4.8점. 예약하시겠어요?"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💉</span>
                <div>
                  <p className="font-semibold">서울성형외과</p>
                  <p className="text-sm text-gray-700">환자: "쌍꺼풀 수술 회복 기간은?" → 서울성형외과봇: "보통 1주일 붓기, 2주 후 자연스러움. 박OO 원장 수술 사례 보시겠어요? (사진 3장 첨부)"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🌿</span>
                <div>
                  <p className="font-semibold">한방클리닉</p>
                  <p className="text-sm text-gray-700">환자: "허리 디스크에 침이 효과 있나요?" → 한방클리닉봇: "추나·침 병행 시 70% 개선 사례. 보험 적용 가능. 초진 상담 예약 연결해드릴까요?"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 산업 독점 기술 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">독점 기술이 의료산업 전반 트렌드를 어떻게 바꾸나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              표준화된 디지털케어로그와 매칭 네트워크는 <strong>네트워크 효과</strong>를 일으켜, 
              사용자와 기관이 늘수록 경쟁력이 기하급수적으로 강해집니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">📊 표준화 → 네트워크 효과</h3>
              <p className="text-sm text-gray-700">
                사용자와 기관이 같은 표준 로그를 쓰면 데이터 호환·공유·협업이 쉬워지고, 
                더 많은 기관이 참여할수록 <strong>선택 1순위</strong>가 됩니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">🔗 매칭 채널 확보</h3>
              <p className="text-sm text-gray-700">
                자람이·시니어앤라이프에서 검증된 매칭 노하우로 병원/요양 연결. 
                도입 기관은 우선 선택을 받고 <strong>신규 고객 획득 비용</strong>을 낮춥니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">🧬 RWE 데이터 모트</h3>
              <p className="text-sm text-gray-700">
                실사용데이터로 질병 예측·약물효과·임상을 고도화. 
                제약/연구 파트너십으로 <strong>장기 진입장벽</strong>을 구축합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">🌐 옴니채널 확장</h3>
              <p className="text-sm text-gray-700">
                창고형 약국·영양관리·원격상담·요양뿐 아니라, 
                헬스장·요가 등 <strong>운동·다이어트 파트너</strong>까지 확장 가능한 구조로 
                일상-진료-약국-요양-운동의 <strong>전체 여정</strong>을 장악합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 정신건강 챗봇 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">정신건강 챗봇 — 집에서 스트레스·우울 상담</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              집에서 편하게 스트레스·우울·불안을 <strong>AI 챗봇</strong>과 상담하고, 심각한 경우 시스템이 주변인이나 병원 연계를 설득합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">💬</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">경청·감정 쓰레기통</h3>
              <p className="text-sm text-gray-700">24/7 대화 가능, 판단 없이 감정을 받아줍니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">🎭</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">커스텀 인물·톤</h3>
              <p className="text-sm text-gray-700">사용자가 원하는 캐릭터·말투·관심사로 맞춤 설정.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">🚨</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">위기 신호 감지</h3>
              <p className="text-sm text-gray-700">자해·자살 징후 시 보호자·전문가 알림(선택).</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">📊</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">정신건강 리포트</h3>
              <p className="text-sm text-gray-700">기분·수면·스트레스 추세 분석, 자가 도움 가이드 제공.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 성형·미용 상담 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">성형·미용 — AI 상담 → 병원 매칭</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              사진 업로드 → AI 1차 상담 → 입점 병원 매칭. <strong>코디네이터(상담실장)</strong> 역할을 AI가 자동화합니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">📷</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">1. 사진 업로드</h3>
              <p className="text-sm text-gray-700">얼굴/피부 사진, 가이드 제공, 민감정보 동의·익명화.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">2. AI 1차 상담</h3>
              <p className="text-sm text-gray-700">개선 포인트·시술 옵션 범위 제시 (의학적 조언 아님 고지).</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">🏥</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">3. 병원 매칭</h3>
              <p className="text-sm text-gray-700">전문성·후기·거리·예산 필터로 후보 제안, 예약 연결.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-2 text-center">📊</div>
              <h3 className="font-bold text-gray-900 mb-2 text-center">4. 사후 관리</h3>
              <p className="text-sm text-gray-700">시술 전/후 사진 비교, 경과 기록, 부작용 경보.</p>
            </div>
          </div>
          <div className="mt-8 bg-cyan-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">효과:</span> 상담 비용 80% 절감, 환자 만족도↑, 병원 리드 질↑
            </p>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 약물 안전 & 건강관리 */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">약물 안전 & 건강관리 — 상호작용·알레르기 자동 체크</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              처방약·OTC·영양제를 동시 고려해 <strong>위험 조합</strong>을 자동 감지하고, 복용 시간을 최적화합니다.
            </p>
          </div>

          {/* AI 약물 안전 코치 테이블 */}
          <div className="mb-10 bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">💊 AI 약물 안전 코치 — 복용 스케줄 가이드</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-cyan-600 text-white">
                    <th className="px-4 py-3 text-left font-bold">시간</th>
                    <th className="px-4 py-3 text-left font-bold">복용 약</th>
                    <th className="px-4 py-3 text-left font-bold">설명</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">아침</td>
                    <td className="px-4 py-3 text-gray-900">핵심 주간 약물</td>
                    <td className="px-4 py-3 text-gray-700">활동·집중 유지를 위한 스케줄</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 font-semibold text-gray-900">점심/저녁</td>
                    <td className="px-4 py-3"><strong className="text-red-700">충돌 가능 조합은 분리</strong></td>
                    <td className="px-4 py-3 text-red-800 font-semibold">상호작용 경보 시 대체 성분/시간 분리 가이드</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="px-4 py-3 font-semibold text-gray-900">취침 전</td>
                    <td className="px-4 py-3 text-gray-900">진정·수면 보조계열</td>
                    <td className="px-4 py-3 text-gray-700">졸림 부작용은 야간으로 이동해 순응도↑</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-600 text-white rounded-lg p-5 text-center shadow">
              <p className="text-sm font-semibold">
                <span className="text-yellow-300">핵심:</span> 위험 조합은 <strong>시간 분리/대체 성분</strong>으로 해결하고, 
                왜 위험한지까지 <strong>설명과 근거</strong>를 함께 제공합니다.
              </p>
            </div>
          </div>

          {/* 집중치료 모드 + 약물 추적 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-indigo-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">🎯</span>
                <h4 className="text-xl font-bold text-gray-900">집중치료 모드</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">특정 증상/부작용에 대한 집중 관리 시 자동 활성화.</p>
              <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-800">
                <strong className="text-indigo-700">+ 약물 변경 시 집중 추적</strong>
                <br/>변경 후 2주간 부작용·행동 변화·효과를 집중 모니터링
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">📊</span>
                <h4 className="text-xl font-bold text-gray-900">약물 추적 기록</h4>
              </div>
              <p className="text-sm text-gray-700 mb-3">모든 약물의 시간·용량·반응을 구조화 기록.</p>
              <div className="bg-purple-50 rounded-lg p-3 text-sm text-gray-800">
                <strong className="text-purple-700">+ 상호작용 분석</strong>
                <br/>기존 약 + 신규 처방을 교차 분석하여 위험 조합 자동 감지, 복용 시간 최적화 제안
              </div>
            </div>
          </div>

          {/* 확장 적용 */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-md border-t-4 border-cyan-500">
            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">🚀 TotalCare 확장 적용</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm text-gray-700">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4">
                <div className="text-2xl mb-1">🏪</div>
                <p className="font-bold text-gray-900">창고형 약국</p>
                <p className="text-xs">다제약물 상호작용 통합 관리</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                <div className="text-2xl mb-1">🎗️</div>
                <p className="font-bold text-gray-900">항암 환자</p>
                <p className="text-xs">부작용 추적·영양/체중 집중 관리</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                <div className="text-2xl mb-1">👴</div>
                <p className="font-bold text-gray-900">시니어 케어</p>
                <p className="text-xs">만성질환 복약 순응도 향상</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 환자별 알레르기·약물 효과 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">환자별 알레르기·약물 효과를 AI가 어떻게 아나</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              <strong>집단학습 + 강화학습</strong>으로 유사군 반응 패턴을 학습하고, 개인 데이터로 최적 용량·시간을 찾습니다.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">1. 초기 설정</h3>
              <p className="text-sm text-gray-700">알레르기·기저질환·복약 이력을 입력 → 금기 약물 자동 필터링.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">2. 집단학습</h3>
              <p className="text-sm text-gray-700">유사 연령·체중·질환군의 반응 데이터로 예상 부작용·효과 예측.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-2">3. 강화학습</h3>
              <p className="text-sm text-gray-700">개인 반응 피드백으로 용량·시간·조합을 자동 조정, 최선을 찾음.</p>
            </div>
          </div>
          <div className="mt-8 bg-indigo-600 text-white rounded-xl p-6 shadow-lg text-center">
            <p className="text-lg font-semibold">
              <span className="text-yellow-300">결과:</span> "내 몸에 맞는" 약물·용량·타이밍을 <strong>AI가 자동 최적화</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 6. Business Impact — 데이터·연구 협력 (RWE) */}
      <section id="rwe" className="py-16 lg:py-24 bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">데이터·연구 협력 — 실사용 증거(RWE)로 신약 개발·임상 지원</h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto text-blue-100">
            디지털케어로그로 축적되는 <strong>실사용데이터(RWE)</strong>는 신약 개발, 약물 효과 추적, 치매 예방·임상 등에서 새로운 통찰을 제공합니다.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-blue-100">
            병원·연구기관·제약사와의 공동 연구 및 데이터 사업이 가능한 구조로 설계되어 있습니다.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">신약 개발</h3>
              <p className="text-sm text-blue-100">임상 외 일상 데이터로 약물 효과·부작용을 실시간 추적.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">제약사 협력</h3>
              <p className="text-sm text-blue-100">익명 집계 데이터로 환자 순응도·예후 개선 연구 지원.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="font-bold text-white mb-2">정부 과제 정합</h3>
              <p className="text-sm text-blue-100">2026 헬스케어AI 과제 표준·호환성·RWE 요구사항 충족.</p>
            </div>
          </div>

          {/* 학습 방법 및 연구 산출물 상세 */}
          <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-left max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">학습 방법 — 강화학습 + 집단학습</h3>
            <p className="text-blue-100 mb-4">
              개인의 반응(증상·순응도·부작용)에 따라 <strong>정책을 최적화</strong>하는 <strong>강화학습</strong>과, 유사 환자군 코호트에서 
              <strong>공통 패턴</strong>과 <strong>안전 신호</strong>를 포착하는 <strong>집단학습</strong>을 결합해, 근거 기반 권고의 정확도를 높입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">강화학습(RL) — 개인 최적화</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>복약·생활 권고의 <strong>개인별 정책</strong>을 반응 기반으로 업데이트</li>
                  <li>용량·타이밍·조합의 <strong>개인화 탐색/활용</strong> 균형</li>
                  <li>장기 지표(예후·재내원율·삶의 질)를 <strong>보상함수</strong>로 반영</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">집단학습 — 코호트/시그널</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>유사 환자군의 <strong>패턴·이상치·트리거</strong> 탐지</li>
                  <li>부작용 <strong>조기 경보</strong>, 치료 반응 이질성(TEH) 분석</li>
                  <li>코호트 기반 <strong>실세계 비교군</strong>(synthetic control) 생성</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">연구 산출물</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>용량-반응 곡선, 위험-편익 프로파일</li>
                  <li>안전성 시그널·상호작용(약물-약물/생활) 탐지</li>
                  <li>프로토콜 순응도·중단 사유 분석, PRO 지표</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2">거버넌스·프라이버시</h4>
                <ul className="list-disc list-inside text-sm text-blue-100 space-y-1">
                  <li>명시적 <strong>동의/철회</strong>, <strong>감사 로그</strong> 전면 기록</li>
                  <li><strong>비식별/가명처리</strong>, 역할기반 접근제어(RBAC)</li>
                  <li>IRB/DUA 체계, 필요 시 <strong>차등프라이버시</strong> 적용</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 text-sm text-blue-100">
              데이터 스키마: 시계열 로그(노출·행동·결과), 중재·동반질환·생활습관 공변량, 환자보고결과(PRO) 포함.
            </div>
          </div>
        </div>
      </section>

      {/* 7. Service Status */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold mb-4">Live Service</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">토탈케어로그 (medicai.kr)</h2>
          <p className="text-gray-600">AI 디지털케어로그 기반 헬스케어AI 서비스가 운영 중입니다. 일상 기록·AI 분석·병원/약국 연계를 체험해 보세요.</p>
        </div>
      </section>

      {/* 8. Ecosystem Connection */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">DAL 생태계와의 연결</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">자람이·시니어앤라이프에서 검증된 매칭 채널, 디지털케어로그 표준과 연동하여 전방향(생활·교육·건강) 케어를 제공합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">🔗 매칭 채널 공유</h3>
              <p className="text-sm text-gray-700">자람이·시니어앤라이프의 병원/요양 매칭 노하우를 토탈케어로그에 적용. 도입 기관은 우선 선택을 받습니다.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">📊 표준화 플랫폼</h3>
              <p className="text-sm text-gray-700">AI 디지털케어로그 표준 스키마로 데이터 호환·공유. 베지케어 등 DAL 서비스와 건강 데이터 연동.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">토탈케어로그를 지금 시작하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            AI 디지털케어로그 기반 헬스케어AI — 일상 기록만으로 케어 성과를 높이세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://medicai.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              토탈케어로그 체험하기
            </a>
            <a
              href="https://dreamailab.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
            >
              사업·연구 제휴 문의
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
