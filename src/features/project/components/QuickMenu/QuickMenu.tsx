import { Link } from 'react-scroll';
import { ProjectDetailMenu } from '@/types/menu.types';
import { quickMenuCss } from './QuickMenu.styles';
import { useRecoilState } from 'recoil';
import { activeProjectDetailSectionState } from '@/atoms/sectionScroll';
import { quickMenuList } from '../../data/projectDetail.data';
import { commonCss, darkModeCss } from '@/styles/common.styles';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRouter } from 'next/router';

export default function QuickMenu() {
  const { locale } = useRouter();
  const { themeMode } = useDarkMode();
  const [activeSection, setActiveSection] = useRecoilState<ProjectDetailMenu>(activeProjectDetailSectionState);

  return (
    <nav css={[quickMenuCss.wrapper, commonCss.onlyPcVisibleBlock, themeMode === 'dark' && darkModeCss.darkModeBackground]}>
      <ul>
        {quickMenuList.map((menu) => (
          <Link key={menu.value} to={menu.value} spy={true} smooth={true} duration={100} offset={-400} onSetActive={() => setActiveSection(menu.value)}>
            <li css={[quickMenuCss.menu, activeSection === menu.value && quickMenuCss.activeMenu]}>{locale === 'ko' ? menu.label_ko : menu.label_en}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
