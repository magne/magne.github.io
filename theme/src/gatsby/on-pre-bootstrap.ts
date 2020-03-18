import { existsSync, mkdirSync } from 'fs';
import { GatsbyNode } from 'gatsby';
import * as path from 'path';
import { IThemeOptions } from '../utils/models';

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = async ({ store, reporter }, themeOptions: IThemeOptions) => {
  const { program } = store.getState();

  const contentPath = themeOptions.contentPath || 'content';
  const dir = path.join(program.directory, contentPath);

  if (!existsSync(dir)) {
    reporter.info(`creating the ${contentPath} directory`);
    mkdirSync(dir);
  }
};
