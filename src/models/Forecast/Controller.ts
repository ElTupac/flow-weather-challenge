import { IForecast } from "@interfaces/Forecast";
import { getForecastNextDays } from "./UseCases";

class ForecastController {
  query: string | number;

  public getForecast(): Promise<IForecast> {
    return getForecastNextDays(this.query);
  }
}

export default ForecastController;
