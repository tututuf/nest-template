import {
  ResponseStatus,
  NormalResponse,
  ResponseType,
  ResponseMsg,
} from 'src/constansts/types';

interface ResponseConfig<T> {
  data: T;
  type: ResponseType;
  code?: ResponseStatus;
  msg?: string;
}

export function GetResponseData<T>(
  config: ResponseConfig<T>,
): NormalResponse<T> {
  let { code, msg } = config;
  const { data, type } = config;
  if (config.type === ResponseType.SUCCESS) {
    code = code || ResponseStatus.SUCCESS;
    msg = msg || ResponseMsg.SUCCESS;
  } else if (config.type === ResponseType.FAIL) {
    code = code || ResponseStatus.FAIL;
    msg = msg || ResponseMsg.FAIL;
  } else if (config.type === ResponseType.ERROR) {
    code = code || ResponseStatus.ERROR;
    msg = msg || ResponseMsg.ERROR;
  }
  return {
    data,
    type,
    code,
    msg,
  };
}

export class ConsoleColor {
  static red(str: any) {
    return getColor(str, '\x1b[31m');
  }
  static green(str: any) {
    return getColor(str, '\x1b[32m');
  }
  static yellow(str: any) {
    return getColor(str, '\x1b[33m');
  }
  static blue(str: any) {
    return getColor(str, '\x1b[34m');
  }
}
function getColor(str: any, pre: string): string {
  const RESET = '\x1b[0m';
  return pre + str + RESET;
}
