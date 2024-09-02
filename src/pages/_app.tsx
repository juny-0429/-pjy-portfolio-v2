import AppLayout from '@/components/AppLayout/AppLayout';
import useCheckPage from '@/hooks/useCheckPage';
import '@/styles/globals.css';
import theme from '@/theme';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const { isProjectDetailPage } = useCheckPage();

  return (
    <ThemeProvider theme={theme}>
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
  );
}
