/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';
import { pretendard } from '@/theme/fonts';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        html,
        body {
          font-family: ${pretendard.style.fontFamily};

          &::-webkit-scrollbar {
            display: none;
          }
        }
      `}
    />
  );
}
