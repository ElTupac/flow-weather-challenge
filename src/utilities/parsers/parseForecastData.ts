import { IForecast } from "@interfaces/Forecast";

const parseForecastData = (forecastData: any): IForecast => {
  const {
    location,
    forecast: { forecastday },
  } = forecastData;

  return {
    location,
    forecast: forecastday.map(({ date, day }) => {
      const dayForecast = { date, day };
      dayForecast.date += ` ${location.localtime.split(" ")[1]}`;
      return dayForecast;
    }),
  };
};

export default parseForecastData;
