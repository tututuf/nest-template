import { Module } from '@nestjs/common';
import { GptModule } from './routes/gptRoute/gpt.module';

@Module({
  imports: [GptModule],
})
export class AppModule {}
