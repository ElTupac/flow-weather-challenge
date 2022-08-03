import { IForecast } from "@interfaces/Forecast";

const parseForecastData = (forecastData: any): IForecast => {
  const {
    location,
    forecast: { forecastday },
  } = forecastData;

  return {
    location,
    forecast: forecastday.map(({ date, day }) => ({ date, day })),
  };
};

export default parseForecastData;
