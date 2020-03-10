import React from "react"
import { FunctionComponent } from "react";
import { MenuItem } from "../../utils/models";

interface FooterProps {
  menu: MenuItem[];
  owner: string;
}

const Footer: FunctionComponent<FooterProps> = ({menu, owner}) => (
  <div />
);

export default Footer;
