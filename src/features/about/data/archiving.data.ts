import GitbookIcon from '@/assets/images/logos/gitbook-logo.svg';
import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
import { INFORMATION } from '@/data/information.data';
import { FC, SVGProps } from 'react';

export interface ArchivingItemType {
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  linkList: Array<{ label: string; url: string }>;
}

export const archivingList: { [key: string]: ArchivingItemType } = {
  gitbook: {
    title: 'gitbook',
    icon: GitbookIcon,
    linkList: [
      { label: 'Common Develop', url: INFORMATION.LINKS.GITBOOK.COMMON_DEVELOP_LINK },
      { label: 'Publishing', url: INFORMATION.LINKS.GITBOOK.PUBLISHING_LINK },
      { label: 'Front-End', url: INFORMATION.LINKS.GITBOOK.FRONT_END_LINK },
      { label: 'Back-End', url: INFORMATION.LINKS.GITBOOK.BACK_END_LINK },
      { label: 'Tools', url: INFORMATION.LINKS.GITBOOK.TOOLS_LINK },
    ],
  },
  github: {
    title: 'Github',
    icon: GithubIcon,
    linkList: [{ label: 'Go to Github', url: INFORMATION.LINKS.GITHUB_LINK }],
  },
  notion: {
    title: 'Notion',
    icon: NotionIcon,
    linkList: [{ label: 'Go to Notion', url: INFORMATION.LINKS.NOTION_LINK }],
  },
};
