import React from 'react';
import { render, fireEvent, screen, RenderResult } from '@testing-library/react';
import DateInput, { DateInputProps } from './date-input.component';

const mockDateInputProps: DateInputProps = {
  label: 'Select a date',
  placeHolder: 'Select a date'
};

function renderDateInput(props: DateInputProps): RenderResult {
  return render(<DateInput {...props} />);
}

describe('DateInput', () => {
  it('should call the handleDateChange function when a new date is selected', () => {
    renderDateInput(mockDateInputProps);

    const input = screen.getByTitle('Select a date');

    fireEvent.change(input, { target: { value: '03/24/2022' }});

    expect(input).toHaveValue('03/24/2022');
  });
});
