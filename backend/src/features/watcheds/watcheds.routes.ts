import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { watchedsService } from './watcheds.service';

const router = Router();

// Get watched episodes by user
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.query.userId) {
            throw createError.BadRequest("Query param 'userId' is required.");
        }

        const userId = Number(req.query.userId);
        const showId = req.query.showId ? Number(req.query.showId) : undefined;

        const watcheds = await watchedsService.getWatchedsByUser(userId, showId);
        res.json(watcheds);
    } catch (error) {
        next(error);
    }
});

export { router as watchedsRouter };

