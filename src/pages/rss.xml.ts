import { getCollection } from 'astro:content'
import rss from '@astrojs/rss'
import { siteConfig } from '@site-config'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('posts')
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: context.site ?? import.meta.env.SITE,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `post/${post.slug}/`,
      pubDate: post.data.pubDate,
      description: post.data.excerpt,
      category: (post.data.category ? [post.data.category as string] : []).concat(...(post.data.tags ?? []))
    }))
  })
}
