import FeatherIcons from '@/theme/featherIcons';
import ConnectIconList from './ConnectIconList/ConnectIconList';
import { INFORMATION } from '@/data/information.data';
import { mainConnectCss } from './MainConnect.styles';
import { commonCss } from '@/styles/common.styles';

export default function MainConnect() {
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
        <p css={mainConnectCss.description}>프론트엔드 개발자로서 최신 트렌드를 반영하며, 사용자 중심의 웹을 구현하고자 합니다.</p>
      </div>

      <ul css={mainConnectCss.connectWrapper}>
        {/* copy phone */}
        <li css={mainConnectCss.connectItem}>
          <div css={mainConnectCss.connectItemLabel}>
            <FeatherIcons.Phone />
            <p>{INFORMATION.PHONE_NUMBER}</p>
          </div>
          <FeatherIcons.Copy css={mainConnectCss.copyIcon} onClick={() => handleCopyClick(INFORMATION.PHONE_NUMBER)} />
        </li>

        {/* copy mail */}
        <li css={mainConnectCss.connectItem}>
          <div css={mainConnectCss.connectItemLabel}>
            <FeatherIcons.Mail />
            <p>{INFORMATION.EMAIL}</p>
          </div>
          <FeatherIcons.Copy css={mainConnectCss.copyIcon} onClick={() => handleCopyClick(INFORMATION.EMAIL)} />
        </li>

        <ConnectIconList />
      </ul>
    </section>
  );
}
