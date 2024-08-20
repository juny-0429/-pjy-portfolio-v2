import theme from '@/theme';
import { css } from '@emotion/react';

export const mainAboutCss = {
  wrapper: css`
    padding-top: 141px;
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `,

  title: css`
    font-size: 50px;
    font-weight: 700;
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
  `,

  introduction: css`
    font-size: 13px;
    font-weight: 500;
    line-height: 120%;
  `,

  archivingWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-top: 71px;
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
  `,

  linkListRightSection: css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    gap: 10px;
    height: 100%;
  `,
};
