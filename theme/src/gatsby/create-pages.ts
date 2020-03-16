import { GatsbyNode } from 'gatsby';
import { IThemeOptions } from '../model';

export interface IPost {
  id: string;
  headings?: {
    depth?: number;
  };
  frontmatter?: {
    title?: string;
    path?: string;
    tags?: (string | null)[];
    excerpt?: string;
    create?: Date;
    createdPretty?: string;
    updated?: Date;
    updatedPretty?: string;
    featuredImage?: {
      childImageSharp?: {
        sizes?: {
          base64?: string;
          aspectRatio: number;
          src: string;
          srcSet: string;
          sizes: string;
        };
      };
    };
  };
  html?: string;
}

interface IQueryResult {
  posts: {
    edges: { node: IPost }[];
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

  const posts = result.data?.posts.edges.map(node => node.node) ?? null;

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
