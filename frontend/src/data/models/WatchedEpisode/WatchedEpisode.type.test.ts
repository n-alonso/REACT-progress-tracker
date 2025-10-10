import { describe, it, expect } from 'vitest';
import type { WatchedEpisode } from './WatchedEpisode.type';

describe('WatchedEpisode type', () => {
    it('should accept valid WatchedEpisode object', () => {
        const watchedEpisode: WatchedEpisode = {
            id: 1,
            userId: 1,
            showId: 1,
            episodeId: 1,
        };

        expect(watchedEpisode.id).toBe(1);
        expect(watchedEpisode.userId).toBe(1);
        expect(watchedEpisode.showId).toBe(1);
        expect(watchedEpisode.episodeId).toBe(1);
    });
});

