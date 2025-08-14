// utils/cx.ts
import clsx, { type ClassValue } from 'clsx';

const cx = (...args: ClassValue[]) => {
  return clsx(...args);
};

export { cx };
