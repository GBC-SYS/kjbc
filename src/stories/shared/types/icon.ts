import { ReactNode, SVGProps } from 'react';

import { ICONS_DATAS } from '../../app/libs';

export type IconType = keyof typeof ICONS_DATAS;
export type SvgIconProps = SVGProps<SVGSVGElement>;

export interface IconData {
  icon: ReactNode;
  label?: string;
}
