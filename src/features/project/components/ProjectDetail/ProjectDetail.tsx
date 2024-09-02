import FeatherIcons from '@/theme/featherIcons';
import { projectDetailCss } from './ProjectDetail.styles';
import { useRouter } from 'next/router';
import theme from '@/theme';
import useProjectData from '../../hooks/useProejctData';
import Image from 'next/image';
import Badge from '@/components/Badge/Badge';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';
import sizes from '@/theme/sizes';
import DetailHeader from '../DetailHeader/DetailHeader';
import { sections } from '../../data/projectDetail.data';

export default function ProjectDetail() {
  const router = useRouter();
  const projectId = Number(router.query.id);
  const project = useProjectData(projectId);

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div css={projectDetailCss.wrapper}>
      {/* header */}
      <DetailHeader date={project.date} title={project.title} linkList={project.link} />

      {/* content */}
      <div css={projectDetailCss.contentWrapper}>
        {/* main Image */}
        <div css={projectDetailCss.projectImageWrapper}>
          <Image src={project.mainImage} fill alt="project main images" />
        </div>

        {/* 스킬 */}
        <div css={projectDetailCss.infoWrapper}>
          <p css={projectDetailCss.infoTitle}>스킬</p>

          <div css={projectDetailCss.skillList}>
            {project.skills.map((skill, index) => (
              <Badge key={index} color={skillColorMap[skill as SkillType]} type="rounded" fillStyle="fill" cssStyle={sizes.badgeSize[45]}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* 인원 */}
        <div css={projectDetailCss.infoWrapper}>
          <p css={projectDetailCss.infoTitle}>인원</p>
          <div css={projectDetailCss.memberWrapper}>
            <p css={projectDetailCss.member}>{project.Member}</p>
            <FeatherIcons.Users width={40} height={40} color={theme.colors.mainLightBlack} />
          </div>
        </div>

        {/* 프로젝트 소개 */}
        <div css={projectDetailCss.infoWrapper}>
          <p css={projectDetailCss.infoTitle}>프로젝트 소개</p>
          <p css={projectDetailCss.description}>{project.description}</p>
        </div>

        <div css={projectDetailCss.divider} />

        {/* 프로젝트 내용 */}
        <div css={projectDetailCss.detail}>
          {sections.map((section) => (
            <div css={projectDetailCss.section} key={section.key}>
              <div css={projectDetailCss.titleWrapper}>
                <FeatherIcons.Triangle css={projectDetailCss.titleIcon} />
                <p css={projectDetailCss.detailSectionTitle}>{section.title}</p>
              </div>
              <p css={projectDetailCss.detailSectionContent}> {project.detail[section.key as keyof typeof project.detail]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// css={projectDetailCss.wrapper}
