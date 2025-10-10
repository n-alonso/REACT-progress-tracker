import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { ShowModal } from './ShowModal';
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

describe('ShowModal', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should return null when show is null', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        vi.mocked(useWatchedEpisodes).mockReturnValue({
            data: [],
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<WatchedEpisode[], Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowModal show={null} isOpen={true} onClose={vi.fn()} />
                </MantineProvider>
            </BrowserRouter>
        );

        // Modal should not render its content when show is null
        expect(screen.queryByText('Tracking Details')).not.toBeInTheDocument();
        expect(screen.queryByText('Total Episodes')).not.toBeInTheDocument();
    });

    it('should render modal with show details', () => {
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
            <BrowserRouter>
                <MantineProvider>
                    <ShowModal show={mockShow} isOpen={true} onClose={vi.fn()} />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(mockShow.title)).toBeInTheDocument();
        expect(screen.getByText('Total Episodes')).toBeInTheDocument();
        // "Completed" appears twice - once as a stat label and once in the ring progress label
        expect(screen.getAllByText('Completed').length).toBeGreaterThanOrEqual(1);
        expect(screen.getByText('Remaining')).toBeInTheDocument();
    });

    it('should display correct episode counts', () => {
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
            <BrowserRouter>
                <MantineProvider>
                    <ShowModal show={mockShow} isOpen={true} onClose={vi.fn()} />
                </MantineProvider>
            </BrowserRouter>
        );

        // Total episodes = 3, Completed = 2, Remaining = 1
        const allText = screen.getAllByText('3'); // Total
        expect(allText.length).toBeGreaterThan(0);

        const completedText = screen.getAllByText('2'); // Completed
        expect(completedText.length).toBeGreaterThan(0);

        const remainingText = screen.getAllByText('1'); // Remaining
        expect(remainingText.length).toBeGreaterThan(0);
    });

    it('should render Open Details button with correct link', () => {
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
            <BrowserRouter>
                <MantineProvider>
                    <ShowModal show={mockShow} isOpen={true} onClose={vi.fn()} />
                </MantineProvider>
            </BrowserRouter>
        );

        const detailsLink = screen.getByText('Open Details').closest('a');
        expect(detailsLink).toHaveAttribute('href', `/shows/${mockShow.id}`);
    });

    it('should render loading state when user is loading', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: true,
            isError: false,
            error: null,
        });

        render(
            <BrowserRouter>
                <MantineProvider>
                    <ShowModal show={mockShow} isOpen={true} onClose={vi.fn()} />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText('Loading User...')).toBeInTheDocument();
    });
});

