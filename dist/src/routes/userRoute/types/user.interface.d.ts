import { User } from 'src/datasource/user.entity';
export interface UserInfoInter extends Partial<User> {
    token?: string;
}
