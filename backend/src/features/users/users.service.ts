import createError from 'http-errors';
import { usersRepository } from './users.repository';

export class UsersService {
    async getUserById(id: number) {
        if (isNaN(id)) {
            throw createError.BadRequest('Invalid user ID.');
        }

        try {
            const user = await usersRepository.findById(id);

            if (!user) {
                throw createError.NotFound(`User with id: ${id} not found.`);
            }

            return user;
        } catch (error) {
            if (error instanceof Error && 'status' in error) {
                throw error;
            }
            throw createError.InternalServerError('Failed to fetch user.');
        }
    }
}

export const usersService = new UsersService();

