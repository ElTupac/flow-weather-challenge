import { useState } from "react";

const ClimateSelector = ({ selectedDefault }) => {
  const [citySelected, setCitySelected] = useState({
    cityName: selectedDefault,
  });
  const [cityOptions] = useState([
    "New York",
    "Atlanta",
    "Georgetown",
    "Washington",
    "Buenos Aires",
  ]);

  const selectNewCity = (cityName) => {
    if (citySelected.cityName !== cityName) setCitySelected({ cityName });
  };

  return (
    <div className="container mx-auto md:flex">
      <div className="md:w-1/3">
        <div>
          <p>{citySelected.cityName}</p>
        </div>
        <div>
          {cityOptions.map((city) => (
            <button
              type="button"
              key={`city-${city}`}
              onClick={() => selectNewCity(city)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="md:w-2/3">
        <p>Climate info</p>
      </div>
    </div>
  );
};

export default ClimateSelector;
