import { GatsbyNode } from 'gatsby';
import { IThemeOptions } from '../utils/models';
import { ITag, IPage, IPost } from '../utils/models';
import slugify from 'slugify';

interface IQueryResult {
  pages: {
    edges: { node: IPage }[];
  };
  posts: {
    edges: { node: IPost }[];
  };
  tags: {
    edges: { node: ITag }[];
  };
}

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }, themeOptions: IThemeOptions) => {
  const postsPerPage = themeOptions.postsPerPage ? themeOptions.postsPerPage : 5;

  const result = await graphql<IQueryResult>(`
    query CreatePages {
      pages: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/(/pages/).*.(md)/" } }) {
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

  const tags: string[] = [];
  const posts = result.data?.posts.edges.map(node => node.node);
  const pages = result.data?.pages.edges.map(node => node.node);
  const availableTags = result.data?.tags.edges.map(node => node.node).map(t => t.name) || [];

  // Create a route for every single post (located in 'content/posts')
  posts?.forEach(post => {
    if (post.frontmatter.tags) {
      tags.push(...post.frontmatter.tags);
    }
    const primaryTag = post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null;
    actions.createPage({
      path: post.frontmatter.path,
      component: require.resolve('../templates/post.tsx'),
      context: {
        postId: post.id,
        primaryTag: primaryTag,
      },
    });
  });

  // Create a route for every page (located in 'content/pages')
  pages?.forEach(page => {
    actions.createPage({
      path: page.frontmatter.path,
      component: require.resolve('../templates/page.tsx'),
      context: {
        page,
      },
    });
  });

  // Create a route for every tag (from 'content/tags.yml' and the tags found in posts)
  // TODO: [...new Set(tags)].concat(availableTags).forEach(tag => {
  Array.from(new Set(tags))
    .concat(availableTags)
    .forEach(tag => {
      const slugified = slugify(tag, { lower: true });
      actions.createPage({
        path: `/tag/${slugified}`,
        component: require.resolve('../templates/tag.tsx'),
        context: {
          tag,
        },
      });
    });

  // The index page
  actions.createPage({
    path: '/',
    component: require.resolve('../templates/posts.tsx'),
    context: {
      posts,
      postsPerPage,
    },
  });
};
