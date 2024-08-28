import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import { commonCss } from '@/styles/common.styles';
import Footer from '../Footer/Footer';
import MoreOptionMenu from '../MoreOptionMenu/MoreOptionMenu';
import SidePagination from '../SidePagination/SidePagination';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <main css={commonCss.fullPage}>{children}</main>
      <Footer />
      <SidePagination />
      <MoreOptionMenu />
    </div>
  );
}
