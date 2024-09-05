import theme from '@/theme';
import { css } from '@emotion/react';

export const menuDrawerCss = {
  menuButton: css`
    position: absolute;
    top: 20px;
    right: 15px;
    width: 24px;
    height: 24px;
  `,

  menuIcon: css`
    width: 24px;
    height: 24px;

    color: ${theme.colors.mainLightBlack};
  `,

  menuList: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  `,

  menuDrawerItem: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;

    border-bottom: 1px solid ${theme.colors.mainLightGray};

    font-size: 16px;
    font-weight: 700;
  `,
};
