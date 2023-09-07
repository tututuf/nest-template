import { User } from './user.entity';
import { HistoryRecord } from './historyRecord.entity';
export declare class ChatData {
    id: number;
    created_at: Date;
    title: string;
    user: User;
    history_record: HistoryRecord[];
}
