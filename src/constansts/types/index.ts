export enum ResponseStatus {
  SUCCESS = 200,
  FAIL = 300,
  ERROR = 400,
}

export enum ResponseType {
  SUCCESS = 'success',
  FAIL = 'warning',
  ERROR = 'error',
}

export enum ResponseMsg {
  SUCCESS = '操作成功',
  FAIL = '操作失败',
  ERROR = '服务器发生错误',
}

export interface NormalResponse<T> {
  msg: string;
  data: T;
  code: ResponseStatus;
  type: ResponseType;
}

export interface PageData<T> {
  rows: T[];
  total: number;
}
