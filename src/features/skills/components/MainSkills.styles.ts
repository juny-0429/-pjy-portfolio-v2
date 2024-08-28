import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const mainSkillsCss = {
  wrapper: css`
    padding: 170px 0 100px;
    ${commonCss.sectionMinHeight}

    ${theme.media.pc} {
      padding: 150px 0 0;
    }
  `,

  skillCategoryList: css`
    display: flex;
    flex-direction: column;
    gap: 50px;

    ${theme.media.pc} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 50px 100px;
    }
  `,

  skillCategoryWrapper: css`
    position: relative;
    padding: 16px 10px;

    border-radius: 10px;
    border: 1px solid ${theme.colors.mainDeepBlue};

    ${theme.media.pc} {
      padding: 30px;

      border-radius: 5px;
      border-width: 2px;
    }
  `,

  skillCategoryTitle: css`
    position: absolute;
    top: -9px;
    padding: 0 15px;

    background: white;

    font-size: 18px;
    font-weight: 800;

    ${theme.media.pc} {
      padding: 0 30px;

      font-size: 24px;
    }
  `,

  skillList: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  `,

  skillWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  `,

  skillLabel: css`
    color: ${theme.colors.mainLightBlack};
    font-size: 15px;
    font-weight: 800;

    ${theme.media.pc} {
      font-size: 20px;
    }
  `,

  skillDescription: css`
    font-size: 12px;
    font-weight: 500;

    ${theme.media.pc} {
      font-size: 16px;
    }
  `,
};
