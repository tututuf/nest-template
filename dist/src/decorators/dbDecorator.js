"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paginator = void 0;
const common_1 = require("@nestjs/common");
exports.Paginator = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.method === 'GET') {
        console.log(request.query);
    }
    else {
        console.log(request.body);
    }
    return request;
});
//# sourceMappingURL=dbDecorator.js.map