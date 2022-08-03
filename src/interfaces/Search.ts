import { ISearchResult } from "./SearchResult";

export interface ISearch {
  query: string | number;
  results: ISearchResult[];
}
