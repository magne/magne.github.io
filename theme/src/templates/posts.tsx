import React, { FC } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { IPost } from '../utils/models';

interface ITemplateProps {
  pathContext: {
    posts: IPost[];
    postsPerPage: number;
  };
  location: Location;
}

const PostsTemplate: FC<ITemplateProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={'WebSite'} />
      <div>
        {pathContext.postsPerPage}
        {posts.map(page => (
          <div key={page.frontmatter.path}>
            <div>{page.frontmatter?.title}</div>
            <div>{page.frontmatter?.path}</div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default PostsTemplate;
