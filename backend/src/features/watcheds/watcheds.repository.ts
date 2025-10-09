import { prismaClient } from '../../data';

export class WatchedsRepository {
    async findByUserId(userId: number, showId?: number) {
        return await prismaClient.watched.findMany({
            where: {
                userId,
                ...(showId && { showId }),
            },
        });
    }
}

export const watchedsRepository = new WatchedsRepository();

