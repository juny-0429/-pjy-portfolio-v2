import FeatherIcons from '@/theme/featherIcons';
import { sideNavigationCss } from './SideNavigation.styles';

export default function SideNavigation() {
  return (
    <div css={sideNavigationCss.wrapper}>
      <FeatherIcons.Mail />
      <FeatherIcons.Globe />
      <FeatherIcons.Sun />
      <FeatherIcons.ChevronsUp />
    </div>
  );
}
