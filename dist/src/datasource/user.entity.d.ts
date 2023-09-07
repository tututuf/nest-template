import { ChatData } from './chatdata.entity';
import { HistoryRecord } from './historyRecord.entity';
export declare enum UserStatus {
    CANCEL = 0,
    ACTIVITY = 1
}
export declare class User {
    id: number;
    username: string;
    password: string;
    nickname: string;
    mark: string;
    real_name: string;
    age: number;
    status: UserStatus;
    created_at: Date;
    chatData: ChatData[];
    history_record: HistoryRecord[];
}
