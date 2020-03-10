module.exports = (themeOptions) => {
  const contentPath = themeOptions.contentPath || 'content';

  return {
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
