import React from "react"
import { FunctionComponent } from "react";
import { MenuItem } from "../../utils/models";

interface HeaderProps {
  title: string;
  description: string;
  topics: string[];
  menu: MenuItem[];
  search: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({title, description, menu, topics = [], search = true}) => {
  return (
    <div />
  );
};

export default Header;
