import type { Metadata } from 'next'
import { AI_DIGITAL_CARE_LOG_PUBLIC_EN } from '../../lib/ai-digital-care-log-copy'

export const metadata: Metadata = {
  title: {
    default: 'Dream AI Lab (DAL) – AI Digital Care Log',
    template: '%s - Dream AI Lab',
  },
  description: AI_DIGITAL_CARE_LOG_PUBLIC_EN,
  metadataBase: new URL('https://dreamailab.com'),
  openGraph: {
    locale: 'en_US',
    siteName: 'Dream AI Lab',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>
}
