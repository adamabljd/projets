import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import DateInput, { DateInputProps } from './date-input.component';

export default {
  title: 'Components/Date Input',
  component: DateInput,
  argTypes: {
    onChange: { action: 'changed' }
  }
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args: DateInputProps) => (<DateInput {...args} />);

export const Basic = Template.bind({});
Basic.args = {
  label: 'Select a date',
  placeHolder: 'DD/MM/YYYY'
};
