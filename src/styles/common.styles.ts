import theme from '@/theme';
import { css } from '@emotion/react';

export const commonCss = {
  fullPage: css`
    /* header: 30px */
    min-height: calc(100dvh - 30px);
    padding: 15px 10px;

    ${theme.media.pc} {
      /* header: 61px */
      min-height: calc(100dvh - 61px);
    }
  `,

  noScroll: css`
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  scrollbar: css`
    &::-webkit-scrollbar {
    }
    &::-webkit-scrollbar-thumb {
    }
  `,

  bold: css`
    font-weight: 700;
  `,

  horizontalBar: css`
    background: ${theme.colors.mainLightBlack};
    color: ${theme.colors.mainLightBlack};
    width: 100%;
    height: 1px;
    border: none;
  `,

  pointer: css`
    cursor: pointer;
  `,
};
