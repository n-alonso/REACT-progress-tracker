import { useQuery } from "@tanstack/react-query";
import { watchedsApi } from "../services";

export const useWatcheds = (userId: number, showId?: number) => {
    return useQuery({
        queryKey: ['watcheds', userId, showId],
        queryFn: () => watchedsApi.getByUser(userId, showId),
        enabled: !!userId,
        staleTime: 5 * 60 * 1000,
    });
};
