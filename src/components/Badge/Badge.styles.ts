import { css } from '@emotion/react';
import { BadgeColor, BadgeType, BadgeFillStyle } from './Badge';
import theme from '@/theme';
import { colorMap } from '@/data/badge.data';

export const badgeSize = {
  14: css`
    height: 14px;
    padding: 1px 5px;

    font-size: 10px;
    font-weight: 400;
  `,

  23: css`
    height: 23px;
    padding: 4px;

    font-size: 12px;
    font-weight: 700;
  `,

  30: css`
    height: 30px;
    padding: 5px 10px;

    font-size: 16px;
    font-weight: 500;
  `,

  40: css`
    height: 40px;
    padding: 5px 20px;

    font-size: 20px;
    font-weight: 500;
  `,

  45: css`
    height: 45px;
    padding: 10px 30px;

    font-size: 20px;
    font-weight: 500;
  `,
};

export const badgeCss = {
  badge: (color: BadgeColor, type: BadgeType, fillStyle: BadgeFillStyle) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    box-sizing: border-box;

    /* mobile default 23 */
    ${badgeSize[23]}
    ${badgeCss.type(type, color, fillStyle)}
  `,

  type(type: BadgeType, color: BadgeColor, fillStyle: BadgeFillStyle) {
    return css`
      ${type === 'rounded' && `border-radius: 10px;`}
      ${type === 'capsule' && `border-radius: 90px;`}
      ${fillStyle === 'fill' ? badgeCss.fillStyle(color) : badgeCss.outlineStyle(color)}
    `;
  },

  fillStyle(color: BadgeColor) {
    return css`
      color: ${theme.colors.white};
      background: ${colorMap[color]};
    `;
  },

  outlineStyle(color: BadgeColor) {
    return css`
      color: ${colorMap[color]};
      background: transparent;
      border: 1px solid ${colorMap[color]};
    `;
  },
};
