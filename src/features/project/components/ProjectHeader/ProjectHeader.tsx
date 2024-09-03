import Link from 'next/link';
import { projectHeaderCss } from './ProjectHeader.styles';
import theme from '@/theme';
import FeatherIcons from '@/theme/featherIcons';

interface Props {
  date: string;
  title: string;
  linkList: { LinkIcon: React.FC<React.SVGProps<SVGSVGElement>>; url: string }[];
}

export default function ProjectHeader({ date, title, linkList }: Props) {
  return (
    <header css={projectHeaderCss.header}>
      <Link href="/" css={projectHeaderCss.backIconWrapper}>
        <FeatherIcons.ChevronLeft width={50} height={50} color={theme.colors.mainLightBlack} />
      </Link>

      <div css={projectHeaderCss.titleWrapper}>
        <p css={projectHeaderCss.date}>{date}</p>
        <p css={projectHeaderCss.title}>{title}</p>
      </div>

      <nav>
        <ul css={projectHeaderCss.projectLinkList}>
          {linkList.map((link, index) => (
            <li key={index}>
              <Link href={link.url} target="_blank" rel="noopener noreferrer">
                <link.LinkIcon width={50} height={50} color={theme.colors.mainLightBlack} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
