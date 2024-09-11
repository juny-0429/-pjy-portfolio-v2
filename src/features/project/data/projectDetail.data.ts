import { ProjectDetailMenu } from '@/types/menu.types';

interface ProjectDetail {
  프로젝트소개: string;
  프로젝트목표: string;
  나의역할: string;
  '주요 이슈 및 해결 과정': string;
  회고: string;
  동작구현: string;
}

export const project: { detail: ProjectDetail } = {
  detail: {
    프로젝트소개: '소개 내용',
    프로젝트목표: '목적 내용',
    나의역할: '역할 내용',
    '주요 이슈 및 해결 과정': '주요 이슈 및 해결 과정 내용',
    회고: '회고 내용',
    동작구현: '구현 내용',
  },
};

export const quickMenuList: { label: string; value: ProjectDetailMenu }[] = [
  { label: '프로젝트 정보', value: '프로젝트정보' },
  { label: '프로젝트 소개', value: '프로젝트소개' },
  { label: '프로젝트 목적', value: '프로젝트목표' },
  { label: '나의 역할', value: '나의역할' },
  { label: '주요 이슈 및 해결 과정', value: '주요이슈및해결과정' },
  { label: '회고', value: '회고' },
  { label: '동작 구현', value: '동작구현' },
];
