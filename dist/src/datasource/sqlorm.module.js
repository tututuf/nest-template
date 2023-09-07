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
exports.SqlOrmModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
let SqlOrmModule = exports.SqlOrmModule = class SqlOrmModule {
    constructor() { }
};
exports.SqlOrmModule = SqlOrmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: async (config) => {
                    return {
                        type: config.get('db.remote.use'),
                        host: config.get('db.remote.ip'),
                        port: config.get('db.remote.port'),
                        username: config.get('db.remote.root'),
                        password: config.get('db.remote.psw'),
                        database: config.get('db.remote.database'),
                        autoLoadEntities: true,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    }),
    __metadata("design:paramtypes", [])
], SqlOrmModule);
//# sourceMappingURL=sqlorm.module.js.map