import { mainHomeCss } from './MainHome.styles';
import Image from 'next/image';
import PjyProfileImage from '@/assets/images/park-junyoung-profile.jpg';

export default function MainHome() {
  return (
    <div css={mainHomeCss.wrapper}>
      <div css={mainHomeCss.homeHeader}>
        <p css={mainHomeCss.headerSubTitle}>Front-End</p>
        <p css={mainHomeCss.headerTitle}>PORTFOLIO</p>
      </div>

      <div css={mainHomeCss.introductionWrapper}>
        <p css={mainHomeCss.introduction}>
          <strong>트렌드</strong>를 끊임없이 학습하며,
          <br />
          <strong>효율적</strong>이고 <strong>유지보수 가능한 코드</strong>를
          <br />
          작성하기 위해 노력하고 있습니다.
        </p>

        <Image src={PjyProfileImage} css={mainHomeCss.profileImage} width={200} height={300} alt="pjy profile image" />
      </div>
    </div>
  );
}
