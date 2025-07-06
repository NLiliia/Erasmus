import { createContext, useState, ReactNode, useEffect, useMemo, useContext } from 'react';
import { User } from '@/types';
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "@/constants/storageKeys";
import { loginUser } from "@/apis/usersApi.ts";

interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem(TOKEN_STORAGE_KEY);
            const user = localStorage.getItem(USER_STORAGE_KEY);

            if (token && user) {
                try {
                    const parsedUser = JSON.parse(user);
                    setToken(token);
                    setUser(parsedUser);
                } catch (error) {
                    console.error("Failed to parse user:", error);
                    localStorage.removeItem(TOKEN_STORAGE_KEY);
                    localStorage.removeItem(USER_STORAGE_KEY);
                }
            }

            setLoading(false);
        };

        checkAuth();
    }, []);

    const login = async (email: string, password: string) : Promise<boolean> => {
        try {
            const res = await loginUser(email, password);

            if (!res) {
                return false;
            }

            setUser(res.user);
            setToken(res.authTokenProcessResult);

            localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(res.user));
            localStorage.setItem(TOKEN_STORAGE_KEY, res.authTokenProcessResult);

            return true;
        } catch (error) {
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        localStorage.removeItem(USER_STORAGE_KEY);
        localStorage.removeItem(TOKEN_STORAGE_KEY);
    };

    const isAuthenticated = useMemo(() => !!user && !!token, [user, token]);

    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading, isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}