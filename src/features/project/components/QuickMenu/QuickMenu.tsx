import { Link } from 'react-scroll';
import { ProjectDetailMenu } from '@/types/menu.types';
import { quickMenuCss } from './QuickMenu.styles';
import { useRecoilState } from 'recoil';
import { activeProjectDetailSectionState } from '@/atoms/sectionScroll';
import { quickMenuList } from '../../data/projectDetail.data';
import { commonCss } from '@/styles/common.styles';

export default function QuickMenu() {
  const [activeSection, setActiveSection] = useRecoilState<ProjectDetailMenu>(activeProjectDetailSectionState);

  return (
    <nav css={[quickMenuCss.wrapper, commonCss.onlyPcVisibleBlock]}>
      <ul>
        {quickMenuList.map((menu) => (
          <Link key={menu.value} to={menu.value} spy={true} smooth={true} duration={100} offset={-400} onSetActive={() => setActiveSection(menu.value)}>
            <li css={[quickMenuCss.menu, activeSection === menu.value && quickMenuCss.activeMenu]}>{menu.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
