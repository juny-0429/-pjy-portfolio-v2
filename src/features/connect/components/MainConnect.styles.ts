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
  `,

  copyIcon: css`
    color: ${theme.colors.mainGray};
    width: 20px;
    height: 20px;
  `,
};
