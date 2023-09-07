import { ResponseStatus, NormalResponse, ResponseType } from 'src/constansts/types';
interface ResponseConfig<T> {
    data: T;
    type: ResponseType;
    code?: ResponseStatus;
    msg?: string;
}
export declare function GetResponseData<T>(config: ResponseConfig<T>): NormalResponse<T>;
export declare class ConsoleColor {
    static red(str: any): string;
    static green(str: any): string;
    static yellow(str: any): string;
    static blue(str: any): string;
}
export {};
