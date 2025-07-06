import { TOKEN_STORAGE_KEY } from '@/constants/storageKeys';
import { InternalAxiosRequestConfig } from 'axios';

export const authInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (token) {
        config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
};
