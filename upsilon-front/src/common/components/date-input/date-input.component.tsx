import React, { ReactElement, useCallback, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

export interface DateInputProps {
  label?: string;
  placeHolder: string;
}

export default function DateInput({ label, placeHolder }: DateInputProps): ReactElement {
  const [selectedDate, setSelectedDate] = useState<Date | null>( new Date() || null);

  const handleDateChange = useCallback((date: Date | null) => {
    setSelectedDate(date);
  }, []);

  return (
    <div className="DateInput">
      {label && <label className="DateInput__label">{label}</label>}
      <DatePicker
        className="DateInput__input"
        placeholderText={placeHolder}
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        title="Select a date"
      />
    </div>
  );
}

