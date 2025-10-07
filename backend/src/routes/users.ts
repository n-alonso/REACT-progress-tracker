import { Router, Request, Response, NextFunction } from "express";
import { prismaClient } from "../data";
import createError from "http-errors";

const usersRoute = Router();

usersRoute.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await prismaClient.user.findFirst({
            where: {
                id: Number(req.params.id),
            },
        });

        if (!user)
            return res.status(404).json(createError.NotFound(`User with 'id: ${req.params.id}' not found.`));

        res.json(user);
    } catch (e: unknown) {
        next(e);
    }
});

export { usersRoute };
