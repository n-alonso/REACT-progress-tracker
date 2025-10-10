import { apiClient } from "../client";
import type { WatchedEpisode } from "../..";

export const watchedEpisodesApi = {
    getByUser: async (userId: number, showId?: number): Promise<WatchedEpisode[]> => {
        const params = new URLSearchParams({ userId: userId.toString() });
        if (showId) params.append('showId', showId.toString());

        const { data } = await apiClient.get(`/watchedEpisodes?${params}`);
        return data;
    },
};

