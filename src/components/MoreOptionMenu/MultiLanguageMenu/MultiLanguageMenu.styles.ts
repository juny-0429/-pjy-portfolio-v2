import theme from '@/theme';
import { css } from '@emotion/react';

export const multiLanguageMenuCss = {
  multilingualList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  `,

  multilingualItem: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    width: 100%;
  `,

  flagWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 30px;
    height: 30px;

    border-radius: 99px;
    border: 1px solid ${theme.colors.mainLightGray};
  `,

  flagIcon: css`
    height: 80%;
  `,

  label: css`
    white-space: nowrap;
    font-size: 24px;
    font-weight: 500;
  `,
};
