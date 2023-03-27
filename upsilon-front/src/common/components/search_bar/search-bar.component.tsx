import React, {
  FormEventHandler,
  ReactElement,
  useCallback,
  useState
} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faSearch);

export interface SearchBarProps {
  placeHolder: string;
  handleOnSubmit: FormEventHandler;
}

export default function SearchBar({ placeHolder= 'Search...', handleOnSubmit }: SearchBarProps): ReactElement {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);
  return (
    <form onSubmit={handleOnSubmit} className="search-bar">
      <input
        className="input-text"
        name="search-bar-input"
        type="text"
        placeholder={placeHolder}
        value={inputValue}
        onChange={handleInputChange}
      />
      <hr className="vertical-line" />
      <button type="submit" className="search-button"><FontAwesomeIcon icon="search" className="search-icon" /></button>
    </form>
  );
}
