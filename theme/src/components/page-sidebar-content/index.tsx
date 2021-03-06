import { graphql, useStaticQuery } from 'gatsby';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { media } from '../../tokens';
import { Card } from '../card';

const LatestPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
  width: 310px;

  @media ${media.md} {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const PageSidebarContent: FunctionComponent = () => {
  const latestPosts = useStaticQuery(graphql`
    query LatestPosts {
      posts: allMdx(
        filter: { fileAbsolutePath: { regex: "/(posts)/.*\\\\.mdx?$/" } }
        sort: { fields: frontmatter___created, order: DESC }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              tags
              created
              createdPretty: created(formatString: "DD MMMM, YYYY")
              excerpt
              featuredImage {
                childImageSharp {
                  fixed(width: 315, height: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const posts = latestPosts.posts.edges.map(node => node.node);

  return (
    <>
      <h3>Latest posts</h3>
      <LatestPosts>
        {posts.map((post, index) => (
          <Card
            title={post.frontmatter.title}
            featuredImage={post.frontmatter.featuredImage.childImageSharp}
            path={post.frontmatter.path}
            key={index}
            compact={true}
            meta={{
              time: post.frontmatter.created,
              timePretty: post.frontmatter.createdPretty,
              tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
            }}
          />
        ))}
      </LatestPosts>
    </>
  );
};

export default PageSidebarContent;
