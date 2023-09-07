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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryRecord = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const chatdata_entity_1 = require("./chatdata.entity");
let HistoryRecord = exports.HistoryRecord = class HistoryRecord {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], HistoryRecord.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text',
    }),
    __metadata("design:type", String)
], HistoryRecord.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], HistoryRecord.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.history_record),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], HistoryRecord.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => chatdata_entity_1.ChatData, (chat) => chat.history_record),
    (0, typeorm_1.JoinColumn)({ name: 'chat_id' }),
    __metadata("design:type", chatdata_entity_1.ChatData)
], HistoryRecord.prototype, "chat_data", void 0);
exports.HistoryRecord = HistoryRecord = __decorate([
    (0, typeorm_1.Entity)({ name: 'history_record' })
], HistoryRecord);
//# sourceMappingURL=historyRecord.entity.js.map