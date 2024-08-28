import { connectList } from '../../data/ connect.data';
import { connectIconListCss } from './ConnectIconList.styles';

export default function ConnectIconList() {
  return (
    <div css={connectIconListCss.connectList}>
      {connectList.map((item) => (
        <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.label}>
          <item.icon css={connectIconListCss.connectIcon} />
        </a>
      ))}
    </div>
  );
}
