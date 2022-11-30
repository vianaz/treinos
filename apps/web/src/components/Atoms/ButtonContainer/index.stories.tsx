import { Meta, StoryObj } from '@storybook/react';

import { ButtonContainer, ButtonContainerProps } from '.';

export default {
  title: 'Atoms/ButtonContainer',
  component: ButtonContainer,
  args: {
    typeButton: 'primary',
    children: 'Button'
  }
} as Meta<ButtonContainerProps>;

export const Primary: StoryObj<ButtonContainerProps> = {
  args: {}
};

export const Secondary: StoryObj<ButtonContainerProps> = {
  args: {
    typeButton: 'secondary'
  }
};

export const Tertiary: StoryObj<ButtonContainerProps> = {
  args: {
    typeButton: 'tertiary'
  }
};
