'use client';

import styled from 'styled-components';

interface ButtonStyledProps {
  backgroundColor?: string;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  border: 1px solid #333;
  border-radius: 3em;
  font-weight: 700;
  line-height: 1;

  &.primary {
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: #333;
  }
  &.secondary {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    color: #333;
  }
  &.small {
    padding: 10px 16px;
    font-size: 12px;
  }
  &.medium {
    padding: 11px 20px;
    font-size: 14px;
  }
  &.large {
    padding: 12px 24px;
    font-size: 16px;
  }
  &.iconButton {
    padding: 0;
    width: 40px;
    height: 40px;
    justify-content: center;
  }
`;
