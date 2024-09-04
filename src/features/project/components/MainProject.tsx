import { mainProjectCss } from './MainProject.styles';
import { commonCss } from '@/styles/common.styles';

import ProjectList from './ProjectList/ProjectList';
import PcProjectList from './PcProjectList/PcProjectList';

export default function MainProject() {
  return (
    <section css={mainProjectCss.wrapper}>
      <h2 css={[mainProjectCss.title, commonCss.onlyPcVisibleBlock]}>PROJECT</h2>

      {/* mobile */}
      <ProjectList />

      {/* pc */}
      <PcProjectList />
    </section>
  );
}
