import theme from '@/theme';
import { css } from '@emotion/react';

export const footerCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;

    ${theme.media.pc} {
      gap: 10px;
      padding: 0 0 20px;
    }
  `,

  divider: css`
    width: 50px;
    height: 3px;

    border-radius: 99px;
    background: ${theme.colors.mainLightBlack};

    ${theme.media.pc} {
      width: calc(100% - 200px);
      height: 1px;

      border-radius: 0;
      background: ${theme.colors.mainGray};
    }
  `,

  copyLightWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: calc(100% - 200px);

    ${theme.media.pc} {
      flex-direction: row;
      justify-content: space-between;
    }
  `,

  copyLight: css`
    color: ${theme.colors.mainLightBlack};
    white-space: pre-wrap;
    font-size: 15px;
    font-weight: 300;

    ${theme.media.pc} {
      white-space: nowrap;
      font-size: 16px;
    }
  `,

  update: css`
    color: ${theme.colors.mainGray};
    font-size: 12px;
    font-weight: 300;

    ${theme.media.pc} {
      font-size: 14px;
    }
  `,
};
