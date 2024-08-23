import { Link } from 'react-scroll';
import { sidePaginationCss } from './SidePagination.styles';
import { MainMenu } from '@/types/menu.types';
import { mainMenu } from '@/data/menu.data';

interface Props {
  activeSection: MainMenu;
  setActiveSection: (section: MainMenu) => void;
}

export default function SidePagination({ activeSection, setActiveSection }: Props) {
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
