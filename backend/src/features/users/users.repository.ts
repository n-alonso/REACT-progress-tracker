import { User, WatchedEpisode } from '@prisma/client';
import { prismaClient } from '../../data';

type UserWithWatchedEpisodes = User & { watchedEpisodes: WatchedEpisode[] };

export class UsersRepository {
    async findById(id: number): Promise<UserWithWatchedEpisodes | null> {
        return await prismaClient.user.findFirst({
            where: { id },
            include: {
                watchedEpisodes: true,
            },
        });
    }
}

export const usersRepository = new UsersRepository();

