import { useQuery } from '@tanstack/react-query';

import { QueryKeys } from '@/enums/QueryKeys';
import { api } from '@/lib';
import type { User } from '@/types';

async function getUser() {
  const { data } = await api.get<User>('/user/profile');

  return data;
}

export const useUser = () =>
  useQuery({
    queryKey: [QueryKeys.User],
    queryFn: getUser,
  });
