import { Injectable } from '@nestjs/common';
import { ChatInfo } from './interfaces/gpt.interface';
import { ChatRoles } from './interfaces/gpt.interface';
@Injectable()
export class GptService {
  getHello(): string {
    return 'Hello World!';
  }
  getChatHistory(): ChatInfo[] {
    return [
      {
        from: ChatRoles.Gpt, // 来自谁的消息
        to: ChatRoles.Client, // 发送给谁的消息
        content: Buffer.from('Hello, World'), // 具体内容
        createDate: '12311', // 发送时间
      },
    ];
  }
}
