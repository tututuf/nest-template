"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./datasource/user.entity");
const chatdata_entity_1 = require("./datasource/chatdata.entity");
const historyRecord_entity_1 = require("./datasource/historyRecord.entity");
const config_1 = require("../config/config");
const conf = (0, config_1.default)();
exports.AppDataSource = new typeorm_1.DataSource({
    type: conf.db.remote.use,
    host: conf.db.remote.ip,
    port: conf.db.remote.port,
    username: conf.db.remote.root,
    password: conf.db.remote.psw,
    database: conf.db.remote.database,
    synchronize: true,
    logging: false,
    entities: [user_entity_1.User, chatdata_entity_1.ChatData, historyRecord_entity_1.HistoryRecord],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map