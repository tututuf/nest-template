import { User } from './user.entity';
import { ChatData } from './chatdata.entity';
export declare class HistoryRecord {
    id: number;
    message: string;
    created_at: Date;
    user: User;
    chat_data: ChatData;
}
