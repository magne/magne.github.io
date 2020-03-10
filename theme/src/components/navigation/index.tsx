import React from "react"
import { FunctionComponent } from "react";
import { MenuItem } from "../../utils/models";

interface NavigationProps {
  title: string;
  menu: MenuItem[];
  showSearch: boolean;
  dark?: boolean;
}

const Navigation: FunctionComponent<NavigationProps> = ({title, menu, dark = false, showSearch = true}) => (
  <div />
);

export default Navigation;
