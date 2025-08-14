import type { Meta, StoryObj } from '@storybook/react';

import Login from '.';

const meta: Meta<typeof Login> = {
  title: 'Features/Login',
  component: Login,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {
  args: {},
};
