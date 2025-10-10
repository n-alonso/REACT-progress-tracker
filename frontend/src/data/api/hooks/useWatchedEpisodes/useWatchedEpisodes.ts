import { useQuery } from "@tanstack/react-query";
import { watchedEpisodesApi } from "../../services";

export const useWatchedEpisodes = (userId: number, showId?: number) => {
    return useQuery({
        queryKey: ['watchedEpisodes', userId, showId],
        queryFn: () => watchedEpisodesApi.getByUser(userId, showId),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
};
