import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { HomePage } from './HomePage';

describe('HomePage', () => {
    it('should render without crashing', () => {
        render(
            <MantineProvider>
                <HomePage />
            </MantineProvider>
        );

        expect(screen.getByText('Progress Tracker')).toBeInTheDocument();
    });

    it('should display the main heading', () => {
        render(
            <MantineProvider>
                <HomePage />
            </MantineProvider>
        );

        expect(screen.getByText(/Track your watching progress/i)).toBeInTheDocument();
    });

    it('should display description text', () => {
        render(
            <MantineProvider>
                <HomePage />
            </MantineProvider>
        );

        expect(screen.getByText(/There is some progress tracking needed/i)).toBeInTheDocument();
    });

    it('should render all three feature cards', () => {
        render(
            <MantineProvider>
                <HomePage />
            </MantineProvider>
        );

        expect(screen.getByText('Browse and Search Shows')).toBeInTheDocument();
        expect(screen.getByText('User Profiles')).toBeInTheDocument();
        expect(screen.getByText('Tech Stack')).toBeInTheDocument();
    });

    it('should display feature descriptions', () => {
        render(
            <MantineProvider>
                <HomePage />
            </MantineProvider>
        );

        expect(screen.getByText(/Check all the available shows/i)).toBeInTheDocument();
        expect(screen.getByText(/Save your progress for every show/i)).toBeInTheDocument();
        expect(screen.getByText(/Built with Vite, React/i)).toBeInTheDocument();
    });
});

