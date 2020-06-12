import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './src/styles/theme';
import { Feature, isFeatureEnabled } from './src/utils/features';

interface GatsbyRootProps {
  element: ReactNode;
}

export const wrapRootElement = (gatsbyRootProps: GatsbyRootProps) => {
  if (!!isFeatureEnabled(Feature.darkMode)) {
    return gatsbyRootProps.element;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <>{gatsbyRootProps.element}</>
    </ThemeProvider>
  );
};
