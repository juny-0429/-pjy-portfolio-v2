import FeatherIcons from '@/theme/featherIcons';
import { moreOptionMenuCss } from '../MoreOptionMenu.styles';
import Drawer from '@/components/Drawer/Drawer';
import { useState } from 'react';
import Flag from 'react-world-flags';
import { multiLanguageMenuCss } from './MultiLanguageMenu.styles';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { localeToFlagCodeMap } from '@/data/localeToFlagCodeMap.data';

export default function MultiLanguageMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { locales } = useRouter();

  const { t } = useTranslation('multiLanguage');

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <button type="button" css={moreOptionMenuCss.moreOptionMenu} onClick={toggleDrawer}>
        <FeatherIcons.Globe />
      </button>

      <Drawer title={t('title')} direction="bottom" isOpen={isOpen} onToggle={toggleDrawer}>
        <nav>
          <ul css={multiLanguageMenuCss.multilingualList}>
            {locales &&
              locales.map((language) => (
                <li key={language}>
                  <Link href="/" locale={language} css={multiLanguageMenuCss.multilingualItem} onClick={toggleDrawer}>
                    <div css={multiLanguageMenuCss.flagWrapper}>
                      <Flag code={localeToFlagCodeMap[language]} css={multiLanguageMenuCss.flagIcon} />
                    </div>
                    <span css={multiLanguageMenuCss.label}>{language === 'ko' ? t('koreanLanguage') : t('englishLanguage')}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </Drawer>
    </>
  );
}
