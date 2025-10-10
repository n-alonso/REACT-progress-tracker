import { describe, it, expect, vi, beforeEach } from 'vitest';
import { usersApi } from './users';
import { apiClient } from '../../client';
import { mockUser } from '../../../../tests/mocks';

vi.mock('../../client');

describe('usersApi', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getById', () => {
        it('should call the correct endpoint and return user', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: mockUser });

            const result = await usersApi.getById(1);

            expect(apiClient.get).toHaveBeenCalledWith('/users/1');
            expect(result).toEqual(mockUser);
        });

        it('should throw error when user not found', async () => {
            const mockError = new Error('User not found');
            vi.mocked(apiClient.get).mockRejectedValue(mockError);

            await expect(usersApi.getById(999)).rejects.toThrow('User not found');
        });
    });
});

