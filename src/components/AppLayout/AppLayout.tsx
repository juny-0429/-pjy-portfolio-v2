import { PropsWithChildren, useState } from 'react';
import Header from '../Header/Header';
import { commonCss } from '@/styles/common.styles';
import Footer from '../Footer/Footer';
import SideNavigation from '../SideNavigation/SideNavigation';
import SidePagination from '../SidePagination/SidePagination';
import { MainMenu } from '@/types/menu.types';

export default function AppLayout({ children }: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<MainMenu>('JUNY');

  return (
    <>
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main css={commonCss.fullPage}>{children}</main>
      <SidePagination activeSection={activeSection} setActiveSection={setActiveSection} />
      <SideNavigation />
      <Footer />
    </>
  );
}
