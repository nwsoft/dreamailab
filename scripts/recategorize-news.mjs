#!/usr/bin/env node
/**
 * app/news/data.ts 기사 category 필드를 NEWS_ARTICLE_CATEGORY_BY_ID 기준으로 일괄 갱신
 * 사용: node scripts/recategorize-news.mjs
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dataPath = path.join(root, 'app/news/data.ts')
const mapPath = path.join(root, 'lib/news-categories.ts')

const mapSrc = fs.readFileSync(mapPath, 'utf8')
const idMap = {}
const blockRe = /(\d+):\s*'(\w+)'/g
let inMap = false
for (const line of mapSrc.split('\n')) {
  if (line.includes('NEWS_ARTICLE_CATEGORY_BY_ID')) inMap = true
  if (inMap && line.includes('}')) break
  const m = line.match(/^\s*(\d+):\s*'(\w+)'/)
  if (m) idMap[+m[1]] = m[2]
}

let src = fs.readFileSync(dataPath, 'utf8')
let changes = 0

src = src.replace(
  /(\{\s*\n\s*id:\s*(\d+),[\s\S]*?\n\s*)category:\s*'[^']+'/g,
  (full, prefix, idStr) => {
    const id = +idStr
    const next = idMap[id]
    if (!next) return full
    const current = full.match(/category:\s*'([^']+)'/)?.[1]
    if (current === next) return full
    changes++
    return full.replace(/category:\s*'[^']+'/, `category: '${next}'`)
  }
)

fs.writeFileSync(dataPath, src)
console.log(`Updated ${changes} article categories in app/news/data.ts`)
