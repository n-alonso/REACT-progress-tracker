import createError from 'http-errors';
import { watchedEpisodesRepository } from './watchedEpisodes.repository';
import { WatchedEpisode } from '@prisma/client';
import { createLogger } from '../../utils/logger';

const logger = createLogger('WatchedEpisodesService');

export class WatchedEpisodesService {
    async getWatchedEpisodesByUser(userId: number, showId?: number): Promise<WatchedEpisode[]> {
        if (isNaN(userId)) {
            logger.error("ERROR: In 'getWatchedEpisodesByUser' method. Invalid user ID.", { userId });
            throw createError.BadRequest('Invalid user ID.');
        }

        if (showId !== undefined && isNaN(showId)) {
            logger.error("ERROR: In 'getWatchedEpisodesByUser' method. Invalid show ID.", { showId });
            throw createError.BadRequest('Invalid show ID.');
        }

        try {
            return await watchedEpisodesRepository.findByUserId(userId, showId);
        } catch (error) {
            logger.error("ERROR: In 'getWatchedEpisodesByUser' method.", { userId, showId, error });
            throw createError.InternalServerError('Failed to fetch watched episodes.');
        }
    }
}

export const watchedEpisodesService = new WatchedEpisodesService();
