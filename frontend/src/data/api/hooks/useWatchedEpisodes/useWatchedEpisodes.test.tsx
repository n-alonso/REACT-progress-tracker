import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useWatchedEpisodes } from './useWatchedEpisodes';
import { watchedEpisodesApi } from '../../services';
import { createTestQueryClient, mockWatchedEpisodes } from '../../../../tests/mocks';

vi.mock('../../services');

describe('useWatchedEpisodes', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch watched episodes by userId successfully', async () => {
    vi.mocked(watchedEpisodesApi.getByUser).mockResolvedValue(mockWatchedEpisodes);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useWatchedEpisodes(1), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockWatchedEpisodes);
    expect(watchedEpisodesApi.getByUser).toHaveBeenCalledWith(1, undefined);
  });

  it('should include showId when provided', async () => {
    vi.mocked(watchedEpisodesApi.getByUser).mockResolvedValue(mockWatchedEpisodes);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useWatchedEpisodes(1, 1), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(watchedEpisodesApi.getByUser).toHaveBeenCalledWith(1, 1);
  });

  it('should handle error state', async () => {
    const mockError = new Error('Failed to fetch watched episodes');
    vi.mocked(watchedEpisodesApi.getByUser).mockRejectedValue(mockError);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useWatchedEpisodes(1), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

