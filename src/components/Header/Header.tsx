import { headerCss } from './Header.styles';
import { MainMenu } from '@/types/menu.types';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';
import { commonCss } from '@/styles/common.styles';
import HeaderMenu from '../HeaderMenu/HeaderMenu';

export default function Header() {
  const [activeSection] = useRecoilState<MainMenu>(activeSectionState);

  return (
    <div css={headerCss.header}>
      <h1 css={[headerCss.headerTitle, commonCss.onlyMobileVisible]}>{activeSection}</h1>
      <h1 css={[headerCss.pcHeaderTitle, commonCss.onlyPcVisibleBlock]}>JUNY PORTFOLIO</h1>

      <MenuDrawer cssStyle={commonCss.onlyMobileVisible} />
      <HeaderMenu cssStyle={commonCss.onlyPcVisibleFlex} />
    </div>
  );
}
