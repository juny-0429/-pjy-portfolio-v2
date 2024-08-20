import FeatherIcons from '@/theme/featherIcons';
import { headerCss } from './Header.styles';
import { MainMenu } from '@/types/menu.types';

interface Props {
  activeSection: MainMenu;
}

export default function Header({ activeSection }: Props) {
  return (
    <div css={headerCss.header}>
      <h1 css={headerCss.headerTitle}>{activeSection}</h1>
      <FeatherIcons.Menu css={headerCss.headerMenu} />
    </div>
  );
}
