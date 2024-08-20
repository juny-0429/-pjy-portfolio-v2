import theme from '@/theme';
import { css } from '@emotion/react';

export const headerCss = {
  header: css`
    position: sticky;
    top: 0;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    background: ${theme.colors.white};
  `,

  headerTitle: css`
    font-size: 24px;
    font-weight: 900;
  `,

  headerMenu: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;

    color: ${theme.colors.mainLightBlack};
  `,
};
 