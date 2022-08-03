import fetch from "node-fetch";
import { IForecast } from "@interfaces/Forecast";
import parseForecastData from "@utils/parsers/parseForecastData";

const forecastUrl = `${process.env.WEATHER_API_URL}/forecast.json`;

export const getForecastData = async (
  query: string | number,
  days: number
): Promise<IForecast> => {
  const queryData = [
    `q=${query}`,
    `key=${process.env.WEATHER_API_KEY}`,
    `days=${days}`,
  ];
  const queryString = queryData.join("&");
  const forecastRaw = await fetch(`${forecastUrl}?${queryString}`);
  const forecastJson = await forecastRaw.json();

  return parseForecastData(forecastJson);
};
