import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { useUser } from './useUsers';
import { usersApi } from '../../services';
import { createTestQueryClient, mockUser } from '../../../../tests/mocks';

vi.mock('../../services');

describe('useUser', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch user by id successfully', async () => {
    vi.mocked(usersApi.getById).mockResolvedValue(mockUser);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useUser(1), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toEqual(mockUser);
    expect(usersApi.getById).toHaveBeenCalledWith(1);
  });

  it('should handle error state', async () => {
    const mockError = new Error('User not found');
    vi.mocked(usersApi.getById).mockRejectedValue(mockError);

    const queryClient = createTestQueryClient();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );

    const { result } = renderHook(() => useUser(999), { wrapper });

    await waitFor(() => expect(result.current.isError).toBe(true));

    expect(result.current.error).toBeDefined();
  });
});

