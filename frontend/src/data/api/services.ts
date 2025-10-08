import { apiClient } from "./client";
import type { Show, User, Watched } from "..";

// Health Check
export const heathCheck = {
    check: async () => {
        const { data } = await apiClient.get("/health");
        return data;
    },
};

// Users
export const usersApi = {
    getById: async (id: number): Promise<User> => {
        const { data } = await apiClient.get(`/users/${id}`);
        return data;
    },
};

// Shows
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

// Watcheds
export const watchedsApi = {
    getByUser: async (userId: number, showId?: number): Promise<Watched[]> => {
        const params = new URLSearchParams({ userId: userId.toString() });
        if (showId) params.append('showId', showId.toString());

        const { data } = await apiClient.get(`/watcheds?${params}`);
        return data;
    },
};
