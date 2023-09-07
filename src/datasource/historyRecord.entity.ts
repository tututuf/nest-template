import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { ChatData } from './chatdata.entity';

@Entity({ name: 'history_record' })
export class HistoryRecord {
  @PrimaryColumn()
  id: number;

  @Column({
    type: 'text',
  })
  message: string;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.history_record)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => ChatData, (chat) => chat.history_record)
  @JoinColumn({ name: 'chat_id' })
  chat_data: ChatData;
}
