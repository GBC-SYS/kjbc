import { Bell, EditPencil, LogOut, NavArrowDown, User, Xmark } from 'iconoir-react';

import type { IconData } from '../../shared/types/icon';

export const ICONS_DATAS = {
  Xmark: { icon: <Xmark />, label: '<Xmark />' },
  EditPencil: { icon: <EditPencil />, label: '<EditPencil />' },
  NavArrowDown: { icon: <NavArrowDown />, label: '<NavArrowDown />' },
  BellIcon: { icon: <Bell />, label: '<Bell />' },
  UserIcon: { icon: <User />, label: '<User />' },
  LogOut: { icon: <LogOut />, label: '<LogOut />' },
} as { [key: string]: IconData };

export const ICONS_DATAS_ARRAY = Object.values(ICONS_DATAS).map(({ icon, label }) => ({
  icon,
  label,
}));
