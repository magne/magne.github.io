import { graphql } from 'gatsby';
import React, { FunctionComponent } from 'react';
import slugify from 'slugify';
import { Card } from '../components/card';
import { Grid } from '../components/common';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Subheader from '../components/subheader';
import { ITag } from '../utils/models';
import Img from 'gatsby-image';
import styled from 'styled-components';

interface ITagsPageProps {
  data: {
    allTags: {
      edges: Array<{ node: ITag }>;
    };
  };
  location: Location;
}

const TagSvgIcon = styled.img`
  max-height: 55px;
`;

const TagName = styled.p`
  margin: 0 !important;
`;

const TagsPage: FunctionComponent<ITagsPageProps> = ({ data, location }) => {
  const tags = data.allTags.edges.map(node => node.node);

  return (
    <Layout bigHeader={false}>
      <SEO location={location} title={`Tags`} type={`Series`} />
      <Subheader title={`Tags`} subtitle={`${tags.length} tags`} />
      <Grid columns={6}>
        {tags.map((tag, index) => (
          <Card key={index} path={`/tag/${slugify(tag.name, { lower: true })}`} compact={true} style={{ textAlign: 'center' }}>
            {/* gatsby-image doesn't handle SVGs, hence we need to take care of it */}
            {tag.icon &&
              (tag.icon.extension !== 'svg' ? (
                <Img fixed={tag.icon.childImageSharp.fixed} />
              ) : (
                <TagSvgIcon src={tag.icon.publicURL} alt={tag.name} />
              ))}
            <TagName>{tag.name}</TagName>
          </Card>
        ))}
      </Grid>
    </Layout>
  );
};

export default TagsPage;

export const query = graphql`
  query AllTags {
    allTags {
      edges {
        node {
          name
          icon {
            childImageSharp {
              fixed(height: 55) {
                ...GatsbyImageSharpFixed
              }
            }
            extension
            publicURL
          }
        }
      }
    }
  }
`;
