import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import { commonCss } from '@/styles/common.styles';
import Footer from '../Footer/Footer';
import MoreOptionMenu from '../MoreOptionMenu/MoreOptionMenu';
import SidePagination from '../SidePagination/SidePagination';
import { appLayoutCss } from './AppLayout.styles';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div css={appLayoutCss.wrapper}>
      <Header />
      <main css={commonCss.fullPage}>
        {children}
        <Footer />
      </main>
      <SidePagination />
      <MoreOptionMenu />
    </div>
  );
}
