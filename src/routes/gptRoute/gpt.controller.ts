// gpt 路由下的控制层
import { Controller, Get } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ServerPath } from 'src/constansts';
import { ChatInfo } from './interfaces/gpt.interface';
import { GetResponseData } from 'src/common';
import { NormalResponse, ResponseType } from 'src/constansts/types';
import { ConfigService } from '@nestjs/config';

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
  getChatHistory(): NormalResponse<ChatInfo[]> {
    console.log(this.configService.get<string>('DATABASE_USER'));

    return GetResponseData({
      data: this.gptService.getChatHistory(),
      type: ResponseType.SUCCESS,
    });
  }

  @Get('chat')
  async getChat(): Promise<string> {
    return await this.gptService.getOpenAiMsg();
  }
}
