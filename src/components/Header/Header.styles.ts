import theme from '@/theme';
import { css } from '@emotion/react';

export const headerCss = {
  header: css`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 10px;

    background: ${theme.colors.white};
  `,

  headerTitle: css`
    font-size: 24px;
    font-weight: 900;
  `,

  headerMenu: css`
    position: absolute;
    top: 15px;
    right: 10px;
    width: 24px;
    height: 24px;

    color: ${theme.colors.mainLightBlack};
  `,
};
