import theme from '@/theme';
import sizes from '@/theme/sizes';
import { css } from '@emotion/react';

export const pcProjectCss = {
  swiperContainer: css`
    position: relative;
    left: 50%;
    overflow: hidden;
    transform: translateX(-50%);
    width: 200%;
    height: 100%;
    padding: 20px 0px 40px;
    box-sizing: border-box;

    .swiper-slide {
      transition:
        transform 0.3s ease,
        opacity 0.3s ease;
      opacity: 0.5;
    }

    .swiper-slide-active {
      opacity: 1;
    }

    /* 페이지네이션 */
    .swiper-pagination {
      bottom: 0px;
      margin: 0;
    }

    /* 페이지네이션 아이템 */
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;

      background: ${theme.colors.mainGray};
    }

    /* 페이지네이션 아이템 상태 */
    .swiper-pagination-bullet-active {
      width: 30px;
      border-radius: 5px;

      background: ${theme.colors.mainLightGreen};
    }
  `,

  projectWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 100%;
    min-width: 550px;
    height: 60dvh;
    min-height: 480px;
    margin: auto;
    padding: 15px;
    box-sizing: border-box;

    border-radius: 10px;
    background: ${theme.colors.mainLightBlack};

    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    }
  `,

  darkModeProjectBackground: css`
    background: ${theme.colors.mainBeige};
    color: ${theme.colors.mainLightBlack};
  `,

  mainImageWrapper: css`
    position: relative;
    flex: 1;
    width: 100%;
    height: 100%;
    overflow: hidden;

    border-radius: 10px;
  `,

  projectTab: css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 12px 15px;

    border-radius: 0 10px 0 10px;
    background: ${theme.colors.mainLightBlack};

    color: ${theme.colors.mainBeige};
    font-size: 24px;
    letter-spacing: 5px;
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  `,

  projectLogoWrapper: css`
    position: relative;
    width: 30px;
    height: 30px;
  `,

  projectTitle: css`
    color: ${theme.colors.mainBeige};
    font-size: 24px;
    font-weight: 500;
  `,

  skillList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;

    & > div {
      ${sizes.badgeSize[30]};
    }
  `,
};
