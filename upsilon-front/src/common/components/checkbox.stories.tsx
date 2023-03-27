import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './checkbox.component';

export default {
  title: 'Components/checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {
  onChange:  (event: React.ChangeEvent<HTMLInputElement>) => {
    alert(event.target.checked);
  }
};
