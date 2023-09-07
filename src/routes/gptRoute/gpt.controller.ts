import { Controller, Get, Query, Req } from '@nestjs/common';
import { GptService } from './gpt.service';
import { ServerPath } from 'src/constansts';
import { GetResponseData } from 'src/common';
import { NormalResponse, ResponseType } from 'src/constansts/types';
import { ConfigService } from '@nestjs/config';
import { ChatData } from 'src/datasource/chatdata.entity';
import { PageData } from 'src/constansts/types';
import { HistoryRecord } from 'src/datasource/historyRecord.entity';
@Controller(ServerPath + '/gpt')
export class GptController {
  constructor(
    private readonly gptService: GptService,
    private configService: ConfigService,
  ) {}

  @Get('get_history')
  async getHistory(
    @Query('page') page: number,
    @Query('size') size: number,
    @Query('chat_id') chat_id: number,
  ): Promise<NormalResponse<PageData<HistoryRecord>>> {
    const data = await this.gptService
      .getHistoryByChatId(chat_id)
      .page(page, size);
    return GetResponseData({
      data,
      type: ResponseType.SUCCESS,
    });
  }

  @Get('get_chat_list')
  async getChatList(
    @Query('page') page: number,
    @Query('size') size: number,
    @Req() request,
  ): Promise<NormalResponse<PageData<ChatData>>> {
    const data = await this.gptService
      .getChatList(request.user.id)
      .page(page, size);
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
