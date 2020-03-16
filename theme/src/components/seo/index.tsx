import React, { FunctionComponent } from 'react';

interface ISEOProps {
  title?: string;
  lang?: string;
  description?: string;
  location: Location;
  publishedAt?: string;
  updatedAt?: string;
  isArticle?: boolean;
  tags?: string[];
  type?: 'WebSite' | 'Series' | 'Article';
  image?: string;
}

const SEO: FunctionComponent<ISEOProps> = ({
  title,
  description,
  lang = 'en',
  location,
  publishedAt,
  updatedAt,
  isArticle = false,
  tags = [],
  type = `Article`,
  image,
}) => {
  return <div />;
};

export default SEO;
