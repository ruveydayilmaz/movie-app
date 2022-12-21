import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

axios.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const login = (formData) => API.post(`/login`, formData);

export const googleLogin = (formData) => API.post(`/google-login`, formData);

export const register = (formData) => API.post(`/register`, formData);