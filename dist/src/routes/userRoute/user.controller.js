"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const constansts_1 = require("../../constansts");
const types_1 = require("../../constansts/types");
const common_2 = require("../../common");
const auth_guard_1 = require("../../guard/auth.guard");
let UserController = exports.UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async login(username, psw) {
        const user = await this.userService.loginUser(username, psw);
        if (!user) {
            return (0, common_2.GetResponseData)({
                data: user,
                type: types_1.ResponseType.FAIL,
                msg: '用户名不存在',
            });
        }
        if (user.status === 1) {
            return (0, common_2.GetResponseData)({
                data: user,
                type: types_1.ResponseType.SUCCESS,
                msg: '登录成功',
            });
        }
        return (0, common_2.GetResponseData)({
            data: user,
            type: types_1.ResponseType.FAIL,
            msg: '用户密码错误',
        });
    }
};
__decorate([
    (0, auth_guard_1.Public)(),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)('username')),
    __param(1, (0, common_1.Body)('psw')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)(constansts_1.ServerPath + '/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map