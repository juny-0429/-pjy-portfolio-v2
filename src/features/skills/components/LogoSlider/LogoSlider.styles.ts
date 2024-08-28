import theme from '@/theme';
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
    left: -44px;
    width: 100vw;
    overflow: hidden;
    white-space: nowrap;
    background: white;

    &::before,
    &::after {
      z-index: 10;
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

    ${theme.media.pc} {
      left: -100px;

      &::before,
      &::after {
        width: 50px;
      }
    }
  `,

  logoSlide: css`
    display: inline-block;
    animation: ${slideLeftAnimation} 10s linear infinite;
  `,

  logo: css`
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 50px;

    ${theme.media.pc} {
      width: 50px;
      height: 50px;
      margin-left: 100px;
    }
  `,
};
