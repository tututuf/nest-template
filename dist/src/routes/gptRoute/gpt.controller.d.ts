import { GptService } from './gpt.service';
import { NormalResponse } from 'src/constansts/types';
import { ConfigService } from '@nestjs/config';
import { ChatData } from 'src/datasource/chatdata.entity';
import { PageData } from 'src/constansts/types';
import { HistoryRecord } from 'src/datasource/historyRecord.entity';
export declare class GptController {
    private readonly gptService;
    private configService;
    constructor(gptService: GptService, configService: ConfigService);
    getHistory(page: number, size: number, chat_id: number): Promise<NormalResponse<PageData<HistoryRecord>>>;
    getChatList(page: number, size: number, request: any): Promise<NormalResponse<PageData<ChatData>>>;
    getChat(): Promise<string>;
}
