import { logos } from '../../data/logoSlider.data';
import { logoSliderCss } from './LogoSlider.styles';
import Image from 'next/image';

export default function LogoSlider() {
  return (
    <div css={logoSliderCss.logoList}>
      <div css={logoSliderCss.logos}>
        <ul css={logoSliderCss.logoSlide}>
          {logos.map((logo) => (
            <li key={logo.id} css={logoSliderCss.logo}>
              <Image src={logo.src} alt={logo.alt} fill />
            </li>
          ))}
        </ul>
        <ul css={logoSliderCss.logoSlide}>
          {logos.map((logo) => (
            <li key={logo.id} css={logoSliderCss.logo}>
              <Image src={logo.src} alt={logo.alt} fill />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
