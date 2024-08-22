import { Interpolation, Theme } from '@emotion/react';
import { PropsWithChildren, useMemo } from 'react';
import { badgeCss } from './Badge.styles';
import { SkillColor } from '@/features/skills/data/skillColorMap.data';

export type BadgeColor = 'green' | 'lightGreen' | 'deepBlue' | 'blue' | 'beige' | 'lightBlack' | 'gray' | 'lightGray' | 'orange' | SkillColor;
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
