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
  NEXT_COLOR: theme.colors.NEXT_COLOR,
  VUE_COLOR: theme.colors.VUE_COLOR,
  JAVA_COLOR: theme.colors.JAVA_COLOR,
  SPRING_COLOR: theme.colors.SPRING_COLOR,
  RESTful_COLOR: theme.colors.RESTful_COLOR,
  ORACLE_COLOR: theme.colors.ORACLE_COLOR,
  MUI_COLOR: theme.colors.MUI_COLOR,
  FIGMA_COLOR: theme.colors.FIGMA_COLOR,
  GITHUB_COLOR: theme.colors.GITHUB_COLOR,
  TYPESCRIPT_COLOR: theme.colors.TYPESCRIPT_COLOR,
  SCSS_COLOR: theme.colors.SCSS_COLOR,
  GITBOOK_COLOR: theme.colors.GITBOOK_COLOR,
  NOTION_COLOR: theme.colors.NOTION_COLOR,
  JPA_COLOR: theme.colors.JPA_COLOR,
};
