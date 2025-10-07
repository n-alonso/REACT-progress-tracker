import createError from 'http-errors';
import { Request, Response, NextFunction } from 'express';

export function errorHandlerMiddleware(err: any, req: Request, res: Response, next: NextFunction): void {
    console.error(err);
    res.status(500).send(createError.InternalServerError());
}
