import type { AppProps } from 'next/app';
import { Quicksand } from '@next/font/google';

import { ThemeProvider } from 'styled-components';

import { themeLight, ResetStyle } from '@themes';

const quicksand = Quicksand({
  weight: ['300', '400', '500', '600', '700']
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={themeLight}>
      <ResetStyle />
      <main className={quicksand.className}>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
};

export default MyApp;
