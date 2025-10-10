import { apiClient } from "../../client";
import type { User } from "../../..";

export const usersApi = {
    getById: async (id: number): Promise<User> => {
        const { data } = await apiClient.get(`/users/${id}`);
        return data;
    },
};

