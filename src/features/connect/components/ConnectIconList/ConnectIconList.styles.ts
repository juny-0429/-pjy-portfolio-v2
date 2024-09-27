import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css, keyframes } from '@emotion/react';

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const connectIconListCss = {
  connectList: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 50px 0;

    a {
      display: inline-block;
      animation: ${bounceAnimation} 1s ease-in-out forwards;
    }

    a:nth-of-type(1) {
      animation-delay: 0s;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
    a:nth-of-type(2) {
      animation-delay: 1s;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
    a:nth-of-type(3) {
      animation-delay: 2s;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
    a:nth-of-type(4) {
      animation-delay: 3s;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    ${theme.media.pc} {
      justify-content: space-between;
      width: 40%;
      padding: 100px 0;
    }
  `,

  connectIcon: css`
    color: ${theme.colors.mainLightBlack};
    width: 40px;
    height: 40px;

    ${theme.media.pc} {
      width: 60px;
      height: 60px;
      ${commonCss.hoverBounce}
    }
  `,
};
