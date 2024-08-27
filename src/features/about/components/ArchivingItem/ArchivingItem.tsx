import theme from '@/theme';
import { ArchivingItemType } from '../../data/archiving.data';
import { archivingItemCss } from './ArchivingItem.styles';
import FeatherIcons from '@/theme/featherIcons';

interface Props {
  archivingItem: ArchivingItemType;
}

export default function ArchivingItem({ archivingItem }: Props) {
  return (
    <div css={archivingItemCss.wrapper}>
      <div css={archivingItemCss.titleWrapper}>
        <archivingItem.icon css={archivingItemCss.titleIcon} />
        <p css={archivingItemCss.title}>{archivingItem.title}</p>
      </div>

      <p css={archivingItemCss.description}>{archivingItem.description}</p>

      <div css={archivingItemCss.linkList}>
        {archivingItem.linkList.map((item, index) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} css={archivingItemCss.linkItem}>
            <FeatherIcons.Link css={archivingItemCss.linkIcon} />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
