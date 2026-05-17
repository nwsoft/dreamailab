export type ContactFormPayload = {
  name: string
  email: string
  company: string
  inquiryType: string
  inquiryLabel: string
  service: string
  serviceLabel: string
  message: string
}

/** 문의 양식 제출 → contact@ 로 mailto (제목·본문 prefill). 사용자가 메일 앱에서 보내기를 눌러야 전달됨. */
export function buildMailtoHref(payload: ContactFormPayload, contactEmail: string): string {
  const subject = encodeURIComponent(
    `[DAL 문의] ${payload.inquiryLabel} · ${payload.serviceLabel}${payload.company ? ` · ${payload.company}` : ''}`
  )
  const body = encodeURIComponent(
    [
      `이름: ${payload.name}`,
      `이메일: ${payload.email}`,
      payload.company ? `회사/기관: ${payload.company}` : null,
      `문의 유형: ${payload.inquiryLabel}`,
      `관심 서비스: ${payload.serviceLabel}`,
      '',
      '문의 내용:',
      payload.message,
      '',
      '— dreamailab.com 문의 양식',
    ]
      .filter(Boolean)
      .join('\n')
  )
  return `mailto:${contactEmail}?subject=${subject}&body=${body}`
}
