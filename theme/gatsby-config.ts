export default ({ contentPath = 'content' }): {} => ({
  siteMetadata: {
    title: `nehalem`,
    siteUrl: `https://nehalem.netlify.com`,
    description: `A Gatsby theme for %TOPICS%`,
    topics: [`bloggers`, `geeks`, `nerds`, `people`, `everyone`],
    menu: [
      {
        name: 'Home',
        path: '/',
      },
      {
        name: 'Example',
        path: '/page',
      },
    ],
    footerMenu: [
      {
        name: 'RSS',
        path: '/rss.xml',
      },
      {
        name: 'Sitemap',
        path: '/sitemap.xml',
      },
    ],
    search: true,
    author: {
      name: `nehalem`,
      description: `I'm <strong>nehalem</strong>, a Gatsby theme by
      <a href="https://nehalist.io" rel="noopener" target="_blank">nehalist.io</a>. If you like what you see feel free to give a
      <a href="https://github.com/nehalist/gatsby-theme-nehalem" rel="noopener" target="_blank">star on GitHub!</a>`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/nehalist`,
        linkedin: `https://www.linkedin.com/in/kevin-hirczy-7a9377106/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/nehalist`,
        twitch: ``,
      },
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themeAssets`,
        path: `${__dirname}/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-lunr`,
      options: {
        languages: [
          {
            name: 'en',
          },
        ],
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'content', store: true },
          { name: 'tags', store: true },
          { name: 'excerpt', store: true },
          { name: 'path', store: true },
        ],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            content: node => node.html,
            tags: node => node.frontmatter.tags,
            excerpt: node => node.frontmatter.excerpt,
            path: node => node.frontmatter.path,
          },
        },
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          'gatsby-remark-prismjs',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: 'Tags',
      },
    },
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        includes: [
          './node_modules/theme/src/**/*.ts',
          './node_modules/theme/src/**/*.tsx',
          '../node_modules/theme/src/**/*.ts',
          '../node_modules/theme/src/**/*.tsx',
          './node_modules/gatsby-*/**/*.js',
          '../node_modules/gatsby-*/**/*.js',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: `${process.env.GA_TRACKING_ID}`,
      },
    },
  ],
});
