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
exports.GptService = void 0;
const common_1 = require("@nestjs/common");
const ai_1 = require("../../common/ai");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const chatdata_entity_1 = require("../../datasource/chatdata.entity");
const dbExpand_1 = require("../../common/dbExpand");
const historyRecord_entity_1 = require("../../datasource/historyRecord.entity");
let GptService = exports.GptService = class GptService {
    constructor(chatDataRepository, HistoryRecordRepository) {
        this.chatDataRepository = chatDataRepository;
        this.HistoryRecordRepository = HistoryRecordRepository;
    }
    getChatList(user_id) {
        const queryBuilder = this.chatDataRepository
            .createQueryBuilder('chat_data')
            .where('user_id = :user_id', { user_id });
        const pagination = new dbExpand_1.Pagination(queryBuilder);
        return pagination;
    }
    getHistoryByChatId(chat_id) {
        const queryBuilder = this.HistoryRecordRepository.createQueryBuilder('history_record').where('chat_id = :chat_id', { chat_id });
        const pagination = new dbExpand_1.Pagination(queryBuilder);
        return pagination;
    }
    async getOpenAiMsg() {
        const stream = await ai_1.default.chat.completions.create({
            messages: [{ role: 'user', content: '测试测试，你好' }],
            model: 'gpt-3.5-turbo',
            stream: true,
        });
        for await (const part of stream) {
            console.log(part.choices[0].delta);
        }
        return 'success';
    }
};
exports.GptService = GptService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(chatdata_entity_1.ChatData)),
    __param(1, (0, typeorm_1.InjectRepository)(historyRecord_entity_1.HistoryRecord)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GptService);
//# sourceMappingURL=gpt.service.js.map