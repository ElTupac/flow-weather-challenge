import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import getDefaultLocations from "@utils/getters/getDefaultLocations";
import SearchInput from "./SearchInput";
import OptionCity from "./OptionCity";

const ClimateSelector = ({ defaultOptions }) => {
  const [citySelected, setCitySelected] = useState({
    cityName: null,
  });
  const [cityOptions, setCityOptions] = useState(
    Array.isArray(defaultOptions) ? defaultOptions : getDefaultLocations()
  );
  const [isSelectingCity, setIsSelectingCity] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const selectNewCity = ({ name, region }) => {
    if (citySelected.cityName !== name)
      setCitySelected({ cityName: `${name}${region ? `, ${region}` : ""}` });
    setIsSelectingCity(false);
    setIsSearching(false);
  };

  return (
    <section className="xl:w-1/3 md:w-1/2 rounded-lg shadow-lg h-fit p-2">
      <div
        className={`max-h-9 overflow-hidden m-5 transition-[max-height duration-500${
          isSelectingCity ? " !max-h-screen" : ""
        }`}
      >
        <div className="border-2 rounded-t">
          {isSearching ? (
            <SearchInput handleResultChanges={setCityOptions} />
          ) : (
            <button
              type="button"
              className="px-2 py-1 w-full text-left relative"
              onClick={() => setIsSelectingCity(!isSelectingCity)}
            >
              {citySelected.cityName || "Choose a city..."}
              <ChevronUpIcon
                className={`h-5 w-5 absolute right-1.5 top-1.5 transition-transform duration-500${
                  isSelectingCity ? " -rotate-180" : ""
                }`}
              />
            </button>
          )}
        </div>
        {cityOptions.map((city) => (
          <OptionCity
            onSelect={selectNewCity}
            key={`city-${city.url}`}
            cityData={city}
          />
        ))}
        <div className="border-2 border-t-0 rounded-b">
          <button
            type="button"
            className="px-2 py-1 w-full text-left"
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
