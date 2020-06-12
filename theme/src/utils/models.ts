import { PluginOptions } from 'gatsby';

export interface IThemeOptions extends PluginOptions {
  contentPath?: string;
  loadDefaultPages?: boolean;

  manifest: any;
}

export interface ISiteMetadata {
  site: {
    siteMetadata: {
      title: string;
      siteUrl: string;
      description: string;
      topics: string[];
      menu: IMenuItem[];
      footerMenu: IMenuItem[];
      search: boolean;
      author: {
        name: string;
        description: string;
        social: ISocialChannels;
      };
    };
  };
}

export interface IMenuItem {
  name: string;
  path: string;
}

export interface ISocialChannels {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  twitch?: string;
}

export interface IPost {
  id: number;
  frontmatter: {
    title: string;
    path: string;
    tags: string[];
    excerpt: string;
    created: string;
    createdPretty: string;
    updated: string;
    updatedPretty: string;
    featuredImage?: any;
  };
  body: string;
  headings: Array<{ depth: number }>;
}

export interface IPage {
  frontmatter: {
    title: string;
    path: string;
    excerpt: string;
  };
  body: string;
}

export interface ITag {
  name: string;
  color: string;
  icon: any;
  featured: boolean;
}
