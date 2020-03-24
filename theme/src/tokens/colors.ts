// 50 shades of grey generator
// https://javisperez.github.io/tailwindcolorshades/#/?%233E4047=3E4047&tv=1
export const colors = {
  grey100: '#ECECED',
  grey200: '#CFCFD1',
  grey300: '#B2B3B5',
  grey400: '#78797E',
  grey500: '#3E4047',
  grey600: '#383A40',
  grey700: '#25262B',
  grey800: '#1C1D20',
  grey900: '#131315',

  black: '#000000',
  white: '#ffffff',
  yellow: '#ffdc4e',
  lightYellow: '#f9e892',
  lightBlue: '#697980',
  veryLightGrey: '#e6e6e6',
  veryLightGrey2: '#ececec',
  veryLightGrey3: '#ededed',
  veryLightGrey4: '#f2f2f2',
  lightGreyishBlue: '#e5eff5',
  mostlyWhite: '#fafafa',
  veryDarkMostlyBlackBlue: '#20232a',
  darkGrey: '#808080',
  veryDarkGrey: '#404040',
  veryDarkGreyishYellow: '#353631',
  grayishCyan: '#a4cbb8',
  veryDarkDesaturatedBlue: '#44596e',
};

type ColorType = Readonly<Required<typeof colors>>;

export interface IColors {
  background: string;
  primary: string;
}

const morningDewColors: IColors = {
  ...colors,
  textLightest: colors.white,
  textLightestHover: colors.grey200,
  textLight: '#57595d',
  primary: colors.grey500,
  primaryAlpha: `rgba(32, 35, 42, 0.85)`,
  text: colors.grey500,
  background: '#f4f8fb',
  backgroundArticle: colors.white,
  heartFooter: 'red',
  links: colors.yellow,
  backgroundSelection: colors.yellow,
  highlight_code_oneline: '#fff9d9',
  highlight_code_bg: colors.yellow,
  highlight_code_marker: colors.yellow,
  highlight_code_linebg: '#022a4b',
  socialMediaCardFilter: '#437abf', // #8f43bf
  postMetadata: colors.lightBlue,
  // testing
  // primary: `#6556B3`,
  // primaryAlpha: `#6556B3cc`,

  // nehalem:
  //background: '#fafafa',
};

const defaultColors: IColors & ColorType = {
  ...colors,
  ...morningDewColors,
};

export default defaultColors;
