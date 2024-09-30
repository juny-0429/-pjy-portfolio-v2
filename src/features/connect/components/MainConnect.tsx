import FeatherIcons from '@/theme/featherIcons';
import ConnectIconList from './ConnectIconList/ConnectIconList';
import { INFORMATION } from '@/data/information.data';
import { mainConnectCss } from './MainConnect.styles';
import { commonCss } from '@/styles/common.styles';
import { useTranslation } from 'next-i18next';

export default function MainConnect() {
  const { t } = useTranslation('connect');

  const handleCopyClick = (copyText: string) => {
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert('복사 되었습니다.');
      })
      .catch(() => {
        console.error('복사에 실패하였습니다.');
      });
  };

  return (
    <section css={mainConnectCss.wrapper}>
      {/* title */}
      <div css={mainConnectCss.titleWrapper}>
        <h2 css={[mainConnectCss.title, commonCss.onlyPcVisibleBlock]}>CONNECT</h2>
        <p css={mainConnectCss.description}>{t('description')}</p>
      </div>

      <ul css={mainConnectCss.connectWrapper}>
        {/* copy phone */}
        <li css={mainConnectCss.connectItem}>
          <div css={mainConnectCss.connectItemLabel}>
            <FeatherIcons.Phone />
            <span>{INFORMATION.PHONE_NUMBER}</span>
          </div>
          <FeatherIcons.Copy css={mainConnectCss.copyIcon} onClick={() => handleCopyClick(INFORMATION.PHONE_NUMBER)} />
        </li>

        {/* copy mail */}
        <li css={mainConnectCss.connectItem}>
          <div css={mainConnectCss.connectItemLabel}>
            <FeatherIcons.Mail />
            <span>{INFORMATION.EMAIL}</span>
          </div>
          <FeatherIcons.Copy css={mainConnectCss.copyIcon} onClick={() => handleCopyClick(INFORMATION.EMAIL)} />
        </li>

        <ConnectIconList />
      </ul>
    </section>
  );
}
