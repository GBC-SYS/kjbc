import type { Meta, StoryObj } from '@storybook/react';

import Icons from '.';
import { ICONS_DATAS_ARRAY } from '../../../app/libs';

const meta = {
  title: 'shared/Icons',
  component: Icons,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },

  argTypes: {},
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const All: Story = {
  args: {
    data: ICONS_DATAS_ARRAY,
  },
};
