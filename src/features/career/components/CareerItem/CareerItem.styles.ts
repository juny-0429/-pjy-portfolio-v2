import theme from '@/theme';
import { css } from '@emotion/react';

export const careerItemCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
  `,

  titleWrapper: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 10px;
    width: 100%;
    box-sizing: border-box;

    border-left: 3px solid ${theme.colors.mainDeepBlue};
  `,

  title: css`
    color: ${theme.colors.mainDeepBlue};
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
  `,

  logoWrapper: css`
    overflow: hidden;
    width: 30px;
    height: 30px;
    min-width: 30px;
    margin-left: 30px;

    border: 1px solid ${theme.colors.mainGray};
    border-radius: 5px;
  `,

  date: css`
    color: ${theme.colors.mainGray};
    font-size: 14px;
    font-weight: 500;
  `,

  description: css`
    font-size: 16px;
    font-weight: 400;
  `,
};
