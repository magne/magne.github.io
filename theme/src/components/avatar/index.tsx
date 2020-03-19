import { graphql, useStaticQuery } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import React, { CSSProperties, FunctionComponent } from 'react';
import styled from 'styled-components';
import { AvatarQuery } from './__generated__/AvatarQuery';

interface IAvatarProps {
  alt: string;
  style?: CSSProperties;
}

const StyledAvatar = styled(Img)<IAvatarProps>`
  max-width: 55px;
  border-radius: 100%;
`;

/**
 * Placeholder component which shows your avatar.
 */
const Avatar: FunctionComponent<IAvatarProps> = ({ alt, style }) => {
  const logo = useStaticQuery<AvatarQuery>(graphql`
    query AvatarQuery {
      file(sourceInstanceName: { eq: "themeAssets" }, name: { eq: "nehalist-gatsby" }) {
        childImageSharp {
          fixed(width: 55, height: 55) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const fixed = logo?.file?.childImageSharp?.fixed as FixedObject | FixedObject[] | undefined;
  return fixed ? <StyledAvatar fixed={fixed} alt={alt} style={style} /> : null;
};

export default Avatar;
