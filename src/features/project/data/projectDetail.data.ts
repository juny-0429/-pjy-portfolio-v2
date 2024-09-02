interface ProjectDetail {
  프로젝트소개: string;
  프로젝트목적: string;
  나의역할: string;
  고충: string;
  회고: string;
  동작구현: string;
}

export const project: { detail: ProjectDetail } = {
  detail: {
    프로젝트소개: '소개 내용',
    프로젝트목적: '목적 내용',
    나의역할: '역할 내용',
    고충: '고충 내용',
    회고: '회고 내용',
    동작구현: '구현 내용',
  },
};

export const sections = [
  { title: '프로젝트 목적', key: '프로젝트목적' },
  { title: '나의 역할', key: '나의역할' },
  { title: '고충', key: '고충' },
  { title: '회고', key: '회고' },
  { title: '동작 구현', key: '동작구현' },
];
