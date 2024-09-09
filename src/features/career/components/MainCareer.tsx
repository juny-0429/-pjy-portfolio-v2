import { motion } from 'framer-motion';
import CareerItem from './CareerItem/CareerItem';
import PcCareerItem from './PcCareerItem/PcCareerItem';
import { mainCareerCss, progressBarCss } from './MainCareer.styles';
import { commonCss } from '@/styles/common.styles';
import { careerList } from '../data/career.data';
import { useCareerScroll } from '../hooks/useCareerScroll';

export default function MainCareer() {
  const { ref, textColors, scaleY, translateY } = useCareerScroll();

  return (
    <section css={mainCareerCss.wrapper} ref={ref}>
      {/* mobile */}
      <div css={[mainCareerCss.careerList, commonCss.onlyMobileVisible]}>
        {careerList.map((item, index) => (
          <CareerItem key={index} title={item.title} logo={item.logo} date={item.date} description={item.description} />
        ))}
      </div>

      {/* pc */}
      <h2 css={[mainCareerCss.title, commonCss.onlyPcVisibleFlex]}>CAREER</h2>

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
                <PcCareerItem
                  index={index}
                  title={item.title}
                  logo={item.logo}
                  date={item.date}
                  description={item.description}
                  textColor={textColors[index]} // 훅에서 전달된 텍스트 색상
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
