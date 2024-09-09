import { Global, css } from '@emotion/react';
import { pretendard } from '@/theme/fonts';
import theme from '@/theme';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: ${pretendard.style.fontFamily};
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        /* 스크롤 전체 제거 */
        * {
          -ms-overflow-style: none;
          scrollbar-width: none;

          ::-webkit-scrollbar {
            display: none;
          }
        }

        /* 다크 모드 스타일 */
        body[data-theme-mode='dark'] {
          background: ${theme.colors.mainLightBlack};
          color: ${theme.colors.white};

          svg {
            color: ${theme.colors.white};
          }
        }

        body[data-theme-mode='light'] {
          background: ${theme.colors.white};
          color: ${theme.colors.mainLightBlack};

          svg {
            color: ${theme.colors.mainLightBlack};
          }
        }
      `}
    />
  );
}
