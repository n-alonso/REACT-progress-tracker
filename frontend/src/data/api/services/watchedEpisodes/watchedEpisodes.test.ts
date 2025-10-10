import { describe, it, expect, vi, beforeEach } from 'vitest';
import { watchedEpisodesApi } from './watchedEpisodes';
import { apiClient } from '../../client';
import { mockWatchedEpisodes } from '../../../../tests/mocks';

vi.mock('../../client');

describe('watchedEpisodesApi', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getByUser', () => {
        it('should call the correct endpoint with userId and return watched episodes', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: mockWatchedEpisodes });

            const result = await watchedEpisodesApi.getByUser(1);

            expect(apiClient.get).toHaveBeenCalledWith('/watchedEpisodes?userId=1');
            expect(result).toEqual(mockWatchedEpisodes);
        });

        it('should include showId param when provided', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: mockWatchedEpisodes });

            await watchedEpisodesApi.getByUser(1, 1);

            expect(apiClient.get).toHaveBeenCalledWith('/watchedEpisodes?userId=1&showId=1');
        });

        it('should return empty array when user has no watched episodes', async () => {
            vi.mocked(apiClient.get).mockResolvedValue({ data: [] });

            const result = await watchedEpisodesApi.getByUser(1);

            expect(result).toEqual([]);
        });
    });
});

