import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { Header } from './Header';

describe('Header', () => {
    it('should render without crashing', () => {
        render(
            <BrowserRouter>
                <MantineProvider>
                    <Header />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shows')).toBeInTheDocument();
        expect(screen.getByText('Profile')).toBeInTheDocument();
    });

    it('should have correct navigation links', () => {
        render(
            <BrowserRouter>
                <MantineProvider>
                    <Header />
                </MantineProvider>
            </BrowserRouter>
        );

        const homeLink = screen.getByText('Home').closest('a');
        const showsLink = screen.getByText('Shows').closest('a');
        const profileLink = screen.getByText('Profile').closest('a');

        expect(homeLink).toHaveAttribute('href', '/home');
        expect(showsLink).toHaveAttribute('href', '/shows');
        expect(profileLink).toHaveAttribute('href', '/profile');
    });
});

