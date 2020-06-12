import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import Layout from '../components/layout';
import PostGrid from '../components/post-grid';
import SEO from '../components/seo';
import Subheader from '../components/subheader';
import Theme from '../styles/theme';
import { IPost, ITag } from '../utils/models';

interface ITagTemplateProps {
  data: {
    tag: ITag;
    posts: {
      edges: Array<{ node: IPost }>;
    };
  };
  location: Location;
}

const TagTemplate: FunctionComponent<ITagTemplateProps> = ({ data, location }) => {
  let tag = data.tag;
  const posts = data.posts.edges.map(node => node.node);

  if (!tag && posts.length > 0) {
    tag = {
      name: posts[0].frontmatter.tags[0],
      color: Theme.layout.primaryColor,
      icon: null,
      featured: false,
    };
  }

  return (
    <Layout bigHeader={false}>
      <SEO title={tag.name} location={location} type={'Series'} />
      <Subheader title={tag.name} subtitle={`${posts.length} posts`} backgroundColor={tag.color} />
      <PostGrid posts={posts} />
    </Layout>
  );
};

export default TagTemplate;

export const query = graphql`
  query Tag($tag: String!) {
    tag: tags(name: { eq: $tag }) {
      name
      color
    }
    posts: allMdx(
      filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.mdx?$/" }, frontmatter: { tags: { eq: $tag } } }
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
            createdPretty: created(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 800, quality: 100) {
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
