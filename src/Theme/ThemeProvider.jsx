import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

const MyThemeProvider = ({ children }) => {
  const currentTheme = lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
  );
};

export default MyThemeProvider;
