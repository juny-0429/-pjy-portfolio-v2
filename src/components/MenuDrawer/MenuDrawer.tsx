import { Link } from 'react-scroll';
import FeatherIcons from '@/theme/featherIcons';
import { menuDrawerCss } from './MenuDrawer.styles';
import Drawer from '../Drawer/Drawer';
import { useState } from 'react';
import { mainMenu } from '@/data/menu.data';
import { MainMenu } from '@/types/menu.types';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';
import { Interpolation, Theme } from '@emotion/react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { darkModeCss } from '@/styles/common.styles';

interface Props {
  cssStyle?: Interpolation<Theme>;
}

export default function MenuDrawer({ cssStyle }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setActiveSection] = useRecoilState<MainMenu>(activeSectionState);
  const { themeMode } = useDarkMode();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: MainMenu) => {
    setActiveSection(menu);
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" css={[menuDrawerCss.menuButton, cssStyle]} onClick={toggleDrawer}>
        <FeatherIcons.Menu css={[menuDrawerCss.menuIcon, themeMode === 'dark' && darkModeCss.darkModeColor]} />
      </button>

      <Drawer title="section menu" direction="right" isOpen={isOpen} onToggle={toggleDrawer}>
        <nav style={{ width: '100%' }}>
          <ul css={menuDrawerCss.menuList}>
            {mainMenu.map((menu) => (
              <Link key={menu} to={menu} spy={true} smooth={true} duration={500} css={menuDrawerCss.menuDrawerItem} onSetActive={() => handleMenuClick(menu)}>
                <li>
                  <span css={menuDrawerCss.label}>{menu}</span>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
