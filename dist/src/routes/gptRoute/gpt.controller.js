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
exports.GptController = void 0;
const common_1 = require("@nestjs/common");
const gpt_service_1 = require("./gpt.service");
const constansts_1 = require("../../constansts");
const common_2 = require("../../common");
const types_1 = require("../../constansts/types");
const config_1 = require("@nestjs/config");
let GptController = exports.GptController = class GptController {
    constructor(gptService, configService) {
        this.gptService = gptService;
        this.configService = configService;
    }
    async getHistory(page, size, chat_id) {
        const data = await this.gptService
            .getHistoryByChatId(chat_id)
            .page(page, size);
        return (0, common_2.GetResponseData)({
            data,
            type: types_1.ResponseType.SUCCESS,
        });
    }
    async getChatList(page, size, request) {
        const data = await this.gptService
            .getChatList(request.user.id)
            .page(page, size);
        return (0, common_2.GetResponseData)({
            data,
            type: types_1.ResponseType.SUCCESS,
        });
    }
    async getChat() {
        return await this.gptService.getOpenAiMsg();
    }
};
__decorate([
    (0, common_1.Get)('get_history'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Query)('chat_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Promise)
], GptController.prototype, "getHistory", null);
__decorate([
    (0, common_1.Get)('get_chat_list'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('size')),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], GptController.prototype, "getChatList", null);
__decorate([
    (0, common_1.Get)('chat'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GptController.prototype, "getChat", null);
exports.GptController = GptController = __decorate([
    (0, common_1.Controller)(constansts_1.ServerPath + '/gpt'),
    __metadata("design:paramtypes", [gpt_service_1.GptService,
        config_1.ConfigService])
], GptController);
//# sourceMappingURL=gpt.controller.js.map