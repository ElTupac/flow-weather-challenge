import { useEffect, useRef } from "react";
import debounceFunction from "@utils/helpers/debounceFunction";

const SearchInput = ({ handleResultChanges, readonly = false, inputValue }) => {
  const inputProps = { defaultValue: inputValue, name: "city" };
  if (readonly) inputProps.readonly = true;

  const searchOnInput = debounceFunction((e) => {
    const { value } = e.target;
    const searchResults = [];
    for (let i = 0; i < 5; i++) searchResults.push(value);
    handleResultChanges(searchResults);
  }, 2000);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  return <input {...inputProps} ref={inputRef} onInput={searchOnInput} />;
};

export default SearchInput;
