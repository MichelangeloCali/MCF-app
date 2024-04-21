import { useMutation } from '@tanstack/react-query';

import { api } from '@/lib';

type LoginParams = {
  name: string;
  email: string;
  imageUrl: string;
};

async function login({ name, email, imageUrl }: LoginParams) {
  const { data } = await api.post<{ access_token: string }>('/auth/login', {
    name,
    email,
    imageUrl,
  });

  return data;
}

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });
