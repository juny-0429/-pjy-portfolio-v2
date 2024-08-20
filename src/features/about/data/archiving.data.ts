import GitbookIcon from '@/assets/images/logos/gitbook-logo.svg';
import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
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
      { label: 'Common Develop', url: 'https://juny-book.gitbook.io/common/' },
      { label: 'Publishing', url: 'https://juny-book.gitbook.io/publishing/' },
      { label: 'Front-End', url: 'https://juny-book.gitbook.io/front-end-1/' },
      { label: 'Back-End', url: '' },
      { label: 'Tools', url: 'https://juny-book.gitbook.io/tool/' },
    ],
  },
  github: {
    title: 'Github',
    icon: GithubIcon,
    description: '개인 github입니다.',
    linkList: [{ label: '깃허브 바로가기', url: 'https://github.com/juny-0429' }],
  },
  notion: {
    title: 'Notion',
    icon: NotionIcon,
    description: '개인 notion입니다.',
    linkList: [{ label: '노션 바로가기', url: 'https://juny0429.notion.site/Juny-DevNote-cfb53ea770cc4828a2aad5e97b5fd968?pvs=4' }],
  },
};
