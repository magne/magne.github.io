import React, { ReactNode } from 'react';
import { ThemeManagerProvider } from './ThemeManager';
import { StyledThemeProvider } from './StyledThemeProvider';

interface ThemeConfigProps {
  dark?: object;
  light?: object;
}

interface GatsbyRootProps {
  element: ReactNode;
}

export const wrapRootElement = (gatsbyRootProps: GatsbyRootProps, themeProps: ThemeConfigProps) => {
  const { dark = {}, light = {} } = themeProps;

  return (
    <ThemeManagerProvider>
      <StyledThemeProvider lightTheme={light} darkTheme={dark}>
        {gatsbyRootProps.element}
      </StyledThemeProvider>
    </ThemeManagerProvider>
  );
};
