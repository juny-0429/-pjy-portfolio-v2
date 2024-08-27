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

    ${theme.media.pc} {
      justify-content: space-between;
      padding: 40px 40px 10px;

      border-bottom: 1px solid ${theme.colors.mainLightGreen};
      box-shadow: 0px 1px 10px rgba(128, 128, 128, 0.5);
    }
  `,

  headerTitle: css`
    font-size: 24px;
    font-weight: 900;
  `,

  pcHeaderTitle: css`
    font-size: 50px;
    font-weight: 300;
  `,
};
