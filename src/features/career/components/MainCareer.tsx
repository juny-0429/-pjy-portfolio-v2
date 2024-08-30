import { useRef, useState } from 'react';
import CareerItem from './CareerItem/CareerItem';
import { mainCareerCss, progressBarCss } from './MainCareer.styles';
import { commonCss } from '@/styles/common.styles';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import PcCareerItem from './PcCareerItem/PcCareerItem';
import { careerList } from '../data/\bcareer.data';
import theme from '@/theme';

export default function MainCareer() {
  const [textColors, setTextColors] = useState(Array(careerList.length).fill(theme.colors.mainLightGray));
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transformedProgress = useTransform(scrollYProgress, [0.35, 1], [0, 1]);

  const scaleY = useSpring(transformedProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const translateY = useTransform(scaleY, [0, 1], ['0%', '100%']);

  const updateTextColors = (progress: number) => {
    const colorStages = [
      { range: [0, 0.5], index: 0 },
      { range: [0.5, 0.6], index: 1 },
      { range: [0.7, 1], index: 2 },
    ];

    const newTextColors = textColors.map((_, i) => theme.colors.mainLightGray);

    colorStages.forEach(({ range, index }) => {
      if (progress >= range[0] && progress < range[1]) {
        newTextColors[index] = theme.colors.mainLightGreen;
      }
    });

    setTextColors(newTextColors);
  };

  useMotionValueEvent(scrollYProgress, 'change', updateTextColors);

  return (
    <div css={mainCareerCss.wrapper} ref={ref}>
      {/* mobile */}
      <div css={[mainCareerCss.careerList, commonCss.onlyMobileVisible]}>
        {careerList.map((item, index) => (
          <CareerItem key={index} title={item.title} logo={item.logo} date={item.date} description={item.description} />
        ))}
      </div>

      {/* pc */}
      <p css={[mainCareerCss.title, commonCss.onlyPcVisibleFlex]}>CAREER</p>

      <div css={[mainCareerCss.careerList, commonCss.onlyPcVisibleFlex]}>
        {/* progress */}
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

        <div css={mainCareerCss.careers}>
          {careerList.map((item, index) => {
            const column = (index % 2) + 1;
            const row = index + 1;

            return (
              <motion.div
                key={index}
                style={{
                  gridColumn: column, // gridColumn 값 설정
                  gridRow: row, // gridRow 값 설정
                }}
              >
                <PcCareerItem index={index} title={item.title} logo={item.logo} date={item.date} description={item.description} textColor={textColors[index]} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
