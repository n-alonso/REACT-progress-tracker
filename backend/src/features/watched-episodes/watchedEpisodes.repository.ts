import { WatchedEpisode } from '@prisma/client';
import { prismaClient } from '../../data';

export class WatchedEpisodesRepository {
    async findByUserId(userId: number, showId?: number): Promise<WatchedEpisode[]> {
        return await prismaClient.watchedEpisode.findMany({
            where: {
                userId,
                ...(showId && { showId }),
            },
        });
    }
}

export const watchedEpisodesRepository = new WatchedEpisodesRepository();
