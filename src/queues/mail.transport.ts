import { config } from "@notifications/config";
import { emailTemplates } from "@notifications/helpers";
import { IEmailLocals, winstonLogger } from "@walidhousni/jobseeker-shared";
import { Logger } from "winston";


const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'mailTransport', 'debug');

async function sendEmail(template: string, receiverEmail: string, locals: IEmailLocals): Promise<void> {
    try {
        // email template
        emailTemplates(template, receiverEmail, locals);
        log.info('Email sent successfully.');
    } catch (error) {
        log.log('error', 'NotificationService MailTrapsort sendEmail() method error:', error);
    }
}

export { sendEmail };