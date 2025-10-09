import { WatchedsService } from '../watcheds.service';
import { prismaClient } from '../../../data';

describe('WatchedsService', () => {
    let watchedsService: WatchedsService;

    beforeEach(() => {
        watchedsService = new WatchedsService();
    });

    describe('getWatchedsByUser', () => {
        it('should return watched episodes for a user', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'test_user' },
            });

            const show = await prismaClient.show.create({
                data: {
                    title: 'Test Show',
                    episodes: {
                        create: [{ title: 'Episode 1' }, { title: 'Episode 2' }],
                    },
                },
                include: { episodes: true },
            });

            await prismaClient.watched.create({
                data: {
                    userId: user.id,
                    showId: show.id,
                    episodeId: show.episodes[0].id,
                },
            });

            const watcheds = await watchedsService.getWatchedsByUser(user.id);

            expect(watcheds).toHaveLength(1);
            expect(watcheds[0]).toMatchObject({
                userId: user.id,
                showId: show.id,
                episodeId: show.episodes[0].id,
            });
        });

        it('should filter by showId when provided', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'filter_test_user' },
            });

            const show1 = await prismaClient.show.create({
                data: {
                    title: 'Show 1',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
                include: { episodes: true },
            });

            const show2 = await prismaClient.show.create({
                data: {
                    title: 'Show 2',
                    episodes: {
                        create: [{ title: 'Episode 1' }],
                    },
                },
                include: { episodes: true },
            });

            await prismaClient.watched.createMany({
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

            const watcheds = await watchedsService.getWatchedsByUser(
                user.id,
                show1.id
            );

            expect(watcheds).toHaveLength(1);
            expect(watcheds[0].showId).toBe(show1.id);
        });

        it('should return empty array when user has no watched episodes', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'no_progress_user' },
            });

            const watcheds = await watchedsService.getWatchedsByUser(user.id);

            expect(watcheds).toEqual([]);
        });

        it('should throw BadRequest error when userId is NaN', async () => {
            await expect(
                watchedsService.getWatchedsByUser(NaN)
            ).rejects.toMatchObject({
                status: 400,
                message: 'Invalid user ID.',
            });
        });

        it('should throw BadRequest error when showId is NaN', async () => {
            await expect(
                watchedsService.getWatchedsByUser(1, NaN)
            ).rejects.toMatchObject({
                status: 400,
                message: 'Invalid show ID.',
            });
        });
    });
});

