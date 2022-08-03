import fetch from "node-fetch";
import { IForecast } from "@interfaces/Forecast";
import parseForecastData from "@utils/parsers/parseForecastData";

const forecastUrl = `${process.env.WEATHER_API_URL}/forecast.json`;

export class Forecast {
  query: string | number;

  constructor(query: string) {
    this.query = query;
  }

  public async getData(): Promise<IForecast> {
    const queryData = [
      `q=${this.query}`,
      `key=${process.env.WEATHER_API_KEY}`,
      `days=${process.env.TOTAL_FORECAST_DAYS}`,
    ];
    const queryString = queryData.join("&");
    const forecastRaw = await fetch(`${forecastUrl}?${queryString}`);
    const forecastJson = await forecastRaw.json();

    return parseForecastData(forecastJson);
  }
}
