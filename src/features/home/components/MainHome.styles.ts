import theme from '@/theme';
import { css } from '@emotion/react';

export const mainHomeCss = {
  wrapper: css`
    display: flex;
    flex-direction: column;
    gap: 33px;
    padding: 60px 0;
  `,

  homeHeader: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  `,

  headerSubTitle: css`
    width: fit-content;
    border-bottom: 1px solid ${theme.colors.mainLightGreen};

    color: ${theme.colors.mainLightGreen};
    font-size: 30px;
    font-weight: 700;
  `,

  headerTitle: css`
    font-size: 50px;
    font-weight: 800;
  `,

  introductionWrapper: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
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
  `,

  profileImage: css`
    border-radius: 10px;
  `,
};
