import { Interpolation, Theme } from '@emotion/react';
import { PropsWithChildren, useMemo } from 'react';
import { badgeCss } from './Badge.styles';

export type BadgeColor =
  | 'green'
  | 'lightGreen'
  | 'deepBlue'
  | 'blue'
  | 'beige'
  | 'lightBlack'
  | 'gray'
  | 'lightGray'
  | 'orange'
  | 'HTML_COLOR'
  | 'CSS_COLOR'
  | 'SCSS_COLOR'
  | 'REACT_COLOR'
  | 'NEXT_COLOR'
  | 'VUE_COLOR'
  | 'JAVA_COLOR'
  | 'SPRING_COLOR'
  | 'RESTful_COLOR'
  | 'ORACLE_COLOR'
  | 'FIGMA_COLOR'
  | 'GITBOOK_COLOR'
  | 'NOTION_COLOR'
  | 'JPA_COLOR'
  | 'MUI_COLOR'
  | 'TYPESCRIPT_COLOR'
  | 'GITHUB_COLOR'
  | 'AG_GRID_COLOR'
  | 'BOOTSTRAP_COLOR'
  | 'CHAKRA_UI_COLOR'
  | 'CHART_JS_COLOR'
  | 'EMOTION_COLOR'
  | 'PINIA_COLOR'
  | 'REACT_QUERY_COLOR'
  | 'REACTSCROLL_COLOR'
  | 'RECOIL_COLOR'
  | 'RTK_COLOR'
  | 'SASS_COLOR'
  | 'SOLAPI_COLOR'
  | 'STORYBOOK_COLOR'
  | 'SWIPER_COLOR'
  | 'TANSTACK_QUERY_COLOR'
  | 'TANSTACK_TABLE_COLOR'
  | 'VUETIFY_COLOR';
export type BadgeType = 'rounded' | 'capsule';
export type BadgeFillStyle = 'fill' | 'outline';

interface Props {
  color: BadgeColor;
  type: BadgeType;
  fillStyle: BadgeFillStyle;
  cssStyle?: Interpolation<Theme>;
}

export default function Badge({ color, type, fillStyle, cssStyle, children }: PropsWithChildren<Props>) {
  const badgeStyle = useMemo(() => badgeCss.badge(color, type, fillStyle), [color, type, fillStyle]);

  return <div css={[badgeStyle, cssStyle]}>{children}</div>;
}
