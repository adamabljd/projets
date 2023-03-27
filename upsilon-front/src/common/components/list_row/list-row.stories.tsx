import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ListRow, { ListRowProps } from './list-row.component';

export default {
  title: 'Components/list-row',
  component: ListRow
} as ComponentMeta<typeof ListRow>;

const Template: ComponentStory<typeof ListRow> = (args: ListRowProps) => <ListRow {...args} />;
const mockEyeClick = (): void => alert('EyeButton');
const mockEditClick = (): void => alert('EditButton');


export const Prospect = Template.bind({});
Prospect.args = {
  handleEyeClick: mockEyeClick,
  handleEditClick: mockEditClick,
  rows: [{ id: '1', text: 'Row 1' }, { id: '2', text: 'Row 2' }, { id: '3', text: 'Row 3' }, { id: '4', text: 'Row 4' }, { id: '5', text: 'Row 5' }, { id: '6', text: 'Row 6' }]
};

export const Mission = Template.bind({});
Mission.args = {
  handleEyeClick: mockEyeClick,
  handleEditClick: mockEditClick,
  rows: [{ id: '1', text: 'Row 1' }, { id: '2', text: 'Row 2' }, { id: '3', text: 'Row 3' }, { id: '4', text: 'Row 4' }, { id: '5', text: 'Row 5' }]
};

