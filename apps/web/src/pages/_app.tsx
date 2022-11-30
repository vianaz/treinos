import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import { themeLight, ResetStyle } from '@themes';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themeLight}>
      <ResetStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
