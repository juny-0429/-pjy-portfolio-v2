import { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import { commonCss } from '@/styles/common.styles';
import Footer from '../Footer/Footer';
import SideNavigation from '../SideNavigation/SIdeNavigation';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main css={commonCss.fullPage}>{children}</main>
      <SideNavigation />
      <Footer />
    </>
  );
}
