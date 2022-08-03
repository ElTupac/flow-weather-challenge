import WeatherLine from "./WeatherLine";

const MultipleDaysWeather = ({ weatherInfo = [] }) => (
  <div>
    {weatherInfo.map((weather) => (
      <WeatherLine weather={weather} key={`forecast-${weather.date}`} />
    ))}
  </div>
);

export default MultipleDaysWeather;
