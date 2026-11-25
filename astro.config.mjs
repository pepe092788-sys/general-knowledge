import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'

export default defineConfig({
  output: 'static',
  site: 'https://pepe092788-sys.github.io',
  base: '/general-knowledge',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: '一般教養サイト',
      description: '日常の疑問から知識を深め、世界の仕組みを探求するサイト',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/pepe092788-sys/general-knowledge' },
      ],
      defaultLocale: 'root',
      locales: { root: { label: '日本語', lang: 'ja' } },
      components: { PageTitle: './src/components/PageTitle.astro' },
      routeMiddleware: './src/sidebar-subtitles.ts',
      customCss: ['./src/styles/sidebar.css'],
      pagination: false,
      sidebar: [
        { label: '分野から探す', slug: 'topics' },
        { label: '自然科学', collapsed: true, items: [{ autogenerate: { directory: 'science', collapsed: true } }] },
        { label: '歴史・文化', collapsed: true, items: [{ autogenerate: { directory: 'history-culture', collapsed: true } }] },
        { label: '社会・経済', collapsed: true, items: [{ autogenerate: { directory: 'society-economy', collapsed: true } }] },
        { label: '心理・人間', collapsed: true, items: [{ autogenerate: { directory: 'psychology', collapsed: true } }] },
        { label: '哲学・思想', collapsed: true, items: [{ autogenerate: { directory: 'philosophy', collapsed: true } }] },
        { label: '暮らし', collapsed: true, items: [{ autogenerate: { directory: 'everyday', collapsed: true } }] },
        { label: 'このサイトについて', slug: 'about', attrs: { class: 'site-about-link' } },
        { label: 'Digital Literacy', link: 'https://pepe092788-sys.github.io/digital-literacy/' },
      ],
    }),
  ],
})
