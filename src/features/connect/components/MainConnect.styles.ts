import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const mainConnectCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    padding: 120px 0;

    ${commonCss.sectionMinHeight}
  `,

  titleWrapper: css`
    ${theme.media.pc} {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 50px;
    }
  `,

  title: css`
    color: ${theme.colors.mainOrange};
    font-size: 40px;
    font-weight: 800;
  `,

  description: css`
    color: ${theme.colors.mainGray};
    font-size: 24px;
    font-weight: 400;
  `,

  connectWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
  `,

  connectItem: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    ${theme.media.pc} {
      width: 40%;
    }
  `,

  connectItemLabel: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;

    p {
      font-size: 20px;
      font-weight: 500;
    }

    ${theme.media.pc} {
      gap: 20px;

      svg {
        width: 25px;
        height: 25px;
      }

      p {
        font-size: 25px;
      }
    }
  `,

  copyIcon: css`
    color: ${theme.colors.mainGray};
    width: 20px;
    height: 20px;

    ${theme.media.pc} {
      width: 25px;
      height: 25px;
      ${commonCss.hoverBounce}
    }
  `,
};
