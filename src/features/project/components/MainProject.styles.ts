import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const mainProjectCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0;

    ${commonCss.sectionMinHeight}

    ${theme.media.pc} {
      gap: 20px;
      width: 100%;
      height: 100%;
      padding: 120px 0 0;
    }
  `,

  title: css`
    color: ${theme.colors.mainOrange};
    font-size: 40px;
    font-weight: 800;
  `,

  description: css`
    font-size: 20px;
    font-weight: 400;
  `,
};
