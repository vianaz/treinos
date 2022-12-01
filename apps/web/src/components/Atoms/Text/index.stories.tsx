import { Meta, StoryObj } from '@storybook/react';

import { Text, TextProps } from '.';

export default {
  title: 'Atoms/Text',
  component: Text,
  args: {
    type: 'primary',
    children: 'Text'
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {
  args: {}
};

export const Secondary: StoryObj<TextProps> = {
  args: {
    type: 'secondary'
  }
};

export const Tertiary: StoryObj<TextProps> = {
  args: {
    type: 'tertiary'
  }
};

export const Quaternary: StoryObj<TextProps> = {
  args: {
    type: 'quaternary'
  }
};
