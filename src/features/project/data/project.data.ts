import GithubIcon from '@/assets/images/logos/github-logo.svg';
import NotionIcon from '@/assets/images/logos/notion-logo.svg';
import FeatherIcons from '@/theme/featherIcons';

import PjyPortfolio2Main from '@/assets/images/project/pjy-portfolio-v2.png';
import PjyPortfolio2Logo from '@/assets/images/project/pjy-portfolio-v2-logo.jpg';
import CarManagementAppMain from '@/assets/images/project/car-management-app.jpg';
import CarManagementAppLogo from '@/assets/images/project/car-management-app-logo.png';
import SampleMain from '@/assets/images/project/sample.jpg';
import SampleLogo from '@/assets/images/project/sample-logo.png';
import RouterAdminMain from '@/assets/images/project/router-admin.png';
import RouterAdminLogo from '@/assets/images/project/router-admin-logo.png';
import ZoneMain from '@/assets/images/project/z-one.png';
import ZoneLogo from '@/assets/images/project/z-one-logo.png';
import XplaMain from '@/assets/images/project/xpla.png';
import XplaLogo from '@/assets/images/project/xpla-logo.png';
import ApartmentManagementAppMain from '@/assets/images/project/apartment-management-app.jpg';
import ApartmentManagementAppLogo from '@/assets/images/project/apartment-management-app-logo.jpg';
import CocktableMain from '@/assets/images/project/cocktable.jpg';
import PjyPortfolioMain from '@/assets/images/project/pjy-portfolio-v1.png';
import PjyPortfolioLogo from '@/assets/images/project/pjy-portfolio-v1-logo.jpg';
import TheTechTitanMain from '@/assets/images/project/the-titan.jpg';
import TheTechTitanLogo from '@/assets/images/project/the-titan-logo.png';
import SmileInvestMain from '@/assets/images/project/smile-invest.png';
import SmileInvestLogo from '@/assets/images/project/smile-invest-logo.png';

