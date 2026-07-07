/**
 * 회사 소개·비전·기술 등에서 이모지 대신 쓰는 단색 라인 아이콘.
 * 의미가 분명한 구간에만 사용 (장식 남발 지양).
 */
import type { SVGProps } from 'react'
import { resolveIcon } from '../lib/icon-system'
export type MarketingIconName =
  | 'scale'
  | 'chart'
  | 'link'
  | 'brain'
  | 'trend'
  | 'blocks'
  | 'puzzle'
  | 'bolt'
  | 'document'
  | 'flask'
  | 'sprout'
  | 'user'
  | 'hospital'
  | 'globe'
  | 'handshake'
  | 'heart'
  | 'rocket'
  | 'target'
  | 'microscope'
  | 'lightbulb'
  | 'sparkle'
  | 'graduation'
  | 'leaf'
  | 'stethoscope'
  | 'lock'
  | 'mobile'
  | 'search'
  | 'cog'
  | 'robot'
  | 'upload'
  | 'refresh'
  | 'chat'
  | 'eye'
  | 'shield'
  | 'pill'
  | 'dna'
  | 'phone'
  | 'users'
  | 'home'
  | 'buildings'
  | 'bell'
  | 'clock'
  | 'mic'
  | 'trophy'
  | 'pin'
  | 'megaphone'
  | 'download'
  | 'baby'
  | 'child'
  | 'alert'
  | 'camera'
  | 'accessibility'

type Props = {
  name: MarketingIconName | string
  className?: string
} & Pick<SVGProps<SVGSVGElement>, 'aria-label'>

