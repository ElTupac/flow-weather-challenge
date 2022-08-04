import GeolocationButton from "@ui/GeolocationButton";
import CityHeader from "@ui/CityHeader";
import ClimateInfo from "@ui/ClimateInfo";
import ClimateSelector from "@ui/ClimateSelector";

const HomeWrapper = ({
  forecast: { location, forecast },
  search: { results },
}) => (
  <>
    <GeolocationButton
      onChangeLocation={(newLocation) => {
        console.error(newLocation);
      }}
    />
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

export default HomeWrapper;
