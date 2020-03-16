export default ({ contentPath = 'content' }): {} => ({
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
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
