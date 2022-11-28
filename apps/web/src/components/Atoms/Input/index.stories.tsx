import { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: Input,
  args: {}
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {
  args: {}
};
