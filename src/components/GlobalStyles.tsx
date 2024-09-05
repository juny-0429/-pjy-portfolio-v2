import { Global, css } from '@emotion/react';
import { pretendard } from '@/theme/fonts';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: ${pretendard.style.fontFamily};
          overflow: auto;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }

        * {
          -ms-overflow-style: none;
          scrollbar-width: none;

          ::-webkit-scrollbar {
            display: none;
          }
        }
      `}
    />
  );
}
