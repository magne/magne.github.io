export default ({ contentPath = 'data' }): {} => ({
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-codegen',
      options: {
        addTypename: true,
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
