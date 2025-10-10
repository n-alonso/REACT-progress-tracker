import request from 'supertest';
import { app } from '../../../server';
import { prismaClient } from '../../../data';

describe('WatchedEpisodes Routes', () => {
    describe('GET /watchedEpisodes', () => {
        it('should return 400 when userId query param is missing', async () => {
            const response = await request(app).get('/watchedEpisodes');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                status: 400,
                message: "Query param 'userId' is required.",
            });
        });

        it('should return 200 and empty array when user has no watched episodes', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'user_with_no_progress' },
            });

            const response = await request(app).get(`/watchedEpisodes?userId=${user.id}`);

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should return 200 and all watched episodes for a user', async () => {
            // Create user
            const user = await prismaClient.user.create({
                data: { username: 'avid_watcher' },
            });

            // Create show with episodes
            const show = await prismaClient.show.create({
                data: {
                    title: 'Test Show',
                    episodes: {
                        create: [
                            { title: 'Episode 1' },
                            { title: 'Episode 2' },
                            { title: 'Episode 3' },
                        ],
                    },
                },
                include: { episodes: true },
            });

            // Mark episodes as watched
            await prismaClient.watchedEpisode.createMany({
                data: [
                    {
                        userId: user.id,
                        showId: show.id,
                        episodeId: show.episodes[0].id,
                    },
                    {
                        userId: user.id,
                        showId: show.id,
                        episodeId: show.episodes[1].id,
                    },
                ],
            });

            const response = await request(app).get(`/watchedEpisodes?userId=${user.id}`);

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(2);
            expect(response.body).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        userId: user.id,
                        showId: show.id,
                        episodeId: show.episodes[0].id,
                    }),
                    expect.objectContaining({
                        userId: user.id,
                        showId: show.id,
                        episodeId: show.episodes[1].id,
                    }),
                ])
            );
        });

        it('should return 200 and filter by showId when provided', async () => {
            // Create user
            const user = await prismaClient.user.create({
                data: { username: 'multi_show_watcher' },
            });

            // Create two shows with episodes
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

            // Watch episodes from both shows
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

            // Query for only show1
            const response = await request(app).get(
                `/watchedEpisodes?userId=${user.id}&showId=${show1.id}`
            );

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(1);
            expect(response.body[0]).toMatchObject({
                userId: user.id,
                showId: show1.id,
            });
        });

        it('should return 400 when userId is invalid', async () => {
            const response = await request(app).get('/watchedEpisodes?userId=invalid');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                status: 400,
                message: 'Invalid user ID.',
            });
        });

        it('should return 400 when showId is invalid', async () => {
            const response = await request(app).get(
                '/watchedEpisodes?userId=1&showId=invalid'
            );

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                status: 400,
                message: 'Invalid show ID.',
            });
        });
    });
});

