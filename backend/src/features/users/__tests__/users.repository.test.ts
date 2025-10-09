import { UsersRepository } from '../users.repository';
import { prismaClient } from '../../../data';

describe('UsersRepository', () => {
    let usersRepository: UsersRepository;

    beforeEach(() => {
        usersRepository = new UsersRepository();
    });

    describe('findById', () => {
        it('should return a user when it exists', async () => {
            const createdUser = await prismaClient.user.create({
                data: { username: 'jane_doe' },
            });

            const user = await usersRepository.findById(createdUser.id);

            expect(user).not.toBeNull();
            expect(user).toMatchObject({
                id: createdUser.id,
                username: 'jane_doe',
                watchedEpisodes: [],
            });
        });

        it('should return null when user does not exist', async () => {
            const user = await usersRepository.findById(9999);

            expect(user).toBeNull();
        });
    });
});

