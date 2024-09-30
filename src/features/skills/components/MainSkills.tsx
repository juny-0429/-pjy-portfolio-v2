import theme from '@/theme';
import { skills } from '../data/skills.data';
import { mainSkillsCss } from './MainSkills.styles';
import LogoSlider from './LogoSlider/LogoSlider';
import { useDarkMode } from '@/hooks/useDarkMode';
import { darkModeCss } from '@/styles/common.styles';
import { useRouter } from 'next/router';

export default function MainSkills() {
  const { themeMode } = useDarkMode();
  const { locale } = useRouter();

  return (
    <section css={mainSkillsCss.wrapper}>
      <LogoSlider />

      <div css={mainSkillsCss.skillCategoryList}>
        {skills.map((item, index) => {
          const isEven = index % 2 === 0;
          const colorStyle = {
            borderColor: isEven ? theme.colors.mainBlue : theme.colors.mainGreen,
            color: isEven ? theme.colors.mainBlue : theme.colors.mainGreen,
          };

          return (
            <div key={index} css={[mainSkillsCss.skillCategoryWrapper, colorStyle]}>
              <h3 css={[mainSkillsCss.skillCategoryTitle, { color: colorStyle.color }, themeMode === 'dark' && darkModeCss.darkModeBackground]}>
                {locale === 'ko' ? item.category_ko : item.category_en}
              </h3>
              <ul css={mainSkillsCss.skillList}>
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} css={mainSkillsCss.skillWrapper}>
                    <p css={[mainSkillsCss.skillLabel, themeMode === 'dark' && darkModeCss.darkModeColor]}>{skill.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
