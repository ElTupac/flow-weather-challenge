import { useEffect, useRef, useState } from "react";
import { SearchIcon, ClockIcon } from "@heroicons/react/outline";
import debounceFunction from "@utils/helpers/debounceFunction";

const SearchInput = ({ handleResultChanges, readonly = false, inputValue }) => {
  const [isLoading, setIsLoading] = useState(false);

  const inputProps = {
    defaultValue: inputValue,
    name: "city",
    className: "px-2 py-1 w-full",
    placeholder: "Type your city...",
  };
  if (readonly) inputProps.readonly = true;

  const searchOnInput = debounceFunction((e) => {
    const { value } = e.target;
    if (value && value.length) {
      setIsLoading(true);
      fetch(`/api/search/${encodeURIComponent(value)}`)
        .then((res) => res.json())
        .then(({ results }) => {
          setIsLoading(false);
          handleResultChanges(results);
        });
    }
  }, 500);

  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="relative">
      <input {...inputProps} ref={inputRef} onInput={searchOnInput} />
      {isLoading ? (
        <ClockIcon className="absolute h-5 w-5 right-1.5 top-1.5" />
      ) : (
        <SearchIcon className="absolute h-5 w-5 right-1.5 top-1.5" />
      )}
    </div>
  );
};

export default SearchInput;
