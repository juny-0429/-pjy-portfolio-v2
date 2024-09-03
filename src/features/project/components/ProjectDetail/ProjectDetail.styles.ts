import { scrollbarCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const projectDetailCss = {
  wrapper: css`
    width: 100%;
    height: 1193px;
  `,

  contentWrapper: css`
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 100px;
    padding: 50px 160px;
  `,

  content: css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 50px;

    &::-webkit-scrollbar {
      display: none;
    }
  `,

  projectImageWrapper: css`
    position: relative;
    width: 100%;
    height: 450px;

    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  `,

  infoWrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  `,

  infoTitle: css`
    color: ${theme.colors.mainGray};
    font-size: 30px;
    font-weight: 800;
  `,

  skillList: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
  `,

  memberWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 8px;
  `,

  member: css`
    font-size: 35px;
    font-weight: 500;
  `,

  description: css`
    font-size: 20px;
    font-weight: 400;
  `,

  divider: css`
    width: 300px;
    height: 2px;
    margin: 50px auto;

    background: ${theme.colors.mainLightGray};
  `,

  detail: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 150px;
    padding: 0 0 500px;
  `,

  section: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  `,

  titleWrapper: css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    color: ${theme.colors.mainDeepBlue};
  `,

  titleIcon: css`
    transform: rotate(180deg);
    stroke-width: 3px;
  `,

  detailSectionTitle: css`
    font-size: 25px;
    font-weight: 800;
  `,

  detailSectionContent: css`
    font-size: 20px;
    font-weight: 400;
  `,
};
