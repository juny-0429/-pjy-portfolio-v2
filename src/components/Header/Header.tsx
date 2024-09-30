import { headerCss } from './Header.styles';
import { MainMenu } from '@/types/menu.types';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';
import { commonCss, darkModeCss } from '@/styles/common.styles';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useDarkMode } from '@/hooks/useDarkMode';
import { animateScroll } from 'react-scroll';

export default function Header() {
  const [activeSection] = useRecoilState<MainMenu>(activeSectionState);
  const { themeMode } = useDarkMode();

  return (
    <header css={[headerCss.header, themeMode === 'dark' && darkModeCss.darkModeStyle]}>
      <h1 css={[headerCss.headerTitle, commonCss.onlyMobileVisible]}>{activeSection}</h1>
      <button css={[headerCss.pcHeaderTitle, commonCss.onlyPcVisibleBlock]} onClick={() => animateScroll.scrollToTop()}>
        JUNY PORTFOLIO
      </button>

      <MenuDrawer cssStyle={commonCss.onlyMobileVisible} />
      <HeaderMenu cssStyle={commonCss.onlyPcVisibleFlex} />
    </header>
  );
}
