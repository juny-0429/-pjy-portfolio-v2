import { mainHomeCss } from './MainHome.styles';
import Image from 'next/image';
import PjyProfileImage from '@/assets/images/park-junyoung-profile.jpg';
import FeatherIcons from '@/theme/featherIcons';
import { commonCss } from '@/styles/common.styles';
import { useTranslation } from 'next-i18next';

export default function MainHome() {
  const { t } = useTranslation('common');

  return (
    <section css={mainHomeCss.wrapper}>
      <div css={mainHomeCss.homeHeader}>
        <p css={[mainHomeCss.headerSubTitle, commonCss.onlyMobileVisible]}>Front-End</p>
        <p css={[mainHomeCss.pcHeaderSubTitle, commonCss.onlyPcVisibleBlock]}>PJY</p>
        <p css={mainHomeCss.headerTitle}>PORTFOLIO</p>
      </div>

      <div css={mainHomeCss.content}>
        <div css={mainHomeCss.introductionWrapper}>
          <p css={mainHomeCss.introduction}>
            <strong>{t('1')}</strong>
            {t('2')}
          </p>

          <p css={mainHomeCss.introduction}>
            <strong>{t('3')}</strong>
            {t('4')}
            <strong>{t('5')}</strong>
            {t('6')}
          </p>
        </div>

        <div css={[mainHomeCss.profileImageWrapper, commonCss.onlyMobileVisible]}>
          <Image src={PjyProfileImage.src} fill sizes="100%" alt="pjy profile image" />
        </div>
      </div>

      <FeatherIcons.ChevronDown css={mainHomeCss.downArrow} />
    </section>
  );
}
