import MainWeatherInfo from "./MainWeatherInfo";
import MultipleDaysWeather from "./MultipleDaysWeather";

const ClimateInfo = ({ forecast }) => {
  const [todayWeather, ...nextDays] = forecast;

  return (
    <div className="w-full">
      <MainWeatherInfo weatherInfo={todayWeather} />
      <div>
        <h2>Next days forecast</h2>
        <MultipleDaysWeather weatherInfo={nextDays} />
      </div>
    </div>
  );
};

export default ClimateInfo;
