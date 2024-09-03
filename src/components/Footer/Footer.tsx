import { footerCss } from './Footer.styles';

export default function Footer() {
  return (
    <footer css={footerCss.wrapper}>
      <div css={footerCss.divider} />

      <div css={footerCss.copyLightWrapper}>
        <p css={footerCss.copyLight}>{`© 2024 Park JunYoung.\nAll Rights Reserved.`}</p>
        <p css={footerCss.update}>update. 2024/08/09</p>
      </div>
    </footer>
  );
}
