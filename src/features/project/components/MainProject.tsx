import Image from 'next/image';
import { mainProjectCss } from './MainProject.styles';
import { projectList } from '../data/project.data';
import Badge from '@/components/Badge/Badge';
import sizes from '@/theme/sizes';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';

export default function MainProject() {
  return (
    <div css={mainProjectCss.wrapper}>
      <ul css={mainProjectCss.projectList}>
        {projectList.map((project) => (
          <li key={project.title} css={mainProjectCss.projectWrapper}>
            <div css={mainProjectCss.mainImageWrapper}>
              <Image src={project.mainImage} fill objectFit="cover" alt="project main image" />
            </div>

            <div css={mainProjectCss.projectTab}>{project.team}</div>

            <div css={mainProjectCss.titleWrapper}>
              {project.logo && <Image src={project.logo} width={30} height={30} alt="project logo" />}
              <p css={mainProjectCss.title}>{project.title}</p>
            </div>

            <div css={mainProjectCss.skillList}>
              {project.skills.map((skill, index) => (
                <Badge key={index} color={skillColorMap[skill as SkillType]} type="capsule" fillStyle="fill" cssStyle={sizes.badgeSize[14]}>
                  {skill}
                </Badge>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
