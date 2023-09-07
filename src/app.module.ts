import { Module } from '@nestjs/common';
import { GptModule } from './routes/gptRoute/gpt.module';
import { ConfigModule } from '@nestjs/config';
import config from '../config/config';
import { SqlOrmModule } from './datasource/sqlorm.module';
import { UserModule } from './routes/userRoute/user.module';
import { DataSource } from 'typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstants } from './constansts';
@Module({
  imports: [
    GptModule,
    SqlOrmModule,
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    JwtModule.register({
      global: true,
      secret: JwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
