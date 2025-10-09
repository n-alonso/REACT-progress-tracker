import createError from 'http-errors';
import { showsRepository } from './shows.repository';

export class ShowsService {
    async getAllShows() {
        try {
            return await showsRepository.findAll();
        } catch (error) {
            throw createError.InternalServerError('Failed to fetch shows.');
        }
    }

    async getShowById(id: number) {
        if (isNaN(id)) {
            throw createError.BadRequest('Invalid show ID.');
        }

        try {
            const show = await showsRepository.findById(id);

            if (!show) {
                throw createError.NotFound(`Show with id: ${id} not found.`);
            }

            return show;
        } catch (error) {
            if (error instanceof Error && 'status' in error) {
                throw error;
            }
            throw createError.InternalServerError('Failed to fetch show.');
        }
    }
}

export const showsService = new ShowsService();

