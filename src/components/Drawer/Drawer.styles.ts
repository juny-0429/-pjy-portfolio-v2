/** @jsxImportSource @emotion/react */
import theme from '@/theme';
import { css } from '@emotion/react';

export const drawerDirectionCss = {
  left: css`
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    transform: translateX(-100%);
  `,

  right: css`
    top: 0;
    right: 0;
    width: 70%;
    height: 100%;
    transform: translateX(100%);
  `,

  top: css`
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    transform: translateY(-100%);
  `,

  bottom: css`
    bottom: 0;
    left: 0;
    width: 100%;
    height: fit-content;
    transform: translateY(100%);

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  `,
};

export const drawerCss = {
  drawer: css`
    position: fixed;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding: 16px;
    box-sizing: border-box;

    background-color: white;

    transition: transform 0.3s ease-in-out;
  `,

  drawerOverlay: css`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.5);
  `,

  open: css`
    transform: translateX(0%);
  `,

  titleWrapper: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 24px;

    svg {
      stroke-width: 1px;
    }
  `,

  title: css`
    color: ${theme.colors.mainLightBlack};
    font-size: 20px;
    font-weight: 300;
  `,

  closeButton: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 24px;
    height: 24px;

    svg {
      color: ${theme.colors.mainLightBlack} !important;
    }
  `,

  drawerContent: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
  `,
};
