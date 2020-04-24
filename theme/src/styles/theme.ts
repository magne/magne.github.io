import { IDefaultTheme } from './default-theme';
import { colors, media } from '../tokens';

const Theme: IDefaultTheme = {
  layout: {
    backgroundColor: colors.background,
    primaryColor: colors.grayishCyan,
    linkColor: colors.grayishCyan,
  },
  media: media,
  fonts: {
    base: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  components: {
    container: {
      width: '1260px',
    },
    header: {
      height: '400px',
      background: `linear-gradient(-45deg, ${colors.veryDarkDesaturatedBlue}, ${colors.grayishCyan}) repeat scroll 0 0 transparent`,
    },
  },
};

export default Theme;

export const lightTheme: IDefaultTheme = {
  ...Theme,
};

export const darkTheme: IDefaultTheme = {
  ...Theme,
  layout: {
    backgroundColor: colors.lightYellow,
    primaryColor: colors.veryDarkGrey,
    linkColor: colors.veryDarkGrey,
  },
};
