import request from 'supertest';
import { app } from '../../../server';
import { prismaClient } from '../../../data';

describe('Users Routes', () => {
    describe('GET /users/:id', () => {
        it('should return 200 and the user when it exists', async () => {
            const user = await prismaClient.user.create({
                data: { username: 'testuser' },
            });

            const response = await request(app).get(`/users/${user.id}`);

            expect(response.status).toBe(200);
            expect(response.body).toMatchObject({
                id: user.id,
                username: 'testuser',
            });
        });

        it('should return 404 when user does not exist', async () => {
            const response = await request(app).get('/users/9999');

            expect(response.status).toBe(404);
            expect(response.body).toMatchObject({
                status: 404,
                message: 'User with id: 9999 not found.',
            });
        });

        it('should return 400 when user ID is invalid', async () => {
            const response = await request(app).get('/users/invalid-id');

            expect(response.status).toBe(400);
            expect(response.body).toMatchObject({
                status: 400,
                message: 'Invalid user ID.',
            });
        });
    });
});

