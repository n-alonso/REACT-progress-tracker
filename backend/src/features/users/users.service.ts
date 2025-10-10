import createError from 'http-errors';
import { usersRepository } from './users.repository';
import { createLogger } from '../../utils/logger';

const logger = createLogger('UsersService');

export class UsersService {
    async getUserById(id: number) {
        if (isNaN(id)) {
            logger.error("ERROR: In 'getUserById' method. Invalid user ID.", { id });
            throw createError.BadRequest('Invalid user ID.');
        }

        try {
            const user = await usersRepository.findById(id);

            if (!user) {
                logger.error("ERROR: In 'getUserById' method. User not found.", { id });
                throw createError.NotFound(`User with id: ${id} not found.`);
            }

            return user;
        } catch (error) {
            logger.error("ERROR: In 'getUserById' method.", { id, error });

            if (error instanceof Error && 'status' in error)
                throw error;

            throw createError.InternalServerError('Failed to fetch user by id.');
        }
    }
}

export const usersService = new UsersService();

