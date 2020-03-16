import React from 'react';
import { FunctionComponent } from 'react';
import { IMenuItem } from '../../utils/models';

interface INavigationProps {
  title: string;
  menu: IMenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<INavigationProps> = ({ title, menu, dark = false, showSearch = true }) => <div />;

export default Navigation;
