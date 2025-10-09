import { WatchedsRepository } from '../watcheds.repository';
import { prismaClient } from '../../../data';

describe('WatchedsRepository', () => {
    let watchedsRepository: WatchedsRepository;

    beforeEach(() => {
        watchedsRepository = new WatchedsRepository();
    });

    describe('findByUserId', () => {
        it('should return watched episodes for a user', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'repo_test_user' },
            });

            const show = await prismaClient.show.create({
                data: {
                    title: 'Repo Test Show',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
                include: { episodes: true },
            });

            const createdWatched = await prismaClient.watchedEpisode.create({
                data: {
                    userId: user.id,
                    showId: show.id,
                    episodeId: show.episodes[0].id,
                },
            });

            const watcheds = await watchedsRepository.findByUserId(user.id);

            expect(watcheds).toHaveLength(1);
            expect(watcheds[0]).toMatchObject({
                id: createdWatched.id,
                userId: user.id,
                showId: show.id,
            });
        });

        it('should filter by showId when provided', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'filter_repo_user' },
            });

            const show1 = await prismaClient.show.create({
                data: {
                    title: 'Show A',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
                include: { episodes: true },
            });

            const show2 = await prismaClient.show.create({
                data: {
                    title: 'Show B',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
                include: { episodes: true },
            });

            await prismaClient.watchedEpisode.createMany({
                data: [
                    {
                        userId: user.id,
                        showId: show1.id,
                        episodeId: show1.episodes[0].id,
                    },
                    {
                        userId: user.id,
                        showId: show2.id,
                        episodeId: show2.episodes[0].id,
                    },
                ],
            });

            const watcheds = await watchedsRepository.findByUserId(user.id, show1.id);

            expect(watcheds).toHaveLength(1);
            expect(watcheds[0].showId).toBe(show1.id);
        });

        it('should return empty array when user has no watched episodes', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'empty_repo_user' },
            });

            const watcheds = await watchedsRepository.findByUserId(user.id);

            expect(watcheds).toEqual([]);
        });

        it('should return empty array when filtering by non-existent showId', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'nonexistent_show_user' },
            });

            const watcheds = await watchedsRepository.findByUserId(user.id, 9999);

            expect(watcheds).toEqual([]);
        });
    });
});

