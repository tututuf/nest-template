import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ServerPath } from 'src/constansts';
import { NormalResponse, ResponseType } from 'src/constansts/types';
import { GetResponseData } from 'src/common';

@Controller(ServerPath + '/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('login')
  async login(
    @Body('username') username,
    @Body('psw') psw,
  ): Promise<NormalResponse<string>> {
    const login = await this.userService.loginUser(username, psw);
    if (login) {
      return GetResponseData({
        data: '',
        type: ResponseType.SUCCESS,
        msg: '登录成功',
      });
    } else {
      return GetResponseData({
        data: '',
        type: ResponseType.FAIL,
        msg: '账号或密码错误',
      });
    }
  }
}
