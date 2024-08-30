import theme from '@/theme';
import { css } from '@emotion/react';

export const pcCareerItemCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    width: 100%;
  `,

  header: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 3px 20px;
    box-sizing: border-box;

    color: ${theme.colors.mainLightGray};
  `,

  titleWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  `,

  title: css`
    font-size: 35px;
    font-weight: 800;
  `,

  date: css`
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 2px;
  `,

  logoWrapper: css`
    position: relative;
    width: 60px;
    height: 60px;
    overflow: hidden;

    border-radius: 5px;
    border: 1px solid ${theme.colors.mainGray};
  `,

  description: css`
    padding: 0 20px;
    font-size: 16px;
    font-weight: 500;
  `,
};
