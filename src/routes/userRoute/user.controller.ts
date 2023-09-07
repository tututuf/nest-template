import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ServerPath } from 'src/constansts';
import { NormalResponse, ResponseType } from 'src/constansts/types';
import { GetResponseData } from 'src/common';
import { User } from 'src/datasource/user.entity';
import { Public } from 'src/guard/auth.guard';

@Controller(ServerPath + '/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Public()
  @Post('login')
  async login(
    @Body('username') username,
    @Body('psw') psw,
  ): Promise<NormalResponse<Partial<User>>> {
    const user = await this.userService.loginUser(username, psw);
    if (!user) {
      return GetResponseData({
        data: user,
        type: ResponseType.FAIL,
        msg: '用户名不存在',
      });
    }
    if (user.status === 1) {
      return GetResponseData({
        data: user,
        type: ResponseType.SUCCESS,
        msg: '登录成功',
      });
    }
    return GetResponseData({
      data: user,
      type: ResponseType.FAIL,
      msg: '用户密码错误',
    });
  }
}
