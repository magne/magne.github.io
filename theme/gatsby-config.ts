import { Feature, isFeatureEnabled } from './src/utils/features';
import { IThemeOptions } from './src/utils/models';

export default (themeOptions: IThemeOptions): {} => {
  const loadDefaultPages = themeOptions.loadDefaultPages !== undefined ? themeOptions.loadDefaultPages : true;
  const contentPath = themeOptions.contentPath ?? 'content';
  const manifest = themeOptions.manifest ?? {
    name: `nehalem - A Gatsby theme`,
    short_name: `nehalem`,
    start_url: `/`,
    background_color: `#a4cbb8`,
    theme_color: `#a4cbb8`,
    display: `minimal-ui`,
    icon: `${__dirname}/assets/nehalist-gatsby.png`,
  };

  return {
    siteMetadata: {
      title: `nehalem`,
      siteUrl: `https://blog.codehive.org`,
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
      'gatsby-plugin-typescript',
      'gatsby-transformer-sharp',
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-styled-components',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-sharp',
      isFeatureEnabled(Feature.darkMode) && {
        resolve: 'gatsby-styled-components-dark-mode',
        options: {
          light: require(`${__dirname}/src/styles/theme.ts`).lightTheme,
          dark: require(`${__dirname}/src/styles/theme.ts`).darkTheme,
        },
      },
      {
        resolve: 'gatsby-plugin-manifest',
        options: manifest,
      },
      'gatsby-plugin-offline',
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
              title: (node) => node.frontmatter.title,
              content: (node) => node.html,
              tags: (node) => node.frontmatter.tags,
              excerpt: (node) => node.frontmatter.excerpt,
              path: (node) => node.frontmatter.path,
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
      loadDefaultPages && {
        resolve: 'gatsby-plugin-page-creator',
        options: {
          path: `${__dirname}/src/pages`,
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
      {
        resolve: `gatsby-plugin-feed`,
        options: {
          query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
          feeds: [
            {
              serialize: ({ query: { site, allMarkdownRemark } }) => {
                return allMarkdownRemark.edges.map((edge) => {
                  return Object.assign({}, edge.node.frontmatter, {
                    description: edge.node.frontmatter.excerpt,
                    date: edge.node.frontmatter.created,
                    url: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                    custom_elements: [{ 'content:encoded': edge.node.html }],
                  });
                });
              },
              query: `
            {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___created] },
                filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
              ) {
                edges {
                  node {
                    html
                    frontmatter {
                      title
                      excerpt
                      path
                      created
                    }
                  }
                }
              }
            }
            `,
              output: `/rss.xml`,
              title: `RSS Feed`,
            },
          ],
        },
      },
    ].filter(Boolean),
  };
};
