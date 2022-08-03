import fetch from "node-fetch";
import { ISearch } from "@interfaces/Search";
import { ISearchResult } from "@interfaces/SearchResult";

const searchUrl = `${process.env.WEATHER_API_URL}/search.json`;

export const getSearchLocations = async (
  query: string | number,
  resultsLimit: number = 5
): Promise<ISearch> => {
  const queryData = [`q=${query}`, `key=${process.env.WEATHER_API_KEY}`];
  const queryString = queryData.join("&");
  const searchRaw = await fetch(`${searchUrl}?${queryString}`);
  const searchJson = (await searchRaw.json()) as ISearchResult[];
  const searchResults: ISearch = {
    query,
    results: searchJson.splice(0, resultsLimit),
  };

  return searchResults;
};
