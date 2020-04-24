import { IMedia } from '../tokens/media';
import { DefaultTheme } from 'styled-components';

export interface IDefaultTheme extends DefaultTheme {
  layout: {
    backgroundColor: string;
    primaryColor: string;
    linkColor: string;
  };
  fonts: {
    base: string;
  };
  media: IMedia;
  components: {
    container: {
      width: string;
    };
    header: {
      height: string;
      background: string;
    };
  };
}
