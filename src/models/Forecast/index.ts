import ForecastController from "./Controller";

export class Forecast extends ForecastController {
  constructor(query: string | number) {
    super();
    this.query = query;
  }
}
