import createError from 'http-errors';
import { watchedsRepository } from './watcheds.repository';

export class WatchedsService {
    async getWatchedsByUser(userId: number, showId?: number) {
        if (isNaN(userId)) {
            throw createError.BadRequest('Invalid user ID.');
        }

        if (showId !== undefined && isNaN(showId)) {
            throw createError.BadRequest('Invalid show ID.');
        }

        try {
            return await watchedsRepository.findByUserId(userId, showId);
        } catch (error) {
            throw createError.InternalServerError('Failed to fetch watched episodes.');
        }
    }
}

export const watchedsService = new WatchedsService();

