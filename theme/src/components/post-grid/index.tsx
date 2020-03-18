import React, { FunctionComponent } from 'react';
import { IPost } from '../../utils/models';
import { Card } from '../card';
import { Grid } from '../common';

interface IPostGridProps {
  posts: IPost[];
}

const PostGrid: FunctionComponent<IPostGridProps> = ({ posts }) => (
  <Grid>
    {posts.map((post, index) => (
      <Card
        title={post.frontmatter.title}
        path={post.frontmatter.path}
        featuredImage={post.frontmatter.featuredImage?.childImageSharp}
        content={post.frontmatter.excerpt}
        key={index}
        meta={{
          time: post.frontmatter.created,
          timePretty: post.frontmatter.createdPretty,
          tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
        }}
      />
    ))}
  </Grid>
);

export default PostGrid;
