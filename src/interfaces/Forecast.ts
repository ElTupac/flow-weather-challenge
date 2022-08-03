import { ILocation } from "./Location";
import { IClimate } from "./Climate";

export interface IForecast {
  location: ILocation;
  forecast: IClimate[];
}
