import React, { FormEventHandler } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchBar, { SearchBarProps } from './search-bar.component';

export default {
  title: 'Components/search-bar',
  component: SearchBar
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args: SearchBarProps) => <SearchBar {...args} />;
const mockHanldeOnSubmit: FormEventHandler<HTMLFormElement> = e => {
  e.preventDefault();
  const formValue = new FormData(e.currentTarget);
  alert(formValue.get('search-bar-input'));
};

export const Preview = Template.bind({});
Preview.args = {
  handleOnSubmit: mockHanldeOnSubmit
};
