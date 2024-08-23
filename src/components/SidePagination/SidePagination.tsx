import { Link } from 'react-scroll';
import { sidePaginationCss } from './SidePagination.styles';
import { MainMenu } from '@/types/menu.types';
import { mainMenu } from '@/data/menu.data';
import { useRecoilState } from 'recoil';
import { activeSectionState } from '@/atoms/sectionScroll';

export default function SidePagination() {
  const [activeSection, setActiveSection] = useRecoilState<MainMenu>(activeSectionState);

  return (
    <div css={sidePaginationCss.wrapper}>
      {mainMenu.map((sectionName) => (
        <Link key={sectionName} to={sectionName} spy={true} smooth={true} duration={500} onSetActive={() => setActiveSection(sectionName)}>
          <div css={[sidePaginationCss.paginationLine, activeSection === sectionName && sidePaginationCss.activeLine]} />
        </Link>
      ))}
    </div>
  );
}
