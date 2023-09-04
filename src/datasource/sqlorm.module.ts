import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

type customDbType = 'mysql' | 'mariadb';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return {
          type: config.get<customDbType>('db.remote.use'),
          host: config.get<string>('db.remote.ip'),
          port: config.get<number>('db.remote.port'),
          username: config.get<string>('db.remote.root'),
          password: config.get<string>('db.remote.psw'),
          database: config.get<string>('db.remote.database'),
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class SqlOrmModule {
  constructor() {}
}
