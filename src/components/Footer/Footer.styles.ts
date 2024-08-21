import theme from '@/theme';
import { css } from '@emotion/react';

export const footerCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin: 30px 0 300px;
    text-align: center;
  `,

  divider: css`
    width: 50px;
    height: 3px;

    border-radius: 99px;
    background: ${theme.colors.mainLightBlack};
  `,

  copyLight: css`
    color: ${theme.colors.mainLightBlack};
    white-space: pre-wrap;
    font-size: 15px;
    font-weight: 300;
  `,

  update: css`
    color: ${theme.colors.mainGray};
    font-size: 12px;
    font-weight: 300;
  `,
};
