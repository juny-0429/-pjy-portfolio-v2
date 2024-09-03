import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
import FeatherIcons from '@/theme/featherIcons';

import CocktableMain from '@/assets/images/project/cocktable.jpg';

import PjyPortfolioMain from '@/assets/images/project/pjy-portfolio-v1.png';
import PjyPortfolioLogo from '@/assets/images/project/pjy-portfolio-v1-logo.jpg';

import TheTechTitanMain from '@/assets/images/project/the-titan.jpg';
import TheTechTitanLogo from '@/assets/images/project/the-titan-logo.png';

import SmileInvestMain from '@/assets/images/project/smile-invest.png';
import SmileInvestLogo from '@/assets/images/project/smile-invest-logo.png';

export const projectListData = [
  {
    id: 4,
    title: '[임시 중단] Cocktable(칵테일 테이블오더 앱)',
    mainImage: CocktableMain,
    logo: '',
    team: '개인',
    date: '23.8.30 ~',
    skills: ['TYPESCRIPT', 'REACT', 'SPRING', 'JPA', 'RESTful', 'ORACLE', 'GITHUB'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/Green-0lives' },
      { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/Cocktable-App-b6ae5d9ad1454ae585b6bfae56f6fdcb?pvs=4' },
    ],
    Member: 7,
    description:
      '기존의 칵테일 주문 방식은 메뉴판을 봐도 어떤 맛일지 상상하기 어려웠고, 맛을 잘 모르는 칵테일에 경우 실망하기도 했습니다. 커스텀 기능을 통해 나만의 칵테일을 주문하고, 손님들은 예상치 못한 맛이 아닌, 자신의 입맛에 딱 맞는 칵테일을 즐길 수 있게 될 것입니다.',
    detail: {
      프로젝트목적: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      고충: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
  {
    id: 3,
    title: 'PJY Portfolio v1',
    mainImage: PjyPortfolioMain,
    logo: PjyPortfolioLogo,
    team: '개인',
    date: '23.3.24 ~ 23.4.10',
    skills: ['REACT', 'SCSS', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/pjy-portfolio-v1' },
      { LinkIcon: FeatherIcons.Monitor, url: 'https://github.com/juny0429/pjy-portfolio' },
    ],
    Member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목적: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      고충: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
  {
    id: 2,
    title: 'The Tech Titan (인사관리 그룹웨어 애플리케이션)',
    mainImage: TheTechTitanMain,
    logo: TheTechTitanLogo,
    team: '하이미디어 학원',
    date: '23.1.17 ~ 23.3.22',
    skills: ['REACT', 'HTML', 'CSS', 'JAVA', 'SPRING', 'RESTful', 'ORACLE', 'MUI', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/2TeamHR' },
      { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/2-HOT6-87a66064580d498285c07ac16cf378e7?pvs=4' },
    ],
    Member: 1,
    description: '인사관리 그룹웨어를 주제로한 프로젝트입니다. 스프링부트 기반의 RestAPI 서버를 연동한 React.js SPA 애플리케이션이 특징입니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목적: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      고충: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
  {
    id: 1,
    title: 'SMILE INVEST(크라우드 펀딩 사이트)',
    mainImage: SmileInvestMain,
    logo: SmileInvestLogo,
    team: '하이미디어 학원',
    date: '22.12.5 ~ 23.1.13',
    skills: ['REACT', 'HTML', 'CSS'],
    link: [
      { LinkIcon: GithubIcon, url: 'https://github.com/smile-invest/smile-invest' },
      { LinkIcon: NotionIcon, url: 'https://juny0429.notion.site/4-feat-2b4d78de7c1b497da8e1ddd4be91e8b3?pvs=4' },
    ],
    Member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목적: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      고충: '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
];
