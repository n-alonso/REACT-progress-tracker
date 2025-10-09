import { UsersService } from '../users.service';
import { prismaClient } from '../../../data';

describe('UsersService', () => {
    let usersService: UsersService;

    beforeEach(() => {
        usersService = new UsersService();
    });

    describe('getUserById', () => {
        it('should return a user when it exists', async () => {
            const createdUser = await prismaClient.user.create({
                data: { username: 'john_doe' },
            });

            const user = await usersService.getUserById(createdUser.id);

            expect(user).toMatchObject({
                id: createdUser.id,
                username: 'john_doe',
            });
        });

        it('should throw NotFound error when user does not exist', async () => {
            await expect(usersService.getUserById(9999)).rejects.toMatchObject({
                status: 404,
                message: 'User with id: 9999 not found.',
            });
        });

        it('should throw BadRequest error when ID is NaN', async () => {
            await expect(usersService.getUserById(NaN)).rejects.toMatchObject({
                status: 400,
                message: 'Invalid user ID.',
            });
        });
    });
});

