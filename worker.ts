interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>
  }
}

const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
}

const NAVER_SITE_VERIFICATION_PATH = '/naver28e9a641b06783a89d3397b9f8632c2f.html'
const NAVER_SITE_VERIFICATION_BODY =
  'naver-site-verification: naver28e9a641b06783a89d3397b9f8632c2f.html'

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === NAVER_SITE_VERIFICATION_PATH) {
      return new Response(NAVER_SITE_VERIFICATION_BODY, {
        headers: {
          ...SECURITY_HEADERS,
          'Content-Type': 'text/html; charset=utf-8',
        },
      })
    }

    if (
      url.pathname === '/services/maeume' ||
      url.pathname === '/services/maeume/' ||
      url.pathname === '/services/health' ||
      url.pathname === '/services/health/'
    ) {
      return Response.redirect(new URL('/services/healthcare/', url), 301)
    }

    const assetResponse = await env.ASSETS.fetch(request)
    const headers = new Headers(assetResponse.headers)
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
      headers.set(name, value)
    }

    return new Response(assetResponse.body, {
      status: assetResponse.status,
      statusText: assetResponse.statusText,
      headers,
    })
  },
}
