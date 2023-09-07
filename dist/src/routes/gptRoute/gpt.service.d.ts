import { Repository } from 'typeorm';
import { ChatData } from 'src/datasource/chatdata.entity';
import { Pagination } from 'src/common/dbExpand';
import { HistoryRecord } from 'src/datasource/historyRecord.entity';
export declare class GptService {
    private chatDataRepository;
    private HistoryRecordRepository;
    constructor(chatDataRepository: Repository<ChatData>, HistoryRecordRepository: Repository<HistoryRecord>);
    getChatList(user_id: number): Pagination<ChatData>;
    getHistoryByChatId(chat_id: number): Pagination<HistoryRecord>;
    getOpenAiMsg(): Promise<string>;
}
