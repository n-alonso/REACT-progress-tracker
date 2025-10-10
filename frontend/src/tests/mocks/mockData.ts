import type { Show, Episode, User, WatchedEpisode } from '../../data';

export const mockEpisode: Episode = {
    id: 1,
    title: 'Episode 1',
    showId: 1,
};

export const mockEpisodes: Episode[] = [
    { id: 1, title: 'Episode 1', showId: 1 },
    { id: 2, title: 'Episode 2', showId: 1 },
    { id: 3, title: 'Episode 3', showId: 1 },
];

export const mockShow: Show = {
    id: 1,
    title: 'Test Show',
    episodes: mockEpisodes,
};

export const mockShows: Show[] = [
    {
        id: 1,
        title: 'Test Show 1',
        episodes: [
            { id: 1, title: 'Episode 1', showId: 1 },
            { id: 2, title: 'Episode 2', showId: 1 },
        ],
    },
    {
        id: 2,
        title: 'Test Show 2',
        episodes: [
            { id: 3, title: 'Episode 1', showId: 2 },
        ],
    },
];

export const mockWatchedEpisode: WatchedEpisode = {
    id: 1,
    userId: 1,
    showId: 1,
    episodeId: 1,
};

export const mockWatchedEpisodes: WatchedEpisode[] = [
    { id: 1, userId: 1, showId: 1, episodeId: 1 },
    { id: 2, userId: 1, showId: 1, episodeId: 2 },
];

export const mockUser: User = {
    id: 1,
    username: 'test_user',
    watchedEpisodes: mockWatchedEpisodes,
};

