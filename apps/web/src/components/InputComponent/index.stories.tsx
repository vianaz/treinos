import { Meta, StoryObj } from '@storybook/react';

import { InputComponent, InputComponentProps } from '.';

export default {
  title: 'Components/InputComponent',
  component: InputComponent,
  args: {
    label: 'Label',
    type: 'text',
    placeholder: 'Placeholder'
  }
} as Meta<InputComponentProps>;

export const Text: StoryObj<InputComponentProps> = {
  args: {
    label: 'Name',
    type: 'text',
    placeholder: 'Type your name'
  }
};

export const Email: StoryObj<InputComponentProps> = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Type your email'
  }
};

export const Password: StoryObj<InputComponentProps> = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Type your password'
  }
};
