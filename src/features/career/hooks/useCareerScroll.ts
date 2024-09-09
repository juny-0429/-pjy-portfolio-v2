import { useRef, useState } from 'react';
import { useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import theme from '@/theme';
import { careerList } from '../data/career.data';

export const useCareerScroll = () => {
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

    const newTextColors = textColors.map((_, _i) => theme.colors.mainLightGray);

    colorStages.forEach(({ range, index }) => {
      if (progress >= range[0] && progress < range[1]) {
        newTextColors[index] = theme.colors.mainLightGreen;
      }
    });

    setTextColors(newTextColors);
  };

  useMotionValueEvent(scrollYProgress, 'change', updateTextColors);

  return {
    ref,
    textColors,
    scaleY,
    translateY,
  };
};
