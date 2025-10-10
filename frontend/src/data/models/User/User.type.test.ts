import { describe, it, expect } from 'vitest';
import type { User } from './User.type';

describe('User type', () => {
    it('should accept valid User object', () => {
        const user: User = {
            id: 1,
            username: 'test_user',
            watchedEpisodes: [],
        };

        expect(user.id).toBe(1);
        expect(user.username).toBe('test_user');
        expect(user.watchedEpisodes).toEqual([]);
    });

    it('should accept User with watched episodes', () => {
        const user: User = {
            id: 1,
            username: 'test_user',
            watchedEpisodes: [
                { id: 1, userId: 1, showId: 1, episodeId: 1 },
                { id: 2, userId: 1, showId: 1, episodeId: 2 },
            ],
        };

        expect(user.watchedEpisodes).toHaveLength(2);
        expect(user.watchedEpisodes[0].episodeId).toBe(1);
    });
});

