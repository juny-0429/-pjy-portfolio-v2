import { mainProjectCss } from './MainProject.styles';
import { commonCss } from '@/styles/common.styles';
import ProjectList from './ProjectList/ProjectList';
import PcProjectList from './PcProjectList/PcProjectList';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

export default function MainProject() {
  const [isPc, setIsPc] = useState(false);
  const { t } = useTranslation('project');

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= 1280);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section css={mainProjectCss.wrapper}>
      <h2 css={[mainProjectCss.title, commonCss.onlyPcVisibleBlock]}>PROJECT</h2>
      <p css={[mainProjectCss.description, commonCss.onlyPcVisibleBlock]}>{t('description')}</p>

      {/* mobile */}
      <ProjectList />

      {/* pc */}
      {isPc && <PcProjectList />}
    </section>
  );
}
