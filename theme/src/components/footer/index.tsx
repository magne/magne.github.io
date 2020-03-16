import React from 'react';
import { FunctionComponent } from 'react';
import { IMenuItem } from '../../utils/models';

interface IFooterProps {
  menu: IMenuItem[];
  owner: string;
}

const Footer: FunctionComponent<IFooterProps> = ({ menu, owner }) => <div />;

export default Footer;
