import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ConsoleColor } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const httpPort = configService.get<number>('http.port');
  await app.listen(httpPort);
  const border = ConsoleColor.green('--------------');
  const tips = '服务器已启动, 端口号：';
  const port = ConsoleColor.yellow(httpPort);
  console.log(border + '  ' + tips + port + '  ' + border);
}

bootstrap();
