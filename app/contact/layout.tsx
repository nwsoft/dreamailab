import type { Metadata } from 'next'
import { absoluteUrl, defaultOpenGraph, defaultTwitter } from '../../lib/seo'

export const metadata: Metadata = {
  title: '연락처 - 드림에이아이랩',
  description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
    url: absoluteUrl('/contact'),
    siteName: defaultOpenGraph.siteName,
    images: defaultOpenGraph.images,
    locale: defaultOpenGraph.locale,
    type: 'website',
  },
  twitter: {
    ...defaultTwitter,
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. AI 서비스, 파트너십, 투자 등 다양한 문의사항에 대해 답변드립니다.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
