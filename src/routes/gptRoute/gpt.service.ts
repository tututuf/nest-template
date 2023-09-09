import { Injectable } from '@nestjs/common';
import openai from 'src/common/ai';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatData } from 'src/datasource/chatdata.entity';
import { Pagination } from 'src/common/dbExpand';
import { HistoryRecord } from 'src/datasource/historyRecord.entity';

@Injectable()
export class GptService {
  constructor(
    @InjectRepository(ChatData)
    private chatDataRepository: Repository<ChatData>,

    @InjectRepository(HistoryRecord)
    private HistoryRecordRepository: Repository<HistoryRecord>,
  ) {}

  getChatList(user_id: number): Pagination<ChatData> {
    const queryBuilder = this.chatDataRepository
      .createQueryBuilder('chat_data')
      .where('user_id = :user_id', { user_id });
    const pagination = new Pagination(queryBuilder);
    return pagination;
  }

  getHistoryByChatId(chat_id: number): Pagination<HistoryRecord> {
    const queryBuilder = this.HistoryRecordRepository.createQueryBuilder(
      'history_record',
    )
      .leftJoinAndSelect('history_record.user', 'user')
      .where('chat_id = :chat_id', { chat_id })
      .select([
        'history_record.id',
        'history_record.message',
        'history_record.created_at',
        'user.id',
        'user.status',
        'user.nickname',
      ]);
    const pagination = new Pagination(queryBuilder);
    return pagination;
  }

  async getOpenAiMsg(): Promise<string> {
    const stream = await openai.chat.completions.create({
      messages: [{ role: 'user', content: '测试测试，你好' }],
      model: 'gpt-3.5-turbo',
      stream: true,
    });
    for await (const part of stream) {
      console.log(part.choices[0].delta);
    }
    return 'success';
  }
}
