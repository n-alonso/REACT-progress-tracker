import { apiClient } from "../client";

export const healthCheck = {
    check: async () => {
        const { data } = await apiClient.get("/health");
        return data;
    },
};

