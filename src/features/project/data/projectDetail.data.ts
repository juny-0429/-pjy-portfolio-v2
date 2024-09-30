import { ProjectDetailMenu } from '@/types/menu.types';

export const quickMenuList: { label_en: string; label_ko: string; value: ProjectDetailMenu }[] = [
  { label_en: 'Project Information', label_ko: '프로젝트 정보', value: '프로젝트정보' },
  { label_en: 'Project Goal', label_ko: '프로젝트 목표', value: '프로젝트목표' },
  { label_en: 'My Role', label_ko: '나의 역할', value: '나의역할' },
  { label_en: 'Major Issues and Solutions', label_ko: '주요 이슈 및 해결 과정', value: '이슈및해결과정' },
  { label_en: 'Retrospective', label_ko: '회고', value: '회고' },
  { label_en: 'Implementation', label_ko: '동작 구현', value: '동작구현' },
];
