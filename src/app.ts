import { winstonLogger } from "@walidhousni/jobseeker-shared";
import { Logger } from "winston";
import { config } from '@notifications/config'
import express, { Express } from 'express';
import { start } from '@notifications/server';


const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'notificationServer', 'debug');

function initialize(): void {
    const app: Express = express();
    start(app);
    log.info('Notificiation service initialized')
}
initialize()