"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseMsg = exports.ResponseType = exports.ResponseStatus = void 0;
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["SUCCESS"] = 200] = "SUCCESS";
    ResponseStatus[ResponseStatus["FAIL"] = 300] = "FAIL";
    ResponseStatus[ResponseStatus["ERROR"] = 400] = "ERROR";
})(ResponseStatus || (exports.ResponseStatus = ResponseStatus = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType["SUCCESS"] = "success";
    ResponseType["FAIL"] = "warning";
    ResponseType["ERROR"] = "error";
})(ResponseType || (exports.ResponseType = ResponseType = {}));
var ResponseMsg;
(function (ResponseMsg) {
    ResponseMsg["SUCCESS"] = "\u64CD\u4F5C\u6210\u529F";
    ResponseMsg["FAIL"] = "\u64CD\u4F5C\u5931\u8D25";
    ResponseMsg["ERROR"] = "\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF";
})(ResponseMsg || (exports.ResponseMsg = ResponseMsg = {}));
//# sourceMappingURL=index.js.map