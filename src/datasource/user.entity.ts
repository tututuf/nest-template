import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  CreateDateColumn,
} from 'typeorm';
import { ChatData } from './chatdata.entity';
import { HistoryRecord } from './historyRecord.entity';
export enum UserStatus {
  CANCEL, // 已注销账号
  ACTIVITY, // 活跃账号
}
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    width: 100,
  })
  username: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  nickname: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  mark: string;

  @Column({
    nullable: true,
  })
  real_name: string;

  @Column({
    type: 'tinyint',
    width: 3,
  })
  age: number;

  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVITY,
  })
  status: UserStatus;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => ChatData, (chat) => chat.user)
  chatData: ChatData[];

  @OneToMany(() => HistoryRecord, (history) => history.user)
  history_record: HistoryRecord[];
}
