import { Router, Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { watchedEpisodesService } from './watchedEpisodes.service';

const router = Router();

// Get watched episodes by user
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.query.userId) {
            throw createError.BadRequest("Query param 'userId' is required.");
        }

        const userId = Number(req.query.userId);
        const showId = req.query.showId ? Number(req.query.showId) : undefined;

        const watchedEpisodes = await watchedEpisodesService.getWatchedEpisodesByUser(userId, showId);
        res.json(watchedEpisodes);
    } catch (error) {
        next(error);
    }
});

export { router as watchedEpisodesRouter };
