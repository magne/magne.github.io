import { Link } from 'gatsby';
import React, { FC } from 'react';
import styled from 'styled-components';
import { Card } from '../components/card';
import { Container, Grid } from '../components/common';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SidebarContent from '../components/sidebar-content';
import TagList from '../components/tag-list';
import { IPost } from '../utils/models';

interface ITemplateProps {
  pathContext: {
    posts: IPost[];
    postsPerPage: number;
  };
  location: Location;
}

const HomeContainer = styled(Container)``;

const PostsContainer = styled(Grid)``;

const Sidebar = styled.aside``;

const ArchiveLinkWrapper = styled.div``;

const ArchiveLink = styled(Link)``;

const PostsTemplate: FC<ITemplateProps> = ({ pathContext, location }) => {
  const posts = pathContext.posts.slice(0, pathContext.postsPerPage);

  return (
    <Layout>
      <SEO location={location} type={'WebSite'} />
      <HomeContainer>
        <PostsContainer>
          {posts.map((post, index) => (
            <Card
              title={post.frontmatter.title}
              path={post.frontmatter.path}
              featuredImage={post.frontmatter.featuredImage ? post.frontmatter.featuredImage.childImageSharp : null}
              content={post.frontmatter.excerpt}
              key={index}
              meta={{
                time: post.frontmatter.created,
                timePretty: post.frontmatter.createdPretty,
                tag: post.frontmatter.tags.length > 0 ? post.frontmatter.tags[0] : null,
              }}
              style={{ gridArea: index === 0 ? 'latest' : undefined }}
              halfImage={index === 0}
            />
          ))}
          <ArchiveLinkWrapper>
            <ArchiveLink to={`/archive`}>More posts</ArchiveLink>
          </ArchiveLinkWrapper>
        </PostsContainer>
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </HomeContainer>
      <TagList />
    </Layout>
  );
};

export default PostsTemplate;
