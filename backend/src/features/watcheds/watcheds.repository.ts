import { prismaClient } from '../../data';

export class WatchedsRepository {
    async findByUserId(userId: number, showId?: number) {
        return await prismaClient.watchedEpisode.findMany({
            where: {
                userId,
                ...(showId && { showId }),
            },
        });
    }
}

export const watchedsRepository = new WatchedsRepository();

