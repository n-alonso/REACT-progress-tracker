import { prismaClient } from '../../data';

export class ShowsRepository {
    async findAll() {
        return await prismaClient.show.findMany({
            include: {
                episodes: true,
            },
        });
    }

    async findById(id: number) {
        return await prismaClient.show.findFirst({
            where: { id },
            include: {
                episodes: true,
            },
        });
    }
}

export const showsRepository = new ShowsRepository();

