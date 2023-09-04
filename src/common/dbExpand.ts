import { SelectQueryBuilder } from 'typeorm';
import { PageData } from 'src/constansts/types';

export class Pagination<T> {
  public queryBuilder: SelectQueryBuilder<T>;
  constructor(queryBuilder: SelectQueryBuilder<T>) {
    this.queryBuilder = queryBuilder;
  }

  async getPage(page: number, size: number): Promise<T[]> {
    return await this.queryBuilder
      .limit(size)
      .offset((page - 1) * size)
      .getMany();
  }

  async getCount(): Promise<number> {
    return await this.queryBuilder.getCount();
  }

  async page(page: number, size: number): Promise<PageData<T>> {
    const rows = await this.getPage(page, size);
    const total = await this.getCount();
    const pageData = {
      rows,
      total,
    };
    return pageData;
  }
}
