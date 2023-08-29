import { Injectable } from '@nestjs/common';
import { ChatInfo } from './interfaces/gpt.interface';
import { ChatRoles } from './interfaces/gpt.interface';
import openai from 'src/common/ai';
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
