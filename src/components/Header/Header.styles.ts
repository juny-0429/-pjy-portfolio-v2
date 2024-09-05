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
    padding: 20px 15px;

    background: ${theme.colors.white};

    ${theme.media.pc} {
      justify-content: space-between;
      padding: 20px 40px;

      border-bottom: 1px solid ${theme.colors.mainLightGreen};
      box-shadow: 0px 1px 10px rgba(128, 128, 128, 0.5);
    }
  `,

  headerTitle: css`
    color: ${theme.colors.mainLightBlack};
    font-size: 30px;
    font-weight: 900;
  `,

  pcHeaderTitle: css`
    color: ${theme.colors.mainLightBlack};
    font-size: 40px;
    font-weight: 300;
  `,
};
