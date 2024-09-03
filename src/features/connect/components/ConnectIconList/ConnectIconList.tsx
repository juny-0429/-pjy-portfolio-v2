import Link from 'next/link';
import { connectList } from '../../data/ connect.data';
import { connectIconListCss } from './ConnectIconList.styles';

export default function ConnectIconList() {
  return (
    <ul css={connectIconListCss.connectList}>
      {connectList.map((item) => (
        <Link href={item.url} target="_blank" rel="noopener noreferrer" key={item.label}>
          <li>
            <item.icon css={connectIconListCss.connectIcon} />
          </li>
        </Link>
      ))}
    </ul>
  );
}
