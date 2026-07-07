import type { MarketingIconName } from '../components/MarketingIcon'

/** DAL UI 아이콘 이름 전체 (MarketingIconName과 동기화) */
export const MARKETING_ICON_NAMES = [
  'scale', 'chart', 'link', 'brain', 'trend', 'blocks', 'puzzle', 'bolt', 'document',
  'flask', 'sprout', 'user', 'hospital', 'globe', 'handshake', 'heart', 'rocket',
  'target', 'microscope', 'lightbulb', 'sparkle', 'graduation', 'leaf', 'stethoscope',
  'lock', 'mobile', 'search', 'cog', 'robot', 'upload', 'refresh', 'chat', 'eye',
  'shield', 'pill', 'dna', 'phone', 'users', 'home', 'buildings', 'bell', 'clock',
  'mic', 'trophy', 'pin', 'megaphone', 'download', 'baby', 'child', 'alert', 'camera',
  'accessibility',
] as const satisfies readonly MarketingIconName[]

const ICON_NAME_SET = new Set<string>(MARKETING_ICON_NAMES)

/** 뉴스 카테고리 → 고정 아이콘 */
export const NEWS_CATEGORY_ICONS: Record<string, MarketingIconName> = {
  company: 'blocks',
  updates: 'rocket',
  tech: 'flask',
  insight: 'lightbulb',
  founder: 'user',
  press: 'megaphone',
}

export function getNewsCategoryIcon(category: string): MarketingIconName {
  return NEWS_CATEGORY_ICONS[category] ?? 'document'
}

/** 레거시·별칭 → 표준 아이콘 */
const ICON_ALIASES: Record<string, MarketingIconName> = {
  settings: 'cog',
  spark: 'sparkle',
  award: 'trophy',
  tooth: 'pill',
  syringe: 'pill',
  mask: 'shield',
}

/** 이모지 → DAL 라인 아이콘 (서비스 페이지 공통) */
export const EMOJI_TO_ICON: Record<string, MarketingIconName> = {
  '🔎': 'search',
  '🏪': 'blocks',
  '👨‍👩‍👧': 'heart',
  '👨‍👩‍👧‍👦': 'heart',
  '👶': 'baby',
  '📱': 'mobile',
  '💬': 'chat',
  '📑': 'document',
  '📋': 'document',
  '📝': 'document',
  '📒': 'document',
  '📚': 'graduation',
  '🔗': 'link',
  '🛡️': 'shield',
  '✅': 'shield',
  '🕸️': 'globe',
  '💼': 'cog',
  '📊': 'chart',
  '🌐': 'globe',
  '🌍': 'globe',
  '📈': 'trend',
  '🏢': 'blocks',
  '🏛️': 'scale',
  '🔄': 'refresh',
  '♾️': 'refresh',
  '🔁': 'refresh',
  '✨': 'sparkle',
  '⭐': 'sparkle',
  '🎯': 'target',
  '💑': 'heart',
  '💰': 'scale',
  '💚': 'heart',
  '🚪': 'link',
  '💡': 'lightbulb',
  '⚠️': 'alert',
  '⚖️': 'scale',
  '🚀': 'rocket',
  '🚫': 'lock',
  '❌': 'lock',
  '🪪': 'user',
  '🏠': 'home',
  '🏘️': 'buildings',
  '🔌': 'cog',
  '🧸': 'heart',
  '🧠': 'brain',
  '🤖': 'robot',
  '🧩': 'puzzle',
  '🏥': 'hospital',
  '🏫': 'graduation',
  '🔐': 'lock',
  '📤': 'upload',
  '💊': 'pill',
  '🩺': 'stethoscope',
  '👤': 'user',
  '👥': 'users',
  '🌱': 'sprout',
  '🌿': 'leaf',
  '🥗': 'leaf',
  '🧑‍⚕️': 'stethoscope',
  '🥚': 'puzzle',
  '🐟': 'heart',
  '🏆': 'trophy',
  '📍': 'pin',
  '🛒': 'handshake',
  '🔬': 'flask',
  '🎤': 'mic',
  '⏰': 'clock',
  '🤲': 'handshake',
  '🔒': 'lock',
  '🌅': 'sparkle',
  '🦽': 'accessibility',
  '✍️': 'document',
  '🔮': 'eye',
  '⚕️': 'stethoscope',
  '🔍': 'search',
  '📡': 'globe',
  '🔔': 'bell',
  '🗂️': 'document',
  '⚙️': 'cog',
  '💒': 'heart',
  '💙': 'heart',
  '📰': 'megaphone',
  '🤝': 'handshake',
  '🌏': 'globe',
  '💎': 'sparkle',
  '🎭': 'sparkle',
  '👑': 'sparkle',
  '🆕': 'sparkle',
  '👴': 'user',
  '❓': 'lightbulb',
  '🎉': 'sparkle',
}

export function resolveIcon(symbol: string): MarketingIconName {
  if (ICON_NAME_SET.has(symbol)) return symbol as MarketingIconName
  if (ICON_ALIASES[symbol]) return ICON_ALIASES[symbol]
  if (EMOJI_TO_ICON[symbol]) return EMOJI_TO_ICON[symbol]
  return 'sparkle'
}

export function emojiToIcon(emoji: string): MarketingIconName {
  return resolveIcon(emoji)
}
