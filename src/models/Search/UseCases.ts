import { ISearch } from "@interfaces/Search";
import { getSearchLocations } from "./Services";

const resultsToShow = +process.env.TOTAL_SEARCH_RESULTS;

export const searchLocations = (query: string | number): Promise<ISearch> =>
  getSearchLocations(query, resultsToShow);
