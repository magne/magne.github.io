import { existsSync, mkdirSync } from 'fs';
import { GatsbyNode } from 'gatsby';
import { IThemeOptions } from '../model';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = async ({ reporter }, themeOptions: IThemeOptions) => {
  const contentPath: string = themeOptions?.contentPath || 'data';

  if (!existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    mkdirSync(contentPath);
  }
};
