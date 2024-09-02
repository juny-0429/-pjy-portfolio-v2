import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { pcProjectCss } from './PcProjectList.styles';
import { projectListData } from '../../data/project.data';
import { skillColorMap, SkillType } from '@/features/skills/data/skillColorMap.data';
import Badge from '@/components/Badge/Badge';
import sizes from '@/theme/sizes';
import { commonCss } from '@/styles/common.styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

export default function PcProjectList() {
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
        <SwiperSlide key={project.title}>
          <div css={pcProjectCss.projectWrapper}>
            <div css={pcProjectCss.mainImageWrapper}>
              <Image src={project.mainImage} fill alt="project main image" style={{ objectFit: 'cover' }} />
            </div>

            <div css={pcProjectCss.projectTab}>{project.team}</div>

            <div css={pcProjectCss.titleWrapper}>
              {project.logo && (
                <div css={pcProjectCss.projectLogoWrapper}>
                  <Image src={project.logo} fill alt="project logo" />
                </div>
              )}
              <p css={pcProjectCss.projectTitle}>{project.title}</p>
            </div>

            <div css={pcProjectCss.skillList}>
              {project.skills.map((skill, index) => (
                <Badge key={index} color={skillColorMap[skill as SkillType]} type="capsule" fillStyle="fill" cssStyle={sizes.badgeSize[14]}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
