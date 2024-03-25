import express, { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


const router: Router = express.Router();

export function healthRoutes(): Router {
    router.get('/notification-health', (req: Request, res: Response) => {
        console.log(req)
        res.status(StatusCodes.OK).send('Notification service is healthy and OK.');
    });
    return router;
}
