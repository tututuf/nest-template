import { Module } from '@nestjs/common';
import { GptModule } from './routes/gptRoute/gpt.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';
import { SqlOrmModule } from './modules/sqlorm.module';

@Module({
  imports: [
    GptModule,
    SqlOrmModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class AppModule {}
