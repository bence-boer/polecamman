export class QueryBuilder {
  private readonly serverURL: string;
  private readonly endpoint: string;
  private params: Record<string, string | number> = {};
  private sortPriority = 0;

  constructor(serverURL: string, endpoint: string) {
    this.serverURL = serverURL;
    this.endpoint = endpoint;
  }

  setParam(key: string, value: string | number): this {
    this.params[key] = value;
    return this;
  }

  setLocale(locale: string): this {
    this.params['locale'] = locale;
    return this;
  }

  setPopulate(populate: string): this {
    this.params['populate'] = populate;
    return this;
  }

  setSort(sort: string, order: 'asc' | 'desc' = 'asc'): this {
    this.params[`sort[${this.sortPriority++}]`] = `${sort}:${order}`;
    return this;
  }

  setPagination(start: number, limit: number): this {
    this.params['pagination[start]'] = start;
    this.params['pagination[limit]'] = limit;
    return this;
  }

  public build(): string {
    const params = new URLSearchParams();
    for (const key in this.params) {
      params.append(key, this.params[key].toString());
    }
    return `${this.serverURL}${this.endpoint}?${params.toString()}`;
  }
}
