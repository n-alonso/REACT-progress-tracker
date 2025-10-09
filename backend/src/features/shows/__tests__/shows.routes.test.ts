import request from 'supertest';
import { app } from '../../../server';
import { prismaClient } from '../../../data';

describe('Shows Routes', () => {
    describe('GET /shows', () => {
        it('should return 200 and an empty array when no shows exist', async () => {
            const response = await request(app).get('/shows');

            expect(response.status).toBe(200);
            expect(response.body).toEqual([]);
        });

        it('should return 200 and all shows', async () => {
            // Create test data
            const show1 = await prismaClient.show.create({
                data: {
                    title: 'Breaking Bad',
                    episodes: {
                        create: [
                            { title: 'Episode 1' },
                            { title: 'Episode 2' },
                        ],
                    },
                },
                include: { episodes: true },
            });

            const show2 = await prismaClient.show.create({
                data: {
                    title: 'Game of Thrones',
                    episodes: {
                        create: [
                            { title: 'Episode 1' },
                        ],
                    },
                },
                include: { episodes: true },
            });

            const response = await request(app).get('/shows');

            expect(response.status).toBe(200);
            expect(response.body).toHaveLength(2);
            expect(response.body[0]).toMatchObject({
                id: show1.id,
                title: 'Breaking Bad',
                episodes: expect.arrayContaining([
                    expect.objectContaining({ title: 'Episode 1' }),
                    expect.objectContaining({ title: 'Episode 2' }),
                ]),
            });
            expect(response.body[1]).toMatchObject({
                id: show2.id,
                title: 'Game of Thrones',
            });
        });
    });

    describe('GET /shows/:id', () => {
        it('should return 200 and the show when it exists', async () => {
            const show = await prismaClient.show.create({
                data: {
                    title: 'The Wire',
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

            const response = await request(app).get(`/shows/${show.id}`);

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                id: show.id,
                title: 'The Wire',
                episodes: expect.arrayContaining([
                    expect.objectContaining({ title: 'Episode 1' }),
                    expect.objectContaining({ title: 'Episode 2' }),
                    expect.objectContaining({ title: 'Episode 3' }),
                ]),
            });
            expect(response.body.episodes).toHaveLength(3);
        });

        it('should return 404 when show does not exist', async () => {
            const response = await request(app).get('/shows/9999');

            expect(response.status).toBe(404);
            expect(response.body).toMatchObject({
                status: 404,
                message: 'Show with id: 9999 not found.',
            });
        });

        it('should return 400 when show ID is invalid', async () => {
            const response = await request(app).get('/shows/invalid-id');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                status: 400,
                message: 'Invalid show ID.',
            });
        });
    });
});

