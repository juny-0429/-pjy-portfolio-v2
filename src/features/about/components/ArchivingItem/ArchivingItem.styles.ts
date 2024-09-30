import theme from '@/theme';
import { css } from '@emotion/react';

export const archivingItemCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    width: 100%;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;

    border-radius: 10px;
    background: ${theme.colors.mainLightGray};

    ${theme.media.pc} {
      gap: 10px;
      padding: 15px;
    }
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    ${theme.media.pc} {
      gap: 10px;
    }
  `,

  titleIcon: css`
    width: 24px;
    height: 24px;

    color: ${theme.colors.mainLightBlack} !important;
    fill: ${theme.colors.mainLightBlack};

    ${theme.media.pc} {
      width: 30px;
      height: 30px;
    }
  `,

  title: css`
    font-size: 15px;
    font-weight: 600;

    color: ${theme.colors.mainLightBlack};

    ${theme.media.pc} {
      font-size: 24px;
    }
  `,

  linkList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;

    ${theme.media.pc} {
      gap: 10px;
    }
  `,

  linkItem: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    color: ${theme.colors.mainDeepBlue};
    font-size: 12px;
    font-weight: 600;

    ${theme.media.pc} {
      gap: 10px;

      font-size: 16px;
    }
  `,

  linkIcon: css`
    width: 15px;
    height: 15px;

    stroke: ${theme.colors.mainLightBlack};

    ${theme.media.pc} {
      width: 20px;
      height: 20px;

      stroke-width: 3px;
    }
  `,
};
