import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '베지케어 기술블로그 | AI 영양 판단·실행·환류 전략',
  description: 'AI디지털케어로그를 식습관·영양에 적용한 베지케어의 AI 판단, 알레르기 세이프 실행, 결과 환류와 단계별 로드맵을 정리했습니다.',
  keywords: '베지케어, 베지테리안, AI 레시피, 알레르기 세이프, 정기배송, 디지털케어로그, 기술블로그',
  openGraph: {
    title: '베지케어 기술블로그 | AI 영양 판단·실행·환류 전략',
    description: 'AI 영양 판단·알레르기 세이프 실행·1클릭 구매/구독·결과 환류 전략',
    url: 'https://dreamailab.com/blog/veggiecare',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  )
}

export default function VeggiecareTechBlog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">베지케어 기술블로그</h1>
          <p className="mt-4 text-lg text-gray-600">AI 영양 판단 · 알레르기 세이프 실행 · 결과 학습·환류</p>
        </div>
      </header>

      <main className="py-6">
        <Section title="전략 포지셔닝">
          <ul>
            <li><strong>핵심 컨셉</strong>: “AI 영양 판단 + 알레르기 세이프 실행 + 1클릭 구매/구독 + 결과 환류”</li>
            <li><strong>한 줄 정의</strong>: 식습관·케어로그·알레르겐을 시간축으로 연결해 AI가 이유 있는 식단과 다음 행동을 제시하고, 실행 결과를 다시 개인화에 반영하는 채식 라이프 플랫폼</li>
            <li><strong>차별화 포인트(USP)</strong>:
              <ul>
                <li>알레르기 안전 모드: 사용자 알레르겐을 포함한 레시피/상품 기본 제외</li>
                <li>케어로그 기반 개인화: 수면/운동/혈당 등 맥락을 활용한 추천(초기 필터 → 점수화 로드맵)</li>
                <li>레시피→장바구니/구독 원스텝: “오늘 요리→바로 사기”, “매주 도착” 간극 제거</li>
                <li>커뮤니티/챌린지 연동: 습관 형성과 스토리 공유로 재방문 동기 강화</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="사용자 편의성(UX) 관점">
          <ul>
            <li>시간 절약: 레시피 선택→재료 탐색 과정을 1클릭으로 단축</li>
            <li>안전/신뢰: 알레르기 실수 가능성을 시스템 차원에서 차단</li>
            <li>지속성: 챌린지·배지·추천으로 자연스런 루틴 형성</li>
            <li>선택 피로 감소: 케어로그·취향 반영으로 “오늘 뭐 먹지?” 고민 감소</li>
          </ul>
        </Section>

        <Section title="비즈니스 관점(수익/성장)">
          <ul>
            <li>전환율 상승: 레시피 상세 내 “장바구니 담기” → 구매 전환률 증대</li>
            <li>반복 매출: 맞춤 정기배송(요일/예산/알레르기 제외)로 LTV 확대</li>
            <li>파트너 가치: 채식 성향/알러지 타깃 매칭, 신상품 노출, 리뷰/UGC 확보</li>
            <li>SEO/유입: UGC 레시피/리뷰로 장기 오가닉 성장</li>
          </ul>
        </Section>

        <Section title="측정 지표(KPI)">
          <ul>
            <li>추천 섹션 CTR, 레시피 상세→장바구니 전환율, 장바구니→결제 전환율</li>
            <li>정기배송 전환율/유지율, 4주 LTV/구독 해지율</li>
            <li>알레르기 제외율, 추천 만족도(별점/피드백)</li>
            <li>커뮤니티 UGC 증가량, SEO 유입(레시피 상세)</li>
          </ul>
        </Section>

        <Section title="중기 로드맵">
          <ul>
            <li>추천 점수화: 케어로그 지표 가중치(예: 활동량↑→고단백), 제외 규칙 강화</li>
            <li>구독 구성기: 예산/요일/알레르겐 제외/구성 변경 UX</li>
            <li>파트너 대시보드: 퍼널(노출→클릭→구매)과 상품 피드백 루프</li>
            <li>인기/트렌드 피드: 즐겨찾기/구매/조회 기반 서버 집계</li>
          </ul>
        </Section>
        <Section title="DAL 기술 적용과 현재 상태">
          <p>
            베지케어는 삶의 기록을 시간축으로 연결해 AI 판단·설명 가능한 실행·결과 학습으로 이어가는
            AI디지털케어로그의 식습관·영양 적용 서비스입니다. 현재 핵심 경험은 Beta이며, 추천 점수화·구독 구성·
            파트너 분석 등은 위 로드맵에 따라 단계적으로 검증합니다.
          </p>
          <p>
            <Link href="/technology" className="text-primary-600 underline">AI디지털케어로그 기술 정본</Link>
            {' · '}
            <Link href="/services/veggie" className="text-primary-600 underline">베지케어 서비스 현황</Link>
            {' · '}
            <Link href="/research/jung-haesung" className="text-primary-600 underline">최초 고안·개발자 공식 프로필</Link>
          </p>
        </Section>
      </main>
    </div>
  )
}


