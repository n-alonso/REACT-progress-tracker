import createError from 'http-errors';
import { showsRepository } from './shows.repository';
import { createLogger } from '../../utils/logger';

const logger = createLogger('ShowsService');

export class ShowsService {
    async getAllShows() {
        try {
            return await showsRepository.findAll();
        } catch (error) {
            logger.error("ERROR: In 'getAllShows' method.", { error });
            throw createError.InternalServerError('Failed to fetch all shows.');
        }
    }

    async getShowById(id: number) {
        if (isNaN(id)) {
            logger.error("ERROR: In 'getShowById' method. Invalid show ID.", { id });
            throw createError.BadRequest('Invalid show ID.');
        }

        try {
            const show = await showsRepository.findById(id);

            if (!show) {
                logger.error("ERROR: In 'getShowById' method. Show not found.", { id });
                throw createError.NotFound(`Show with id: ${id} not found.`);
            }

            return show;
        } catch (error) {
            logger.error("ERROR: In 'getShowById' method.", { id, error });

            if (error instanceof Error && 'status' in error)
                throw error;

            throw createError.InternalServerError('Failed to fetch show by id.');
        }
    }
}

export const showsService = new ShowsService();

