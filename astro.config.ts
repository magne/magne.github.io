import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import rehypeMathjax from 'rehype-mathjax'
import remarkMath from 'remark-math'
import { remarkReadingTime } from './src/utils/readtime'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'

const prettyCodeOptions: Options = {
  theme: 'catppuccin-mocha',
  onVisitLine: (node) => {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node) {
    if (node.properties.className) {
      node.properties.className.push('highlighted')
    } else {
      node.properties.className = ['highlighted']
    }
  },
  tokensMap: {}
}

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.DEV ? 'https://localhost:4321' : 'https://blog.codehive.org',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeMathjax, [rehypePrettyCode, prettyCodeOptions]]
  }
})
