import { Request, Response, NextFunction } from 'express';
import { createLogger } from '../../utils/logger';

const logger = createLogger('ErrorHandler');

export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
    logger.error('Unhandled error', err instanceof Error ? err : { message: String(err) });

    // Extract status and message from http-errors or default to 500
    const status = err.status || err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(status).json({
        status,
        message,
    });
}
