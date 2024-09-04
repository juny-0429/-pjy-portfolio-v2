import GlobalStyles from '@/components/GlobalStyles';
import AppLayout from '@/components/Layout/AppLayout/AppLayout';
import useCheckPage from '@/hooks/useCheckPage';
import '@/styles/globals.css';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const { isProjectDetailPage } = useCheckPage();

  return (
    <>
      <Head>
        <title>JUNY PORTFOLIO</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RecoilRoot>
          {isProjectDetailPage ? (
            <Component {...pageProps} />
          ) : (
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          )}
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
}
