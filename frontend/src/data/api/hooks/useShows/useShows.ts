import { useQuery } from "@tanstack/react-query";
import { showsApi } from "../../services";

export const useShows = () => {
    return useQuery({
        queryKey: ['shows'],
        queryFn: showsApi.getAll,
        staleTime: 5 * 60 * 1000,
    });
};

export const useShow = (id: number) => {
    return useQuery({
        queryKey: ['shows', id],
        queryFn: () => showsApi.getById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
};
