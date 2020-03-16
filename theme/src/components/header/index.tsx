import React from 'react';
import { FunctionComponent } from 'react';
import { IMenuItem } from '../../utils/models';

interface IHeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: IMenuItem[];
  search: boolean;
}

const Header: FunctionComponent<IHeaderProps> = ({ title, description, menu, topics = [], search = true }) => {
  return <div />;
};

export default Header;
