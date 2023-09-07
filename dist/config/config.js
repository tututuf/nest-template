"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yaml = require("js-yaml");
const path_1 = require("path");
const YAML_CONFIG_FILENAME = 'config.yaml';
exports.default = () => {
    return yaml.load((0, fs_1.readFileSync)((0, path_1.join)(__dirname, YAML_CONFIG_FILENAME), 'utf8'));
};
//# sourceMappingURL=config.js.map