import { ShowsRepository } from '../shows.repository';
import { prismaClient } from '../../../data';

describe('ShowsRepository', () => {
    let showsRepository: ShowsRepository;

    beforeEach(() => {
        showsRepository = new ShowsRepository();
    });

    describe('findAll', () => {
        it('should return all shows with episodes', async () => {
            await prismaClient.show.create({
                data: {
                    title: 'Show 1',
                    episodes: {
                        create: [{ title: 'Episode 1' }, { title: 'Episode 2' }],
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

            const shows = await showsRepository.findAll();

            expect(shows).toHaveLength(2);
            expect(shows[0]).toHaveProperty('title');
            expect(shows[0]).toHaveProperty('episodes');
            expect(shows[0].episodes).toBeInstanceOf(Array);
            expect(shows[1]).toHaveProperty('title');
            expect(shows[1]).toHaveProperty('episodes');
        });

        it('should return empty array when no shows exist', async () => {
            const shows = await showsRepository.findAll();

            expect(shows).toEqual([]);
        });

        it('should include all episodes for each show', async () => {
            const show = await prismaClient.show.create({
                data: {
                    title: 'Show with Episodes',
                    episodes: {
                        create: [
                            { title: 'Episode 1' },
                            { title: 'Episode 2' },
                            { title: 'Episode 3' },
                        ],
                    },
                },
            });

            const shows = await showsRepository.findAll();

            expect(shows).toHaveLength(1);
            expect(shows[0].id).toBe(show.id);
            expect(shows[0].episodes).toHaveLength(3);
        });
    });

    describe('findById', () => {
        it('should return a show with episodes when it exists', async () => {
            const createdShow = await prismaClient.show.create({
                data: {
                    title: 'Specific Show',
                    episodes: {
                        create: [{ title: 'Episode 1' }, { title: 'Episode 2' }],
                    },
                },
                include: { episodes: true },
            });

            const show = await showsRepository.findById(createdShow.id);

            expect(show).not.toBeNull();
            expect(show).toMatchObject({
                id: createdShow.id,
                title: 'Specific Show',
            });
            expect(show?.episodes).toHaveLength(2);
        });

        it('should return null when show does not exist', async () => {
            const show = await showsRepository.findById(9999);

            expect(show).toBeNull();
        });

        it('should include episodes array even if empty', async () => {
            const createdShow = await prismaClient.show.create({
                data: {
                    title: 'Show without Episodes',
                    episodes: {
                        create: [],
                    },
                },
            });

            const show = await showsRepository.findById(createdShow.id);

            expect(show).not.toBeNull();
            expect(show?.episodes).toEqual([]);
        });
    });
});

