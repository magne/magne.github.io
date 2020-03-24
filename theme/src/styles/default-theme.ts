import { IMedia } from '../tokens/media';

export interface IDefaultTheme {
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
