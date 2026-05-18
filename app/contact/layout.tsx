import type { Metadata } from 'next'
import { absoluteUrl, defaultOpenGraph, defaultTwitter } from '../../lib/seo'

export const metadata: Metadata = {
  title: '연락처 - 드림에이아이랩',
  description: '드림에이아이랩에 문의하세요. 서비스 도입·이용·협력·투자·IR 등 문의 유형을 선택해 연락해 주세요.',
  alternates: { canonical: absoluteUrl('/contact') },
  openGraph: {
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. 서비스 도입·이용·협력·투자·IR 등 문의 유형을 선택해 연락해 주세요.',
    url: absoluteUrl('/contact'),
    siteName: defaultOpenGraph.siteName,
    images: defaultOpenGraph.images,
    locale: defaultOpenGraph.locale,
    type: 'website',
  },
  twitter: {
    ...defaultTwitter,
    title: '연락처 - 드림에이아이랩',
    description: '드림에이아이랩에 문의하세요. 서비스 도입·이용·협력·투자·IR 등 문의 유형을 선택해 연락해 주세요.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
