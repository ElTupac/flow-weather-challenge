import MainWeatherInfo from "./MainWeatherInfo";
import MultipleDaysWeather from "./MultipleDaysWeather";

const ClimateInfo = ({ forecast }) => {
  const [todayWeather, ...nextDays] = forecast;

  return (
    <div className="w-full">
      <MainWeatherInfo weatherInfo={todayWeather} />
      <div>
        <h2 className="text-xl mb-2 font-bold">Next days forecast</h2>
        <MultipleDaysWeather weatherInfo={nextDays} />
      </div>
    </div>
  );
};

export default ClimateInfo;
