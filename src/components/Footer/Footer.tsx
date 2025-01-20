import { footerCss } from './Footer.styles';

export default function Footer() {
  return (
    <footer css={footerCss.wrapper}>
      <div css={footerCss.divider} />

      <div css={footerCss.copyLightWrapper}>
        <p css={footerCss.copyLight}>{`© ${new Date().getFullYear()} Park JunYoung.\nAll Rights Reserved.`}</p>
        <p css={footerCss.update}>last update. 2025/01/20</p>
      </div>
    </footer>
  );
}
