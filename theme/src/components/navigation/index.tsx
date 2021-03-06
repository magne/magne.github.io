import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { colors } from '../../tokens/colors';
import { Feature, isFeatureEnabled } from '../../utils/features';
import { IMenuItem } from '../../utils/models';
import { DarkModeToggle } from '../dark-mode';
import Logo from '../logo';
import { Search } from '../search';
import { Nav, NavContainer, NavLink, NavMenu, NavMenuItem, NavWrapper, SearchContainer } from './style';

interface INavigationProps {
  title: string;
  menu: IMenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const StyledDarkModeToggle = styled.div`
  color: ${colors.mostlyWhite};
`;

const Navigation: FunctionComponent<INavigationProps> = ({ title, menu, dark = false, showSearch = true }) => (
  <NavContainer dark={dark}>
    <Nav>
      <Logo title={title} />
      <NavWrapper>
        <NavMenu mobile={true}>
          {menu.map((item, index) => (
            <NavMenuItem key={index}>
              <NavLink to={item.path} key={index}>
                {item.name}
              </NavLink>
            </NavMenuItem>
          ))}
        </NavMenu>
        <SearchContainer>
          {showSearch && (
            <NavMenu>
              <Search />
            </NavMenu>
          )}
        </SearchContainer>
        {isFeatureEnabled(Feature.darkMode) ? (
          <StyledDarkModeToggle>
            <DarkModeToggle />
          </StyledDarkModeToggle>
        ) : (
            <></>
          )}
      </NavWrapper>
    </Nav>
  </NavContainer>
);

export default Navigation;
