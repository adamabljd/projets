import React, { ChangeEventHandler, ReactElement, useCallback, useState } from 'react';

export interface CheckboxProps {
  onChange?: ChangeEventHandler;

}

export default function Checkbox({ onChange }: CheckboxProps): ReactElement {
  const [checkedValue, setCheckedValue] = useState(false);
  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedValue(event.target.checked);
      onChange && onChange(event);
    },
    [onChange]
  );

  return <input type="checkbox" onChange={handleCheckboxChange} className="checkbox-component" checked={checkedValue} />;
}
