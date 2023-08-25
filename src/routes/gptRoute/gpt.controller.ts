// gpt 路由下的控制层
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ServerPath } from 'src/constansts';
import { ChatInfo } from './interfaces/gpt.interface';
import { ResponseInterceptor } from 'src/interceptors';

@Controller(ServerPath + '/gpt')
@UseInterceptors(ResponseInterceptor)
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Get('get_chat_history')
  getHello(): ChatInfo[] {
    return this.gptService.getChatHistory();
  }
}
