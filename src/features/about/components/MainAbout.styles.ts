import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import sizes from '@/theme/sizes';
import { css } from '@emotion/react';

export const mainAboutCss = {
  wrapper: css`
    padding-top: 141px;

    ${commonCss.sectionMinHeight}

    ${theme.media.pc} {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 100px;
    }
  `,

  profileImageWrapper: css`
    position: relative;
    width: 300px;
    min-width: 300px;
    height: 455px;
    overflow: hidden;

    border-radius: 10px;
  `,

  informationWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  title: css`
    font-size: 50px;
    font-weight: 700;

    ${theme.media.pc} {
      font-size: 60px;
    }
  `,

  description: css`
    color: ${theme.colors.mainGray};
    font-size: 25px;
    font-weight: 700;
  `,

  mbtiList: css`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 3px;
    padding: 19px 0 30px;

    ${theme.media.pc} {
      justify-content: flex-start;
      gap: 8px;
      padding: 15px 0 20px;

      & > div {
        ${sizes.badgeSize[30]};
      }
    }
  `,

  introduction: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 120%;

    ${theme.media.pc} {
      font-size: 20px;
      font-weight: 400;
    }
  `,

  archivingWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 70px;
  `,

  archivingTitle: css`
    color: ${theme.colors.mainOrange};
    font-size: 20px;
    font-weight: 600;
  `,

  linkListWrapper: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 10px;
    height: 260px;

    ${theme.media.pc} {
      gap: 20px;
    }
  `,

  linkListRightSection: css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 10px;
    height: 100%;

    ${theme.media.pc} {
      gap: 20px;
    }
  `,
};
