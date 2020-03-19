import { graphql, Link, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Theme from '../../styles/theme';
import { LogoQuery } from './__generated__/LogoQuery';

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
  const logo = useStaticQuery<LogoQuery>(graphql`
    query LogoQuery {
      file(sourceInstanceName: { eq: "themeAssets" }, name: { eq: "nehalist-gatsby" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const fixed = logo?.file?.childImageSharp?.fixed as FixedObject | FixedObject[] | undefined;
  return fixed ? (
    <HomeLink to={`/`}>
      <LogoImage fixed={fixed} alt={title} />
    </HomeLink>
  ) : null;
};

export default Logo;
