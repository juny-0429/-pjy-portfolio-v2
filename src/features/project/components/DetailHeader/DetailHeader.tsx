import Link from 'next/link';
import { detailHeaderCss } from './DetailHeader.styles';
import theme from '@/theme';
import FeatherIcons from '@/theme/featherIcons';

interface Props {
  date: string;
  title: string;
  linkList: { LinkIcon: React.FC<React.SVGProps<SVGSVGElement>>; url: string }[];
}

export default function DetailHeader({ date, title, linkList }: Props) {
  return (
    <header css={detailHeaderCss.header}>
      <Link href="/" css={detailHeaderCss.backIconWrapper}>
        <FeatherIcons.ChevronLeft width={50} height={50} color={theme.colors.mainLightBlack} />
      </Link>

      <div css={detailHeaderCss.titleWrapper}>
        <p css={detailHeaderCss.date}>{date}</p>
        <p css={detailHeaderCss.title}>{title}</p>
      </div>

      <div css={detailHeaderCss.projectLinkList}>
        {linkList.map((link, index) => (
          <Link key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            <link.LinkIcon width={50} height={50} color={theme.colors.mainLightBlack} />
          </Link>
        ))}
      </div>
    </header>
  );
}
