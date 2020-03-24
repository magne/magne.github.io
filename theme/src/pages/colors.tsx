import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { Grid } from '../components/common';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { colors } from '../tokens';

interface IColorProps {
  location: Location;
}

interface IColorSwatchProps {
  color: string;
  children?: ReactNode;
}

const ColorName = styled.p`
  margin: 0 !important;
`;

const ColorSwatchBlock = styled.a<{ color: string }>`
  display: block;
  width: 100px;
  height: 100px;
  background-color: ${props => colors[props.color]};
`;

const ColorSwatchCard = styled.div`
  display: inline-block;
  width: 100%;
`;

const ColorSwatch: FunctionComponent<IColorSwatchProps> = ({ color, children }) => {
  return (
    <ColorSwatchCard>
      <ColorSwatchBlock color={color} href={`https://colorhexa.com/${colors[color].substring(1)}`} target={'_blank'} />
      {children}
    </ColorSwatchCard>
  );
};

const ColorsPage: FunctionComponent<IColorProps> = ({ location }) => {
  return (
    <Layout bigHeader={false}>
      <SEO location={location} title={`Colors`} type={`Series`} />
      <Grid columns={6}>
        {Object.getOwnPropertyNames(colors).map((color, index) => (
          <ColorSwatch key={color} color={color}>
            <ColorName>{color}</ColorName>
          </ColorSwatch>
        ))}
      </Grid>
    </Layout>
  );
};

export default ColorsPage;
