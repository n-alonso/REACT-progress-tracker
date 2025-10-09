import axios from "axios";

// Validate Environment Variables
if (!import.meta.env.VITE_API_URL) {
    throw new Error('VITE_API_URL environment variable is not set');
}

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
