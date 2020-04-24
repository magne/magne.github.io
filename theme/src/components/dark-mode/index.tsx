import React, { FunctionComponent, useContext } from 'react';
import { ThemeManagerContext } from 'gatsby-styled-components-dark-mode';

export const DarkModeToggle: FunctionComponent = (props) => {
  const themeContext = useContext(ThemeManagerContext);

  return (
    <label>
      <input type="checkbox" onChange={() => themeContext.toggleDark()} checked={themeContext.isDark} />
      &nbsp; Dark mode
    </label>
  );
};

export default DarkModeToggle;
