import { apiClient } from "../../client";
import type { Show } from "../../..";

export const showsApi = {
    getAll: async (): Promise<Show[]> => {
        const { data } = await apiClient.get("/shows");
        return data;
    },
    getById: async (id: number): Promise<Show> => {
        const { data } = await apiClient.get(`/shows/${id}`);
        return data;
    },
};

