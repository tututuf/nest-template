import { Module } from '@nestjs/common';
import { GptController } from './gpt.controller';
import { GptService } from './gpt.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatData } from 'src/datasource/chatdata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatData])],
  controllers: [GptController],
  providers: [GptService],
})
export class GptModule {}
