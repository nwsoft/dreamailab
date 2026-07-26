import { newsArticles } from '../news/data'

export const dynamic = 'force-static'

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export function GET() {
  const items = [...newsArticles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 40)
    .map((article) => {
      const link = `https://dreamailab.com/news/${article.id}/`
      return `<item>
  <title>${escapeXml(article.title)}</title>
  <link>${link}</link>
  <guid isPermaLink="true">${link}</guid>
  <pubDate>${new Date(`${article.date}T00:00:00+09:00`).toUTCString()}</pubDate>
  <description>${escapeXml(article.excerpt)}</description>
</item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
  <title>Dream AI Lab 뉴스</title>
  <link>https://dreamailab.com/news/</link>
  <description>드림에이아이랩의 회사 뉴스, 기술 블로그, 서비스 업데이트와 보도자료</description>
  <language>ko-KR</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
