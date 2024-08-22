import { BadgeColor } from '@/components/Badge/Badge';
import theme from '@/theme';

export const colorMap: { [key in BadgeColor]: string } = {
  green: theme.colors.mainGreen,
  lightGreen: theme.colors.mainLightGreen,
  deepBlue: theme.colors.mainDeepBlue,
  blue: theme.colors.mainBlue,
  beige: theme.colors.mainBeige,
  lightBlack: theme.colors.mainLightBlack,
  gray: theme.colors.mainGray,
  lightGray: theme.colors.mainLightGray,
  orange: theme.colors.mainOrange,

  HTML_COLOR: theme.colors.HTML_COLOR,
  CSS_COLOR: theme.colors.CSS_COLOR,
  REACT_COLOR: theme.colors.REACT_COLOR,
  JAVA_COLOR: theme.colors.JAVA_COLOR,
  SPRING_BOOT_COLOR: theme.colors.SPRING_BOOT_COLOR,
  RESTful_COLOR: theme.colors.RESTful_COLOR,
  ORACLE_COLOR: theme.colors.ORACLE_COLOR,
  MUI_COLOR: theme.colors.MUI_COLOR,
  FIGMA_COLOR: theme.colors.FIGMA_COLOR,
  GITHUB_COLOR: theme.colors.GITHUB_COLOR,
};
