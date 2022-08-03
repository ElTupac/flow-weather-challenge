import type { NextApiRequest, NextApiResponse } from "next";
import { ISearch } from "@interfaces/Search";
import { Search } from "@models/Search";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ISearch>
) {
  const { q } = req.query as { q: string };
  const searchResults = await new Search(q).getResults();

  return res.status(200).json(searchResults);
}
