import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { createLogger } from '../../utils/logger';

const logger = createLogger('ErrorHandler');

export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
    logger.error('Unhandled error', err instanceof Error ? err : { message: String(err) });
    res.status(500).send(createError.InternalServerError());
}
