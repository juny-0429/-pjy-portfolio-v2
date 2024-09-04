import { mainProjectCss } from './MainProject.styles';
import { commonCss } from '@/styles/common.styles';

import ProjectList from './ProjectList/ProjectList';
import PcProjectList from './PcProjectList/PcProjectList';

export default function MainProject() {
  return (
    <section css={mainProjectCss.wrapper}>
      <p css={[mainProjectCss.title, commonCss.onlyPcVisibleBlock]}>PROJECT</p>

      {/* mobile */}
      <ProjectList />

      {/* pc */}
      <PcProjectList />
    </section>
  );
}
