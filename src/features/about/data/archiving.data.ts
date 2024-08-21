import GitbookIcon from '@/assets/images/logos/gitbook-logo.svg';
import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
import { INFORMATION } from '@/data/information.data';
import { FC, SVGProps } from 'react';

export interface ArchivingItemType {
  title: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  description: string;
  linkList: Array<{ label: string; url: string }>;
}

export const archivingList: { [key: string]: ArchivingItemType } = {
  gitbook: {
    title: 'gitbook',
    icon: GitbookIcon,
    description: '최근 관심사와 이슈를 정리하는 깃북 입니다. 관심사 별 페이지를 정리하여 사용하고 있습니다.',
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
    description: '개인 github입니다.',
    linkList: [{ label: '깃허브 바로가기', url: INFORMATION.LINKS.GITHUB_LINK }],
  },
  notion: {
    title: 'Notion',
    icon: NotionIcon,
    description: '개인 notion입니다.',
    linkList: [{ label: '노션 바로가기', url: INFORMATION.LINKS.NOTION_LINK }],
  },
};
