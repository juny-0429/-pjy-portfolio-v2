import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const headerMenuCss = {
  menuList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  `,

  menuItem: css`
    ${commonCss.pointer}

    color: ${theme.colors.mainLightBlack};
    font-size: 24px;
    font-weight: 600;

    &:hover {
      color: ${theme.colors.mainGreen};
    }
  `,

  activeItem: css`
    color: ${theme.colors.mainLightGreen};
    font-weight: 800;
  `,
};
