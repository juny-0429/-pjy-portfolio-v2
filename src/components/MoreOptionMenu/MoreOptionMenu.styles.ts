import theme from '@/theme';
import { css } from '@emotion/react';

export const moreOptionMenuCss = {
  wrapper: css`
    position: fixed;
    bottom: 15px;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    color: ${theme.colors.mainLightBlack};
  `,

  moreOptionMenu: css``,
};
