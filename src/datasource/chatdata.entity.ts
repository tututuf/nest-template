import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'chat_data' })
export class ChatData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  message: string;

  @Column()
  create_date: string;
}
