import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/** 分页修饰器 */
export const Paginator = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    if (request.method === 'GET') {
      console.log(request.query);
    } else {
      console.log(request.body);
    }
    return request;
  },
);
