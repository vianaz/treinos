import React from 'react';

import { themes } from '@storybook/theming';
import { ThemeProvider } from 'styled-components';

import { themeLight } from '../src/styles/themes/light';

export const decorators = [
  Story => (
    <ThemeProvider theme={themeLight}>
      <Story />
    </ThemeProvider>
  )
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'red' }
  }
};
