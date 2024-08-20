import theme from '@/theme';
import { css } from '@emotion/react';

export const archivingItemCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    height: 100%;
    padding: 8px;
    box-sizing: border-box;

    border-radius: 10px;
    background: ${theme.colors.mainLightGray};
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
  `,

  title: css`
    font-size: 15px;
    font-weight: 600;
  `,

  description: css`
    flex: 1;
    font-size: 12px;
    font-weight: 300;
  `,

  linkList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  `,

  linkItem: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;

    color: ${theme.colors.mainDeepBlue};
    font-size: 12px;
    font-weight: 600;
  `,
};
