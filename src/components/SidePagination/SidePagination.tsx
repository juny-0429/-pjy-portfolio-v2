import { useState } from 'react';
import { Link } from 'react-scroll';
import { sidePaginationCss } from './SidePagination.styles';

export default function SidePagination() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActive = (sectionName: string) => {
    setActiveSection(sectionName);
  };

  const sections = ['ABOUT', 'SKILLS', 'PROJECT', 'CAREER', 'CONNECT'];

  return (
    <div css={sidePaginationCss.wrapper}>
      {sections.map((sectionName) => (
        <Link key={sectionName} to={sectionName} spy={true} smooth={true} duration={500} onSetActive={() => handleSetActive(sectionName)}>
          <div css={[sidePaginationCss.paginationLine, activeSection === sectionName && sidePaginationCss.activeLine]} />
        </Link>
      ))}
    </div>
  );
}
