import FeatherIcons from '@/theme/featherIcons';
import { projectDetailCss } from './ProjectDetail.styles';
import { useRouter } from 'next/router';
import theme from '@/theme';
import useProjectData from '../../hooks/useProejctData';
import Image from 'next/image';
import Badge from '@/components/Badge/Badge';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';
import sizes from '@/theme/sizes';
import DetailHeader from '../ProjectHeader/ProjectHeader';
import { quickMenuList } from '../../data/projectDetail.data';
import QuickMenu from '../QuickMenu/QuickMenu';
import { Element } from 'react-scroll';
import Footer from '@/components/Footer/Footer';
import { commonCss } from '@/styles/common.styles';
import Link from 'next/link';

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

      <div css={projectDetailCss.contentWrapper}>
        {/* content */}
        <div css={projectDetailCss.content}>
          <Element name="프로젝트정보" css={projectDetailCss.content}>
            {/* main Image */}
            <div css={projectDetailCss.projectImageWrapper}>
              <Image src={project.mainImage} fill sizes="100%" alt="project main images" />
            </div>

            <div css={projectDetailCss.divider} />

            {/* 진행기간 */}
            <section css={projectDetailCss.infoWrapper}>
              <h2 css={projectDetailCss.infoTitle}>진행기간</h2>
              <time css={projectDetailCss.description}>{project.date}</time>
            </section>

            {/* 스킬 */}
            <section css={projectDetailCss.infoWrapper}>
              <h2 css={projectDetailCss.infoTitle}>스킬</h2>

              <div css={projectDetailCss.skillList}>
                {project.skills.map((skill, index) => (
                  <Badge key={index} color={skillColorMap[skill as SkillType]} type="rounded" fillStyle="fill" cssStyle={sizes.badgeSize[23]}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </section>

            {/* 인원 */}
            <section css={projectDetailCss.infoWrapper}>
              <h2 css={projectDetailCss.infoTitle}>인원</h2>
              <div css={projectDetailCss.memberWrapper}>
                <span css={projectDetailCss.member}>{project.Member}</span>
                <FeatherIcons.Users width={16} height={16} color={theme.colors.mainLightBlack} />
              </div>
            </section>

            {/* 링크 */}
            <section css={[projectDetailCss.infoWrapper, commonCss.onlyMobileVisible]}>
              <h2 css={projectDetailCss.infoTitle}>링크</h2>
              <nav>
                <ul css={projectDetailCss.projectLinkList}>
                  {project.link &&
                    project.link.map((link, index) => (
                      <li key={index}>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          <link.LinkIcon width={35} height={35} color={theme.colors.mainLightBlack} />
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
            </section>

            {/* 간단 소개 */}
            <section css={projectDetailCss.infoWrapper}>
              <h2 css={projectDetailCss.infoTitle}>간단 소개</h2>
              <p css={projectDetailCss.description}>{project.description}</p>
            </section>
          </Element>

          <div css={projectDetailCss.divider} />

          {/* 프로젝트 내용 */}
          <div css={projectDetailCss.detail}>
            {quickMenuList
              .filter((menu) => menu.value !== '프로젝트정보')
              .map((menu) => (
                <Element name={menu.value as string} key={menu.value}>
                  <section css={projectDetailCss.section}>
                    <div css={projectDetailCss.sectionWrapper}>
                      <FeatherIcons.Triangle css={projectDetailCss.sectionIcon} />
                      <h3 css={projectDetailCss.detailSectionTitle}>{menu.label}</h3>
                    </div>

                    {Array.isArray(project.detail[menu.value as keyof typeof project.detail]) ? (
                      <ul css={projectDetailCss.detailSectionContentList}>
                        {(project.detail[menu.value as keyof typeof project.detail] as string[]).map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p css={projectDetailCss.detailSectionContent}>{project.detail[menu.value as keyof typeof project.detail]}</p>
                    )}
                  </section>
                </Element>
              ))}
          </div>
        </div>

        {/* Quick Menu */}
        <QuickMenu />
      </div>

      <Footer />
    </div>
  );
}
