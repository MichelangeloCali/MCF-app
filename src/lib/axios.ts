import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_MCFAPP_API_URL,
});
