import { ProjectDetailMenu } from '@/types/menu.types';

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

export const quickMenuList: { label: string; value: ProjectDetailMenu }[] = [
  { label: '프로젝트 목적', value: '프로젝트목적' },
  { label: '나의 역할', value: '나의역할' },
  { label: '고충', value: '고충' },
  { label: '회고', value: '회고' },
  { label: '동작 구현', value: '동작구현' },
];
