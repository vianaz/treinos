import { Meta, StoryObj } from '@storybook/react';

import { Label, LabelProps } from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
  args: {
    type: 'text',
    label: 'Label'
  }
} as Meta<LabelProps>;

export const Default: StoryObj<LabelProps> = {
  args: {}
};
