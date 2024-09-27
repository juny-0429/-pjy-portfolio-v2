import { INFORMATION } from '@/data/information.data';
import KakaoIcon from '@/assets/images/logos/kakao-logo.svg';
import GithubIcon from '@/assets/images/logos/github-logo.svg';
import GitbookIcon from '@/assets/images/logos/gitbook-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';

export const connectList = [
  { label: 'kakao', icon: KakaoIcon, url: INFORMATION.LINKS.KAKAO_TALK_LINK },
  { label: 'github', icon: GithubIcon, url: INFORMATION.LINKS.GITHUB_LINK },
  { label: 'gitbook', icon: GitbookIcon, url: INFORMATION.LINKS.GITBOOK.COMMON_DEVELOP_LINK },
  { label: 'notion', icon: NotionIcon, url: INFORMATION.LINKS.NOTION_LINK },
];
