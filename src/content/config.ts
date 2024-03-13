import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@data/categories'

const postsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string().max(80),
      excerpt: z.string(),
      pubDate: z
        .date()
        .or(z.string())
        .transform((val) => new Date(val))
        .default(new Date(0)),
      updatedDate: z
        .date()
        .or(z.string())
        .transform((val) => new Date(val))
        .optional(),
      heroImage: image(),
      heroImageAlt: z.string().optional(),
      heroImageCredit: z.string().optional(),
      category: z.enum(CATEGORIES).optional(),
      tags: z.array(z.string()),
      draft: z.boolean().default(false)
    })
})

export const collections = { posts: postsCollection }
