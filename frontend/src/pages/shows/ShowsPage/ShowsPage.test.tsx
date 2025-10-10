import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { type UseQueryResult } from '@tanstack/react-query';
import { ShowsPage } from './ShowsPage';
import { useShows, type Show } from '../../../data';
import { mockShows } from '../../../tests/mocks';

vi.mock('../../../data', async () => {
    const actual = await vi.importActual('../../../data');
    return {
        ...actual,
        useShows: vi.fn(),
    };
});

vi.mock('../../../contexts', () => ({
    useAuth: vi.fn(() => ({
        user: { id: 1, username: 'test_user', watchedEpisodes: [] },
        isLoading: false,
        isError: false,
        error: null,
    })),
}));

vi.mock('../../../data/api/hooks/useWatchedEpisodes/useWatchedEpisodes', () => ({
    useWatchedEpisodes: vi.fn(() => ({
        data: [],
        isLoading: false,
        isError: false,
        error: null,
    })),
}));

describe('ShowsPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render loading state', () => {
        vi.mocked(useShows).mockReturnValue({
            data: undefined,
            isLoading: true,
            isError: false,
            error: null,
        } as UseQueryResult<Show[], Error>);

        render(<ShowsPage />);

        expect(screen.getByText('Loading Show...')).toBeInTheDocument();
    });

    it('should render error state', () => {
        vi.mocked(useShows).mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: true,
            error: new Error('Failed to fetch shows'),
        } as UseQueryResult<Show[], Error>);

        render(<ShowsPage />);

        expect(screen.getByText(/Error: Failed to fetch shows/i)).toBeInTheDocument();
    });

    it('should render shows list', () => {
        vi.mocked(useShows).mockReturnValue({
            data: mockShows,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show[], Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowsPage />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText('Test Show 1')).toBeInTheDocument();
        expect(screen.getByText('Test Show 2')).toBeInTheDocument();
    });

    it('should have a search input', () => {
        vi.mocked(useShows).mockReturnValue({
            data: mockShows,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show[], Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowsPage />
                </MantineProvider>
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search');
        expect(searchInput).toBeInTheDocument();
    });

    it('should filter shows based on search query', async () => {
        const user = userEvent.setup();

        vi.mocked(useShows).mockReturnValue({
            data: mockShows,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show[], Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowsPage />
                </MantineProvider>
            </BrowserRouter>
        );

        const searchInput = screen.getByPlaceholderText('Search');

        // Type "Show 1" and press Enter
        await user.type(searchInput, 'Show 1');
        await user.keyboard('{Enter}');

        await waitFor(() => {
            expect(screen.getByText('Test Show 1')).toBeInTheDocument();
            expect(screen.queryByText('Test Show 2')).not.toBeInTheDocument();
        });
    });

    it('should display page title', () => {
        vi.mocked(useShows).mockReturnValue({
            data: mockShows,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show[], Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowsPage />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText('Shows')).toBeInTheDocument();
    });
});

