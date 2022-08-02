import { useState } from "react";
import SearchInput from "./SearchInput";
import OptionCity from "./OptionCity";

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
    <section className="md:w-1/3 rounded-lg shadow-lg h-fit">
      <div
        className={`max-h-7 overflow-hidden m-5 transition-[max-height duration-500${
          isSelectingCity ? " !max-h-screen" : ""
        }`}
      >
        <div className="border-2 rounded-t">
          {isSearching ? (
            <SearchInput handleResultChanges={setCityOptions} />
          ) : (
            <button
              type="button"
              className="px-2 py-1"
              onClick={() => setIsSelectingCity(true)}
            >
              {citySelected.cityName}
            </button>
          )}
        </div>
        {cityOptions.map((city) => (
          <OptionCity
            onSelect={selectNewCity}
            key={`city-${city}`}
            cityName={city}
          />
        ))}
        <div className="border-2 border-t-0 rounded-b">
          <button
            type="button"
            className="px-2 py-1"
            onClick={() => setIsSearching(!isSearching)}
          >
            {!isSearching ? "Search..." : "Cancel"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClimateSelector;
