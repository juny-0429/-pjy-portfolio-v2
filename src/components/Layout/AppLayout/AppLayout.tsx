import { PropsWithChildren } from 'react';
import { commonCss } from '@/styles/common.styles';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import SidePagination from '@/components/SidePagination/SidePagination';
import MoreOptionMenu from '@/components/MoreOptionMenu/MoreOptionMenu';
import DarkModeSwitch from '@/components/DarkModeSwitch/DarkModeSwitch';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main css={commonCss.fullPage}>{children}</main>
      <Footer />

      <SidePagination />
      <MoreOptionMenu />
      <DarkModeSwitch />
    </>
  );
}
