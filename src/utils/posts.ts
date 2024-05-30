import { getCollection } from 'astro:content'
import { repoDates } from './repodates'

export const getCategories = async () => {
  const posts = await getCollection('posts')
  const categories = new Set(
    posts
      .filter((post) => import.meta.env.DEV || !post.data.draft)
      .filter((post) => !!post.data.category)
      .map((post) => post.data.category as Exclude<typeof post.data.category, undefined>)
  )
  return Array.from(categories)
}

export const getPosts = async (max?: number) => {
  const posts = await getCollection('posts')
  return posts
    .filter((post) => import.meta.env.DEV || !post.data.draft)
    .map((post) => repoDates(post))
    .sort((a, b) => b.data.pubDate?.valueOf() - a.data.pubDate?.valueOf())
    .slice(0, max)
}

export const getTags = async () => {
  const posts = await getCollection('posts')
  const tags = new Set(
    posts
      .filter((post) => import.meta.env.DEV || !post.data.draft)
      .filter((post) => !!post.data.tags)
      .flatMap((post) => post.data.tags)
      .map((tag) => tag.toLowerCase())
  )
  return Array.from(tags)
}

export const getPostsByTag = async (tag: string) => {
  const posts = await getCollection('posts')
  const lowerCaseTag = tag.toLowerCase()
  return posts
    .filter((post) => import.meta.env.DEV || !post.data.draft)
    .filter((post) => post.data.tags.some((tag) => tag.toLowerCase() === lowerCaseTag))
    .map((post) => repoDates(post))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
}
