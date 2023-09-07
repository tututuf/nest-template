import { UserService } from './user.service';
import { NormalResponse } from 'src/constansts/types';
import { User } from 'src/datasource/user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    login(username: any, psw: any): Promise<NormalResponse<Partial<User>>>;
}
