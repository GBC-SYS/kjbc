'use client';

import { ReactNode } from 'react';

import { DefaultTheme, ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/libs/registry';
import { InitGlobalStyled } from '@/stories/app/styles/init';
import { fontSizes, fontWeight } from '@/stories/app/styles/theme';

import { GRAY_COLORS_OBJECT, MAIN_THEME_COLORS_OBJECT } from '../stories/app/libs';

declare module 'styled-components' {
  export interface DefaultTheme {
    GRAY_COLORS_OBJECT: typeof GRAY_COLORS_OBJECT;
    MAIN_THEME_COLORS_OBJECT: typeof MAIN_THEME_COLORS_OBJECT;
    fontWeight: typeof fontWeight;
    fontSizes: typeof fontSizes;
  }
}

export const theme: DefaultTheme = {
  GRAY_COLORS_OBJECT,
  MAIN_THEME_COLORS_OBJECT,
  fontWeight,
  fontSizes,
};

export default function CustomThemeProvider({ children }: { children: ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <InitGlobalStyled />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
