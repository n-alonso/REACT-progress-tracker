import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { prismaClient } from "../data";

const watchedsRoute = Router();

watchedsRoute.get('/', async (req: Request, res: Response, next: NextFunction) => {
    if (!req.query.userId)
        return res.status(400).json(createError.BadRequest("Query param 'userId' is required."));

    try {
        const watcheds = await prismaClient.watched.findMany({
            where: {
                userId: Number(req.query.userId),
                ...(req.query.showId && { showId: Number(req.query.showId) }),
            }
        });

        res.json(watcheds);
    } catch (e: unknown) {
        next(e);
    }
});

export { watchedsRoute };
