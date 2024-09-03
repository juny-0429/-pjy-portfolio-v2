import { Link } from 'react-scroll';
import { ProjectDetailMenu } from '@/types/menu.types';
import { quickMenuCss } from './QuickMenu.styles';
import { useRecoilState } from 'recoil';
import { activeProjectDetailSectionState } from '@/atoms/sectionScroll';
import { quickMenuList } from '../../data/projectDetail.data';

export default function QuickMenu() {
  const [activeSection, setActiveSection] = useRecoilState<ProjectDetailMenu>(activeProjectDetailSectionState);

  return (
    <ul css={quickMenuCss.wrapper}>
      {quickMenuList.map((menu) => (
        <Link key={menu.value} to={menu.value} spy={true} smooth={true} duration={500} offset={-200} onSetActive={() => setActiveSection(menu.value)}>
          <li css={[quickMenuCss.menu, activeSection === menu.value && quickMenuCss.activeMenu]}>{menu.label}</li>
        </Link>
      ))}
    </ul>
  );
}
