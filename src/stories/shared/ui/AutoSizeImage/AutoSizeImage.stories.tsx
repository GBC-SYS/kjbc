import type { Meta, StoryObj } from '@storybook/react';

import Image from 'next/image';

import FSD from 'public/images/FSD_Architecture.png';

import AutoSizeImage from '.';

const meta: Meta<typeof AutoSizeImage> = {
  title: 'Shared/AutoSizeImage',
  component: AutoSizeImage,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof AutoSizeImage>;

export const Default: Story = {
  args: {
    children: <Image src={FSD} alt="Example Image" />,
  },
  render: args => <AutoSizeImage>{args.children}</AutoSizeImage>,
};
