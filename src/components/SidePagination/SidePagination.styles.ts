import theme from '@/theme';
import { css } from '@emotion/react';

export const sidePaginationCss = {
  wrapper: css`
    position: fixed;
    top: 50%;
    right: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 5px;
  `,

  paginationLine: css`
    width: 14px;
    height: 1px;

    border-radius: 99px;
    background: ${theme.colors.mainLightGray};
  `,

  activeLine: css`
    width: 20px;
    background: ${theme.colors.mainBlue};
  `,
};
