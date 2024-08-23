import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const mainProjectCss = {
  wrapper: css`
    padding: 100px 0;

    ${commonCss.sectionMinHeight}
  `,

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
  `,

  mainImageWrapper: css`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    overflow: hidden;

    border-radius: 10px;
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
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  `,

  title: css`
    color: ${theme.colors.mainBeige};
    font-size: 14px;
    font-weight: 500;
  `,

  skillList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    flex-wrap: wrap;
  `,
};
