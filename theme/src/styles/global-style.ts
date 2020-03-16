import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import * as prismStyle from 'prismjs/themes/prism-okaidia.css';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  ${prismStyle}
`;

export default GlobalStyle;
