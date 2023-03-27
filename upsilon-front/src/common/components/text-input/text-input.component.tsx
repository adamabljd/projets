import React, { ReactElement, useCallback, useState } from 'react';

export interface TextInputProps{
  label?: string;
  placeholder?: string;
  value: string;
  onChange?: (value: string) => void;
}

export default function TextInput({ label, placeholder, value, onChange }: TextInputProps): ReactElement {
  const [inputValue, setInputValue] = useState(value);
  const inputId = `${label?.toLowerCase().replace(/\s+/g, '-')}-input`;
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    },
    [onChange]
  );


  return (
    <div className="text-input">
      <label className="text-input__label" htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="text"
        className="text-input__input"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}
