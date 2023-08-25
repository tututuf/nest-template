import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ResponseMap,
  ResMessage,
  ResCode,
} from './interface/interceptors.interface';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ResponseMap<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ResponseMap<T>> {
    return next.handle().pipe(
      map((data) => ({
        msg: ResMessage.SUCCESS,
        code: ResCode.SUCCESS,
        data,
      })),
    );
  }
}
