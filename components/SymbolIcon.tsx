import { MarketingIcon } from './MarketingIcon'
import { resolveIcon } from '../lib/icon-system'
import type { SVGProps } from 'react'

type Props = {
  symbol: string
  className?: string
} & Pick<SVGProps<SVGSVGElement>, 'aria-label'>

/** 이모지·아이콘 이름 → DAL 단색 라인 아이콘 */
export function SymbolIcon({
  symbol,
  className = 'h-6 w-6 text-current',
  'aria-label': ariaLabel,
}: Props) {
  return (
    <MarketingIcon
      name={resolveIcon(symbol)}
      className={className}
      aria-label={ariaLabel}
    />
  )
}
