import { mainHomeCss } from './MainHome.styles';
import Image from 'next/image';
import PjyProfileImage from '@/assets/images/park-junyoung-profile.jpg';
import FeatherIcons from '@/theme/featherIcons';
import { commonCss } from '@/styles/common.styles';

export default function MainHome() {
  return (
    <div css={mainHomeCss.wrapper}>
      <div css={mainHomeCss.homeHeader}>
        <p css={[mainHomeCss.headerSubTitle, commonCss.onlyMobileVisible]}>Front-End</p>
        <p css={[mainHomeCss.headerSubTitle, commonCss.onlyPcVisibleBlock]}>PJY</p>
        <p css={mainHomeCss.headerTitle}>PORTFOLIO</p>
      </div>

      <div css={mainHomeCss.content}>
        <div css={mainHomeCss.introductionWrapper}>
          <p css={mainHomeCss.introduction}>
            <strong>트렌드</strong>를 끊임없이 학습하며,
          </p>

          <p css={mainHomeCss.introduction}>
            <strong>효율적</strong>이고 <strong>유지보수 가능한 코드</strong>를 작성하기 위해 노력하고 있습니다.
          </p>
        </div>

        <div css={[mainHomeCss.profileImageWrapper, commonCss.onlyMobileVisible]}>
          <Image src={PjyProfileImage.src} priority fill alt="pjy profile image" />
        </div>
      </div>

      <FeatherIcons.ChevronDown css={mainHomeCss.downArrow} />
    </div>
  );
}
