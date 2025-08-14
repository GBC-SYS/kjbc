// 전역으로 Props타입에 Children 타입 합성
declare type PropsWithChildren<T = {}> = import('react').PropsWithChildren<T>;

// 전역으로 TypeScript 상에서 .svg로 불러오는 컴포넌트에 대한 타입 지정
declare module '*.svg' {
  import React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;

  export default src;
}

// 전역으로 SVG의 Icon에 타입을 지정
declare type Icons = {
  readonly [key: string]: React.FunctionComponent<SvgIconProps>;
};
