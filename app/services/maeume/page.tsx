import type { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '마음이AI → 토탈케어로그 | 드림에이아이랩',
  description:
    '심리·정신건강 상담 보조는 별도 서비스가 아니라 토탈케어로그(헬스케어AI) 축으로 통합되었습니다. 안내 페이지로 이동합니다.',
  robots: { index: false, follow: true },
}

/** 기존 `/services/maeume` URL 호환: 토탈케어로그(헬스케어)로 안내합니다. */
export default function MaeumeToHealthcareRedirect() {
  permanentRedirect('/services/healthcare/')
}