export const projectListData = [
  {
    id: 11,
    title: 'PJY Portfolio v2',
    mainImage: PjyPortfolio2Main,
    logo: PjyPortfolio2Logo,
    team: '개인',
    date: '24.08.19 ~ 24.08.09.10',
    skills: ['NEXT', 'TYPESCRIPT', 'SCSS', 'RECOIL', 'REACTSCROLL', 'FIGMA', 'GITHUB'],
    link: [
      { LinkIcon: FeatherIcons.Monitor, url: '' },
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/pjy-portfolio-v2' },
    ],
    Member: 1,
    description: '',
    detail: {
      프로젝트목표: '',
      나의역할: '',
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 10,
    title: '무인 기기 관리 페이지',
    mainImage: CarManagementAppMain,
    logo: CarManagementAppLogo,
    team: '코드인디자인',
    date: '24.07.22 ~ 24.08.09',
    skills: ['REACT', 'TYPESCRIPT', 'EMOTION', 'CHAKRA_UI', 'REACT_QUERY', 'RECOIL', 'FIGMA', 'GITHUB'],
    Member: 4,
    description: '',
    detail: {
      프로젝트목표: '',
      나의역할: '',
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 9,
    title: '청년 배관 - 솔라피 연동',
    mainImage: SampleMain,
    logo: SampleLogo,
    team: '코드인디자인',
    date: '24.07.01 ~ 24.07.05',
    skills: ['SOLAPI', 'NEXT', 'FIGMA', 'GITHUB'],
    Member: 1,
    description: '',
    detail: {
      프로젝트목표: '',
      나의역할: '',
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 8,
    title: '공유기 관리 어드민 페이지',
    mainImage: RouterAdminMain,
    logo: RouterAdminLogo,
    team: '코드인디자인',
    date: '24.06.01 ~ 24.08.01',
    skills: ['VUE', 'TYPESCRIPT', 'SCSS', 'CHART_JS', 'TANSTACK_TABLE', 'VUETIFY', 'PINIA', 'FIGMA', 'GITHUB'],
    Member: 2,
    description:
      'Typescript와 Sass(Scss)를 활용한 어드민 페이지 개발 프로젝트로, Pinia와 Tanstack Query를 통한 상태 관리, Vue Router를 사용한 라우팅, Tanstack Table과 Vuetify 기반의 UI 컴포넌트를 적용하여 구현되었습니다.',
    detail: {
      프로젝트목표:
        '이 프로젝트는 특정 기기를 관리할 수 있는 어드민 페이지를 개발하는 것을 목표로 합니다. 관리자는 이 페이지를 통해 기기 상태를 모니터링하고, 데이터를 효율적으로 처리하며, 필요한 페어링 설정을 손쉽게 조정할 수 있습니다.',
      나의역할: ['프로젝트 공용 컴포넌트 구현', 'Table 과 Chart를 포함한 어드민 페이지 전반의 퍼블리싱', '스웨거(Swagger) 문서를 기반으로, Vue Query를 활용한 API 연동 및 데이터 처리 로직 구현'],
      '주요 이슈 및 해결 과정': [
        'Vue Query의 setQueryData API를 처음 사용하면서 삭제된 데이터를 캐시에서 제외하거나 변경된 목록으로 즉시 업데이트하는 작업이 어려웠으나, 공식 문서와 예제를 참조해 삭제된 항목을 필터링하고 수정된 데이터를 반영하는 방식으로 캐시를 수동 업데이트하는 방법을 구현하며 해결 하였습니다.',
        'Vue에서 구조분해할당을 사용했을 때, 반응형 객체의 속성이 변경되더라도 Vue가 이를 감지하지 못해 UI 업데이트가 끊기는 문제를 겪었으나, 이를 해결하기 위해 toRefs를 사용하여 구조분해된 속성도 반응성을 유지할 수 있도록 변경했습니다. 이를 통해 Vue의 반응성 시스템이 데이터 변화를 실시간으로 추적하도록 개선했으며, 반응형 객체를 다룰 때 구조분해할당으로 인해 발생할 수 있는 문제와 그 해결 방법에 대해 깊이 이해할 수 있었습니다.',
        'Vue Chart.js 라이브러리 사용 중 테마 커스텀 방식에 어려움을 겪었고, 캔버스 태그로 구성된 차트에서 가로 사이즈 깨짐 현상이 발생했습니다. 이를 리사이징 및 반응형 설정을 최적화하여 해결 하였습니다.',
      ],
      회고: [
        '이번 프로젝트에서는 기존에 라이브러리를 사용해 모달을 구현하던 방식에서 벗어나, 처음으로 함수 형태의 모달을 구현해 보았습니다. 비동기 컴포넌트 로딩과 Pinia를 활용한 전역 상태 관리 방식으로 모달을 관리하는 접근 방식을 도입했습니다. 각 모달에 맞춘 커스텀 훅을 만들어, openModal과 closeModal 함수로 모달을 열고 닫는 로직을 일관되게 유지하며, 동적으로 props를 전달해 다양한 상황에 맞는 모달을 쉽게 재사용할 수 있었습니다. 이러한 구현 방식을 통해 성능 최적화와 코드의 재사용성을 모두 달성할 수 있었으며, 프로젝트 전반에서 모달을 보다 유연하고 효율적으로 관리할 수 있었습니다.',
        '큰 규모의 프로젝트로 Vue를 사용해보았는데, React와 Next.js에 익숙한 저에게 Vue는 새로운 관점에서의 개발 경험을 제공했습니다. Vue는 컴포넌트 기반 아키텍처와 반응형 데이터 바인딩 덕분에 UI 상태 관리를 매우 직관적으로 처리할 수 있었습니다. 특히 템플릿 문법이 간결하고 선언적이라, 빠르게 컴포넌트를 구성하고 로직을 작성할 수 있었던 점이 인상적이었습니다. 하지만 React와 비교 했을 때 생태계가 작아 이슈를 해결하거나 구현 방법을 찾는데 어려움을 겪었습니다.  이번 프로젝트를 통해 Vue의 장단점을 파악할 수 있었고, 앞으로의 개발에서도 Vue를 효율적으로 사용할 수 있을 자신감을 얻게 되었습니다.',
      ],
      동작구현: '',
    },
  },
  {
    id: 7,
    title: 'z-one(체육 대학 합격 예측)',
    mainImage: ZoneMain,
    logo: ZoneLogo,
    team: '코드인디자인',
    date: '24.03.01 ~ 24.05.31',
    skills: ['NEXT', 'RTK', 'AG_GRID', 'CHAKRA_UI', 'STORYBOOK', 'TYPESCRIPT', 'SWIPER', 'FIGMA', 'GITHUB'],
    link: [{ LinkIcon: FeatherIcons.Monitor, url: 'https://z-one.kr/' }],
    Member: 3,
    description:
      'Z-ONE 프로젝트는 체육대학 입시에 특화된 정보 제공 및 합격 예측 플랫폼을 개발하는 프로젝트입니다. 입시 데이터 분석을 통해 수집한 정보를 바탕으로, 체육대학 입시를 준비하는 수험생들에게 정확하고 신뢰성 높은 합격 예측을 제공하는 것입니다.',
    detail: {
      프로젝트목표:
        ' 입시 데이터 분석을 통해 수집한 정보를 바탕으로, 체육대학 입시를 준비하는 수험생들에게 정확하고 신뢰성 높은 합격 예측을 제공하는 것입니다. Z-ONE은 수험생들이 각 대학의 모집 요강을 손쉽게 열람할 수 있도록 지원하고, 97.6%의 정확도를 자랑하는 합격 예측 시스템과 국내 최대 체육대학 입시 데이터베이스를 바탕으로 한 통합 솔루션을 제공합니다.',
      나의역할: [
        '공통 컴포넌트를 제작하여 코드의 재사용성과 유지보수성을 향상',
        '어드민 페이지와 정시•수시 대학 찾기 페이지의 퍼블리싱 & API 연동',
        '대학 찾기 및 대학 관리 필터 구축',
        'AI 추천 대학 페이지를 제작',
      ],
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 6,
    title: 'Xpla - 다국어 작업, 일부 퍼블리싱',
    mainImage: XplaMain,
    logo: XplaLogo,
    team: '코드인디자인',
    date: '24.02.19 ~ 24.02.29',
    skills: ['NEXT', 'FIGMA', 'GITHUB'],
    link: [{ LinkIcon: FeatherIcons.Monitor, url: 'https://www.xpla.io/en' }],
    Member: 1,
    description: '',
    detail: {
      프로젝트목표: '',
      나의역할: '',
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
  {
    id: 5,
    title: '아파트 관리 모바일 웹 퍼블리싱',
    mainImage: ApartmentManagementAppMain,
    logo: ApartmentManagementAppLogo,
    team: '코드인디자인',
    date: '23.12.13 ~ 24.02.10 ',
    skills: ['VUE', 'STORYBOOK', 'FIGMA', 'GITHUB'],
    Member: 1,
    description: '',
    detail: {
      프로젝트목표: '',
      나의역할: '',
      '주요 이슈 및 해결 과정': '',
      회고: '',
      동작구현: '',
    },
  },
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
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      '주요 이슈 및 해결 과정': '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
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
      { LinkIcon: FeatherIcons.Monitor, url: 'https://github.com/juny0429/pjy-portfolio' },
      { LinkIcon: GithubIcon, url: 'https://github.com/juny-0429/pjy-portfolio-v1' },
    ],
    Member: 7,
    description: '반려동물을 주제로 한 클라우드 펀딩 프로젝트입니다. 스프링부트와 마이바티스를 활용한 MVC Model2 기반으로 구현 했습니다.',
    detail: {
      프로젝트소개: '칵테일 주문을 간편하게 하고, 고객이 자신의 취향에 맞는 칵테일을 쉽게 찾을 수 있도록 돕는 애플리케이션입니다.',
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      '주요 이슈 및 해결 과정': '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
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
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      '주요 이슈 및 해결 과정': '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
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
      프로젝트목표: '고객이 메뉴 선택에서 오는 불확실성을 줄이고, 맞춤형 칵테일을 통해 고객 만족도를 높이는 것을 목표로 합니다.',
      나의역할: '프론트엔드와 백엔드 개발 전반을 담당하며, 주요 기능 설계와 구현, 그리고 데이터베이스 설계 및 관리까지 맡았습니다.',
      '주요 이슈 및 해결 과정': '칵테일의 맛과 특징을 사용자가 쉽게 이해할 수 있도록 UI/UX를 구성하는 데 많은 어려움이 있었습니다. 또한, 실시간 주문 처리와 데이터 동기화 문제도 해결해야 했습니다.',
      회고: '사용자의 입장에서 생각하고, 최대한 직관적인 인터페이스를 제공하는 것이 중요함을 느꼈습니다. 기술적인 어려움도 많았지만, 이를 해결하며 많은 성장을 이뤘습니다.',
      동작구현: '주요 기능으로는 칵테일 추천 알고리즘, 주문 내역 실시간 확인, 사용자 리뷰 시스템 등이 있습니다. React로 프론트엔드를 구성하고, Spring과 JPA로 백엔드를 개발했습니다.',
    },
  },
];
