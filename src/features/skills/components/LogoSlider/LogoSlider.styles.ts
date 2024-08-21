import { css, keyframes } from '@emotion/react';

const slideLeftAnimation = keyframes`
from {
transform: translateX(0);
} to {
  transform: translateX(-100%);
}
`;

export const logoSliderCss = {
  logoList: css`
    padding: 0 0 100px;
  `,

  logos: css`
    position: relative;
    left: -34px;
    width: 100vw;
    overflow: hidden;
    white-space: nowrap;
    background: white;

    &::before,
    &::after {
      z-index: 100;
      position: absolute;
      content: '';
      width: 30px;
      height: 100%;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, #fff 0%, #fff0 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, #fff 0%, #fff0 100%);
    }
  `,

  logoSlide: css`
    display: inline-block;
    animation: ${slideLeftAnimation} 10s linear infinite;
  `,
};
