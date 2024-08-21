import { css, keyframes } from '@emotion/react';

const totalBrand = 10;
const logoWidth = 30;
const totalLogoWidth = totalBrand * logoWidth;

const slideLeftAnimation = keyframes`
  100% {
    transform: translateX(-${totalLogoWidth}px);
  }
`;

export const logoSliderCss = {
  logoList: css`
    padding: 100px 0 50px;
  `,

  slider: css`
    position: relative;
    /* left: -32px; */
    display: flex;
    align-items: center;
    overflow: hidden;
    width: 100dvw;

    &::before,
    &::after {
      position: absolute;
      content: '';
      width: ${logoWidth}px;
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

  brands: css`
    list-style: none;
    display: flex;
    width: ${totalLogoWidth}px;
    height: ${logoWidth}px;

    animation: ${slideLeftAnimation} 3s linear infinite;
  `,

  brandLogo: css`
    width: ${logoWidth}px;
    font-size: 2rem;
    text-align: center;
    margin-left: 70px;
  `,
};
