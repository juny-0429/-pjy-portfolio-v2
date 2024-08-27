import theme from '@/theme';
import { css } from '@emotion/react';

export const scrollbarCss = {
  noScroll: css`
    ::-webkit-scrollbar {
      display: none;
    }
  `,

  scrollbar: css`
    &::-webkit-scrollbar {
      display: block;
      width: 10px;
      height: 10px;

      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.mainLightGreen};
      border-radius: 99px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
  `,
};

export const commonCss = {
  fullPage: css`
    /* header: 54px */
    height: calc(100dvh - 54px);
    padding: 0 44px;
    overflow-x: hidden;

    /* TODO: 다크 모드시 글자 색상 설정 하기  */
    color: ${theme.colors.mainLightBlack};

    ${scrollbarCss.noScroll}

    ${theme.media.pc} {
      /* header: 82px */
      height: calc(100dvh - 82px);
      padding: 0 100px;

      ${scrollbarCss.scrollbar}
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

  sectionMinHeight: css`
    min-height: calc(100dvh - 54px);

    ${theme.media.pc} {
      min-height: calc(100dvh - 81px);
    }
  `,

  onlyMobileVisible: css`
    ${theme.media.pc} {
      display: none;
    }
  `,

  onlyPcVisibleBlock: css`
    display: none;

    ${theme.media.pc} {
      display: block;
    }
  `,

  onlyPcVisibleFlex: css`
    display: none;

    ${theme.media.pc} {
      display: flex;
    }
  `,
};
