import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '연락처 - 드림에이아이랩',
  description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
  keywords: '드림에이아이랩, 연락처, 문의, 파트너십, 투자, AI서비스, 고객지원',
  openGraph: {
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
    url: 'https://dreamailab.com/contact',
    siteName: '드림에이아이랩',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '드림에이아이랩 연락처',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
    images: ['/og-image.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
