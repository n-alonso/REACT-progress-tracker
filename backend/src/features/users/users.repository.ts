import { prismaClient } from '../../data';

export class UsersRepository {
    async findById(id: number) {
        return await prismaClient.user.findFirst({
            where: { id },
            include: {
                watchedEpisodes: true,
            },
        });
    }
}

export const usersRepository = new UsersRepository();

