import { logoSliderCss } from './LogoSlider.styles';
import Image from 'next/image';

export default function LogoSlider() {
  return (
    <div css={logoSliderCss.logoList}>
      <div css={logoSliderCss.slider}>
        <ul css={logoSliderCss.brands}>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
          <li css={logoSliderCss.brandLogo}>
            <Image src="/assets/images/logos/kakao-logo.png" width={30} height={30} alt="카카오 로고" />
          </li>
        </ul>
      </div>
    </div>
  );
}
