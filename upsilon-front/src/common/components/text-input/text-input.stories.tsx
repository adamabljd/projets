import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInput, { TextInputProps } from './text-input.component';

export default {
  title: 'Components/text-input',
  component: TextInput
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args: TextInputProps) => <TextInput {...args} />;

export const Preview = Template.bind({});
Preview.args = {
  label: 'Label',
  placeholder: 'placeholder text'
};

export const Name = Template.bind({});
Name.args = {
  label: 'Name',
  placeholder: 'e.g Doe'
};




