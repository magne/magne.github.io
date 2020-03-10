const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');

/**
 * Before booting up Gatsby make sure the content path directory exists.
 */
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState();

  const contentPath = themeOptions.contentPath || 'content';
  const dir         = path.join(program.directory, contentPath);

  if (!fs.existsSync(dir)) {
    mkdirp(dir);
  }
};

exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const postsPerPage = themeOptions.postsPerPage ? themeOptions.postsPerPage : 5;

  const result = await graphql(`
    query {
      pages: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(\\/pages\\/).*.(md)/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
            html
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
        sort: { fields: frontmatter___created, order: DESC }
      ) {
        edges {
          node {
            id
            headings {
              depth
            }
            frontmatter {
              title
              path
              tags
              excerpt
              created
              createdPretty: created(formatString: "DD MMM, YYYY")
              updated
              updatedPretty: updated(formatString: "DD MMM, YYYY")
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 500, quality: 70) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            html
          }
        }
      }
      tags: allTags {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic(result.errors);
  }

  const posts = result.data.posts.edges.map(node => node.node);

  // The index page
  actions.createPage({
    path: '/',
    component: require.resolve('./src/templates/posts.tsx'),
    context: {
      posts,
      postsPerPage
    }
  });
};

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }

  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
};
