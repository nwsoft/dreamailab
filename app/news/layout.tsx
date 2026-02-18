import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '뉴스 및 소식 - 드림에이아이랩',
  description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요. AI 기술의 혁신과 사회적 가치 창출에 대한 최신 소식을 제공합니다.',
  keywords: '드림에이아이랩, 뉴스, AI뉴스, 서비스업데이트, 보도자료, 기술블로그, 마음이AI, 히포크라테스AI, 시니어앤라이프, 자람이교육',
  openGraph: {
    title: '뉴스 및 소식 - 드림에이아이랩',
    description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요.',
    url: 'https://dreamailab.com/news',
    siteName: '드림에이아이랩',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '드림에이아이랩 뉴스',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '뉴스 및 소식 - 드림에이아이랩',
    description: '드림에이아이랩의 최신 뉴스, 서비스 업데이트, 보도자료, 기술 관련 글 등을 확인하세요.',
    images: ['/og-image.png'],
  },
}

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
