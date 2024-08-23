import FeatherIcons from '@/theme/featherIcons';
import { moreOptionMenuCss } from './MoreOptionMenu.styles';
import { animateScroll as scroll } from 'react-scroll';

export default function MoreOptionMenu() {
  return (
    <div css={moreOptionMenuCss.wrapper}>
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
      <button type="button" css={moreOptionMenuCss.moreOptionMenu}>
        <FeatherIcons.MoreVertical />
      </button>
    </div>
  );
}
