import { Link } from 'gatsby';
import styled from 'styled-components';
import Theme from '../../styles/theme';
import { colors } from '../../tokens';

export const SearchBox = styled.div<{ readonly open: boolean }>`
  display: ${props => (props.open ? 'block' : 'none')};
  position: absolute;
  width: 400px;
  background-color: ${colors.white};
  left: -338px;
  top: 40px;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.03), 0 3px 46px rgba(0, 0, 0, 0.1);
  &::before {
    content: ' ';
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${colors.white};
    position: absolute;
    top: -8px;
    right: 38px;
    transform: rotate(45deg);
    @media ${Theme.media.sm} {
      right: 17px;
    }
  }
  @media ${Theme.media.sm} {
    width: 300px;
    left: -260px;
  }
`;

export const SearchInput = styled.input`
  background-color: ${colors.white};
  display: block;
  width: 100%;
  border: 0;
  padding: 15px;
  outline: none;
  border-radius: 5px;
`;

export const ResultsTitle = styled.h5`
  padding: 5px 15px;
  background-color: ${colors.black};
  margin: 0;
  color: ${colors.white};
`;

export const SearchResults = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  overflow-y: auto;
  white-space: pre-wrap;
`;

export const SearchResult = styled.li<{ selected: boolean }>`
  line-height: 1.4em;
  ${props =>
    props.selected &&
    `
  background-color: ${colors.veryLightGrey4};
`};
`;

export const ResultLink = styled(Link)`
  display: block;
  padding: 15px;
`;

export const ResultTitle = styled.h4`
  margin: 0;
`;
