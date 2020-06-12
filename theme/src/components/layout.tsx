import { MDXProvider } from '@mdx-js/react';
import { graphql, PageRendererProps, useStaticQuery } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';
import { ThemeProvider, withTheme } from 'styled-components';
import { IDefaultTheme } from '../styles/default-theme';
import GlobalStyle from '../styles/global-style';
import { lightTheme } from '../styles/theme';
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

  const components = {
    code: (props) => <code {...props} />
  }

  const layout = (props: ILayoutProps) => (
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
      <MDXProvider components={components}>
        <main>{children}</main>
      </MDXProvider>
      <Footer menu={data.site.siteMetadata.footerMenu} owner={data.site.siteMetadata.title} />
    </>
  );

  if (!!isFeatureEnabled(Feature.darkMode)) {
    return layout(props);
  }

  return <ThemeProvider theme={lightTheme}>{layout(props)}</ThemeProvider>;
});

export default Layout;
