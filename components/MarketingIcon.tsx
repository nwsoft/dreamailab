/**
 * 회사 소개·비전·기술 등에서 이모지 대신 쓰는 단색 라인 아이콘.
 * 의미가 분명한 구간에만 사용 (장식 남발 지양).
 */
import type { SVGProps } from 'react'
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

type Props = {
  name: MarketingIconName
  className?: string
} & Pick<SVGProps<SVGSVGElement>, 'aria-label'>

export function MarketingIcon({ name, className = 'h-8 w-8 text-current', 'aria-label': ariaLabel }: Props) {
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

  switch (name) {
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
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      )
  }
}
