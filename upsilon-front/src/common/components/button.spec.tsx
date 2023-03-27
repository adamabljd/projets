import React from 'react';
import { fireEvent, render, RenderResult, screen } from '@testing-library/react';
import Button, { ButtonProps } from './button.component';


const handleOnClickMock = jest.fn();

const mockButtonProps: ButtonProps = {
  onClick: handleOnClickMock,
  label: 'Test',
  variant: 'primary'
};

function renderButton(props: ButtonProps): RenderResult {
  return render(<Button {...props} />);
}

describe('Button', () => {
  describe('static rendering', () => {
    it('should render Button', () => {
      const { baseElement } = renderButton(mockButtonProps);
      expect(baseElement).toMatchSnapshot();
    });
  });
  describe('on click event', () => {
    it('should trigger on click callback function',() => {
      render(<Button {...mockButtonProps} />);
      const button = screen.getByRole('button');
      fireEvent.click(button);
      expect(handleOnClickMock).toHaveBeenCalled();
    });
  });
});
