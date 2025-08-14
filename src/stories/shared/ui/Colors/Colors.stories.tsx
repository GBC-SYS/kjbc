import type { Meta, StoryObj } from '@storybook/react';

import Colors from '.';
import { GRAY_COLORS, MAIN_THEME_COLORS } from '../../../app/libs';

const meta: Meta<typeof Colors> = {
  title: 'Shared/Colors',
  component: Colors,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Colors>;

export const MAIN_THEME: Story = {
  args: {
    data: MAIN_THEME_COLORS,
  },
};

export const COLORS_GRAY: Story = {
  args: {
    data: GRAY_COLORS,
  },
};
