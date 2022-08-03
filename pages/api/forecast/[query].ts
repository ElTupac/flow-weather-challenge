import type { NextApiRequest, NextApiResponse } from "next";
import { IForecast } from "@interfaces/Forecast";
import { Forecast } from "@models/Forecast";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IForecast>
) {
  const { query } = req.query as { query: string };
  const forecastObject = new Forecast(query);
  const forecastData = await forecastObject.getData();

  return res.status(200).json(forecastData);
}
