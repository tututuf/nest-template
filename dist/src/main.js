"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const common_1 = require("./common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const httpPort = configService.get('http.port');
    await app.listen(httpPort);
    const border = common_1.ConsoleColor.green('--------------');
    const tips = '服务器已启动, 端口号：';
    const port = common_1.ConsoleColor.yellow(httpPort);
    console.log(border + '  ' + tips + port + '  ' + border);
}
bootstrap();
//# sourceMappingURL=main.js.map