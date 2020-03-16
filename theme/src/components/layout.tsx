import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FunctionComponent, ReactNode } from 'react';
import { ISiteMetadata } from '../utils/models';
import GlobalStyle from '../styles/global-style';
import Header from './header';
import Footer from './footer';
import Navigation from './navigation';

interface ILayoutProps {
  children: ReactNode;
  bigHeader?: boolean;
}

const Layout: FunctionComponent<ILayoutProps> = ({ children, bigHeader = true }) => {
  const data = useStaticQuery<ISiteMetadata>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          topics
          menu {
            name
            path
          }
          footerMenu {
            name
            path
          }
          search
        }
      }
    }
  `);

  return (
    <>
      <GlobalStyle />
      {bigHeader ? (
        <Header
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          topics={data.site.siteMetadata.topics}
          menu={data.site.siteMetadata.menu}
          search={data.site.siteMetadata.search}
        />
      ) : (
        <Navigation title={data.site.siteMetadata.title} menu={data.site.siteMetadata.menu} showSearch={data.site.siteMetadata.search} dark={true} />
      )}
      <main>{children}</main>
      <Footer menu={data.site.siteMetadata.footerMenu} owner={data.site.siteMetadata.title} />
    </>
  );
};

export default Layout;
