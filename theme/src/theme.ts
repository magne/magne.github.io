/*
 * To override any of this theme’s tokens in your site, create a new file in
 * your site at `src/gatsby-starter-morning-dew/theme.js` and export an object from
 * it. Tokens are nested under the file name.
 *
 * For example, to override the primary color, your `theme.js` would look
 * something like this:
 *
 *    export default {
 *      colors: {
 *        primary: `#6556B3`,
 *        primaryAlpha: `#6556B3cc`,
 *      }
 *    };
 *
 * All tokens are optional. When a token is not present in `theme.js`, the
 * default value from the `tokens/*.js` files will be used.
 *
 * For a full list of tokens, see the `src/tokens/` directory in this theme.
 */

import { colors } from './tokens/colors';
import { IColors } from './tokens/colors';
import { IMedia } from './tokens/media';
import Theme from './styles/theme';
import { IDefaultTheme } from './styles/default-theme';

export interface ITheme {
  colors: IColors;
  media: IMedia;
}

type DeepPartial<T> = T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

const col = colors;

const theme: DeepPartial<ITheme> = {
  // nehalem:
  colors: {
    background: col.mostlyWhite,
  },
};

export default theme;
