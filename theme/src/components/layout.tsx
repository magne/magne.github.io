import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';
import { withTheme } from 'styled-components';
import { IDefaultTheme } from '../styles/default-theme';
import GlobalStyle from '../styles/global-style';
import { Feature, isFeatureEnabled } from '../utils/features';
import { ISiteMetadata } from '../utils/models';
import Footer from './footer';
import Header from './header';
import Navigation from './navigation';

interface ILayoutProps extends PageRendererProps {
  children: ReactNode;
  bigHeader?: boolean;
  theme: IDefaultTheme;
}

const Layout: FunctionComponent<ILayoutProps> = withTheme((props: ILayoutProps) => {
  const { children, bigHeader = true } = props;

  const data = useStaticQuery<ISiteMetadata>(graphql`
    query SiteMetadata {
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
      <GlobalStyle theme={props.theme} />
      {bigHeader ? (
        <Header
          title={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
          topics={data.site.siteMetadata.topics}
          menu={data.site.siteMetadata.menu}
          search={data.site.siteMetadata.search}
        />
      ) : (
          <Navigation
            title={data.site.siteMetadata.title}
            menu={data.site.siteMetadata.menu}
            showSearch={data.site.siteMetadata.search}
            dark={!!isFeatureEnabled(Feature.darkMode)}
          />
        )}
      <main>{children}</main>
      <Footer menu={data.site.siteMetadata.footerMenu} owner={data.site.siteMetadata.title} />
    </>
  );
});

export default Layout;
