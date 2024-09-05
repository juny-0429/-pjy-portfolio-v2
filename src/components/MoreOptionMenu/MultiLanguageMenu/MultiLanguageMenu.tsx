import FeatherIcons from '@/theme/featherIcons';
import { moreOptionMenuCss } from '../MoreOptionMenu.styles';
import Drawer from '@/components/Drawer/Drawer';
import { useState } from 'react';

export default function MultiLanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={toggleDrawer}>
        <FeatherIcons.Globe />
      </button>
      <Drawer title="언어 선택" direction="bottom" isOpen={isOpen} onToggle={toggleDrawer}>
        ㄴㅇㄹㄴㅇㄹㄴ
      </Drawer>
    </>
  );
}
