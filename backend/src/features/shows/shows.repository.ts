import { Show, Episode } from '@prisma/client';
import { prismaClient } from '../../data';

type ShowWithEpisodes = Show & { episodes: Episode[] };

export class ShowsRepository {
    async findAll(): Promise<ShowWithEpisodes[]> {
        return await prismaClient.show.findMany({
            include: {
                episodes: true,
            },
        });
    }

    async findById(id: number): Promise<ShowWithEpisodes | null> {
        return await prismaClient.show.findFirst({
            where: { id },
            include: {
                episodes: true,
            },
        });
    }
}

export const showsRepository = new ShowsRepository();

