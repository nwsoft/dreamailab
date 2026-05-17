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

/** Cloudflare Pages / 빌드 시 `NEXT_PUBLIC_FORMSPREE_FORM_ID` 설정 (예: xyzabcde) */
export function getFormspreeEndpoint(): string | null {
  const raw = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim()
  if (!raw) return null
  if (raw.startsWith('http')) return raw
  return `https://formspree.io/f/${raw}`
}

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

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<{ ok: boolean; mode: 'formspree' | 'mailto'; error?: string }> {
  const endpoint = getFormspreeEndpoint()
  if (!endpoint) {
    return { ok: false, mode: 'mailto' }
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: payload.name,
        email: payload.email,
        company: payload.company || '',
        inquiry_type: payload.inquiryType,
        inquiry_label: payload.inquiryLabel,
        service_slug: payload.service,
        service_label: payload.serviceLabel,
        message: payload.message,
        _subject: `[DAL 문의] ${payload.inquiryLabel} · ${payload.serviceLabel}`,
        _replyto: payload.email,
      }),
    })

    if (res.ok) {
      return { ok: true, mode: 'formspree' }
    }

    const data = (await res.json().catch(() => null)) as { error?: string } | null
    return {
      ok: false,
      mode: 'formspree',
      error: data?.error ?? `전송 실패 (${res.status})`,
    }
  } catch {
    return { ok: false, mode: 'formspree', error: '네트워크 오류로 전송하지 못했습니다.' }
  }
}

export function isFormspreeConfigured(): boolean {
  return Boolean(getFormspreeEndpoint())
}
