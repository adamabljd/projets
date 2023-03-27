import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import CompositeTile , { CompositeTileProps } from './composite-tile.component';

export default {
  title: 'Components/composite-tile',
  component: CompositeTile
} as ComponentMeta<typeof CompositeTile>;

const Template: ComponentStory<typeof CompositeTile> = (args: CompositeTileProps) => <CompositeTile {...args} />;
const mockEyeClick = (): void => alert('EyeButton');
const mockEditClick = (): void => alert('EditButton');


export const Intervenants = Template.bind({});
Intervenants.args = {
  titles: [{
    id: '1', text: 'Telephone', value: '07.07.07.07.07'
  }, {
    id: '2', text: 'Date de naissance', value: '03/09/2022'
  }, {
    id: '3', text: 'Nationalite', value: 'Francaise'
  }, {
    id: '4', text: 'Formation', value: 'formation'
  }],
  nom: 'Doe',
  type: 'intervenants',
  handleEyeClick: mockEyeClick,
  handleEditClick: mockEditClick
};

export const Etudes = Template.bind({});
Etudes.args = {
  titles: [{
    id: '1', text: 'Telephone', value: '07.07.07.07.07'
  }, {
    id: '2', text: 'Date de naissance', value: '03/09/2022'
  }, {
    id: '3', text: 'Nationalite', value: 'Francaise'
  }, {
    id: '4', text: 'Formation', value: 'formation'
  }, {
    id: '5', text: 'Formation', value: 'formation'
  }],
  nom: 'Upsilon Junior Entreprise',
  type: 'etudes',
  handleEyeClick: mockEyeClick,
  handleEditClick: mockEditClick
};

export const Entreprises = Template.bind({});
Entreprises.args = {
  titles: [{
    id: '1', text: 'Telephone', value: '07.07.07.07.07'
  }, {
    id: '2', text: 'Date de naissance', value: '03/09/2022'
  }, {
    id: '3', text: 'Nationalite', value: 'Francaise'
  }, {
    id: '4', text: 'Formation', value: 'formation'
  }],
  nom: 'Upsilon Junior Entreprise',
  type: 'entreprises',
  handleEyeClick: mockEyeClick,
  handleEditClick: mockEditClick
};
