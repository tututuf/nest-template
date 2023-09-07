import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/datasource/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserInfoInter } from './types/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async loginUser(username: string, psw: string): Promise<UserInfoInter> {
    const user = await this.usersRepository.findOneBy({
      username,
    });
    if (!user) {
      return;
    }
    const { password, ...res } = user;
    if (password === psw) {
      return {
        ...res,
        token: await this.jwtService.signAsync({
          id: user.id,
          username: user.username,
        }),
      };
    }
    if (user) {
      return {};
    }
  }
}
