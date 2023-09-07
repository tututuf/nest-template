export declare enum ResponseStatus {
    SUCCESS = 200,
    FAIL = 300,
    ERROR = 400
}
export declare enum ResponseType {
    SUCCESS = "success",
    FAIL = "warning",
    ERROR = "error"
}
export declare enum ResponseMsg {
    SUCCESS = "\u64CD\u4F5C\u6210\u529F",
    FAIL = "\u64CD\u4F5C\u5931\u8D25",
    ERROR = "\u670D\u52A1\u5668\u53D1\u751F\u9519\u8BEF"
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
