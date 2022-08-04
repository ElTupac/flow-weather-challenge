import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import getDefaultLocations from "@utils/getters/getDefaultLocations";
import SearchInput from "./SearchInput";
import OptionCity from "./OptionCity";

const ClimateSelector = ({ defaultOptions }) => {
  const [citySelected, setCitySelected] = useState({
    cityName: null,
  });

  const getComponentDefaultOptions = () =>
    Array.isArray(defaultOptions) && defaultOptions.length
      ? defaultOptions
      : getDefaultLocations();

  const [cityOptions, setCityOptions] = useState(getComponentDefaultOptions());
  const [isSelectingCity, setIsSelectingCity] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const resetSearch = () => {
    setCityOptions(getComponentDefaultOptions());
  };

  const selectNewCity = ({ name, region }) => {
    if (citySelected.cityName !== name)
      setCitySelected({ cityName: `${name}${region ? `, ${region}` : ""}` });
    setIsSelectingCity(false);
    setIsSearching(false);
  };

  useEffect(() => {
    setCityOptions(
      Array.isArray(defaultOptions) && defaultOptions.length
        ? defaultOptions
        : getDefaultLocations()
    );
  }, [defaultOptions]);

  return (
    <section className="xl:w-1/3 md:w-1/2 w-full rounded-lg shadow-lg h-fit p-2 bg-white/[.80] text-brand-accent-main">
      <div
        className={`max-h-9 overflow-hidden m-5 transition-[max-height duration-500${
          isSelectingCity ? " !max-h-screen" : ""
        }`}
      >
        <div className="border-2 border-brand-accent-gray rounded-t">
          {isSearching ? (
            <SearchInput handleResultChanges={setCityOptions} />
          ) : (
            <button
              type="button"
              className="px-2 py-1 w-full text-left relative"
              onClick={() => {
                if (isSelectingCity) setTimeout(resetSearch, 500);
                setIsSelectingCity(!isSelectingCity);
              }}
            >
              {citySelected.cityName || (
                <span className="text-brand-lighten-main/75">
                  Choose a city...
                </span>
              )}
              <ChevronDownIcon
                className={`h-5 w-5 absolute right-1.5 top-1.5 transition-transform duration-500${
                  isSelectingCity ? " rotate-180" : ""
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
        <div className="border-2 border-brand-accent-gray border-t-0 rounded-b">
          <button
            type="button"
            className="px-2 py-1 w-full text-left"
            onClick={() => {
              setIsSearching(!isSearching);
              resetSearch();
            }}
          >
            {!isSearching ? "Search..." : "Cancel"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClimateSelector;
