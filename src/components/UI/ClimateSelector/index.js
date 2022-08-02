import { useState } from "react";
import SearchInput from "./SearchInput";

const ClimateSelector = ({ selectedDefault }) => {
  const [citySelected, setCitySelected] = useState({
    cityName: selectedDefault,
  });
  const [cityOptions, setCityOptions] = useState([
    "New York",
    "Atlanta",
    "Georgetown",
    "Washington",
    "Buenos Aires",
  ]);
  const [isSelectingCity, setIsSelectingCity] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const selectNewCity = (cityName) => {
    if (citySelected.cityName !== cityName) setCitySelected({ cityName });
  };

  return (
    <div className="container mx-auto md:flex">
      <div className="md:w-1/3">
        <div
          className={`max-h-7 overflow-hidden transition-[max-height duration-500${
            isSelectingCity ? " !max-h-screen" : ""
          }`}
        >
          <div className="border-2 rounded-t">
            {isSearching ? (
              <SearchInput handleResultChanges={setCityOptions} />
            ) : (
              <button type="button" onClick={() => setIsSelectingCity(true)}>
                {citySelected.cityName}
              </button>
            )}
          </div>
          {cityOptions.map((city, index) => (
            <div
              className={`border-2 border-t-0${
                index === cityOptions.length - 1 && isSearching
                  ? " rounded-b"
                  : ""
              }`}
              key={`city-${city}`}
            >
              <button type="button" onClick={() => selectNewCity(city)}>
                {city}
              </button>
            </div>
          ))}
          {!isSearching && (
            <div className="border-2 border-t-0 rounded-b">
              <button
                type="button"
                onClick={() => setIsSearching(!isSearching)}
              >
                Search...
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="md:w-2/3">
        <p>Climate info</p>
      </div>
    </div>
  );
};

export default ClimateSelector;
