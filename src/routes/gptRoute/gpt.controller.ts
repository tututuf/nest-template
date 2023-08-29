// gpt 路由下的控制层
import { Controller, Get } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ServerPath } from 'src/constansts';
import { ChatInfo } from './interfaces/gpt.interface';
import { GetResponseData } from 'src/common';
import { NormalResponse, ResponseType } from 'src/constansts/types';

@Controller(ServerPath + '/gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}
  @Get('get_chat_history')
  getHello(): NormalResponse<ChatInfo[]> {
    return GetResponseData({
      data: this.gptService.getChatHistory(),
      type: ResponseType.SUCCESS,
    });
  }
}
