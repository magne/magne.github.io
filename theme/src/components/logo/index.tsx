import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/theme';

interface ILogoProps {
  title: string;
}

const LogoImage = styled(Img)`
  max-height: 30px;
  width: 30px;
  margin-right: 45px;
  @media (max-width: ${Theme.breakpoints.sm}) {
    margin-right: 15px;
  }
`;

const HomeLink = styled(Link)`
  align-self: center;
  height: 30px;
`;

const Logo: FunctionComponent<ILogoProps> = ({ title }) => {
  const logo = useStaticQuery(graphql`
    query Logo {
      file(sourceInstanceName: { eq: "themeAssets" }, name: { eq: "nehalist-gatsby" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <HomeLink to={`/`}>
      <LogoImage fixed={logo.file.childImageSharp.fixed} alt={title} />
    </HomeLink>
  );
};

export default Logo;
