import axios from "axios";
import { authInterceptor } from "@/apis/authInterceptors.ts";
import { API_BASE_URL } from "@/constants/storageKeys.ts";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(authInterceptor);