"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleColor = exports.GetResponseData = void 0;
const types_1 = require("../constansts/types");
function GetResponseData(config) {
    let { code, msg } = config;
    const { data, type } = config;
    if (config.type === types_1.ResponseType.SUCCESS) {
        code = code || types_1.ResponseStatus.SUCCESS;
        msg = msg || types_1.ResponseMsg.SUCCESS;
    }
    else if (config.type === types_1.ResponseType.FAIL) {
        code = code || types_1.ResponseStatus.FAIL;
        msg = msg || types_1.ResponseMsg.FAIL;
    }
    else if (config.type === types_1.ResponseType.ERROR) {
        code = code || types_1.ResponseStatus.ERROR;
        msg = msg || types_1.ResponseMsg.ERROR;
    }
    return {
        data,
        type,
        code,
        msg,
    };
}
exports.GetResponseData = GetResponseData;
class ConsoleColor {
    static red(str) {
        return getColor(str, '\x1b[31m');
    }
    static green(str) {
        return getColor(str, '\x1b[32m');
    }
    static yellow(str) {
        return getColor(str, '\x1b[33m');
    }
    static blue(str) {
        return getColor(str, '\x1b[34m');
    }
}
exports.ConsoleColor = ConsoleColor;
function getColor(str, pre) {
    const RESET = '\x1b[0m';
    return pre + str + RESET;
}
//# sourceMappingURL=index.js.map