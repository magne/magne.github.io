import React, { FunctionComponent } from 'react';
import { IMenuItem } from '../../utils/models';
import { StyledFooter, FooterMenuItem, FooterMenuLink, FooterContainer, StyledNav, Copyright, DesignBy } from './style';

interface IFooterProps {
  menu: IMenuItem[];
  owner: string;
}

const Footer: FunctionComponent<IFooterProps> = ({ menu, owner }) => (
  <StyledFooter>
    <FooterContainer>
      <StyledNav>
        <ul>
          {menu.map((item, index) => (
            <li key={index}>
              {/* Links to RSS and Sitemap are handled
                  differently (for now) since they're technically external links */}
              {['/rss.xml', '/sitemap.xml'].indexOf(item.path) >= 0 ? (
                <FooterMenuItem href={item.path} rel={'noopener noreferrer'}>
                  {item.name}
                </FooterMenuItem>
              ) : (
                <FooterMenuLink to={item.path}>{item.name}</FooterMenuLink>
              )}
            </li>
          ))}
        </ul>
      </StyledNav>
      <div>
        <Copyright>
          <strong>{owner}</strong>&nbsp;&copy; {new Date().getFullYear()}
        </Copyright>
        <DesignBy>
          Theme by{' '}
          <a href={`https://nehalist.io`} target={`_blank`} rel={`noopener`}>
            nehalist.io
          </a>
        </DesignBy>
      </div>
    </FooterContainer>
  </StyledFooter>
);

export default Footer;
