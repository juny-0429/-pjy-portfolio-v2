import { BadgeColor } from "@/components/Badge/Badge";
import theme from "@/theme";

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
};
