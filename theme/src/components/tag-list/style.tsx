import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors, media } from '../../tokens';

export const TagContainer = styled.section`
  background-color: ${colors.white};
  border-top: 1px ${colors.lightGreyishBlue} solid;
  border-bottom: 1px ${colors.lightGreyishBlue} solid;
  padding: 40px;
  margin-top: 75px;
  text-align: center;
`;

export const TagListTitle = styled.h2`
  margin: 0 0 40px;
`;

export const StyledTagList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media ${media.sm} {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const StyledTag = styled.li`
  margin: 0 35px;
  transition: 0.5s all;

  &:hover {
    transform: scale(1.04);
  }

  @media ${media.sm} {
    width: 50%;
    margin: 0 0 20px 0;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TagIcon = styled.img`
  max-height: 55px;
`;

export const TagName = styled.span`
  display: block;
`;

export const TagArchiveLinkWrapper = styled.div`
  display: block;
  margin-top: 20px;
`;

export const TagArchiveLink = styled(Link)`
  font-style: italic;
  font-size: 0.8em;
`;
