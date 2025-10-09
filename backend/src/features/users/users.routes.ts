import { Router, Request, Response, NextFunction } from 'express';
import { usersService } from './users.service';

const router = Router();

// Get user by ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await usersService.getUserById(Number(req.params.id));
        res.json(user);
    } catch (error) {
        next(error);
    }
});

export { router as usersRouter };

