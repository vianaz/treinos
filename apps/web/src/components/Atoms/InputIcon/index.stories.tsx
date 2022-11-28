import { Meta, StoryObj } from '@storybook/react';

import { InputIcon, InputIconProps } from '.';

export default {
  title: 'Atoms/InputIcon',
  component: InputIcon,
  args: {}
} as Meta<InputIconProps>;

export const Default: StoryObj<InputIconProps> = {
  args: {
    src: '/icons/close_eye_light.svg'
  }
};
