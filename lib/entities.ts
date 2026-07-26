export const DREAM_AI_LAB_URL = 'https://dreamailab.com'
export const DREAM_AI_LAB_ORGANIZATION_ID = `${DREAM_AI_LAB_URL}/#organization`
export const JUNG_HAESUNG_URL = `${DREAM_AI_LAB_URL}/research/jung-haesung/`
export const JUNG_HAESUNG_PERSON_ID = `${JUNG_HAESUNG_URL}#person`
export const AI_DIGITAL_CARE_LOG_URL = `${DREAM_AI_LAB_URL}/technology/`
export const AI_DIGITAL_CARE_LOG_ID = `${AI_DIGITAL_CARE_LOG_URL}#ai-digital-care-log`

export const ecosystemBrands = [
  {
    name: '자람이',
    alternateName: 'Jarame',
    url: 'https://jarame.or.kr/',
    description: '발달장애인의 생활·치료·교육 기록을 연결하는 AI 디지털케어로그 적용 서비스',
  },
  {
    name: '시니어앤라이프',
    alternateName: 'Senior & Life',
    url: 'https://seniorandlife.com/',
    description: '시니어 돌봄 시설 탐색과 돌봄 기록 연결을 제공하는 서비스',
  },
  {
    name: 'Global Couple Care',
    alternateName: '글로벌커플케어',
    url: 'https://globalcouplecare.com/',
    description: '국제결혼 정보 탐색·검증·정착 지원을 연결하는 신뢰 플랫폼',
  },
  {
    name: 'VeggieCare',
    alternateName: '베지케어',
    url: 'https://veggie.care/',
    description: '채식 생활·영양·식단 기록을 연결하는 라이프스타일 서비스',
  },
] as const

export const jungHaesungPersonSchema = {
  '@type': 'Person',
  '@id': JUNG_HAESUNG_PERSON_ID,
  name: '정해성',
  alternateName: 'Jung Haesung',
  url: JUNG_HAESUNG_URL,
  jobTitle: 'AI 연구자 · 공동창업자·CTO',
  worksFor: {
    '@type': 'Organization',
    '@id': DREAM_AI_LAB_ORGANIZATION_ID,
    name: '드림에이아이랩',
    url: DREAM_AI_LAB_URL,
  },
  knowsAbout: [
    'AI 디지털케어로그',
    'AI Digital Care Log',
    'Decision-Log-Review-Learning',
    '사람 중심 AI',
    '케어 데이터 아키텍처',
    '금융 의사결정 로그',
  ],
  subjectOf: [
    { '@type': 'WebPage', url: AI_DIGITAL_CARE_LOG_URL, name: 'AI 디지털케어로그 핵심 기술' },
    { '@type': 'WebPage', url: 'https://jarame.or.kr/tech-docs', name: '자람이 기술·신뢰 안내' },
    { '@type': 'WebPage', url: 'https://seniorandlife.com/digital-care-log', name: '시니어앤라이프 AI 디지털케어로그' },
    { '@type': 'WebPage', url: 'https://noahailabs.com/ko/about/founder-origin', name: 'NoahAI Labs DAL 기술 기원' },
  ],
} as const

export const aiDigitalCareLogSchema = {
  '@type': 'DefinedTerm',
  '@id': AI_DIGITAL_CARE_LOG_ID,
  name: 'AI 디지털케어로그',
  alternateName: ['AI Digital Care Log', 'DAL'],
  url: AI_DIGITAL_CARE_LOG_URL,
  description:
    '의사결정, 기록, 검토, 학습을 연결해 사람의 최종 판단을 돕는 범용 기록·환류 아키텍처',
  creator: { '@id': JUNG_HAESUNG_PERSON_ID },
  inDefinedTermSet: {
    '@type': 'DefinedTermSet',
    name: 'Dream AI Lab Technology',
    url: AI_DIGITAL_CARE_LOG_URL,
  },
} as const

export const dreamAiLabOrganizationSchema = {
  '@type': 'Organization',
  '@id': DREAM_AI_LAB_ORGANIZATION_ID,
  name: '드림에이아이랩',
  alternateName: ['Dream AI Lab', 'DAL'],
  url: DREAM_AI_LAB_URL,
  logo: `${DREAM_AI_LAB_URL}/logo.png`,
  description:
    'AI 디지털케어로그를 연구·설계하고 돌봄·교육·생활·의사결정 영역에 적용하는 사람 중심 AI 기술 조직',
  foundingDate: '2022',
  founder: { '@id': JUNG_HAESUNG_PERSON_ID },
  brand: ecosystemBrands.map((brand) => ({
    '@type': 'Brand',
    name: brand.name,
    alternateName: brand.alternateName,
    url: brand.url,
    description: brand.description,
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'contact@dreamailab.com',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
  },
  knowsAbout: [
    { '@id': AI_DIGITAL_CARE_LOG_ID },
    '사람 중심 AI',
    '케어 데이터 표준화',
    '다도메인 의사결정 로그',
  ],
} as const

export const dreamAiLabEntityGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    dreamAiLabOrganizationSchema,
    jungHaesungPersonSchema,
    aiDigitalCareLogSchema,
  ],
} as const

export const dreamAiLabWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${DREAM_AI_LAB_URL}/#website`,
  name: '드림에이아이랩',
  alternateName: 'Dream AI Lab',
  url: DREAM_AI_LAB_URL,
  inLanguage: ['ko-KR', 'en-US'],
  publisher: { '@id': DREAM_AI_LAB_ORGANIZATION_ID },
} as const
