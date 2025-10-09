import { ShowsService } from '../shows.service';
import { showsRepository } from '../shows.repository';
import { prismaClient } from '../../../data';

describe('ShowsService', () => {
    let showsService: ShowsService;

    beforeEach(() => {
        showsService = new ShowsService();
    });

    describe('getAllShows', () => {
        it('should return all shows from repository', async () => {
            // Create test data
            await prismaClient.show.create({
                data: {
                    title: 'Show 1',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
            });

            await prismaClient.show.create({
                data: {
                    title: 'Show 2',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
            });

            const shows = await showsService.getAllShows();

            expect(shows).toHaveLength(2);
            expect(shows[0]).toHaveProperty('title', 'Show 1');
            expect(shows[1]).toHaveProperty('title', 'Show 2');
        });

        it('should return an empty array when no shows exist', async () => {
            const shows = await showsService.getAllShows();

            expect(shows).toEqual([]);
        });
    });

    describe('getShowById', () => {
        it('should return a show when it exists', async () => {
            const createdShow = await prismaClient.show.create({
                data: {
                    title: 'Test Show',
                    episodes: {
                        create: [
                            { title: 'Episode 1' },
                            { title: 'Episode 2' },
                        ],
                    },
                },
                include: { episodes: true },
            });

            const show = await showsService.getShowById(createdShow.id);

            expect(show).toMatchObject({
                id: createdShow.id,
                title: 'Test Show',
                episodes: expect.arrayContaining([
                    expect.objectContaining({ title: 'Episode 1' }),
                    expect.objectContaining({ title: 'Episode 2' }),
                ]),
            });
        });

        it('should throw NotFound error when show does not exist', async () => {
            await expect(showsService.getShowById(9999)).rejects.toMatchObject({
                status: 404,
                message: 'Show with id: 9999 not found.',
            });
        });

        it('should throw BadRequest error when ID is NaN', async () => {
            await expect(showsService.getShowById(NaN)).rejects.toMatchObject({
                status: 400,
                message: 'Invalid show ID.',
            });
        });
    });
});

