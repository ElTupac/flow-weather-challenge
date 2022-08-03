import SearchController from "./Controller";

export class Search extends SearchController {
  constructor(query: string | number) {
    super();
    this.query = query;
  }
}
