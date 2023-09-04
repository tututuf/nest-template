import { Controller, Get, Query } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ServerPath } from 'src/constansts';
// import { ChatInfo } from './interfaces/gpt.interface';
import { GetResponseData } from 'src/common';
import { NormalResponse, ResponseType } from 'src/constansts/types';
import { ConfigService } from '@nestjs/config';
// import { Pagination } from 'src/common/dbExpand';
import { ChatData } from 'src/datasource/chatdata.entity';
import { PageData } from 'src/constansts/types';

@Controller(ServerPath + '/gpt')
export class GptController {
  constructor(
    private readonly gptService: GptService,
    private configService: ConfigService,
  ) {}

  @Get('hello')
  sayHello(): string {
    const data = {
      db_user: this.configService.get<string>('http.host'),
      dbhost: this.configService.get<string>('http.port'),
      db_port: this.configService.get<number>('db.postgres.database'),
      server_port: this.configService.get<number>('db.sqlite.database'),
    };
    console.log(data);

    return '1231';
  }

  @Get('get_chat_history')
  async getChatHistory(
    @Query('page') page: number,
    @Query('size') size: number,
  ): Promise<NormalResponse<PageData<ChatData>>> {
    const data = await this.gptService.getChatHistory().page(page, size);
    return GetResponseData({
      data,
      type: ResponseType.SUCCESS,
    });
  }

  @Get('chat')
  async getChat(): Promise<string> {
    return await this.gptService.getOpenAiMsg();
  }
}
