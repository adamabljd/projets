import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TextInput, { TextInputProps } from './text-input.component';

const mockTextInputProps: TextInputProps = {
  label: 'Test label',
  placeholder: 'Test write a text here',
  value: 'Test value',
  onChange: jest.fn()
};

describe('TextInput', () => {
  describe('static rendering', () => {
    it('should render TextInput', () => {
      render(<TextInput {...mockTextInputProps} />);
      expect(document.body).toMatchSnapshot();
    });

    it('should render the label with the provided text', () => {
      render(<TextInput {...mockTextInputProps} />);
      expect(screen.getByLabelText('Test label')).toBeInTheDocument();
    });

    it('should render the input with the provided placeholder and value', () => {
      render(<TextInput {...mockTextInputProps} />);
      expect(screen.getByPlaceholderText('Test write a text here')).toHaveValue('Test value');
    });
  });

  describe('interactions', () => {
    it('should call the onChange callback when the input value is changed', () => {
      render(<TextInput {...mockTextInputProps} />);
      const input = screen.getByPlaceholderText('Test write a text here');
      fireEvent.change(input, { target: { value: 'New test value' }});
      expect(mockTextInputProps.onChange).toHaveBeenCalledWith('New test value');
    });
  });
});
