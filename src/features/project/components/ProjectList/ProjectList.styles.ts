import theme from '@/theme';
import sizes from '@/theme/sizes';
import { css } from '@emotion/react';

export const projectListCss = {
  projectList: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
  `,

  projectWrapper: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;

    border-radius: 10px;
    background: ${theme.colors.mainLightBlack};

    ${theme.media.pc} {
      grid-auto-flow: 15px;
      width: 650px;
      height: 508px;

      &:hover {
        transition: transform 0.5s;
        transform: scale(1.1);
      }
    }
  `,

  mainImageWrapper: css`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;

    border-radius: 10px;

    ${theme.media.pc} {
      height: 100%;
      padding-bottom: 0;
    }
  `,

  projectTab: css`
    position: absolute;
    top: 0;
    right: 0;
    padding: 7px 10px;

    border-radius: 0 10px 0 10px;
    background: ${theme.colors.mainLightBlack};

    color: ${theme.colors.mainBeige};
    font-size: 14px;
    font-weight: 500;

    ${theme.media.pc} {
      font-size: 24px;
      letter-spacing: 5px;
    }
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    ${theme.media.pc} {
      gap: 20px;
    }
  `,

  projectLogoWrapper: css`
    position: relative;
    width: 30px;
    height: 30px;
  `,

  projectTitle: css`
    color: ${theme.colors.mainBeige};
    font-size: 14px;
    font-weight: 500;

    ${theme.media.pc} {
      font-size: 24px;
    }
  `,

  skillList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;

    ${theme.media.pc} {
      gap: 10px;

      & > div {
        ${sizes.badgeSize[30]};
      }
    }
  `,
};
