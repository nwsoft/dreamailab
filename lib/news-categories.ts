import type { MarketingIconName } from '../components/MarketingIcon'

/** 뉴스센터 표준 카테고리 (미디어 허브 구조) */
export type NewsCategoryId =
  | 'company'
  | 'updates'
  | 'tech'
  | 'insight'
  | 'founder'
  | 'press'

export interface NewsCategoryMeta {
  id: NewsCategoryId
  name: string
  shortName: string
  description: string
  icon: MarketingIconName
  /** 필터·탭 표시 순서 */
  order: number
}

export const NEWS_CATEGORY_META: NewsCategoryMeta[] = [
  {
    id: 'company',
    name: '회사 뉴스',
    shortName: '회사',
    description: '서비스 오픈, 배포, 파트너십, 투자, 채용 등 회사의 주요 변화',
    icon: 'blocks',
    order: 1,
  },
  {
    id: 'updates',
    name: '서비스 업데이트',
    shortName: '업데이트',
    description: '기능 추가, 요금제 변경, 로드맵, AI 기능 업데이트',
    icon: 'rocket',
    order: 2,
  },
  {
    id: 'tech',
    name: '기술 블로그',
    shortName: '기술',
    description: 'AI 디지털케어로그, RWE, OCR, 아키텍처, 기술 비교',
    icon: 'flask',
    order: 3,
  },
  {
    id: 'insight',
    name: '인사이트',
    shortName: '인사이트',
    description: '사회 문제, 시장 분석, 현장 이야기, 왜 필요한가',
    icon: 'lightbulb',
    order: 4,
  },
  {
    id: 'founder',
    name: 'Founder Story',
    shortName: 'Founder',
    description: '창업자 철학, 개발 배경, 인터뷰, 왜 만들었는가',
    icon: 'user',
    order: 5,
  },
  {
    id: 'press',
    name: '보도자료',
    shortName: '보도',
    description: '언론 배포용 공식 발표 — 사실·일정·회사 입장 중심',
    icon: 'megaphone',
    order: 6,
  },
]

const META_BY_ID = Object.fromEntries(
  NEWS_CATEGORY_META.map((c) => [c.id, c])
) as Record<NewsCategoryId, NewsCategoryMeta>

/** 레거시·오분류 보정: 기사 ID → 표준 카테고리 */
export const NEWS_ARTICLE_CATEGORY_BY_ID: Record<number, NewsCategoryId> = {
  // 2026 최신
  84: 'press', // 노아AI 클라이언트 상용화 보도자료
  83: 'company', // 노아AI 통합 KPI 대시보드
  82: 'company', // 자람이 발달센터 도입
  78: 'press', // GCC 상반기 오픈 — 언론 배포용 공식 발표
  77: 'updates', // 무료 요금제
  76: 'insight', // 학교-부모 언어 격차 (보도자료 아님)
  75: 'company', // 전국 센터 배포
  74: 'updates', // 타임라인 기능
  73: 'tech',
  72: 'insight', // 검사·정보 비대칭 질문형
  71: 'company', // 모두의 창업 출전
  70: 'press', // [보도자료] 자람이 공식 출시
  69: 'updates',
  68: 'insight', // 국제결혼 사회문제
  67: 'company',
  66: 'company', // GCC 서비스 시작
  65: 'updates',
  64: 'company',
  63: 'tech',
  62: 'updates',
  61: 'tech',
  60: 'company',
  59: 'company',
  58: 'company',
  57: 'company',
  56: 'company',
  55: 'company',
  54: 'insight',
  53: 'insight',
  52: 'company',
  51: 'tech',
  50: 'company',
  49: 'insight',
  48: 'insight',
  47: 'insight',
  46: 'insight',
  45: 'updates',
  44: 'press',
  43: 'tech',
  42: 'insight',
  41: 'company',
  40: 'insight',
  39: 'insight',
  38: 'updates',
  37: 'company',
  36: 'company',
  35: 'updates',
  34: 'founder',
  33: 'tech',
  32: 'insight',
  31: 'tech',
  30: 'tech',
  29: 'updates',
  28: 'updates',
  27: 'company',
  3: 'company',
  2: 'company',
  1: 'company',
}

export function getCategoryMeta(category: string): NewsCategoryMeta | undefined {
  return META_BY_ID[category as NewsCategoryId]
}

export function getCategoryName(category: string): string {
  return getCategoryMeta(category)?.name ?? category
}

export function getCategoryIcon(category: string): MarketingIconName {
  return getCategoryMeta(category)?.icon ?? 'document'
}

export function getNewsCategoriesForFilter(counts: Record<string, number>) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0)
  return [
    { name: '전체', value: 'all', count: total },
    ...NEWS_CATEGORY_META.map((c) => ({
      name: c.name,
      value: c.id,
      count: counts[c.id] || 0,
    })),
  ]
}
