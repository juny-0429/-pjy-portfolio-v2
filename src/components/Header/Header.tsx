import { headerCss } from './Header.styles';
import { MainMenu } from '@/types/menu.types';
import MenuDrawer from '../MenuDrawer/MenuDrawer';

interface Props {
  activeSection: MainMenu;
  setActiveSection: (section: MainMenu) => void;
}

export default function Header({ activeSection, setActiveSection }: Props) {
  return (
    <div css={headerCss.header}>
      <h1 css={headerCss.headerTitle}>{activeSection}</h1>
      <MenuDrawer setActiveSection={setActiveSection} />
    </div>
  );
}
