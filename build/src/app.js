"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobseeker_shared_1 = require("@walidhousni/jobseeker-shared");
const config_1 = require("./config");
const express_1 = __importDefault(require("express"));
const server_1 = require("./server");
const log = (0, jobseeker_shared_1.winstonLogger)(`${config_1.config.ELASTIC_SEARCH_URL}`, 'notificationServer', 'debug');
function initialize() {
    const app = (0, express_1.default)();
    (0, server_1.start)(app);
    log.info('Notificiation service initialized');
}
initialize();
//# sourceMappingURL=app.js.map