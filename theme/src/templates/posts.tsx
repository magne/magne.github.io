import React, { FunctionComponent } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Post } from '../utils/models';

interface PostsPageProps {
  pathContext: {
    posts: Post[],
    postsPerPage: number
  };
  location: Location;
}

const PostsPage: FunctionComponent<PostsPageProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={'WebSite'} />
    </Layout>
  );
};

export default PostsPage;
