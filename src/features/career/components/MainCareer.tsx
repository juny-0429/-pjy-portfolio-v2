import { useRef } from 'react';
import CareerItem from './CareerItem/CareerItem';
import CodeInDesignLogo from '@/assets/images/career/code-in-design.png';
import HimediaLogo from '@/assets/images/career/himedia.png';
import GreenLogo from '@/assets/images/career/green.png';
import { mainCareerCss, progressBarCss } from './MainCareer.styles';
import { commonCss } from '@/styles/common.styles';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function MainCareer() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transformedProgress = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  const scaleY = useSpring(transformedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateY = useTransform(scaleY, [0, 1], ['0%', '100%']);

  return (
    <div css={mainCareerCss.wrapper}>
      {/* mobile */}
      <div css={[mainCareerCss.careerList, commonCss.onlyMobileVisible]}>
        <CareerItem title="React.js 와 Springboot 를 활용한 자바 풀스택 개발자" logo={HimediaLogo} date="2022.10 ~ 2023.3" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
        <CareerItem title="코드인디자인" logo={CodeInDesignLogo} date="2023.12 ~ 2024.8" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
        <CareerItem title="[웹코딩] UIUX반응형디자인(웹표준,HTML5, CSS)프론트엔드(퍼블리셔)개발자" logo={GreenLogo} date="2022.7 ~ 2022.8" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
      </div>

      {/* pc */}
      <p css={[mainCareerCss.title, commonCss.onlyPcVisibleFlex]}>CAREER</p>

      <div css={mainCareerCss.careerList} ref={ref}>
        <div css={progressBarCss.backgroundBar} />
        <motion.div
          css={progressBarCss.activeBar}
          style={{
            scaleY,
            transformOrigin: 'top',
          }}
        />
        <motion.div
          css={progressBarCss.dot}
          style={{
            top: translateY,
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </div>
  );
}
