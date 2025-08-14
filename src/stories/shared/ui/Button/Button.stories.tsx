import type { Meta, StoryObj } from '@storybook/react';
import { ComponentType } from 'react';

import { fn } from '@storybook/test';

import Button from '.';
import { ICONS_DATAS } from '../../../app/libs';

// 스토리를 설정하는 방법에 대한 자세한 내용은 여기를 참조하세요: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  // 이 구성 요소에는 자동 생성된 Autodocs 항목이 있습니다.: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // 캔버스에서 구성 요소를 중앙에 배치하는 선택적 매개변수입니다. 자세한 정보: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  component: Button,
  subcomponents: {
    Icon: Button.Icon as ComponentType<any>,
  },
  // argTypes에 대한 추가 정보: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      description: '자식 요소, 컴퍼넌트',
      table: {
        category: 'children',
      },
    },
    backgroundColor: { control: 'color' },
  },
  // `fn`을 사용하여 onClick 인수를 감시합니다. 이 인수는 호출되면 작업 패널에 나타납니다.: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    backgroundColor: '#fff',
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// args를 사용하여 스토리를 쓰는 방법에 대한 추가 정보: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

export const Synthetic: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
  render: ({ size, label, onClick, backgroundColor }) => {
    return (
      <Button size={size} label={label} onClick={onClick} backgroundColor={backgroundColor}>
        <Button.Icon icon={ICONS_DATAS.SmallCaretDownIcon.icon} />
      </Button>
    );
  },
};
