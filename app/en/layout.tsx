import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Dream AI Lab (DAL) – AI Digital Care Log',
    template: '%s - Dream AI Lab',
  },
  description:
    'Dream AI Lab connects developmental disability care, senior care, and total care through AI Digital Care Log technology.',
  metadataBase: new URL('https://dreamailab.com'),
  openGraph: {
    locale: 'en_US',
    siteName: 'Dream AI Lab',
  },
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <div lang="en">{children}</div>
}