export function MarketingIcon({ name, className = 'h-8 w-8 text-current', 'aria-label': ariaLabel }: Props) {
  const icon = resolveIcon(name)
  const common: SVGProps<SVGSVGElement> = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': ariaLabel ? undefined : true,
    'aria-label': ariaLabel,
  }

  switch (icon) {
    case 'scale':
      return (
        <svg {...common}>
          <path d="M12 3v18M5 9l3.5-5h7L19 9M5 15l3.5 5h7l3.5-5" />
          <path d="M9 9h6M9 15h6" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M4 19V5M8 19v-6M12 19V9M16 19v-4M20 19V11" />
        </svg>
      )
    case 'link':
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 1 0-7l1-1a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-1 1a5 5 0 0 1-7-7l1-1" />
        </svg>
      )
    case 'brain':
      return (
        <svg {...common}>
          <path d="M12 5a3 3 0 0 0-3 3v1a3 3 0 1 0-3 3 3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3Z" />
          <path d="M15 9h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1M9 15H7a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h1" />
        </svg>
      )
    case 'trend':
      return (
        <svg {...common}>
          <path d="M3 17l6-6 4 4 7-7M14 8h7v7" />
        </svg>
      )
    case 'blocks':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
        </svg>
      )
    case 'puzzle':
      return (
        <svg {...common}>
          <path d="M12 2v4a2 2 0 0 0 2 2 2 2 0 0 1 2 2h4M2 12h4a2 2 0 0 1 2-2 2 2 0 0 0 2-2V2M12 22v-4a2 2 0 0 1-2-2 2 2 0 0 0-2-2H4M22 12h-4a2 2 0 0 0-2 2 2 2 0 0 1-2 2v4" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      )
    case 'document':
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
          <path d="M14 2v6h6M8 13h8M8 17h8" />
        </svg>
      )
    case 'flask':
      return (
        <svg {...common}>
          <path d="M9 3h6M10 3v5l-4 9a2 2 0 0 0 1.8 2.8h8.4a2 2 0 0 0 1.8-2.8l-4-9V3" />
          <path d="M6 15h12" />
        </svg>
      )
    case 'sprout':
      return (
        <svg {...common}>
          <path d="M12 22v-8M12 14c-2-3-6-4-8-1 2-4 6-3 8 1M12 14c2-3 6-4 8-1-2-4-6-3-8-1" />
        </svg>
      )
    case 'user':
      return (
        <svg {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
        </svg>
      )
    case 'hospital':
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V10l7-4 7 4v11M9 21v-4h6v4M12 7v4M10 11h4" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20" />
        </svg>
      )
    case 'handshake':
      return (
        <svg {...common}>
          <path d="M11 14l-2 2-4-4 2-2M13 14l2 2 4-4-2-2M8 10l3-3 2 2M16 10l-3-3-2 2M2 12l2-2 2 2M22 12l-2-2-2 2" />
        </svg>
      )
    case 'heart':
      return (
        <svg {...common}>
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1 7.8 7.8 7.8-7.8 1-1a5.5 5.5 0 0 0 0-7.8z" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M4.5 16.5c-1.5 4.5 0 5.5 0 5.5s1-1.5 5.5-4.5M9 11l6 6M12 2l4 4-8 8-4-4 8-8z" />
          <path d="M15 7l2-2M5 15l-2 2" />
        </svg>
      )
    case 'target':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      )
    case 'microscope':
      return (
        <svg {...common}>
          <path d="M6 18h12M9 18V8l3-3 3 3v10M10 8h4M19 22l-3-3" />
        </svg>
      )
    case 'lightbulb':
      return (
        <svg {...common}>
          <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 13c.6.5 1 1.2 1 2v1h6v-1c0-.8.4-1.5 1-2a7 7 0 0 0-4-13z" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1M12 8l1.5 4 4 1.5-4 1.5L12 19l-1.5-4-4-1.5 4-1.5L12 8z" />
        </svg>
      )
    case 'graduation':
      return (
        <svg {...common}>
          <path d="M22 10l-10-4-10 4 10 4 10-4zM6 12v5c0 2 4 3 6 3s6-1 6-3v-5" />
          <path d="M22 10v6" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M11 20A7 7 0 0 1 6 3c7 0 11 5 11 11a7 7 0 0 1-6 6Z" />
          <path d="M12 20v-7M12 13c-2-1-4-1-6 0" />
        </svg>
      )
    case 'stethoscope':
      return (
        <svg {...common}>
          <path d="M6 4v11a4 4 0 0 0 8 0V4M6 4a2 2 0 1 0 4 0M10 4h4a2 2 0 0 1 2 2v2M19 14a3 3 0 1 1-6 0" />
        </svg>
      )
    case 'lock':
      return (
        <svg {...common}>
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        </svg>
      )
    case 'mobile':
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" />
        </svg>
      )
    case 'search':
      return (
        <svg {...common}>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-4-4" />
        </svg>
      )
    case 'cog':
      return (
        <svg {...common}>
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-1.23 3.43 2 2 0 0 1-1.86-.98 1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33 2 2 0 1 1-3.09-2.25l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 3.09-2.25 2 2 0 0 1 1.86.98 1.65 1.65 0 0 0 1.82.33H12a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33 2 2 0 1 1 3.09 2.25l-.06.06a1.65 1.65 0 0 0-.33 1.82 1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      )
    case 'robot':
      return (
        <svg {...common}>
          <rect x="6" y="8" width="12" height="10" rx="2" />
          <path d="M9 8V6M15 8V6M10 12h4M12 18v2M9 21h6" />
          <circle cx="10" cy="12" r="0.5" fill="currentColor" stroke="none" />
          <circle cx="14" cy="12" r="0.5" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'upload':
      return (
        <svg {...common}>
          <path d="M12 15V3M8 7l4-4 4 4M5 21h14" />
        </svg>
      )
    case 'refresh':
      return (
        <svg {...common}>
          <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16M21 21v-5h-5" />
        </svg>
      )
    case 'chat':
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    case 'eye':
      return (
        <svg {...common}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        </svg>
      )
    case 'pill':
      return (
        <svg {...common}>
          <path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7Z" />
        </svg>
      )
    case 'dna':
      return (
        <svg {...common}>
          <path d="M6 4c2 2 2 4 0 6M18 4c-2 2-2 4 0 6M6 14c2 2 2 4 0 6M18 14c-2 2-2 4 0 6M8 7h8M8 17h8" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10 18h4" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM20 8v6M23 11h-6M17 21v-2a4 4 0 0 1 3-3.87" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11.5 12 4l9 7.5M5 10.5V20h14v-9.5M9 20v-6h6v6" />
        </svg>
      )
    case 'buildings':
      return (
        <svg {...common}>
          <path d="M3 21V8l6-3v16M9 21V4l6-2v19M15 21V11l6-3v13M6 10h1M6 14h1M18 14h1M12 6h1M12 10h1" />
        </svg>
      )
    case 'bell':
      return (
        <svg {...common}>
          <path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2h16l-2-2zM10 20a2 2 0 0 0 4 0" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      )
    case 'mic':
      return (
        <svg {...common}>
          <path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3zM19 11a7 7 0 0 1-14 0M12 18v3" />
        </svg>
      )
    case 'trophy':
      return (
        <svg {...common}>
          <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM5 4H3v2a3 3 0 0 0 3 3M19 4h2v2a3 3 0 0 1-3 3" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'megaphone':
      return (
        <svg {...common}>
          <path d="m3 11 4-2v6l-4-2v-2zM7 9l10-4v14L7 15V9zM17 8.5a4 4 0 0 1 0 7" />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12M8 11l4 4 4-4M5 21h14" />
        </svg>
      )
    case 'baby':
      return (
        <svg {...common}>
          <circle cx="12" cy="10" r="4" />
          <path d="M8 21v-1a4 4 0 0 1 8 0v1" />
        </svg>
      )
    case 'child':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="3.5" />
          <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
        </svg>
      )
    case 'alert':
      return (
        <svg {...common}>
          <path d="M12 3 2 19h20L12 3zM12 10v4M12 17h.01" />
        </svg>
      )
    case 'camera':
      return (
        <svg {...common}>
          <path d="M4 8h4l2-2h4l2 2h4v11H4V8z" />
          <circle cx="12" cy="13" r="3" />
        </svg>
      )
    case 'accessibility':
      return (
        <svg {...common}>
          <circle cx="12" cy="5" r="2" />
          <path d="M7 9h10M12 7v5M9 20l3-5 3 5M7 12h10" />
        </svg>
      )
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
