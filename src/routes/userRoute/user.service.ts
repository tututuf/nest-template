import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/datasource/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async loginUser(username: string, psw: string): Promise<boolean> {
    const user = await this.usersRepository.findOneBy({
      username,
      password: psw,
      status: 1,
    });
    if (user) {
      return true;
    } else {
      return false;
    }
  }
}
