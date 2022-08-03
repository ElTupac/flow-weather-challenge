import type { NextApiRequest, NextApiResponse } from "next";
import { IForecast } from "@interfaces/Forecast";
import { Forecast } from "@models/Forecast";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IForecast>
) {
  const { query } = req.query as { query: string };
  const forecastData = await new Forecast(query).getForecast();

  return res.status(200).json(forecastData);
}
