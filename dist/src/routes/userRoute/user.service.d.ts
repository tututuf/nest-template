import { User } from 'src/datasource/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserInfoInter } from './types/user.interface';
export declare class UserService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    loginUser(username: string, psw: string): Promise<UserInfoInter>;
}
