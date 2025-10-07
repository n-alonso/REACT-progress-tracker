import { Request, Response, NextFunction } from "express";

export type ExpressProps = {
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
}
