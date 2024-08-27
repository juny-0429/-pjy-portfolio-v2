import theme from '@/theme';
import { css, keyframes } from '@emotion/react';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const moreOptionMenuCss = {
  wrapper: css`
    position: fixed;
    bottom: 15px;
    right: 10px;

    ${theme.media.pc} {
      bottom: 20px;
      right: 20px;
    }
  `,

  moreOptionMenu: css`
    margin: 5px;

    ${theme.media.pc} {
      width: 30px;
      height: 30px;

      svg {
        width: 30px;
        height: 30px;
      }
    }
  `,

  optionsContainer: css`
    display: none;
    flex-direction: column;
    position: absolute;
    bottom: 100%;
    right: 0;
    z-index: 10;
  `,

  showOptions: css`
    button {
      opacity: 0;
      transform: translateY(100%);
      animation: ${slideUp} 0.3s ease-out forwards;
    }
    button:nth-of-type(4) {
      animation-delay: 0.1s;
    }
    button:nth-of-type(3) {
      animation-delay: 0.2s;
    }
    button:nth-of-type(2) {
      animation-delay: 0.3s;
    }
    button:nth-of-type(1) {
      animation-delay: 0.4s;
    }
  `,

  hideOptions: css`
    button {
      opacity: 1;
      transform: translateY(0);
      animation: ${slideDown} 0.3s ease-out forwards;
      animation-fill-mode: forwards;
    }
    button:nth-of-type(4) {
      animation-delay: 0.4s;
    }
    button:nth-of-type(3) {
      animation-delay: 0.3s;
    }
    button:nth-of-type(2) {
      animation-delay: 0.2s;
    }
    button:nth-of-type(1) {
      animation-delay: 0.1s;
    }
  `,
};
