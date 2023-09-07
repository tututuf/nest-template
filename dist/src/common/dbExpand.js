"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
class Pagination {
    constructor(queryBuilder) {
        this.queryBuilder = queryBuilder;
    }
    async getPage(page, size) {
        if (!page || !size) {
            return await this.queryBuilder.getMany();
        }
        return await this.queryBuilder
            .limit(size)
            .offset((page - 1) * size)
            .getMany();
    }
    async getCount() {
        return await this.queryBuilder.getCount();
    }
    getSql() {
        return this.queryBuilder.getSql();
    }
    async page(page, size) {
        const rows = await this.getPage(page, size);
        const total = await this.getCount();
        const pageData = {
            rows,
            total,
        };
        return pageData;
    }
}
exports.Pagination = Pagination;
//# sourceMappingURL=dbExpand.js.map