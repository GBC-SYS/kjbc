import type { Meta, StoryObj } from '@storybook/react';

import { ICONS_DATAS } from '@/stories/app/libs';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'shared/Icons/IconSize',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: ICONS_DATAS.UserIcon.icon,
    label: '<UserIcon />',
  },
};
