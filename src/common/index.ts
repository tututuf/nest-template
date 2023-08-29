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
// export
