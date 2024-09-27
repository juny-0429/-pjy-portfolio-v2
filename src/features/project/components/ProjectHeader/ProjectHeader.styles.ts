import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const projectHeaderCss = {
  header: css`
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    padding: 15px 20px;
    box-sizing: border-box;

    background: ${theme.colors.white};

    ${theme.media.pc} {
      gap: 30px;
      padding: 30px 50px;
    }
  `,

  backIconWrapper: css`
    svg {
      width: 35px;
      height: 35px;
      color: ${theme.colors.mainLightBlack};
    }

    ${theme.media.pc} {
      svg {
        width: 50px;
        height: 50px;
      }
    }
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    flex: 1;
  `,

  date: css`
    color: ${theme.colors.mainGray};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 1px;
  `,

  title: css`
    font-size: 24px;
    font-weight: 600;

    ${theme.media.pc} {
      font-size: 45px;
      font-weight: 400;
    }
  `,

  projectLinkList: css`
    display: flex;
    align-items: center;
    gap: 35px;

    svg {
      ${commonCss.hoverBounce}
    }
  `,
};
