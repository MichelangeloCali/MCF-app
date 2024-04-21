import axios from 'axios';

import { useAuthStore } from '@/stores/auth';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MCFAPP_API_URL,
});

api.interceptors.request.use(async (config) => {
  try {
    if (!config.headers.Authorization) {
      const token = useAuthStore.getState().accessToken;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  } finally {
    return config;
  }
});
