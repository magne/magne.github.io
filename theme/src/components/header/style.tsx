import Typed from 'react-typed';
import styled from 'styled-components';
import { colors, media } from '../../tokens';

export const StyledHeader = styled.header`
  display: flex;
  background: ${props => props.theme.components.header.background};
  flex-direction: column;
  height: ${props => props.theme.components.header.height};
  border-bottom: 2px ${colors.veryLightGrey3} solid;

  @media ${media.sm} {
    height: 30vh;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  @media ${media.sm} {
    margin-top: -50px;
    font-size: 0.75em;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

export const Title = styled.h1`
  display: block;
  color: ${colors.white};
  text-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
`;

export const Description = styled.h2`
  margin: 0;
  opacity: 0.85;
`;

export const StyledTopics = styled(Typed)`
  border-bottom: 3px ${colors.black} solid;
`;
