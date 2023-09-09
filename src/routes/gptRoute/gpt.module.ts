import { Module } from '@nestjs/common';
import { GptController } from './gpt.controller';
import { GptService } from './gpt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatData } from 'src/datasource/chatdata.entity';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/guard/auth.guard';
import { HistoryRecord } from 'src/datasource/historyRecord.entity';
import { User } from 'src/datasource/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatData, HistoryRecord, User])],
  controllers: [GptController],
  providers: [
    GptService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class GptModule {}
