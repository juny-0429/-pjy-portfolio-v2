import theme from '@/theme';
import { connectList } from '../../data/ connect.data';
import { connectIconListCss } from './ConnectIconList.styles';

export default function ConnectIconList() {
  return (
    <div css={connectIconListCss.connectList}>
      {connectList.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.label}>
          <item.icon width={40} height={40} color={theme.colors.mainLightBlack} />
        </a>
      ))}
    </div>
  );
}
