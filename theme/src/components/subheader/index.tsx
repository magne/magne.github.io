import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Container } from '../common';
import { colors } from '../../tokens';

interface ISubheaderProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

const StyledSubheader = styled.div<Pick<ISubheaderProps, 'backgroundColor' | 'textColor'>>`
  background-color: ${props => props.backgroundColor ?? colors.black};
  color: ${props => props.textColor ?? colors.white};
  display: flex;
  align-items: center;
  height: 90px;
  margin-bottom: 30px;
`;

const SubheaderTitle = styled.h1`
  font-size: 1.2em;
  font-weight: bold;
  color: ${colors.white};
  margin: 0;
  line-height: 1em;
`;

const SubheaderSubtitle = styled.h1`
  font-weight: normal;
  display: block;
  opacity: 0.9;
`;

const Subheader: FunctionComponent<ISubheaderProps> = ({ title, subtitle, backgroundColor, textColor }) => (
  <StyledSubheader backgroundColor={backgroundColor} textColor={textColor}>
    <Container>
      <SubheaderTitle>
        {title}
        <SubheaderSubtitle>{subtitle}</SubheaderSubtitle>
      </SubheaderTitle>
    </Container>
  </StyledSubheader>
);

export default Subheader;
