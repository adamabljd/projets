import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import Checkbox, { CheckboxProps } from './checkbox.component';

const handleOnChangeMock = jest.fn();

const mockCheckboxProps: CheckboxProps = {
  onChange: handleOnChangeMock
};
function renderCheckbox(): RenderResult {
  return render(<Checkbox {...mockCheckboxProps} />);
}

describe('Checkbox', () => {
  describe('static rendering', () => {
    it('should render itself', () => {
      const { baseElement } = renderCheckbox();
      expect(baseElement).toMatchSnapshot();
    });
  });
  describe('checked', () => {
    it('should be checked', () => {
      render(<Checkbox {...mockCheckboxProps} />);
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      expect(handleOnChangeMock).toHaveBeenCalled();
    });
    it('should return the value of checked', () => {
      render(<Checkbox {...mockCheckboxProps} />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      fireEvent.click(checkbox);
      expect(checkbox.checked).toBe(true);
    });
  });
});
