export interface IMedia {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const defaultMedia: IMedia = {
  xs: '(max-width: 425px)',
  sm: '(max-width: 576px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 992px)',
  xl: '(max-width: 1300px)',
};

export default defaultMedia;

// TODO morning-dew
// export default {
//   small: '(min-width: 480px)',
//   medium: '(min-width: 700px)',
//   large: '(min-width: 960px)',
// }
