import { PluginOptions } from 'gatsby';

export interface IThemeOptions extends PluginOptions {
  contentPath?: string;
  loadDefaultPages?: boolean;

  manifest: any;
}
