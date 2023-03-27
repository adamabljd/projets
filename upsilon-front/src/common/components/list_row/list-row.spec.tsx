import React from 'react';
import { render, fireEvent, RenderResult, screen } from '@testing-library/react';
import ListRow, { ListRowProps } from './list-row.component';

const mockHandleEyeClick = jest.fn();

const mockHandleEditClick = jest.fn();

const mockListRowProps: ListRowProps = {
  rows: [{ id:'1', text: 'hello' }],
  handleEyeClick: mockHandleEyeClick,
  handleEditClick: mockHandleEditClick
};

function renderListRow(props: ListRowProps): RenderResult {
  return render(<ListRow {...props} />);
}

describe('ListRow', () => {
  describe('static rendering', () => {
    it('should render itself', () => {
      const { baseElement } = renderListRow(mockListRowProps);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('event handling', () => {
    it('should call onEyeClick when the eye icon is clicked', () => {
      renderListRow(mockListRowProps);
      fireEvent.click(screen.getByRole('button', { name: 'Eye' }));
      expect(mockHandleEyeClick).toHaveBeenCalled();
    });

    it('should call onEditClick when the edit icon is clicked', () => {
      renderListRow(mockListRowProps);
      fireEvent.click(screen.getByRole('button', { name: 'Edit' }));
      expect(mockHandleEditClick).toHaveBeenCalled();
    });
  });
});
