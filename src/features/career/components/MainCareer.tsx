import CareerItem from './CareerItem/CareerItem';
import CodeInDesignLogo from '@/assets/images/career/code-in-design.png';
import HimediaLogo from '@/assets/images/career/himedia.png';
import GreenLogo from '@/assets/images/career/green.png';
import { mainCareerCss } from './MainCareer.styles';

export default function MainCareer() {
  return (
    <div css={mainCareerCss.wrapper}>
      <CareerItem title="코드인디자인" logo={CodeInDesignLogo} date="2023.12 ~ 2024.8" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
      <CareerItem title="React.js 와 Springboot 를 활용한 자바 풀스택 개발자" logo={HimediaLogo} date="2022.10 ~ 2023.3" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
      <CareerItem title="[웹코딩] UIUX반응형디자인(웹표준,HTML5, CSS)프론트엔드(퍼블리셔)개발자" logo={GreenLogo} date="2022.7 ~ 2022.8" description="코드인 디자인은 웹에이전시입니다. 퍼블리싱과 프론트엔드를 맡아서 해왔습니다." />
    </div>
  );
}
