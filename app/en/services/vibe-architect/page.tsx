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
          heading: 'Beyond the prompt-to-code frame',
          body: 'AI code editors, agentic development tools, no-code and low-code builders all reduce parts of the creation barrier. DAL focuses on the larger gap: turning intent into an auditable architecture and managing it through verification, deployment, operations and learning.',
        },
        {
          heading: 'Three platform-intelligence candidates',
          body: 'Architecture Guardian, Project Knowledge Graph and a Software Engineering Outcome Dataset are the three priority technical hypotheses. They are intended to protect change, preserve project reasoning and learn which architectures survive real operations; they are not presented as completed features.',
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
          heading: 'Master Vision v1.0 and the next six steps',
          body: 'Before feature development, the project will move through: market and failure-point analysis, MVP screens and user flows, Agent/Orchestrator/Architecture Guardian architecture, model and stack selection, a three-month roadmap, then the data flywheel and business model.',
        },
        {
          heading: 'Current status',
          body: 'As of 17 August 2026 Master Vision v1.0 is the product baseline and the project remains at architecture and co-design stage. There is no public builder, pricing or confirmed launch date. DAL Vibe Architect is a working name.',
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
