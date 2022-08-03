import { ISearch } from "@interfaces/Search";
import { searchLocations } from "./UseCases";

class SearchController {
  query: string | number;

  public getResults(): Promise<ISearch> {
    return searchLocations(this.query);
  }
}

export default SearchController;
