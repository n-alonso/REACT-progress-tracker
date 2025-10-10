import { describe, it, expect, vi, beforeEach } from 'vitest';
import { healthCheck } from './health';
import { apiClient } from '../../client';

vi.mock('../../client');

describe('healthCheck', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should call the correct endpoint and return data', async () => {
        const mockData = { status: 'ok' };
        vi.mocked(apiClient.get).mockResolvedValue({ data: mockData });

        const result = await healthCheck.check();

        expect(apiClient.get).toHaveBeenCalledWith('/health');
        expect(result).toEqual(mockData);
    });

    it('should throw error when API call fails', async () => {
        const mockError = new Error('Network error');
        vi.mocked(apiClient.get).mockRejectedValue(mockError);

        await expect(healthCheck.check()).rejects.toThrow('Network error');
    });
});

