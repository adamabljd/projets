import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { ButtonProps } from './button.component';

export default {
  title: 'Components/button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary'
};



