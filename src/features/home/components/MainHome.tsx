import { mainHomeCss } from './MainHome.styles';

export default function MainHome() {
  return (
    <div>
      <div css={mainHomeCss.homeHeader}>
        <p css={mainHomeCss.headerSubTitle}>Front-End</p>
        <p css={mainHomeCss.headerTitle}>PORTFOLIO</p>
      </div>

      <p>
        <strong>트렌드</strong>를 끊임없이 학습하며,
        <br />
        <strong>효율적</strong>이고 <strong>유지보수 가능한 코드</strong>를
        <br />
        작성하기 위해 노력하고 있습니다.
      </p>
    </div>
  );
}
