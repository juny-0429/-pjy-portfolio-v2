import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { pcProjectCss } from './PcProjectList.styles';
import { projectListData } from '../../data/project.data';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';
import Badge from '@/components/Badge/Badge';
import sizes from '@/theme/sizes';
import { commonCss, darkModeCss } from '@/styles/common.styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import Link from 'next/link';
import { useDarkMode } from '@/hooks/useDarkMode';
import { useRouter } from 'next/router';

export default function PcProjectList() {
  const { locale } = useRouter();
  const { themeMode } = useDarkMode();

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true, // 마우스를 올리면 애니메이션 멈춤
      }}
      spaceBetween={200}
      slidesPerView={3}
      loop={true}
      centeredSlides={true}
      css={[pcProjectCss.swiperContainer, commonCss.onlyPcVisibleFlex]}
    >
      {projectListData.map((project) => (
        <SwiperSlide key={project.id}>
          <Link href={`/project/${project.id}`}>
            <div css={[pcProjectCss.projectWrapper, themeMode === 'dark' && pcProjectCss.darkModeProjectBackground]}>
              <div css={pcProjectCss.mainImageWrapper}>
                <Image src={project.mainImage} fill sizes="100%" alt="project main image" style={{ objectFit: 'cover' }} />
              </div>

              <div css={[pcProjectCss.projectTab, themeMode === 'dark' && pcProjectCss.darkModeProjectBackground]}>
                <span>{locale === 'ko' ? project.team_ko : project.team_en}</span>
              </div>

              <div css={pcProjectCss.titleWrapper}>
                {project.logo && (
                  <div css={pcProjectCss.projectLogoWrapper}>
                    <Image src={project.logo} fill sizes="100%" alt="project logo" />
                  </div>
                )}
                <p css={[pcProjectCss.projectTitle, themeMode === 'dark' && darkModeCss.darkModeInvertColor]}>{project.title}</p>
              </div>

              <div css={pcProjectCss.skillList}>
                {project.skills.map((skill, index) => (
                  <Badge key={index} color={skillColorMap[skill as SkillType]} type="capsule" fillStyle="fill" cssStyle={sizes.badgeSize[14]}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
