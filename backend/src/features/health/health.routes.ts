import { Router, Request, Response } from 'express';

const router = Router();

// Health check endpoint
router.get('/', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

export { router as healthRouter };

