'use client';

import styled from 'styled-components';

interface AutoSizeImageProps {}

export const AutoSizeImageStyled = styled.div<AutoSizeImageProps>`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지가 컨테이너에 맞게 조정되도록 */
  }
`;
