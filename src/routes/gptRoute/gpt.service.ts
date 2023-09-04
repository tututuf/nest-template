import { Injectable } from '@nestjs/common';
// import { ChatInfo } from './interfaces/gpt.interface';
// import { ChatRoles } from './interfaces/gpt.interface';
import openai from 'src/common/ai';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatData } from 'src/datasource/chatdata.entity';
import { Pagination } from 'src/common/dbExpand';
// import { Paginator } from 'src/decorators/dbDecorator';

@Injectable()
export class GptService {
  constructor(
    @InjectRepository(ChatData)
    private chatDataRepository: Repository<ChatData>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getChatHistory(): Pagination<ChatData> {
    const queryBuilder =
      this.chatDataRepository.createQueryBuilder('chat_data');
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
