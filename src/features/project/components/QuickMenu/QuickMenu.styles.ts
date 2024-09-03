import { commonCss } from '@/styles/common.styles';
import theme from '@/theme';
import { css } from '@emotion/react';

export const quickMenuCss = {
  wrapper: css`
    position: sticky;
    top: 130px;
    z-index: 100;
    flex-shrink: 0;
    width: 160px;
    height: auto;
    /* 헤더 높이: 130px, 컴포넌트 높이 반: 108px, 상단 패딩 값: 50px */
    margin-top: calc(50dvh - 130px - 108px - 50px);

    background: ${theme.colors.white};
  `,

  menu: css`
    ${commonCss.pointer}

    padding: 8px 20px;
    border-left: 1px solid ${theme.colors.mainLightGray};

    color: ${theme.colors.mainLightGray};
    font-size: 17px;
    font-weight: 400;

    :hover {
      padding-left: 17px;
      border-left: 4px solid ${theme.colors.mainGreen};

      color: ${theme.colors.mainGreen};
      font-weight: 500;
    }
  `,

  activeMenu: css`
    padding-left: 17px;
    border-left: 4px solid ${theme.colors.mainLightGreen};

    color: ${theme.colors.mainLightGreen};
    font-weight: 500;
  `,
};
