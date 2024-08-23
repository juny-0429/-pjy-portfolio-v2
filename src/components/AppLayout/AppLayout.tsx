import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import { commonCss } from '@/styles/common.styles';
import Footer from '../Footer/Footer';
import SideNavigation from '../SideNavigation/SideNavigation';
import SidePagination from '../SidePagination/SidePagination';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main css={commonCss.fullPage}>{children}</main>
      <SidePagination />
      <SideNavigation />
      <Footer />
    </>
  );
}
