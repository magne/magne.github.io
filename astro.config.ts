import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import rehypeMathjax from 'rehype-mathjax'
import rehypePrettyCode, { type Options } from 'rehype-pretty-code'
import remarkMath from 'remark-math'
import { remarkReadingTime } from './src/utils/readtime'

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
  integrations: [mdx(), sitemap()],

  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [rehypeMathjax, [rehypePrettyCode, prettyCodeOptions]]
  },

  vite: {
    plugins: [tailwindcss()]
  }
})
