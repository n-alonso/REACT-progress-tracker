export type Episode = {
    id: number;
    showId: number;
    title: string;
};

export type Show = {
    id: number;
    title: string;
    episodeIds: number[];
};

export type User = {
    id: number;
    username: string;
    watchedIds: number[];
};

export type Watched = {
    id: number;
    userId: number;
    showId: number;
    episodeId: number;
};
