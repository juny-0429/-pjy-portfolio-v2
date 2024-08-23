import { headerCss } from './Header.styles';
import { MainMenu } from '@/types/menu.types';
import MenuDrawer from '../MenuDrawer/MenuDrawer';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';

export default function Header() {
  const [activeSection] = useRecoilState<MainMenu>(activeSectionState);

  return (
    <div css={headerCss.header}>
      <h1 css={headerCss.headerTitle}>{activeSection}</h1>
      <MenuDrawer />
    </div>
  );
}
