import React, { FC } from 'react';
import { IPost } from '../gatsby/create-pages';

interface ITemplateProps {
  pageContext: {
    posts: IPost[];
    postsPerPage: number;
  };
}

const PostsTemplate: FC<ITemplateProps> = ({ pageContext }) => {
  console.log(pageContext.posts);
  return (
    <div>
      <h1>My Theme Site!</h1>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>path</th>
          </tr>
        </thead>
        <tbody>
          {pageContext.posts?.map(page => (
            <tr key={page.id}>
              <td>{page.frontmatter?.title}</td>
              <td>{page.frontmatter?.path}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsTemplate;
