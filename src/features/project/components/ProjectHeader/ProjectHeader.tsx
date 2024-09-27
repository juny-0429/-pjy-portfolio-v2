import Link from 'next/link';
import { projectHeaderCss } from './ProjectHeader.styles';
import theme from '@/theme';
import FeatherIcons from '@/theme/featherIcons';
import { commonCss, darkModeCss } from '@/styles/common.styles';
import { useDarkMode } from '@/hooks/useDarkMode';

interface Props {
  date: string;
  title: string;
  linkList?: { LinkIcon: React.FC<React.SVGProps<SVGSVGElement>>; url: string }[];
}

export default function ProjectHeader({ date, title, linkList }: Props) {
  const { themeMode } = useDarkMode();

  return (
    <header css={[projectHeaderCss.header, themeMode === 'dark' && darkModeCss.darkModeStyle]}>
      <Link href="/" css={projectHeaderCss.backIconWrapper}>
        <FeatherIcons.ChevronLeft />
      </Link>

      <div css={projectHeaderCss.titleWrapper}>
        <time css={[projectHeaderCss.date, commonCss.onlyPcVisibleBlock]}>{date}</time>
        <h1 css={projectHeaderCss.title}>{title}</h1>
      </div>

      {linkList && (
        <nav css={commonCss.onlyPcVisibleBlock}>
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
      )}
    </header>
  );
}
