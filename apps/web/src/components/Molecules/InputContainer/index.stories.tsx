import { Meta, StoryObj } from '@storybook/react';

import { InputContainer, InputContainerProps } from '.';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder'
  }
} as Meta<InputContainerProps>;

export const Text: StoryObj<InputContainerProps> = {
  args: {
    label: 'Name',
    type: 'text',
    placeholder: 'Type your name'
  }
};

export const Email: StoryObj<InputContainerProps> = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Type your email'
  }
};

export const Password: StoryObj<InputContainerProps> = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Type your password'
  }
};
