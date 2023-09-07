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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const gpt_module_1 = require("./routes/gptRoute/gpt.module");
const config_1 = require("@nestjs/config");
const config_2 = require("../config/config");
const sqlorm_module_1 = require("./datasource/sqlorm.module");
const user_module_1 = require("./routes/userRoute/user.module");
const typeorm_1 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const constansts_1 = require("./constansts");
let AppModule = exports.AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            gpt_module_1.GptModule,
            sqlorm_module_1.SqlOrmModule,
            user_module_1.UserModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [config_2.default],
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: constansts_1.JwtConstants.secret,
                signOptions: { expiresIn: '24h' },
            }),
        ],
    }),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map