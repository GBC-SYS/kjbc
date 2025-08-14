'use client';

import styled from 'styled-components';

interface ColorsInnerProps {
  color: string;
}

export const ColorsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ColorsInnerStyled = styled.div<ColorsInnerProps>`
  width: 260px;
  height: 40px;
  line-height: 40px;
  gap: 20px;
  display: flex;
  justify-content: space-evenly;
  border-radius: 4px;
  background-color: ${(props: ColorsInnerProps) => props.color};
`;
