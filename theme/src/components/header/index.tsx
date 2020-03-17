import React, { FunctionComponent, ReactNodeArray } from 'react';
import reactStringReplace from 'react-string-replace';
import { IMenuItem } from '../../utils/models';
import StyledNavigation from '../navigation';
import { Description, StyledHeader, StyledTopics, Title, TitleWrapper } from './style';

interface IHeaderProps {
  title: string;
  description: string | ReactNodeArray;
  topics: string[];
  menu: IMenuItem[];
  search: boolean;
}

const Header: FunctionComponent<IHeaderProps> = ({ title, description, menu, topics = [], search = true }) => {
  if (topics.length > 0) {
    description = reactStringReplace(description, '%TOPICS%', (match, i) => {
      return <StyledTopics strings={topics} typeSpeed={50} backSpeed={60} shuffle={true} backDelay={1500} loop={true} key={match + i} />;
    });
  }

  return (
    <StyledHeader>
      <StyledNavigation title={title} menu={menu} showSearch={search} />
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleWrapper>
    </StyledHeader>
  );
};

export default Header;
