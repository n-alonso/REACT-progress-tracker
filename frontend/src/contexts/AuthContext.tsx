import { createContext, useContext } from "react";

import { type User, useUser } from "../data";

type AuthContextType = {
    user: User | undefined,
    isLoading: boolean,
    isError: boolean,
    error: Error | null,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    // Validate Environment Variables
    if (!import.meta.env.VITE_USER_ID) {
        throw new Error('VITE_USER_ID environment variable is not set');
    }

    const USER_ID = Number(import.meta.env.VITE_USER_ID);
    const { data: user, isLoading, isError, error } = useUser(USER_ID);

    return (
        <AuthContext.Provider value={{ user, isLoading, isError, error }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}
