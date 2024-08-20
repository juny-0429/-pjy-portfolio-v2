import theme from '@/theme';
import { css } from '@emotion/react';

export const commonCss = {
  fullPage: css`
    /* header: 54px, footer: 105px */
    min-height: calc(100dvh - 54px - 105px);
    padding: 0 34px;

    /* TODO: 다크 모드시 글자 색상 설정 하기  */
    color: ${theme.colors.mainLightBlack};

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
