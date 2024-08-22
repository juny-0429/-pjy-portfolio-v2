import CocktableMain from '@/assets/images/project/cocktable.jpg';

import PjyPortfolioMain from '@/assets/images/project/pjy-portfolio-v1.png';
import PjyPortfolioLogo from '@/assets/images/project/pjy-portfolio-v1-logo.jpg';

import TheTechTitanMain from '@/assets/images/project/the-titan.jpg';
import TheTechTitanLogo from '@/assets/images/project/the-titan-logo.png';

import SmileInvestMain from '@/assets/images/project/smile-invest.png';
import SmileInvestLogo from '@/assets/images/project/smile-invest-logo.png';

export const projectList = [
  {
    title: '[임시 중단] Cocktable(칵테일 테이블오더 앱)',
    mainImage: CocktableMain,
    logo: '',
    team: '개인',
    date: '23.8.30 ~',
    skills: ['TYPESCRIPT', 'REACT', 'SPRING', 'JPA', 'RESTful', 'ORACLE', 'GITHUB'],
    link: [
      { team: 'github', url: 'https://github.com/Green-0lives' },
      { team: 'notion', url: 'https://juny0429.notion.site/Cocktable-App-b6ae5d9ad1454ae585b6bfae56f6fdcb?pvs=4' },
    ],
    Member: 7,
    description:
      '기존의 칵테일 주문 방식은 메뉴판을 봐도 어떤 맛일지 상상하기 어려웠고, 맛을 잘 모르는 칵테일에 경우 실망하기도 했습니다. 커스텀 기능을 통해 나만의 칵테일을 주문하고, 손님들은 예상치 못한 맛이 아닌, 자신의 입맛에 딱 맞는 칵테일을 즐길 수 있게 될 것입니다.',
  },
  {
    title: 'PJY Portfolio v1',
    mainImage: PjyPortfolioMain,
    logo: PjyPortfolioLogo,
    team: '개인',
    date: '23.3.24 ~ 23.4.10',
    skills: ['REACT', 'SCSS', 'FIGMA', 'GITHUB'],
    link: [
      { team: 'github', url: 'https://github.com/juny-0429/pjy-portfolio-v1' },
      { team: 'website', url: 'https://github.com/juny0429/pjy-portfolio' },
    ],
    Member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
  },
  {
    title: 'The Tech Titan (인사관리 그룹웨어 애플리케이션)',
    mainImage: TheTechTitanMain,
    logo: TheTechTitanLogo,
    team: '하이미디어 학원',
    date: '23.1.17 ~ 23.3.22',
    skills: ['REACT', 'HTML', 'CSS', 'JAVA', 'SPRING BOOT', 'RESTful', 'ORACLE', 'MUI', 'FIGMA', 'GITHUB'],
    link: [
      { team: 'github', url: 'https://github.com/2TeamHR' },
      { team: 'notion', url: 'https://juny0429.notion.site/2-HOT6-87a66064580d498285c07ac16cf378e7?pvs=4' },
    ],
    Member: 1,
    description: '인사관리 그룹웨어를 주제로한 프로젝트입니다. 스프링부트 기반의 RestAPI 서버를 연동한 React.js SPA 애플리케이션이 특징입니다.',
  },
  {
    title: 'SMILE INVEST(크라우드 펀딩 사이트)',
    mainImage: SmileInvestMain,
    logo: SmileInvestLogo,
    team: '하이미디어 학원',
    date: '22.12.5 ~ 23.1.13',
    skills: ['REACT', 'HTML', 'CSS'],
    link: [
      { team: 'github', url: 'https://github.com/smile-invest/smile-invest' },
      { team: 'notion', url: 'https://juny0429.notion.site/4-feat-2b4d78de7c1b497da8e1ddd4be91e8b3?pvs=4' },
    ],
    Member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
  },
];
