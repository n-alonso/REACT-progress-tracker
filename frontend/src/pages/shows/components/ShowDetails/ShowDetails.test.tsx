import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { type UseQueryResult } from '@tanstack/react-query';
import { ShowDetails } from './ShowDetails';
import { useAuth } from '../../../../contexts';
import { useWatchedEpisodes, type WatchedEpisode } from '../../../../data';
import { mockShow, mockUser, mockWatchedEpisodes } from '../../../../tests/mocks';

vi.mock('../../../../contexts');
vi.mock('../../../../data', async () => {
    const actual = await vi.importActual('../../../../data');
    return {
        ...actual,
        useWatchedEpisodes: vi.fn(),
    };
});

describe('ShowDetails', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render loading state when user is loading', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: true,
            isError: false,
            error: null,
        });

        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <MantineProvider>
                <ShowDetails show={mockShow} />
            </MantineProvider>
        );

        expect(screen.getByText('Loading User...')).toBeInTheDocument();
    });

    it('should render error state when user fetch fails', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: false,
            isError: true,
            error: new Error('User error'),
        });

        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <MantineProvider>
                <ShowDetails show={mockShow} />
            </MantineProvider>
        );

        expect(screen.getByText('Error: User error')).toBeInTheDocument();
    });

    it('should render show details with episodes', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: mockWatchedEpisodes,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <MantineProvider>
                <ShowDetails show={mockShow} />
            </MantineProvider>
        );

        expect(screen.getByText('Tracking Details')).toBeInTheDocument();
        expect(screen.getByText(/Total episodes/i)).toBeInTheDocument();
        expect(screen.getByText('Episodes:')).toBeInTheDocument();
    });

    it('should calculate progress correctly', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        // Mock 2 watched episodes out of 3 total
        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: mockWatchedEpisodes,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <MantineProvider>
                <ShowDetails show={mockShow} />
            </MantineProvider>
        );

        // 2/3 watched = 67% (rounded)
        expect(screen.getByText(/67% completed/i)).toBeInTheDocument();
    });

    it('should render loading state when watched episodes are loading', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: undefined,
            isLoading: true,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <MantineProvider>
                <ShowDetails show={mockShow} />
            </MantineProvider>
        );

        expect(screen.getByText('Loading Watched Episodes...')).toBeInTheDocument();
    });
});

