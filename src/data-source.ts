import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from './datasource/user.entity';
import { ChatData } from './datasource/chatdata.entity';
import { HistoryRecord } from './datasource/historyRecord.entity';
import config from '../config/config';

const conf = config();

export const AppDataSource = new DataSource({
  type: conf.db.remote.use, // 数据库 "mysql" / "mariadb" 之类
  host: conf.db.remote.ip, // 数据库ip
  port: conf.db.remote.port, // 端口号
  username: conf.db.remote.root, // 连接数据库用户名
  password: conf.db.remote.psw, //连接数据库用户密码
  database: conf.db.remote.database, // 数据库名称
  synchronize: true,
  logging: false,
  entities: [User, ChatData, HistoryRecord], // 这些都是导入的实例
  migrations: [],
  subscribers: [],
});
