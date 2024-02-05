import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? 'https://localhost:4321' : 'https://blog.codehive.org',
  integrations: [mdx(), tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: []
  }
})
