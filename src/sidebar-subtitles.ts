import { getCollection } from 'astro:content'
import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data'

type SidebarEntry = StarlightRouteData['sidebar'][number]

export const onRequest = defineRouteMiddleware(async ({ locals }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const articles = await getCollection('docs', ({ data }) => Boolean(data.subtitle))
  const subtitles = new Map(articles.map(({ id, data }) => {
    const slug = id === 'index' ? '' : id.replace(/\/index$/, '').normalize()
    const href = slug ? `${base}/${slug}/` : `${base}/`
    return [href, data.subtitle] as const
  }))

  function addSubtitles(entries: SidebarEntry[]): SidebarEntry[] {
    return entries.map((entry) => {
      if (entry.type === 'group') {
        return { ...entry, entries: addSubtitles(entry.entries) }
      }

      const subtitle = subtitles.get(entry.href)
      if (!subtitle) return entry

      const attrs = {
        ...entry.attrs,
        'data-article-subtitle': subtitle,
        'aria-label': `${entry.attrs['aria-label'] ?? entry.label}。 ${subtitle}`,
      }
      return { ...entry, attrs }
    })
  }

  const route = locals.starlightRoute
  route.sidebar = addSubtitles(route.sidebar)
})
