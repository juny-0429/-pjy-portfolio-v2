import FeatherIcons from '@/theme/featherIcons';
import { sideNavigationCss } from './SideNavigation.styles';

export default function SideNavigation() {
  return (
    <div css={sideNavigationCss.wrapper}>
      {/* 메일 바로 보내기 */}
      <FeatherIcons.Mail />
      {/* 다국어 */}
      <FeatherIcons.Globe />
      {/* 다크 모드 */}
      <FeatherIcons.Sun />
      {/* 최상단으로 이동하기 */}
      <FeatherIcons.ChevronsUp />
    </div>
  );
}
