import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from '../components/common';
import Layout from '../components/layout';
import PageSidebarContent from '../components/page-sidebar-content';
import SEO from '../components/seo';
import Subheader from '../components/subheader';
import { IDefaultTheme } from '../styles/default-theme';
import { media } from '../tokens';
import { IPage } from '../utils/models';

interface IPageTemplateProps {
  pathContext: {
    page: IPage;
  };
  theme: IDefaultTheme;
  location: Location;
}

const PageContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  @media ${media.md} {
    display: block;
  }

  p:first-child {
    margin-top: 0;
  }

  li > a,
  p > a  {
    color: ${props => props.theme.layout.linkColor};
    border-bottom: 2px ${props => props.theme.layout.linkColor} solid;
  }
`;

const PageSidebar = styled.aside`
  margin-left: 50px;
  @media ${media.md} {
    margin-left: 0;
  }
`;

const PageTemplate: FunctionComponent<IPageTemplateProps> = ({ pathContext, location }) => {
  const page = pathContext.page;

  return (
    <Layout bigHeader={false}>
      <SEO title={page.frontmatter.title} description={page.frontmatter.excerpt} location={location} />
      <Subheader title={page.frontmatter.title} backgroundColor={props => props.theme.layout.primaryColor} />
      <PageContainer>
        <section>
          <MDXRenderer>{page.body}</MDXRenderer>
        </section>
        <PageSidebar>
          <PageSidebarContent />
        </PageSidebar>
      </PageContainer>
    </Layout>
  );
};

export default PageTemplate;
