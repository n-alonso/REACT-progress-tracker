import { Router, Request, Response, NextFunction } from "express";
import createError from "http-errors";
import { prismaClient, type Show } from "../data";

const showRoute = Router();

// Get All
showRoute.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shows = await prismaClient.show.findMany({
            include: {
                episodes: true,
            },
        });

        res.json(shows)
    } catch (e: unknown) {
        next(createError.InternalServerError("Failed to fetch shows."));
    }
});

// // Get By Id
showRoute.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const show = await prismaClient.show.findFirst({
            where: {
                id: Number(req.params.id),
            },
            include: {
                episodes: true,
            },
        });

        if (!show)
            return res.status(404).json(createError.NotFound(`Episode with 'id: ${req.params.id}' not found.`));

        res.json(show);
    } catch (e: unknown) {
        next(createError.InternalServerError("Failed to fetch show."));
    }
});

export { showRoute };
