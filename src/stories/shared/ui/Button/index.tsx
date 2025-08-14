import React from 'react';

import cx from '@/utils';

import Icon from '../Icons/Icon';
import { ButtonStyled } from './styled';

interface ButtonProps extends PropsWithChildren {
  label?: string;
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const BaseButton = ({
  label,
  primary = false,
  backgroundColor,
  size = 'small',
  onClick,
  children,
}: ButtonProps) => {
  const iconBtn = !label && 'iconButton';
  const type = primary ? 'primary' : 'secondary';
  return (
    <ButtonStyled
      type="button"
      className={cx('button', size, type, iconBtn)}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {label && <p>{label}</p>}
      {children}
    </ButtonStyled>
  );
};

// displayName 설정
BaseButton.displayName = 'Button';

const Button = Object.assign(BaseButton, {
  Icon,
});

export default Button;
