import theme from '@/theme';
import { css } from '@emotion/react';

export const mainHomeCss = {
  homeHeader: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  `,

  headerSubTitle: css`
    width: fit-content;
    border-bottom: 1px solid ${theme.colors.mainLightGreen};

    color: ${theme.colors.mainLightGreen};
    font-size: 30px;
    font-weight: 700;
  `,

  headerTitle: css`
    font-size: 50px;
    font-weight: 800;
  `,
};
