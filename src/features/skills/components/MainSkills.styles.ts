import theme from '@/theme';
import { css } from '@emotion/react';

export const mainSkillsCss = {
  skillCategoryList: css`
    display: flex;
    flex-direction: column;
    gap: 50px;
  `,

  skillCategoryWrapper: css`
    position: relative;
    padding: 16px 10px;

    border-radius: 5px;
    border: 1px solid ${theme.colors.mainDeepBlue};
  `,

  skillCategoryTitle: css`
    position: absolute;
    top: -9px;
    padding: 0 15px;

    background: ${theme.colors.mainBeige};

    font-size: 18px;
    font-weight: 800;
  `,

  skillWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
  `,

  skillLabel: css`
    font-size: 15px;
    font-weight: 800;
  `,

  skillDescription: css`
    font-size: 12px;
    font-weight: 500;
  `,
};
