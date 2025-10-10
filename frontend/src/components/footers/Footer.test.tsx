import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router';
import { MantineProvider } from '@mantine/core';
import { Footer } from './Footer';

describe('Footer', () => {
    it('should render without crashing', () => {
        render(
            <BrowserRouter>
                <MantineProvider>
                    <Footer />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/© 2001 Company X/i)).toBeInTheDocument();
    });

    it('should render social media icons', () => {
        render(
            <BrowserRouter>
                <MantineProvider>
                    <Footer />
                </MantineProvider>
            </BrowserRouter>
        );

        // Check that social media buttons are rendered
        // The Footer creates 3 ActionIcon buttons for Instagram, Twitter, YouTube
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBeGreaterThanOrEqual(3);
    });

    it('should display copyright text', () => {
        render(
            <BrowserRouter>
                <MantineProvider>
                    <Footer />
                </MantineProvider>
            </BrowserRouter>
        );

        expect(screen.getByText(/Licensing and rights text/i)).toBeInTheDocument();
    });
});

