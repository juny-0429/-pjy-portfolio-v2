import AppLayout from '@/components/AppLayout/AppLayout';
import '@/styles/globals.css';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </ThemeProvider>
  );
}
