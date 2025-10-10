import { describe, it, expect, beforeAll, afterAll, vi } from 'vitest';
import { apiClient } from './client';

describe('apiClient', () => {
    const originalEnv = import.meta.env.VITE_API_URL;

    beforeAll(() => {
        // Ensure VITE_API_URL is set for tests
        if (!import.meta.env.VITE_API_URL) {
            vi.stubEnv('VITE_API_URL', 'http://localhost:3000');
        }
    });

    afterAll(() => {
        // Restore original env
        if (originalEnv) {
            vi.stubEnv('VITE_API_URL', originalEnv);
        }
    });

    it('should have correct baseURL from environment variable', () => {
        expect(apiClient.defaults.baseURL).toBe(import.meta.env.VITE_API_URL);
    });

    it('should have correct default headers', () => {
        expect(apiClient.defaults.headers['Content-Type']).toBe('application/json');
    });

    it('should be an axios instance', () => {
        expect(apiClient).toBeDefined();
        expect(typeof apiClient.get).toBe('function');
        expect(typeof apiClient.post).toBe('function');
        expect(typeof apiClient.put).toBe('function');
        expect(typeof apiClient.delete).toBe('function');
    });
});

