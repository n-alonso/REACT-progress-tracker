import { describe, it, expect } from 'vitest';
import type { Episode } from './Episode.type';

describe('Episode type', () => {
    it('should accept valid Episode object', () => {
        const episode: Episode = {
            id: 1,
            title: 'Episode 1',
            showId: 1,
        };

        expect(episode.id).toBe(1);
        expect(episode.title).toBe('Episode 1');
        expect(episode.showId).toBe(1);
    });
});

