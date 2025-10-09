import { Router, Request, Response, NextFunction } from 'express';
import { showsService } from './shows.service';

const router = Router();

// Get all shows
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const shows = await showsService.getAllShows();
        res.json(shows);
    } catch (error) {
        next(error);
    }
});

// Get show by ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const show = await showsService.getShowById(Number(req.params.id));
        res.json(show);
    } catch (error) {
        next(error);
    }
});

export { router as showsRouter };

