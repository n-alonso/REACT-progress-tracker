import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useShows, useShow } from './useShows';
import { showsApi } from '../../services';
import { createTestQueryClient, mockShow, mockShows } from '../../../../tests/mocks';

vi.mock('../../services');

describe('useShows', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch all shows successfully', async () => {
    vi.mocked(showsApi.getAll).mockResolvedValue(mockShows);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useShows(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockShows);
    expect(showsApi.getAll).toHaveBeenCalledTimes(1);
  });

  it('should handle error state', async () => {
    const mockError = new Error('Failed to fetch shows');
    vi.mocked(showsApi.getAll).mockRejectedValue(mockError);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useShows(), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

describe('useShow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch show by id successfully', async () => {
    vi.mocked(showsApi.getById).mockResolvedValue(mockShow);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useShow(1), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockShow);
    expect(showsApi.getById).toHaveBeenCalledWith(1);
  });

  it('should handle error state', async () => {
    const mockError = new Error('Show not found');
    vi.mocked(showsApi.getById).mockRejectedValue(mockError);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useShow(999), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

