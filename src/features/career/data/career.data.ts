import CodeInDesignLogo from '@/assets/images/career/code-in-design.png';
import HimediaLogo from '@/assets/images/career/himedia.png';
import GreenLogo from '@/assets/images/career/green.png';

export const careerList = [
  {
    title: '코드인디자인',
    logo: CodeInDesignLogo,
    date: '2023.12 ~ 2024.8',
    description: '코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다.',
    content: [
      `[ 무인 기기 관리 페이지 ]
- 지점 데이터를 표시하는 테이블을 만들고 필터와 검색 기능을 추가하여 사용자가 원하는 지점을 쉽게 찾을 수 있도록 구현.
- 일부 페이지 퍼블리싱을 작업과 React Query를 활용하여 API와의 데이터 연동을 구현.
      `,
      `[ 청년 배관 ]
- 솔라피 API 연동`,
      `[공유기 관리 어드민 페이지]
- 프로젝트 공용 컴포넌트 구현
- Table 과 Chart를 포함한 어드민 페이지 전반의 퍼블리싱
- 스웨거(Swagger) 문서를 기반으로, Vue Query를 활용한 API 연동 및 데이터 처리 로직 구현
      `,
      `[Z-one 체육 대학 합격 예측]
- 공통 컴포넌트를 제작하여 코드의 재사용성과 유지보수성을 향상
- 어드민 페이지와 정시•수시 대학 찾기 페이지의 퍼블리싱 & API 연동
- 대학 찾기 및 대학 관리 필터 구축
- AI 추천 대학 페이지를 제작
      `,
      `[Xpla]
- 프로젝트 내 i18next를 활용한 다국어 지원 추가 및 언어 선택에 따른 콘텐츠 변경
- 일부 페이지 퍼블리싱 구현 및 수정
      `,
      `[아파트 관리 모바일 웹 퍼블리싱]
- Vue 3를 활용한 프로젝트 초기 설정 및 모바일 최적화 구현
- 재사용성을 고려한 컴포넌트 설계 및 퍼블리싱 진행
- Storybook을 도입하여 컴포넌트 관리 체계 구축
      `,
    ],
  },
  {
    title: '하이미디어 학원',
    logo: HimediaLogo,
    date: '2022.10 ~ 2023.3',
    description: 'React.js와 Springboot를 활용한 자바 풀스택 개발자 과정',
    content: [
      '[파이널 프로젝트] 스프링부트 기반의 Rest API 서버를 연동한 React.js SPA 애플리케이션 개발 및 클라우드서버 배포 프로젝트 수행',
      '[세미 프로젝트] 스프링부트와 마이바티스를 활용한 MVC Model2 기반 풀스택 웹 애플리케이션 프로젝트 수행',
      'React.js를 활용한 SPA 애플리케이션 개발 학습',
      '웹 표준을 적용한 Web Front 개발 학습',
      'ORM 프레임워크를 활용한 서버 애플리케이션 개발 학습',
      '스프링부트를 활용한 RestAPI 서버프로그래밍 학습',
      '스프링 프레임워크를 활용한 BackEnd 서버 개발 학습',
      '영속성 프레임워크를 활용한 데이터베이스 연동 응용 SW 개발 학습',
      '응용 SW 개발을 위한 자바프로그래밍 기초 학습',
      '관계형 데이터베이스를 위한 SQL 및 데이터 모델링 학습',
    ],
  },
  {
    title: '그린컴퓨터학원',
    logo: GreenLogo,
    date: '2022.7 ~ 2022.8',
    description: '[웹코딩] UIUX반응형디자인(웹표준,HTML5, CSS)프론트엔드(퍼블리셔)개발자 과정',
    content: [
      '웹페이지의 구조를 만들기 위한 HTML 기초 문법과 태그종류별 작성법,',
      'HTML5 표준 웹기술을 바탕으로 문서의 구조를 제작하는 방법',
      '웹문서를 표현하기 위한 CSS의 문법을 익히고, 다양한 레이아웃기법과 디자인적인 요소들을 표현하여 동적이면서 웹표준화된 페이지를 구현',
    ],
  },
];
