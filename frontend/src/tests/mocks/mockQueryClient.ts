import { QueryClient } from '@tanstack/react-query';

export function createTestQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                gcTime: 0,
            },
            mutations: {
                retry: false,
            },
        },
        logger: {
            log: console.log,
            warn: console.warn,
            error: () => { }, // Suppress error logs in tests
        },
    });
}

