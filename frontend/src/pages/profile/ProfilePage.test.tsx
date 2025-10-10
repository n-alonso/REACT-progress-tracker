import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { ProfilePage } from './ProfilePage';
import { useAuth } from '../../contexts';
import { mockUser } from '../../tests/mocks';

vi.mock('../../contexts');

describe('ProfilePage', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should render loading state', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: true,
            isError: false,
            error: null,
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText('Loading User...')).toBeInTheDocument();
    });

    it('should render error state', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: false,
            isError: true,
            error: new Error('Failed to fetch user'),
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText(/Error: Failed to fetch user/i)).toBeInTheDocument();
    });

    it('should render user not found message', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: undefined,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText('User not found.')).toBeInTheDocument();
    });

    it('should render user profile with username', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText('Profile')).toBeInTheDocument();
        expect(screen.getByText(mockUser.username)).toBeInTheDocument();
        expect(screen.getByText(`User ID: ${mockUser.id}`)).toBeInTheDocument();
    });

    it('should display currently watching shows count', () => {
        vi.mocked(useAuth).mockReturnValue({
            user: mockUser,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText('Currently Watching')).toBeInTheDocument();
        // mockUser has 2 watched episodes for showId 1, so 1 unique show
        expect(screen.getByText('1 Shows')).toBeInTheDocument();
    });

    it('should handle user with no watched episodes', () => {
        const userWithNoProgress = {
            ...mockUser,
            watchedEpisodes: [],
        };

        vi.mocked(useAuth).mockReturnValue({
            user: userWithNoProgress,
            isLoading: false,
            isError: false,
            error: null,
        });

        render(
            <MantineProvider>
                <ProfilePage />
            </MantineProvider>
        );

        expect(screen.getByText('0 Shows')).toBeInTheDocument();
    });
});

