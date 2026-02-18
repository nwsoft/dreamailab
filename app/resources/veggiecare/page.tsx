import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '베지케어 회사자료 | 제품 개요 및 실행 체크리스트',
  description: '베지케어의 제품 개요, UX 가치, 비즈니스 포인트, KPI, 즉시 실행 체크리스트, 샘플 카피를 한 페이지로 정리했습니다.',
  keywords: '베지케어, 회사자료, 제품 개요, 체크리스트, KPI, 채식 플랫폼',
  openGraph: {
    title: '베지케어 회사자료 | 제품 개요 및 실행 체크리스트',
    description: '제품 개요·UX·비즈니스·KPI·체크리스트·샘플 카피',
    url: 'https://dreamailab.com/resources/veggiecare',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-gray max-w-none">
        {children}
      </div>
    </section>
  )
}

export default function VeggiecareResources() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">베지케어 회사자료</h1>
          <p className="mt-4 text-lg text-gray-600">제품 개요 · 실행 체크리스트 · 샘플 카피</p>
        </div>
      </header>

      <main className="py-6">
        <Section title="전략 포지셔닝(요약)">
          <ul>
            <li>AI 영양 코파일럿 + 알레르기 세이프 + 1클릭 구매/구독</li>
            <li>레시피→장바구니/정기배송 원스텝, 커뮤니티/챌린지 연동</li>
          </ul>
        </Section>

        <Section title="사용자 편의성(UX)">
          <ul>
            <li>시간 절약, 안전/신뢰(알레르기 차단), 루틴 형성, 선택 피로 감소</li>
          </ul>
        </Section>

        <Section title="비즈니스 관점">
          <ul>
            <li>전환율 상승(레시피 상세 CTA), 반복 매출(정기배송), 파트너 가치, UGC/SEO</li>
          </ul>
        </Section>

        <Section title="즉시 실행 체크리스트">
          <ul>
            <li>배지/카피: “알레르기 세이프 · AI 맞춤 · 1클릭 구매”</li>
            <li>레시피 상세 고정 CTA: “재료 한번에 담기” / “정기배송으로 받기”</li>
            <li>추천 섹션 고도화: 로그인 상시, 비로그인 샘플+가입 유도</li>
            <li>이메일/푸시 파일럿: “오늘의 맞춤 레시피” 주 3회</li>
            <li>KPI 로깅: 노출/클릭/장바구니/결제 이벤트</li>
          </ul>
        </Section>

        <Section title="측정 지표(KPI)">
          <ul>
            <li>추천 CTR, 상세→장바구니, 장바구니→결제 전환율</li>
            <li>정기배송 전환율/유지율, 4주 LTV/해지율</li>
            <li>알레르기 제외율, 추천 만족도, UGC 증가, SEO 유입</li>
          </ul>
        </Section>

        <Section title="중기 로드맵">
          <ul>
            <li>추천 점수화(지표 가중치), 제외 규칙 강화</li>
            <li>구독 구성기(예산/요일/알레르겐 제외/구성 변경)</li>
            <li>파트너 대시보드(노출→클릭→구매 퍼널, 피드백 루프)</li>
            <li>인기/트렌드 피드(서버 집계)</li>
          </ul>
        </Section>

        <Section title="샘플 카피">
          <ul>
            <li>메인: “AI가 내 식단을 이해하는 채식 습관 코치. 알레르기 세이프, 1클릭로 완성.”</li>
            <li>섹션: “나를 위한 추천 레시피”, “안전하게 먹는 채식”, “레시피에서 장바구니까지”</li>
            <li>버튼: “오늘 레시피 재료 담기”, “맞춤 정기배송 시작”, “AI로 초안 채우기”</li>
          </ul>
        </Section>
      </main>
    </div>
  )
}


