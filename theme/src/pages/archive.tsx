import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Layout from '../components/layout';
import PostGrid from '../components/post-grid';
import SEO from '../components/seo';
import Subheader from '../components/subheader';
import { IPost } from '../utils/models';

interface IArchivePageProps {
  data: {
    allPosts: {
      edges: Array<{ node: IPost }>;
    };
  };
  location: Location;
}

const ArchivePage: FunctionComponent<IArchivePageProps> = ({ data, location }) => {
  const posts = data.allPosts.edges.map(node => node.node) as IPost[];

  return (
    <Layout bigHeader={false}>
      <SEO location={location} title={'Archive'} type={'Series'} />
      <Subheader title={'Archive'} subtitle={`${posts.length} posts`} />
      <PostGrid posts={posts} />
    </Layout>
  );
};

export default ArchivePage;

export const query = graphql`
  query Archive {
    allPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.md$/" } }
      sort: { fields: frontmatter___created, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            tags
            excerpt
            created
            createdPretty: created(formatString: "DD MMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 500, quality: 100) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
      }
    }
  }
`;
