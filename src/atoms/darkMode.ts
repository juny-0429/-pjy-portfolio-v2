import { atom } from 'recoil';

export const themeModeState = atom({
  key: 'themeModeState',
  default: 'light', // 기본 테마 모드 설정
});
