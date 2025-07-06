import { User } from "@/types";
import { api } from "@/apis/api.ts";
import { decodeJWT } from "@/utils/jwt.ts";
import { TOKEN_STORAGE_KEY, USER_STORAGE_KEY } from "@/constants/storageKeys.ts";

export async function loginUser(email: string, password: string): Promise<{ user: User; authTokenProcessResult: string } | null> {
    try {
        const response = await api.post('/auth/login', { email, password });
        const { authTokenProcessResult } = response.data;

        const decodedPayload = decodeJWT(authTokenProcessResult);
        
        if (!decodedPayload) {
            return null;
        }

        const userFromToken: User = {
            id: decodedPayload.id,
            email: decodedPayload.email,
            name: decodedPayload.name,
            role: decodedPayload.role.toLowerCase()
        };

        localStorage.setItem(TOKEN_STORAGE_KEY, authTokenProcessResult);
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userFromToken));

        return { user: userFromToken, authTokenProcessResult };
    } catch (error) {
        console.error("Login error:", error);
        return null;
    }
}