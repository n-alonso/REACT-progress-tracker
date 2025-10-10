import { describe, it, expect } from 'vitest';
import type { Show } from './Show.type';

describe('Show type', () => {
    it('should accept valid Show object', () => {
        const show: Show = {
            id: 1,
            title: 'Test Show',
            episodes: [],
        };

        expect(show.id).toBe(1);
        expect(show.title).toBe('Test Show');
        expect(show.episodes).toEqual([]);
    });

    it('should accept Show with episodes', () => {
        const show: Show = {
            id: 1,
            title: 'Test Show',
            episodes: [
                { id: 1, title: 'Episode 1', showId: 1 },
                { id: 2, title: 'Episode 2', showId: 1 },
            ],
        };

        expect(show.episodes).toHaveLength(2);
        expect(show.episodes[0].title).toBe('Episode 1');
    });
});

