import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MantineProvider } from '@mantine/core';
import { ShowComponent } from './ShowComponent';

describe('ShowComponent', () => {
    it('should render the show title', () => {
        const mockOnClick = vi.fn();
        render(
            <MantineProvider>
                <ShowComponent title="Test Show" onClick={mockOnClick} />
            </MantineProvider>
        );

        expect(screen.getByText('Test Show')).toBeInTheDocument();
    });

    it('should call onClick handler when clicked', async () => {
        const mockOnClick = vi.fn();
        const user = userEvent.setup();

        render(
            <MantineProvider>
                <ShowComponent title="Test Show" onClick={mockOnClick} />
            </MantineProvider>
        );

        const button = screen.getByRole('button');
        await user.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    it('should render as a button', () => {
        const mockOnClick = vi.fn();
        render(
            <MantineProvider>
                <ShowComponent title="Test Show" onClick={mockOnClick} />
            </MantineProvider>
        );

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});

