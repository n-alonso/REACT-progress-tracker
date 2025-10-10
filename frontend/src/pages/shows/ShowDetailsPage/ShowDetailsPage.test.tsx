import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { type UseQueryResult } from '@tanstack/react-query';
import { ShowDetailsPage } from './ShowDetailsPage';
import { useShow, type Show } from '../../../data';
import { mockShow, mockUser } from '../../../tests/mocks';

vi.mock('../../../data', async () => {
    const actual = await vi.importActual('../../../data');
    return {
        ...actual,
        useShow: vi.fn(),
    };
});

vi.mock('../../../contexts', () => ({
    useAuth: vi.fn(() => ({
        user: mockUser,
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

describe('ShowDetailsPage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render loading state', () => {
        vi.mocked(useShow).mockReturnValue({
            data: undefined,
            isLoading: true,
            isError: false,
            error: null,
        } as UseQueryResult<Show, Error>);

        render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<ShowDetailsPage />} />
                </Routes>
            </BrowserRouter>
        );

        expect(screen.getByText('Loading Show...')).toBeInTheDocument();
    });

    it('should render error state', () => {
        vi.mocked(useShow).mockReturnValue({
            data: undefined,
            isLoading: false,
            isError: true,
            error: new Error('Show not found'),
        } as UseQueryResult<Show, Error>);

        render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<ShowDetailsPage />} />
                </Routes>
            </BrowserRouter>
        );

        expect(screen.getByText(/Error: Show not found/i)).toBeInTheDocument();
    });

    it('should render show title when loaded', () => {
        vi.mocked(useShow).mockReturnValue({
            data: mockShow,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show, Error>);

        render(
            <BrowserRouter>
                <MantineProvider>
                    <Routes>
                        <Route path="*" element={<ShowDetailsPage />} />
                    </Routes>
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(mockShow.title)).toBeInTheDocument();
    });

    it('should render not found message when show is null', () => {
        vi.mocked(useShow).mockReturnValue({
            data: null,
            isLoading: false,
            isError: false,
            error: null,
        } as UseQueryResult<Show, Error>);

        render(
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<ShowDetailsPage />} />
                </Routes>
            </BrowserRouter>
        );

        expect(screen.getByText('Show not found.')).toBeInTheDocument();
    });
});

