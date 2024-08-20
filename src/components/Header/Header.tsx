import FeatherIcons from '@/theme/featherIcons';
import { headerCss } from './Header.styles';

export default function Header() {
  return (
    <div css={headerCss.header}>
      <h1 css={headerCss.headerTitle}>JUNY</h1>
      <FeatherIcons.Menu css={headerCss.headerMenu} />
    </div>
  );
}
