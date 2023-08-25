export enum ResCode {
  SUCCESS = 200,
  ERROR = 400,
  FAIL = 500,
}

export enum ResMessage {
  SUCCESS = '操作成功',
  FAIL = '操作失败',
}

export interface ResponseMap<T> {
  msg: ResMessage | string;
  data: T;
  code: ResCode;
}
