import theme from '@/theme';
import { skills } from '../data/skills.data';
import { mainSkillsCss } from './MainSkills.styles';
import LogoSlider from './LogoSlider/LogoSlider';

export default function MainSkills() {
  return (
    <section css={mainSkillsCss.wrapper}>
      <LogoSlider />

      <div css={mainSkillsCss.skillCategoryList}>
        {skills.map((item, index) => {
          const isEven = index % 2 === 0;
          const colorStyle = {
            borderColor: isEven ? theme.colors.mainDeepBlue : theme.colors.mainGreen,
            color: isEven ? theme.colors.mainDeepBlue : theme.colors.mainGreen,
          };

          return (
            <div key={index} css={[mainSkillsCss.skillCategoryWrapper, colorStyle]}>
              <p css={[mainSkillsCss.skillCategoryTitle, { color: colorStyle.color }]}>{item.category}</p>

              <ul css={mainSkillsCss.skillList}>
                {item.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} css={mainSkillsCss.skillWrapper}>
                    <p css={mainSkillsCss.skillLabel}>{skill.label}</p>
                    <p css={mainSkillsCss.skillDescription}>{skill.description}</p>
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
