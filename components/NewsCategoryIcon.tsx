import { MarketingIcon } from './MarketingIcon'
import { getNewsCategoryIcon } from '../lib/icon-system'

type Props = {
  category: string
  className?: string
}

/** 뉴스 카테고리별 고정 썸네일 아이콘 */
export function NewsCategoryIcon({
  category,
  className = 'h-16 w-16 text-primary-600',
}: Props) {
  return (
    <MarketingIcon
      name={getNewsCategoryIcon(category)}
      className={className}
      aria-hidden
    />
  )
}
