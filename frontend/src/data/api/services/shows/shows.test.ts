import { describe, it, expect, vi, beforeEach } from 'vitest';
import { showsApi } from './shows';
import { apiClient } from '../../client';
import { mockShow, mockShows } from '../../../../tests/mocks';

vi.mock('../../client');

describe('showsApi', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getAll', () => {
        it('should call the correct endpoint and return shows', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: mockShows });

            const result = await showsApi.getAll();

            expect(apiClient.get).toHaveBeenCalledWith('/shows');
            expect(result).toEqual(mockShows);
        });

        it('should return empty array when no shows exist', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

            const result = await showsApi.getAll();

            expect(result).toEqual([]);
        });
    });

    describe('getById', () => {
        it('should call the correct endpoint with id and return show', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: mockShow });

            const result = await showsApi.getById(1);

            expect(apiClient.get).toHaveBeenCalledWith('/shows/1');
            expect(result).toEqual(mockShow);
        });

        it('should throw error when show not found', async () => {
            const mockError = new Error('Show not found');
            vi.mocked(apiClient.get).mockRejectedValue(mockError);

            await expect(showsApi.getById(999)).rejects.toThrow('Show not found');
        });
    });
});

