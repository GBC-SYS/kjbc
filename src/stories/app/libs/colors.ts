import { Color } from '@/stories/shared/types';

export const GRAY_COLORS: Color[] = [
  { name: 'darkGray', hex: '#333333' }, // 짙은 회색
  { name: 'mediumGray', hex: '#666666' }, // 중간 회색
  { name: 'lightGray', hex: '#999999' }, // 연한 회색
  { name: 'veryLightGray', hex: '#BBBBBB' }, // 매우 연한 회색
];

export const MAIN_THEME_COLORS: Color[] = [
  { name: 'deepBrown', hex: '#61443A' }, // 깊은 갈색
  { name: 'mutedRed', hex: '#A57454' }, // muted한 빨간색
  { name: 'beige', hex: '#D7B6A3' }, // 베이지
  { name: 'offWhite', hex: '#F5F4F2' }, // 약간의 따뜻함이 있는 흰색
  { name: 'softBlue', hex: '#D2D6DB' }, // 부드러운 파랑
];

export const GRAY_COLORS_OBJECT = Object.fromEntries(
  GRAY_COLORS.map(({ name, hex }) => [name, hex]),
);
export const MAIN_THEME_COLORS_OBJECT = Object.fromEntries(
  MAIN_THEME_COLORS.map(({ name, hex }) => [name, hex]),
);
