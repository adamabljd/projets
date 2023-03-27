import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import CompositeTile , { CompositeTileProps } from './composite-tile.component';

const mockHandleEyeClick = jest.fn();
const mockHandleEditClick = jest.fn();

const mockCompositeTileProps: CompositeTileProps = {
  nom: 'John',
  titles: [{
    id: '1', text: 'hello', value: 'value'
  }],
  type: 'intervenants',
  handleEyeClick: mockHandleEyeClick,
  handleEditClick: mockHandleEditClick
};

function renderCompositeTile(props: CompositeTileProps): RenderResult {
  return render(<CompositeTile {...props} />);
}

describe('CompositeTile', () => {
  describe('static rendering', () => {
    it('should render composite-tile intervenants', () => {
      renderCompositeTile(mockCompositeTileProps);

      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('hello')).toBeInTheDocument();
      expect(screen.getByText('value')).toBeInTheDocument();

      const editButton = screen.getByRole('button', { name: 'Edit' });
      expect(editButton).toHaveAttribute('type', 'button');
      fireEvent.click(editButton);
      expect(mockHandleEditClick).toHaveBeenCalled();


      const eyeButton = screen.getByRole('button', { name: 'Eye' });
      expect(eyeButton).toHaveAttribute('type', 'button');
      fireEvent.click(eyeButton);
      expect(mockHandleEyeClick).toHaveBeenCalled();

    });
  });
});
