import { SelectQueryBuilder } from 'typeorm';
import { PageData } from 'src/constansts/types';
export declare class Pagination<T> {
    queryBuilder: SelectQueryBuilder<T>;
    constructor(queryBuilder: SelectQueryBuilder<T>);
    getPage(page: number, size: number): Promise<T[]>;
    getCount(): Promise<number>;
    getSql(): string;
    page(page: number, size: number): Promise<PageData<T>>;
}
