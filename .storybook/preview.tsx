import type { Preview } from '@storybook/react';
import React from 'react';

import CustomThemeProvider from '../src/provider/CustomThemeProvider';

const preview: Preview = {
  decorators: [
    (Story: any) => (
      <div style={{ fontFamily: 'PRETENDARD, sans-serif' }}>
        <CustomThemeProvider>
          <Story />
        </CustomThemeProvider>
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
