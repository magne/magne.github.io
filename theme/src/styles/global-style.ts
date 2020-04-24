import * as prismStyle from 'prismjs/themes/prism-okaidia.css';
import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { colors } from '../tokens';
import { IDefaultTheme } from './default-theme';

const GlobalStyle = createGlobalStyle<{ theme: IDefaultTheme }>`
  ${styledNormalize}
  ${prismStyle}

  html {
    box-sizing: border-box;
    background-color: ${(props) => props.theme.layout.backgroundColor};
  }

  body {
    font-family: ${(props) => props.theme.fonts.base};
    line-height: 1.9em;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    outline: none;
  }

  a {
    color: ${colors.black};
    text-decoration: none;
  }

  .gatsby-highlight {
    max-width: 100% !important;
  }

  .gatsby-highlight-code-line {
    background-color: ${colors.veryDarkGreyishYellow};
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
  }
`;

export default GlobalStyle;
