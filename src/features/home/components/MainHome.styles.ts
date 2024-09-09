import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css, keyframes } from '@emotion/react';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

export const mainHomeCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;

    align-items: center;
    gap: 33px;
    padding: 60px 0;

    ${commonCss.sectionMinHeight}

    ${theme.media.pc} {
      justify-content: center;
      gap: 50px;
      padding: 0;
    }
  `,

  homeHeader: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    ${theme.media.pc} {
      gap: 40px;
    }
  `,

  headerSubTitle: css`
    width: fit-content;
    border-bottom: 1px solid ${theme.colors.mainLightGreen};

    color: ${theme.colors.mainLightGreen};
    font-size: 30px;
    font-weight: 700;

    ${theme.media.pc} {
      color: ${theme.colors.mainLightBlack};
      font-size: 120px;
      font-weight: 800;
      letter-spacing: 10px;

      border-bottom: 0px;
    }
  `,

  headerTitle: css`
    font-size: 50px;
    font-weight: 800;

    ${theme.media.pc} {
      font-size: 120px;
      letter-spacing: 10px;
    }
  `,

  content: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `,

  introductionWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${theme.media.pc} {
      gap: 10px;
    }
  `,

  introduction: css`
    color: ${theme.colors.mainGray};
    text-align: center;
    font-size: 16px;
    font-weight: 300px;
    line-height: 130%;

    strong {
      font-weight: 700;
    }

    ${theme.media.pc} {
      font-size: 25px;
      font-weight: 300px;
    }
  `,

  profileImageWrapper: css`
    position: relative;
    width: 200px;
    height: 300px;
    overflow: hidden;

    border-radius: 10px;
  `,

  downArrow: css`
    position: absolute;
    bottom: 15px;
    width: 30px;
    height: 30px;
    color: ${theme.colors.mainGray};
    animation: ${bounce} 1.5s infinite;

    ${theme.media.pc} {
      bottom: 20px;
    }
  `,
};
