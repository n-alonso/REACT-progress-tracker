import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export function notFoundMiddleware(req: Request, res: Response, next: NextFunction): void {
    next(createError.NotFound());
}
