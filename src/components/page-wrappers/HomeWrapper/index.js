import GeolocationButton from "@ui/GeolocationButton";
import CityHeader from "@ui/CityHeader";
import ClimateInfo from "@ui/ClimateInfo";
import ClimateSelector from "@ui/ClimateSelector";
import { useState } from "react";

const HomeWrapper = (props) => {
  const parsePageProps = ({
    forecast: { forecast, location },
    search: { results },
  }) => ({ location, forecast, results });

  const [{ location, forecast, results }, setHomePageDate] = useState(
    parsePageProps(props)
  );

  const handleChangeLocation = async ({ latitude, longitude }) => {
    const query = `${latitude},${longitude}`;
    const [forecastRaw, searchRaw] = await Promise.all([
      fetch(`/api/forecast/${query}`),
      fetch(`/api/search/${query}`),
    ]);
    const [forecastResult, searchResults] = await Promise.all([
      forecastRaw.json(),
      searchRaw.json(),
    ]);
    const pageObject = {
      search: searchResults,
      forecast: forecastResult,
    };
    setHomePageDate(parsePageProps(pageObject));
  };

  return (
    <>
      <GeolocationButton onChangeLocation={handleChangeLocation} />
      <div className="container mx-auto flex flex-col gap-4 text-white">
        {location && Array.isArray(forecast) && forecast.length && (
          <>
            <CityHeader cityInfo={location} />
            <ClimateInfo forecast={forecast} />
          </>
        )}
        <div className="flex justify-center">
          <ClimateSelector defaultOptions={results} />
        </div>
      </div>
    </>
  );
};

export default HomeWrapper;
