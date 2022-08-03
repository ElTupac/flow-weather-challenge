import { IForecast } from "@interfaces/Forecast";
import { getForecastData } from "./Services";

const days = +process.env.TOTAL_FORECAST_DAYS;

export const getForecastNextDays = (
  query: string | number
): Promise<IForecast> => getForecastData(query, days);
