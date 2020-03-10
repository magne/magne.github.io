module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || 'content';

  return {
    siteMetadata: {
      title: `nehalem`,
      siteUrl: `https://nehalem.netlify.com`,
      description: `A Gatsby theme for %TOPICS%`,
      topics: [
        `bloggers`,
        `geeks`,
        `nerds`,
        `people`,
        `everyone`
      ],
      menu: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Example',
          path: '/page'
        },
      ],
      footerMenu: [
        {
          name: 'RSS',
          path: '/rss.xml'
        },
        {
          name: 'Sitemap',
          path: '/sitemap.xml'
        }
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
          twitch: ``
        }
      }
    },
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-sharp',
      'gatsby-transformer-sharp',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'content',
          path: contentPath
        }
      },
      {
        resolve: 'gatsby-transformer-yaml',
        options: {
          typeName: 'Tags'
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-autolink-headers',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 1200
              }
            }
          ]
        }
      },
    ]
  };
};
