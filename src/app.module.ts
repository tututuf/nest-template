import { Module } from '@nestjs/common';
import { GptModule } from './routes/gptRoute/gpt.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';
import { SqlOrmModule } from './datasource/sqlorm.module';
import { UserModule } from './routes/userRoute/user.module';
import { DataSource } from 'typeorm';
@Module({
  imports: [
    GptModule,
    SqlOrmModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
