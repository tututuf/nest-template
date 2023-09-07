import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { HistoryRecord } from './historyRecord.entity';

@Entity({ name: 'chat_data' })
export class ChatData {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  title: string;

  @ManyToOne(() => User, (user) => user.chatData)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => HistoryRecord, (history) => history.chat_data)
  history_record: HistoryRecord[];
}
