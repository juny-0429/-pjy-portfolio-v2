import { Link } from 'react-scroll';
import FeatherIcons from '@/theme/featherIcons';
import { menuDrawerCss } from './MenuDrawer.styles';
import Drawer from '../Drawer/Drawer';
import { useState } from 'react';
import { mainMenu } from '@/data/menu.data';
import { MainMenu } from '@/types/menu.types';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';

export default function MenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [_, setActiveSection] = useRecoilState<MainMenu>(activeSectionState);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (menu: MainMenu) => {
    setActiveSection(menu);
    setIsOpen(false);
  };

  return (
    <>
      <button type="button" css={menuDrawerCss.menuButton} onClick={toggleDrawer}>
        <FeatherIcons.Menu css={menuDrawerCss.menuIcon} />
      </button>
      <Drawer title="section menu" direction="right" isOpen={isOpen} onToggle={toggleDrawer}>
        {mainMenu.map((menu) => (
          <Link key={menu} to={menu} spy={true} smooth={true} duration={500} css={menuDrawerCss.menuDrawerItem} onSetActive={() => handleMenuClick(menu)}>
            {menu}
          </Link>
        ))}
      </Drawer>
    </>
  );
}
