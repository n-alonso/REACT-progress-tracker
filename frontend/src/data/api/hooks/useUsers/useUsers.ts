import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../../services";

export const useUser = (id: number) => {
    return useQuery({
        queryKey: ['users', id],
        queryFn: () => usersApi.getById(id),
        enabled: !!id,
        staleTime: 5 * 60 * 1000,
    });
};
