import React, { FunctionComponent } from 'react';
import { IPost, ITag } from '../utils/models';

interface IPostTemplateProps {
  data: {
    primaryTag: ITag | null;
    post: IPost;
  };
  location: Location;
}
const PageTemplate: FunctionComponent<IPostTemplateProps> = ({ data, location }) => {
  return <div />;
};

export default PageTemplate;
