import { useEffect, useRef } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import debounceFunction from "@utils/helpers/debounceFunction";

const SearchInput = ({ handleResultChanges, readonly = false, inputValue }) => {
  const inputProps = {
    defaultValue: inputValue,
    name: "city",
    className: "px-2 py-1 w-full",
  };
  if (readonly) inputProps.readonly = true;

  const searchOnInput = debounceFunction((e) => {
    const { value } = e.target;
    const searchResults = [];
    for (let i = 0; i < 5; i++) searchResults.push(value);
    handleResultChanges(searchResults);
  }, 2000);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="relative">
      <input {...inputProps} ref={inputRef} onInput={searchOnInput} />
      <SearchIcon className="absolute h-5 w-5 right-1.5 top-1.5" />
    </div>
  );
};

export default SearchInput;
