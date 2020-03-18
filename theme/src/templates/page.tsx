import React, { FunctionComponent } from 'react';
import { IPage } from '../utils/models';

interface IPageTemplateProps {
  pathContext: {
    page: IPage;
  };
  location: Location;
}
const PageTemplate: FunctionComponent<IPageTemplateProps> = ({ pathContext, location }) => {
  return <div />;
};

export default PageTemplate;
