import type { Metadata } from 'next'
import EnLandingPage from '../../../../components/EnLandingPage'
import { absoluteUrl, buildPageMetadata } from '../../../../lib/seo'

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: 'DAL Vibe Architect – Korea-ready AI Software Architect Project',
    description:
      'A new Dream AI Lab project designed to turn non-developers’ intent into accessible, secure, testable and operable software for the Korean market.',
    path: '/en/services/vibe-architect',
    ogImageAlt: 'DAL Vibe Architect software creation architecture',
  }),
  alternates: {
    canonical: absoluteUrl('/en/services/vibe-architect'),
    languages: {
      'ko-KR': absoluteUrl('/services/vibe-architect'),
      'en-US': absoluteUrl('/en/services/vibe-architect'),
    },
  },
  openGraph: { locale: 'en_US' },
}

export default function EnVibeArchitectPage() {
  return (
    <EnLandingPage
      title="DAL Vibe Architect"
      subtitle="New project · Architecture published · Not yet launched"
      description="An AI Software Architect that translates human intent into requirements, architecture, security, accessibility, tests, deployment and operations—built for Korean workflows and for people usually excluded by developer-first tools."
      koPath="/services/vibe-architect"
      sections={[
        {
          heading: 'A different category from an AI code editor',
          body: 'The goal is not to win a code-completion contest. It is to help a non-developer make sound product decisions while the system absorbs technical complexity and keeps an auditable architecture from intent through maintenance.',
        },
        {
          heading: 'Korea-ready operations',
          body: 'Korean identity and consent flows, local login, payment and messaging patterns, administrator operations, privacy controls and industry-specific workflows belong in the architecture—not as afterthoughts.',
        },
        {
          heading: 'Disability inclusion by design',
          body: 'The builder itself should work with keyboard, screen readers, voice, magnification and alternative input. Generated products should pass accessibility gates and real task testing with disabled people, not automation alone.',
        },
        {
          heading: 'Current status',
          body: 'As of 17 August 2026 this is a newly announced project at architecture and co-design stage. There is no public builder, pricing or confirmed launch date. DAL Vibe Architect is a working name.',
        },
      ]}
      links={[
        { label: 'Full project page (KO)', href: '/services/vibe-architect' },
        { label: 'Service hub', href: '/en/services' },
        { label: 'Contact', href: '/contact?service=vibe-architect&type=partnership' },
      ]}
    />
  )
}
