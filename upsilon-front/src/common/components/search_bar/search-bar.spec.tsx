import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import SearchBar, { SearchBarProps } from './search-bar.component';

const mockHandleOnSubmit = jest.fn();

const mockSearchBarProps: SearchBarProps = {
  placeHolder: 'place Holder',
  handleOnSubmit: mockHandleOnSubmit
};

function renderSearchBar(props: SearchBarProps): RenderResult {
  return render(<SearchBar {...props} />);
}

describe('SearchBar', () => {
  describe('static rendering', () => {
    it('should render Search Bar', () => {
      const { baseElement } = renderSearchBar(mockSearchBarProps);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('SearchBarButtonSubmit', () => {
    it('should submit form click on submit button', () => {
      renderSearchBar(mockSearchBarProps);
      fireEvent.click(screen.getByRole('button'));
      expect(mockHandleOnSubmit).toHaveBeenCalled();
    });
  });
});
