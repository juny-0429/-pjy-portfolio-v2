import { useState } from 'react';
import FeatherIcons from '@/theme/featherIcons';
import { moreOptionMenuCss } from './MoreOptionMenu.styles';
import { animateScroll as scroll } from 'react-scroll';

export default function MoreOptionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);

  const onMoreToggle = () => {
    if (!isOpen) {
      setIsDisplayed(true);
      setTimeout(() => setIsOpen(true), 0);
    } else {
      setIsOpen(false);
      setTimeout(() => setIsDisplayed(false), 300);
    }
  };

  return (
    <div css={moreOptionMenuCss.wrapper}>
      {/* More 버튼 */}
      <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={onMoreToggle}>
        <FeatherIcons.MoreVertical />
      </button>

      {/* 옵션 메뉴들 */}
      <div css={[moreOptionMenuCss.optionsContainer, isOpen ? moreOptionMenuCss.showOptions : moreOptionMenuCss.hideOptions]} style={{ display: isDisplayed ? 'flex' : 'none' }}>
        {/* 메일 바로 보내기 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu}>
          <FeatherIcons.Mail />
        </button>
        {/* 다국어 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu}>
          <FeatherIcons.Globe />
        </button>
        {/* 다크 모드 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu}>
          <FeatherIcons.Sun />
        </button>
        {/* 최상단으로 이동하기 */}
        <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={() => scroll.scrollToTop()}>
          <FeatherIcons.ChevronsUp />
        </button>
      </div>
    </div>
  );
}
