interface SiteConfig {
  // Site author
  author: string

  // Site title
  title: string

  // Description to display in the meta tags
  description: string

  // Message to share a post on social media
  shareMessage: string

  // Max number of posts to show on the home page
  maxPosts: number

  // Number of posts per page
  paginationSize: number
}

export const siteConfig: SiteConfig = {
  author: 'Magne Rasmussen',
  title: 'Magne Rasmussen',
  description: 'My occasional blog and portfolio site.',
  shareMessage: 'Share this post',
  maxPosts: 5,
  paginationSize: 6
}
