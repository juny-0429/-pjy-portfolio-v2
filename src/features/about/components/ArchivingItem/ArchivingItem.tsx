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
        <archivingItem.icon width={24} height={24} color={theme.colors.mainLightBlack} />
        <p css={archivingItemCss.title}>{archivingItem.title}</p>
      </div>

      <p css={archivingItemCss.description}>{archivingItem.description}</p>

      <div css={archivingItemCss.linkList}>
        {archivingItem.linkList.map((item, index) => (
          <a href={item.url} target="_blank" rel="noopener noreferrer" key={index} css={archivingItemCss.linkItem}>
            <FeatherIcons.Link width={15} height={15} />
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}
