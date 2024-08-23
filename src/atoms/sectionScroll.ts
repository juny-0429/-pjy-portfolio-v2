import { atom } from 'recoil';
import { MainMenu } from '@/types/menu.types';

export const activeSectionState = atom<MainMenu>({
  key: 'activeSectionState',
  default: 'JUNY', // 초기 값 설정
});
