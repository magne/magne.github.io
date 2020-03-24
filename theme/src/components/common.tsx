import styled from 'styled-components';
import Theme from '../styles/theme';

export const Container = styled.div`
  width: ${Theme.components.container.width};
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;

  @media ${Theme.media.xl} {
    padding: 0 20px;
  }
`;

interface IGridProps {
  columns?: number;
}

export const Grid = styled(Container)<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props): number => (props.columns ? props.columns : 3)}, 1fr);
  grid-gap: 30px;

  @media ${Theme.media.sm} {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
