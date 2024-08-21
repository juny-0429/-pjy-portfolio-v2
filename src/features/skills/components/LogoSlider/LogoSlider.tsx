import { logos } from '../../data/logoSlider.data';
import { logoSliderCss } from './LogoSlider.styles';
import Image from 'next/image';

export default function LogoSlider() {
  return (
    <div css={logoSliderCss.logoList}>
      <div css={logoSliderCss.logos}>
        <div css={logoSliderCss.logoSlide}>
          {logos.map((logo) => (
            <Image key={logo.id} src={logo.src} style={{ marginLeft: '50px' }} width={30} height={30} alt={logo.alt} />
          ))}
        </div>
        <div css={logoSliderCss.logoSlide}>
          {logos.map((logo) => (
            <Image key={logo.id} src={logo.src} style={{ marginLeft: '50px' }} width={30} height={30} alt={logo.alt} />
          ))}
        </div>
      </div>
    </div>
  );
}
